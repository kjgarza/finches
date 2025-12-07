

  

This file provides guidance to AI Agent when working with code in this repository.

  

## Project Overview

  

This is a Next.js 15 experimentation project , integrating shadcn/ui components with AI Elements from the Vercel AI SDK. The project uses React 19, TypeScript, and Tailwind CSS 4 with Turbopack for fast development.

  

## Development Commands

  

**Start development server:**

  

```bash

bun run dev

```

  

Runs Next.js dev server with Turbopack at <http://localhost:3000>

  

**Build for production:**

  

```bash

bun run build

```

  

Creates optimized production build with Turbopack

  

**Start production server:**

  

```bash

bun start

```

  

Runs the production build

  

**Lint code:**

  

```bash

bun run lint

```

  

Runs ESLint with Next.js configuration

  

## Architecture

  

### Component Organization

  

The project has three component layers:

  

1. **UI Components** (`components/ui/`): Base shadcn/ui components built on Radix UI primitives. These are styled with Tailwind CSS using the "new-york" style variant and include full dark mode support.

  

2. **AI Elements** (`components/ai-elements/`): Specialized components for AI/agentic interfaces from the @ai-elements registry. Key components include:

- `artifact.tsx`: Container for AI-generated content with header, actions, and content areas

- `canvas.tsx`: Visual workspace for agentic workflows

- `conversation.tsx`, `message.tsx`, `prompt-input.tsx`: Chat interfaces

- `chain-of-thought.tsx`, `reasoning.tsx`, `plan.tsx`: AI reasoning displays

- `tool.tsx`, `task.tsx`, `queue.tsx`: Tool execution and task management

- `node.tsx`, `edge.tsx`, `connection.tsx`: Graph/workflow visualization (uses @xyflow/react)

  

3. **App Pages** (`app/`): Next.js App Router pages and layouts

  

### Styling System

  

- Uses Tailwind CSS 4 with CSS variable-based theming

- Custom theme defined inline in `app/globals.css` using OKLCH color space

- Dark mode implemented via CSS class (`.dark`) with `next-themes`

- Utility function `cn()` in `lib/utils.ts` merges Tailwind classes with `clsx` and `tailwind-merge`

- Design tokens follow shadcn's naming conventions: `--background`, `--foreground`, `--primary`, `--muted`, etc.

  

### Path Aliases

  

TypeScript path aliases configured in `tsconfig.json`:

  

- `@/*` maps to project root

- Common imports: `@/components/ui`, `@/components/ai-elements`, `@/lib/utils`, `@/hooks`

  

### Component Registry

  

The project uses shadcn CLI with custom registry configuration (`components.json`):

  

- Default registry: shadcn/ui components

- Custom registry: `@ai-elements` from `https://registry.ai-sdk.dev/{name}.json`

  

To add components:

  

```bash

npx shadcn@latest add <component-name>

npx shadcn@latest add @ai-elements/<ai-component-name>

```

  

## Key Dependencies

  

- **Next.js 15**: App Router with Turbopack

- **React 19**: Latest React features

- **Vercel AI SDK** (`ai` package): AI/LLM integration utilities

- **@xyflow/react**: Flow diagrams and node-based visualizations for agentic workflows

- **Radix UI**: Accessible component primitives

- **react-hook-form** + **zod**: Form handling with validation

- **lucide-react**: Icon library

- **shiki**: Syntax highlighting

- **recharts**: Data visualization

  

## Development Notes

  

- The project uses Turbopack (Next.js 15's new bundler) for both dev and build

- ESLint follows Next.js Core Web Vitals + TypeScript recommended rules

- TypeScript strict mode enabled

- Font optimization via `next/font` (Geist Sans and Geist Mono)

- All UI components are client components (`"use client"`) due to Radix UI requirements

- AI Elements are designed for building agentic interfaces with LLMs



----


# Agent Guidelines for nova-agentic-design-experimentation

  

## Additional Context

  

Provides details on the architecture and component organization.

  

## Commands

  

- **Dev**: `bun run dev` (Next.js with Turbopack at localhost:3000)

- **Build**: `bun run build` (production build with Turbopack)

- **Lint**: `bun run lint` (ESLint with Next.js + TypeScript rules)

- **Test**: No test framework configured yet

  

## Code Style

  

**Imports**: React types use `import type { ComponentProps }`, external libraries use named imports, `@/` path alias for local imports

  

**Formatting**: 2-space indentation, double quotes, no semicolons (matches existing codebase), destructured props with rest spread

  

**Types**: TypeScript strict mode enabled, export types alongside components, use `type` keyword for props (e.g., `export type ArtifactProps = HTMLAttributes<HTMLDivElement>`), prefer `ComponentProps<typeof Component>` for extending component props

  

**Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files, suffix Props types with `Props`

  

**Components**: Use `"use client"` directive for interactive/Radix UI components, export multiple related components from single file (e.g., `Artifact`, `ArtifactHeader`, `ArtifactContent`), use `cn()` utility for className merging, forward refs when needed for Radix UI integration

  

**Styling**: Tailwind CSS 4 with CSS variables (OKLCH color space), use design tokens (`--background`, `--foreground`, `--primary`, etc.), class-variance-authority for variants

  

**Error Handling**: No explicit pattern yet—follow Next.js error boundaries and React 19 best practices