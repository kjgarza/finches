# Finches Monorepo

A Bun-based Turborepo monorepo with Next.js 15 applications and shared packages.

## What's Inside?

This monorepo includes the following apps and packages:

### Apps

- `client-a`: Next.js 15 application
- `client-b`: Next.js 15 application

### Packages

- `ui`: Shared UI components built with shadcn/ui
- `ai-elements`: AI-specific components
- `utils`: Shared utility functions
- `eslint-config`: Shared ESLint configuration
- `tsconfig`: Shared TypeScript configurations

### Tooling

- `theme.css`: Tailwind CSS 4 theme with OKLCH colors

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Run development servers:
```bash
bun run dev
```

3. Build all apps and packages:
```bash
bun run build
```

## Useful Commands

- `bun run dev` - Start all apps in development mode
- `bun run build` - Build all apps and packages
- `bun run lint` - Lint all apps and packages
- `bun run type-check` - Type check all apps and packages
- `bun run clean` - Clean all build outputs and dependencies

## Tech Stack

- **Runtime**: Bun
- **Build System**: Turborepo
- **Framework**: Next.js 15
- **UI**: React 19, shadcn/ui
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
