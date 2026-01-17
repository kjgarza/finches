# Finches Monorepo Justfile
# Run `just --list` to see all available commands

# Default recipe - show help
default:
    @just --list

# Install all dependencies
install:
    bun install

# Start all apps in development mode
dev:
    bun run dev

# Build all apps and packages
build:
    bun run build

# Lint all apps and packages
lint:
    bun run lint

# Type check all apps and packages
type-check:
    bun run type-check

# Clean all build outputs and dependencies
clean:
    bun run clean

# Run all checks (lint + type-check)
check: lint type-check

# ============================================================================
# App-specific commands
# ============================================================================

# Start client-a in development mode (port 3000)
dev-client-a:
    cd apps/client-a && bun run dev

# Build client-a
build-client-a:
    cd apps/client-a && bun run build

# Start client-b in development mode (port 3001)
dev-client-b:
    cd apps/client-b && bun run dev

# Build client-b
build-client-b:
    cd apps/client-b && bun run build

# Start akiapolaau in development mode (port 3002)
dev-akiapolaau:
    cd apps/akiapolaau && bun run dev

# Build akiapolaau (uses Webpack, not Turbopack)
build-akiapolaau:
    cd apps/akiapolaau && bun run build

# Start akiapolaau in production mode
start-akiapolaau:
    cd apps/akiapolaau && bun run start

# ============================================================================
# PWA Testing (akiapolaau)
# ============================================================================

# Run visual tests for akiapolaau using Playwright
test-visual:
    cd apps/akiapolaau && bun run test:visual

# Build and start akiapolaau for PWA testing
test-pwa:
    cd apps/akiapolaau && bun run test:pwa

# Verify PWA configuration for akiapolaau
verify-pwa:
    cd apps/akiapolaau && bun run verify:pwa

# ============================================================================
# Package-specific commands
# ============================================================================

# Build UI package
build-ui:
    cd packages/ui && bun run build

# Build UI package in watch mode
dev-ui:
    cd packages/ui && bun run dev

# Build AI Elements package
build-ai-elements:
    cd packages/ai-elements && bun run build

# Build AI Elements package in watch mode
dev-ai-elements:
    cd packages/ai-elements && bun run dev

# Build Utils package
build-utils:
    cd packages/utils && bun run build

# Build Utils package in watch mode
dev-utils:
    cd packages/utils && bun run dev

# ============================================================================
# Git & Deployment helpers
# ============================================================================

# Show git status
status:
    git status

# Create a commit (usage: just commit "message")
commit message:
    git add .
    git commit -m "{{message}}"

# Push to remote
push:
    git push

# Pull from remote
pull:
    git pull

# Create commit and push (usage: just commit-push "message")
commit-push message: (commit message) push

# ============================================================================
# Utilities
# ============================================================================

# Show Bun version
bun-version:
    bun --version

# Show Node version
node-version:
    node --version

# Show project structure
tree:
    @echo "Apps:"
    @ls -1 apps/
    @echo "\nPackages:"
    @ls -1 packages/

# Update all dependencies
update:
    bun update

# Check for outdated dependencies
outdated:
    bun outdated
