#!/bin/bash

# PWA Testing Script for CetesDirecto
# This script builds and tests the PWA in production mode

set -e

echo "🚀 CetesDirecto PWA Test Script"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo -e "${YELLOW}⚠️  Bun is not installed. Using npm instead.${NC}"
    BUILD_CMD="npm run build"
    START_CMD="npm start"
else
    BUILD_CMD="bun run build"
    START_CMD="bun start"
fi

echo -e "${BLUE}Step 1: Building production bundle...${NC}"
$BUILD_CMD

echo ""
echo -e "${GREEN}✅ Build complete!${NC}"
echo ""

echo -e "${BLUE}Step 2: Starting production server...${NC}"
echo -e "${YELLOW}The server will start on http://localhost:3000${NC}"
echo ""
echo "📋 PWA Testing Checklist:"
echo "   1. Open Chrome DevTools (F12)"
echo "   2. Go to Application tab"
echo "   3. Check 'Manifest' - should show complete manifest.json"
echo "   4. Check 'Service Workers' - should show registered worker"
echo "   5. Look for install button in address bar (⊕)"
echo "   6. Run Lighthouse audit for PWA score"
echo ""
echo "🌐 After testing locally, deploy to Vercel/Netlify for full PWA testing"
echo "   (PWA requires HTTPS in production)"
echo ""
echo -e "${GREEN}Press Ctrl+C to stop the server${NC}"
echo ""

$START_CMD
