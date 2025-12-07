#!/usr/bin/env node

/**
 * PWA Verification Script
 * Checks that all PWA components are properly configured
 */

const fs = require('fs');
const path = require('path');

const checks = [];
let passedChecks = 0;
let failedChecks = 0;

function check(name, condition, details = '') {
  if (condition) {
    console.log(`✅ ${name}`);
    if (details) console.log(`   ${details}`);
    passedChecks++;
  } else {
    console.log(`❌ ${name}`);
    if (details) console.log(`   ${details}`);
    failedChecks++;
  }
  checks.push({ name, passed: condition });
}

console.log('🔍 Verifying PWA Configuration\n');

// Check manifest.json
const manifestPath = path.join(__dirname, '../public/manifest.json');
const manifestExists = fs.existsSync(manifestPath);
check('Manifest file exists', manifestExists, manifestPath);

if (manifestExists) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    check('Manifest has name', !!manifest.name, `Name: ${manifest.name}`);
    check('Manifest has short_name', !!manifest.short_name, `Short name: ${manifest.short_name}`);
    check('Manifest has start_url', !!manifest.start_url, `Start URL: ${manifest.start_url}`);
    check('Manifest has display', !!manifest.display, `Display: ${manifest.display}`);
    check('Manifest has theme_color', !!manifest.theme_color, `Theme: ${manifest.theme_color}`);
    check('Manifest has background_color', !!manifest.background_color, `Background: ${manifest.background_color}`);
    check('Manifest has icons', manifest.icons && manifest.icons.length > 0, `Icons: ${manifest.icons?.length || 0}`);
    
    // Check for required icon sizes
    if (manifest.icons) {
      const sizes = manifest.icons.map(icon => icon.sizes);
      check('Has 192x192 icon', sizes.includes('192x192'));
      check('Has 512x512 icon', sizes.includes('512x512'));
    }
  } catch (e) {
    check('Manifest is valid JSON', false, `Error: ${e.message}`);
  }
}

// Check icons directory
const iconsDir = path.join(__dirname, '../public/icons');
check('Icons directory exists', fs.existsSync(iconsDir), iconsDir);

if (fs.existsSync(iconsDir)) {
  const iconFiles = fs.readdirSync(iconsDir);
  check('Icons directory has files', iconFiles.length > 0, `Found ${iconFiles.length} icons`);
}

// Check service worker components
const swPath = path.join(__dirname, '../public/sw.js');
check('Service worker file exists', fs.existsSync(swPath), swPath);

// Check PWA components
const pwaRegisterPath = path.join(__dirname, '../src/components/pwa-register.tsx');
check('PWARegister component exists', fs.existsSync(pwaRegisterPath));

const installPromptPath = path.join(__dirname, '../src/components/install-pwa-prompt.tsx');
check('InstallPWAPrompt component exists', fs.existsSync(installPromptPath));

const usePwaPath = path.join(__dirname, '../src/hooks/use-pwa.ts');
check('use-pwa hook exists', fs.existsSync(usePwaPath));

// Check offline page
const offlinePath = path.join(__dirname, '../src/app/offline/page.tsx');
check('Offline page exists', fs.existsSync(offlinePath));

// Check layout.tsx for PWA setup
const layoutPath = path.join(__dirname, '../src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  check('Layout imports PWARegister', layoutContent.includes('PWARegister'));
  check('Layout imports InstallPWAPrompt', layoutContent.includes('InstallPWAPrompt'));
  check('Layout has manifest meta tag', layoutContent.includes('manifest:'));
  check('Layout has theme color', layoutContent.includes('themeColor'));
  check('Layout has apple web app config', layoutContent.includes('appleWebApp'));
}

// Check next.config.js
const nextConfigPath = path.join(__dirname, '../next.config.js');
if (fs.existsSync(nextConfigPath)) {
  const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  check('next.config.js has withPWA', nextConfig.includes('withPWA'));
  check('next.config.js has runtime caching', nextConfig.includes('runtimeCaching'));
}

// Check package.json for next-pwa
const packagePath = path.join(__dirname, '../package.json');
if (fs.existsSync(packagePath)) {
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  check('package.json has next-pwa', !!pkg.dependencies?.['next-pwa']);
  check('package.json has test:pwa script', !!pkg.scripts?.['test:pwa']);
}

// Check apple-touch-icon
const appleTouchIconPath = path.join(__dirname, '../public/apple-touch-icon.png');
check('Apple touch icon exists', fs.existsSync(appleTouchIconPath));

// Check favicons
const favicon16Path = path.join(__dirname, '../public/favicon-16x16.png');
const favicon32Path = path.join(__dirname, '../public/favicon-32x32.png');
check('Favicon 16x16 exists', fs.existsSync(favicon16Path));
check('Favicon 32x32 exists', fs.existsSync(favicon32Path));

console.log('\n' + '='.repeat(50));
console.log(`✅ Passed: ${passedChecks}`);
console.log(`❌ Failed: ${failedChecks}`);
console.log(`📊 Total: ${passedChecks + failedChecks}`);
console.log('='.repeat(50));

if (failedChecks === 0) {
  console.log('\n🎉 All PWA checks passed! Your app is PWA-ready.');
  console.log('   Run "bun run test:pwa" to test in production mode.');
} else {
  console.log('\n⚠️  Some checks failed. Review the issues above.');
  process.exit(1);
}
