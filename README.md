# Finches Monorepo

A Bun-based Turborepo monorepo with Next.js 15 applications and shared packages.

## What's Inside?

This monorepo includes the following apps and packages:

### Apps

- `client-a`: Next.js 15 application
- `client-b`: Next.js 15 application
- `akiapolaau`: Next.js 15 application with PWA support

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

## Deployment

Each app in this monorepo can be deployed independently to Vercel using GitHub Actions workflows.

### Vercel Deployment Setup

Each app has its own deployment workflow:
- `client-a` → `.github/workflows/deploy-client-a.yml`
- `client-b` → `.github/workflows/deploy-client-b.yml`
- `akiapolaau` → `.github/workflows/deploy-akiapolaau.yml`

#### Required GitHub Secrets

To enable automatic deployments, configure the following secrets in your GitHub repository:

- `VERCEL_TOKEN` - Your Vercel authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID_CLIENT_A` - Vercel project ID for client-a
- `VERCEL_PROJECT_ID_CLIENT_B` - Vercel project ID for client-b
- `VERCEL_PROJECT_ID_AKIAPOLAAU` - Vercel project ID for akiapolaau

#### Deployment Triggers

Workflows are triggered when:
- Code is pushed to `main` branch
- Pull requests are opened targeting `main` branch
- Changes affect the specific app directory or shared packages

## Tech Stack

- **Runtime**: Bun
- **Build System**: Turborepo
- **Framework**: Next.js 15
- **UI**: React 19, shadcn/ui
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Vercel with GitHub Actions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

