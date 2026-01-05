# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Finches is a Bun-based Turborepo monorepo containing Next.js 15 applications with shared component packages. The project focuses on experimentation with AI Elements from the Vercel AI SDK, shadcn/ui components, and modern PWA capabilities.

## Commands

### Monorepo-level Commands
- `bun install` - Install all dependencies across the monorepo
- `bun run dev` - Start all apps in development mode (runs Turbo)
- `bun run build` - Build all apps and packages (runs Turbo)
- `bun run lint` - Lint all apps and packages (runs Turbo)
- `bun run type-check` - Type check all apps and packages (runs Turbo)
- `bun run clean` - Clean all build outputs and dependencies

### Individual App Commands
Each app can be run independently from its directory (`apps/client-a`, `apps/client-b`, `apps/akiapolaau`):

**client-a and client-b:**
- `bun run dev` - Start dev server (client-a: port 3000, client-b: port 3001)
- `bun run build` - Build with Next.js (uses Turbopack by default)
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run type-check` - Run TypeScript compiler check

**akiapolaau (PWA app):**
- `bun run dev` - Start dev server on port 3002
- `bun run build` - Build with Webpack (not Turbopack - uses `--webpack` flag)
- `bun run start` - Start production server on port 3002
- `bun run test:visual` - Run visual tests using Playwright
- `bun run test:pwa` - Build and start for PWA testing
- `bun run verify:pwa` - Verify PWA configuration

### Package Commands
Each package (`packages/ui`, `packages/ai-elements`, `packages/utils`) can be built independently:
- `bun run build` - Build package using tsup
- `bun run dev` - Build in watch mode
- `bun run lint` - Lint package source
- `bun run type-check` - Type check package
- `bun run clean` - Clean build outputs

## Architecture

### Monorepo Structure

**Apps:**
- `client-a` - Next.js 15 experimentation app
- `client-b` - Next.js 15 experimentation app
- `akiapolaau` - Next.js 15 PWA app (Mexican fintech investment platform demo)

**Packages:**
- `@repo/ui` - Shared shadcn/ui components built on Radix UI primitives
- `@repo/ai-elements` - AI/agentic interface components from Vercel AI SDK registry
- `@repo/utils` - Shared utilities (includes `cn()` for className merging)
- `@repo/eslint-config` - Shared ESLint configuration
- `@repo/tsconfig` - Shared TypeScript configurations

**Tooling:**
- `tooling/theme.css` - Tailwind CSS 4 theme using OKLCH color space with light/dark modes and fintech-specific colors

### Package Manager & Build System
- Uses **Bun** (`bun@1.1.38`) as package manager and runtime
- Uses **Turborepo** for monorepo orchestration with task caching
- Workspace packages linked via `workspace:*` protocol
- Build dependencies configured in `turbo.json`: `build` depends on `^build`, `lint` and `type-check` depend on `^build`

### Component Architecture

**Three-layer component system:**

1. **Base UI Components** (`@repo/ui`):
   - shadcn/ui components built on Radix UI primitives
   - Styled with Tailwind CSS using "new-york" variant
   - Full dark mode support via `next-themes`
   - All components are client components (`"use client"`)
   - Examples: Button, Card, Dialog, Form, Input, Select, etc.

2. **AI Elements** (`@repo/ai-elements`):
   - Specialized components for AI/agentic interfaces
   - From Vercel AI SDK registry (`@ai-elements`)
   - Key components: `artifact.tsx`, `message.tsx`
   - Designed for building LLM-powered interfaces

3. **Application Pages**:
   - Next.js App Router structure in `apps/*/src/app/`
   - Uses workspace packages via `@repo/*` imports

### Styling System

**Tailwind CSS 4:**
- CSS variable-based theming using OKLCH color space
- Shared theme in `tooling/theme.css` with design tokens
- Light/dark mode via `@media (prefers-color-scheme: dark)`
- Standard tokens: `--color-background`, `--color-foreground`, `--color-primary`, `--color-muted`, etc.
- Custom fintech tokens: `--color-success`, `--color-loss`, `--color-warning`, `--color-trust`, `--color-info`
- Utility function `cn()` in `@repo/utils` merges classes with `clsx` and `tailwind-merge`

**akiapolaau Theme System:**
- Supports 24+ theme variants (light/dark modes for multiple color schemes)
- Theme provider in `src/components/theme-provider.tsx`
- Themes: slate, stone, gray, neutral, red, rose, orange, green, blue, yellow, violet

### PWA Implementation (akiapolaau app)

- Uses `next-pwa` for service worker generation
- PWA features: offline support, installability, manifest.json
- Install prompt component: `src/components/install-pwa-prompt.tsx`
- Service worker registration: `src/components/pwa-register.tsx`
- Offline page at `/offline`
- Comprehensive PWA documentation in app's PWA_*.md files

### Build Configuration

**Important:**
- `client-a` and `client-b` use Turbopack (Next.js 15 default)
- `akiapolaau` uses Webpack (`next build --webpack`) due to next-pwa compatibility requirements
- Packages build with tsup (TypeScript build tool)

### Deployment

Each app deploys independently to Vercel via GitHub Actions:
- Workflows in `.github/workflows/deploy-{app-name}.yml`
- Triggered on push to `main` or PRs targeting `main`
- Path-based triggers: only deploy when app or shared packages change
- Uses Bun for installation, Vercel CLI for deployment
- Environment managed via Vercel secrets (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID_*)

### Path Aliases

TypeScript path aliases configured in workspace packages:
- `@/*` maps to app/package root (varies by package)
- Common imports: `@repo/ui`, `@repo/ai-elements`, `@repo/utils`

### Adding Components

Uses shadcn CLI with custom registry configuration:
```bash
# Add UI components
npx shadcn@latest add <component-name>

# Add AI Elements
npx shadcn@latest add @ai-elements/<ai-component-name>
```

Registry configuration in `apps/*/components.json`:
- Default registry: shadcn/ui
- Custom registry: `@ai-elements` from `https://registry.ai-sdk.dev/{name}.json`

