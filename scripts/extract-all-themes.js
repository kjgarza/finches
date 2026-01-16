#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const ORIGINAL_CSS = '/tmp/original-globals.css'
const THEMES_DIR = path.join(__dirname, '../apps/akiapolaau/src/styles/themes')

// Read original globals.css
const content = fs.readFileSync(ORIGINAL_CSS, 'utf-8')

// Find all theme class blocks
const themeRegex = /\s+(\.[\w-]+|:root)\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/g
let match

const themes = {}
let insideLayerBase = false

const lines = content.split('\n')
let currentTheme = null
let braceDepth = 0
let themeContent = []

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]

  if (line.includes('@layer base {')) {
    insideLayerBase = true
    continue
  }

  if (!insideLayerBase) continue

  // Check for theme start
  const themeMatch = line.match(/^\s+(\.[\w-]+|:root)\s*\{/)
  if (themeMatch && braceDepth === 0) {
    currentTheme = themeMatch[1].replace('.', '')
    if (currentTheme === ':root') currentTheme = 'light'
    themeContent = []
    braceDepth = 1
    continue
  }

  if (currentTheme) {
    // Count braces to track nesting
    const openBraces = (line.match(/\{/g) || []).length
    const closeBraces = (line.match(/\}/g) || []).length
    braceDepth += openBraces - closeBraces

    if (braceDepth === 0) {
      // Theme ended
      themes[currentTheme] = themeContent.join('\n')
      currentTheme = null
      themeContent = []
    } else {
      themeContent.push(line)
    }
  }
}

console.log(`Found ${Object.keys(themes).length} themes:`, Object.keys(themes).join(', '))

// Write each theme to a file
for (const [themeName, themeVars] of Object.entries(themes)) {
  const themeFile = path.join(THEMES_DIR, `${themeName}.css`)
  const content = `:root {\n${themeVars}\n}\n`
  fs.writeFileSync(themeFile, content)
  console.log(`✓ Created ${themeName}.css (${content.length} bytes)`)
}

console.log(`\n✅ Extracted ${Object.keys(themes).length} themes to ${THEMES_DIR}`)
