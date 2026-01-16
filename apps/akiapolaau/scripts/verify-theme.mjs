#!/usr/bin/env node

import { chromium } from 'playwright'

const TEST_URL = 'http://localhost:3002/dashboard/envio-recursos'

async function verifyTheme() {
  console.log('🔍 Checking theme on', TEST_URL)

  const browser = await chromium.launch()
  const page = await browser.newPage()

  try {
    await page.goto(TEST_URL, { waitUntil: 'networkidle', timeout: 10000 })

    // Get CSS variables from :root
    const cssVars = await page.evaluate(() => {
      const root = document.documentElement
      const styles = getComputedStyle(root)
      return {
        background: styles.getPropertyValue('--background').trim(),
        foreground: styles.getPropertyValue('--foreground').trim(),
        primary: styles.getPropertyValue('--primary').trim(),
      }
    })

    console.log('\n📊 Current CSS Variables:')
    console.log('  --background:', cssVars.background)
    console.log('  --foreground:', cssVars.foreground)
    console.log('  --primary:', cssVars.primary)

    // Determine which theme based on background
    const bg = cssVars.background
    let themeName = 'unknown'
    if (bg === '0 0% 100%') themeName = 'light'
    else if (bg === '240 10% 3.9%') themeName = 'dark'
    else if (bg.startsWith('20 14.3%')) themeName = 'rose-dark'

    console.log('\n🎨 Detected theme:', themeName)

  } catch (error) {
    console.error('❌ Error:', error.message)
    console.log('\n💡 Make sure the dev server is running on port 3002')
  } finally {
    await browser.close()
  }
}

verifyTheme()