## Key Dependencies

- **Next.js 15** (client-a/b), **Next.js 16** (akiapolaau) - App Router
- **React 19** - Latest React features
- **Bun** - Runtime and package manager
- **Turborepo** - Monorepo build system
- **Tailwind CSS 4** - Styling with OKLCH colors
- **Radix UI** - Accessible component primitives
- **react-hook-form + zod** - Form handling and validation
- **lucide-react** - Icon library
- **recharts** - Data visualization
- **next-pwa** - PWA support (akiapolaau)
- **next-themes** - Theme switching
- **Vercel AI SDK** (`ai` package) - AI/LLM integration utilities

## Code Style (from AGENTS.md)

**Imports:**
- React types use `import type { ComponentProps }`
- External libraries use named imports
- `@/` path alias for local imports
- `@repo/*` for workspace packages

**Formatting:**
- 2-space indentation
- Double quotes
- No semicolons (matches existing codebase)
- Destructured props with rest spread

**TypeScript:**
- Strict mode enabled
- Export types alongside components
- Use `type` keyword for props (e.g., `export type ArtifactProps = HTMLAttributes<HTMLDivElement>`)
- Prefer `ComponentProps<typeof Component>` for extending component props
- Suffix Props types with `Props`

**Components:**
- Use `"use client"` directive for interactive/Radix UI components
- Export multiple related components from single file
- Use `cn()` utility for className merging
- Forward refs when needed for Radix UI integration

**Naming:**
- PascalCase for components/types
- camelCase for functions/variables
- kebab-case for files

**Styling:**
- Use design tokens (`--color-background`, `--color-primary`, etc.)
- `class-variance-authority` for component variants
