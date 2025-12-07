# UI Components Migration to Monorepo

## Summary

Successfully migrated all shadcn/ui components from `apps/akiapolaau/src/components/ui` to the shared `packages/ui` package. This allows all apps in the monorepo to reuse the same UI components.

## Changes Made

### 1. Moved UI Components

- Copied all 30 UI components from `apps/akiapolaau/src/components/ui/` to `packages/ui/src/`
- Components included:
  - accordion, alert, avatar, badge, button, card, chart, checkbox
  - dialog, dropdown-menu, form, input, label, popover, progress
  - radio-group, scroll-area, select, separator, sheet, skeleton
  - sonner, switch, table, tabs, toggle-group, toggle, tooltip, visually-hidden

### 2. Updated Dependencies

**packages/ui/package.json:**
- Added all Radix UI dependencies
- Added supporting libraries: react-hook-form, recharts, sonner, next-themes, etc.
- Updated exports to use source files directly (`src/index.ts`)

**apps/akiapolaau/package.json:**
- Added `@repo/ui: "workspace:*"` as dependency
- Kept only directly used dependencies (react-hook-form, recharts, sonner, zod)
- Removed all Radix UI dependencies (now in @repo/ui)

### 3. Updated Imports

- Changed all imports from `@/components/ui/*` to `@repo/ui` throughout akiapolaau app
- Updated internal imports in UI components from `@/lib/utils` to `@repo/utils`
- Fixed cross-component imports (e.g., form.tsx importing label, toggle-group importing toggle)

### 4. Configuration Updates

**packages/ui/tsup.config.ts:**
- Added external dependencies to prevent bundling peer dependencies

**apps/akiapolaau/next.config.js:**
- Added `@repo/ui` to transpilePackages array

### 5. File Cleanup

- Removed `apps/akiapolaau/src/components/ui/` directory
- Removed empty `sidebar.tsx` file that was not being used

## Build Status

✅ **packages/ui** builds successfully
✅ **apps/akiapolaau** builds successfully  
✅ Dev server runs without errors
✅ All pages render correctly

## Known Warnings

⚠️ **Conflicting star exports warning:** 
```
The requested module './visually-hidden' contains conflicting star exports 
for the name 'VisuallyHidden' with the previous requested module './dialog'
```

This warning is benign. It occurs because `dialog.tsx` re-exports `VisuallyHidden` from `visually-hidden.tsx`, which is intentional for convenience. Both exports refer to the same component.

## Benefits

1. **Code Reusability:** All apps in the monorepo can now use the same UI components
2. **Single Source of Truth:** UI components are maintained in one place
3. **Consistent Styling:** All apps will have consistent UI/UX
4. **Reduced Duplication:** No need to copy components between apps
5. **Easier Updates:** Updating a component updates it for all apps

## Deployment Considerations

When deploying `akiapolaau` without other apps:

- **No impact:** The app includes all necessary dependencies via `@repo/ui` and `@repo/utils`
- **Size:** Using source files allows Next.js to tree-shake unused components
- **Build time:** Next.js transpiles the packages as needed

## Next Steps

For new apps in the monorepo:
1. Add `@repo/ui: "workspace:*"` to dependencies
2. Add `@repo/ui` to `transpilePackages` in next.config.js  
3. Import components directly: `import { Button, Card } from "@repo/ui"`

## Migration Command Reference

If you need to migrate another app, run:

```bash
# Update imports from old path to new path
find src -type f \( -name "*.tsx" -o -name "*.ts" \) \
  -exec sed -i '' 's|from "@/components/ui/\([^"]*\)"|from "@repo/ui"|g' {} +
```
