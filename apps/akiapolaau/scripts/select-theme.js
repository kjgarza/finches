#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const THEME = process.env.BUILD_THEME || 'light'
const THEMES_DIR = path.join(__dirname, '../src/styles/themes')
const GLOBALS_CSS = path.join(__dirname, '../src/app/globals.css')

// Validate theme exists
const themeFile = path.join(THEMES_DIR, `${THEME}.css`)
if (!fs.existsSync(themeFile)) {
  console.error(`❌ Theme "${THEME}" not found. Available themes:`)
  const themes = fs.readdirSync(THEMES_DIR)
    .filter(f => f.endsWith('.css'))
    .map(f => f.replace('.css', ''))
  console.error(themes.join(', '))
  process.exit(1)
}

// Read theme CSS variables (extract everything inside :root { ... })
const themeContent = fs.readFileSync(themeFile, 'utf-8')
const themeVarsMatch = themeContent.match(/:root\s*\{([^}]+)\}/s)
if (!themeVarsMatch) {
  console.error(`❌ Invalid theme file format: ${themeFile}`)
  process.exit(1)
}
const themeVars = themeVarsMatch[1].trim()

// Read current globals.css
let globalsContent = fs.readFileSync(GLOBALS_CSS, 'utf-8')

// Replace the :root section
globalsContent = globalsContent.replace(
  /@layer base \{[\s\S]*?:root \{[\s\S]*?\n  \}/,
  `@layer base {\n  :root {\n    ${themeVars}\n  }`
)

// Write back
fs.writeFileSync(GLOBALS_CSS, globalsContent)
console.log(`✅ Theme "${THEME}" injected into globals.css`)
