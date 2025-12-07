/**
 * Visual Regression Testing Script
 * 
 * Captures screenshots of all pages at multiple breakpoints and themes
 * Run with: bun run test:visual
 */

import { chromium, type Browser, type Page } from "playwright"
import { mkdir } from "fs/promises"
import { join } from "path"

const BASE_URL = "http://localhost:3002"
const SCREENSHOTS_DIR = join(process.cwd(), "screenshots")

// Test configuration
const ROUTES = [
  { path: "/", name: "landing" },
  { path: "/registro", name: "registro" },
  { path: "/dashboard", name: "dashboard" }
]

const THEMES = [
  { value: "light", label: "Zinc Claro" },
  { value: "dark", label: "Zinc Oscuro" },
  { value: "fintech", label: "Fintech Blue Claro" },
  { value: "fintech-dark", label: "Fintech Blue Oscuro" }
]

const BREAKPOINTS = [
  { width: 375, height: 667, name: "mobile" },   // iPhone SE
  { width: 768, height: 1024, name: "tablet" },  // iPad
  { width: 1440, height: 900, name: "desktop" }  // Desktop
]

async function setTheme(page: Page, themeValue: string) {
  // Set theme via localStorage (next-themes approach)
  await page.evaluate((theme: string) => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
    
    // Handle dark class for Zinc themes
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, themeValue)
  
  // Wait for theme to apply
  await page.waitForTimeout(500)
}

async function captureScreenshots() {
  console.log("🚀 Starting visual regression testing...\n")

  // Create screenshots directory
  await mkdir(SCREENSHOTS_DIR, { recursive: true })

  const browser: Browser = await chromium.launch({ headless: true })
  
  try {
    for (const route of ROUTES) {
      console.log(`📸 Capturing screenshots for: ${route.name}`)
      
      for (const theme of THEMES) {
        for (const breakpoint of BREAKPOINTS) {
          const context = await browser.newContext({
            viewport: { width: breakpoint.width, height: breakpoint.height },
            deviceScaleFactor: 1
          })
          
          const page = await context.newPage()
          
          try {
            // Navigate to page
            await page.goto(`${BASE_URL}${route.path}`, {
              waitUntil: "networkidle",
              timeout: 10000
            })
            
            // Set theme
            await setTheme(page, theme.value)
            
            // Wait for any animations to complete
            await page.waitForTimeout(1000)
            
            // Generate filename
            const filename = `${route.name}-${theme.value}-${breakpoint.name}.png`
            const filepath = join(SCREENSHOTS_DIR, filename)
            
            // Capture screenshot
            await page.screenshot({
              path: filepath,
              fullPage: true
            })
            
            console.log(`  ✓ ${filename}`)
          } catch (error) {
            console.error(`  ✗ Failed to capture ${route.name} - ${theme.value} - ${breakpoint.name}:`, error)
          } finally {
            await context.close()
          }
        }
      }
      console.log("")
    }
    
    const totalScreenshots = ROUTES.length * THEMES.length * BREAKPOINTS.length
    console.log(`✅ Visual testing complete! Captured ${totalScreenshots} screenshots`)
    console.log(`📁 Screenshots saved to: ${SCREENSHOTS_DIR}`)
    
  } finally {
    await browser.close()
  }
}

// Run the test
captureScreenshots().catch(console.error)
