#!/usr/bin/env node

import { spawn } from 'child_process'
import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const THEMES_TO_TEST = ['light', 'dark', 'rose-dark']
const TEST_URL = 'http://localhost:3002/dashboard/envio-recursos'
const SCREENSHOTS_DIR = join(__dirname, '../screenshots')

// Ensure screenshots directory exists
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true })
}

async function buildWithTheme(theme) {
  return new Promise((resolve, reject) => {
    console.log(`\n🔨 Building with theme: ${theme}`)
    const env = { ...process.env, BUILD_THEME: theme }
    const build = spawn('bun', ['run', 'build'], {
      cwd: join(__dirname, '..'),
      env,
      stdio: 'inherit'
    })

    build.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Build failed with code ${code}`))
      } else {
        console.log(`✅ Build completed for ${theme}`)
        resolve()
      }
    })
  })
}

async function startServer() {
  return new Promise((resolve, reject) => {
    console.log('\n🚀 Starting server...')
    const server = spawn('bun', ['run', 'start'], {
      cwd: join(__dirname, '..'),
      stdio: 'pipe'
    })

    server.stdout.on('data', (data) => {
      const output = data.toString()
      if (output.includes('Ready') || output.includes('started server') || output.includes('3002')) {
        console.log('✅ Server started')
        setTimeout(() => resolve(server), 2000) // Wait 2 seconds for server to be fully ready
      }
    })

    server.stderr.on('data', (data) => {
      console.error(data.toString())
    })

    setTimeout(() => {
      reject(new Error('Server timeout'))
    }, 30000)
  })
}

async function takeScreenshot(theme, browser) {
  console.log(`\n📸 Taking screenshot for ${theme}...`)

  const page = await browser.newPage()
  await page.setViewportSize({ width: 1920, height: 1080 })

  try {
    await page.goto(TEST_URL, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(1000) // Extra wait for any animations

    const screenshotPath = join(SCREENSHOTS_DIR, `${theme}.png`)
    await page.screenshot({ path: screenshotPath, fullPage: true })
    console.log(`✅ Screenshot saved: ${screenshotPath}`)

    // Get computed background color from :root
    const rootBg = await page.evaluate(() => {
      const root = document.documentElement
      const styles = getComputedStyle(root)
      return styles.getPropertyValue('--background')
    })

    console.log(`   --background: ${rootBg}`)

  } catch (error) {
    console.error(`❌ Failed to screenshot ${theme}:`, error.message)
  } finally {
    await page.close()
  }
}

async function main() {
  let server = null
  let browser = null

  try {
    browser = await chromium.launch()

    for (const theme of THEMES_TO_TEST) {
      console.log(`\n${'='.repeat(60)}`)
      console.log(`Testing theme: ${theme}`)
      console.log('='.repeat(60))

      // Build with theme
      await buildWithTheme(theme)

      // Stop previous server if running
      if (server) {
        console.log('Stopping previous server...')
        server.kill()
        await new Promise(resolve => setTimeout(resolve, 2000))
      }

      // Start server
      server = await startServer()

      // Take screenshot
      await takeScreenshot(theme, browser)
    }

    console.log(`\n${'='.repeat(60)}`)
    console.log('✅ All themes tested!')
    console.log(`📁 Screenshots saved to: ${SCREENSHOTS_DIR}`)
    console.log('='.repeat(60))

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  } finally {
    if (server) {
      server.kill()
    }
    if (browser) {
      await browser.close()
    }
  }
}

main()
