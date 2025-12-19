# Vercel Deployment Setup Instructions

## Package Manager Configuration

To fix the SWC lockfile warning and ensure consistent builds, configure Vercel to use pnpm:

### In Vercel Project Settings:

1. Go to your project → Settings → Build & Development Settings
2. Set **Install Command** to: `pnpm install --frozen-lockfile`
3. Save the settings

### Why this fixes the issue:

- Your project has `pnpm-lock.yaml` in the repository
- The `packageManager` field in package.json is now set to `pnpm@10.0.0`
- Vercel was using `npm install --legacy-peer-deps` which caused the mismatch
- This fixes the "Found lockfile missing swc dependencies" warning

### Files Updated:

- ✅ package.json - Added `"packageManager": "pnpm@10.0.0"`
- ✅ pnpm-lock.yaml - Already exists in repository
- ✅ components/ui/button.tsx - Added "icon" size variant
- ✅ All `<Section alt>` instances replaced with proper variants

### After changing Vercel settings:

1. Redeploy from the Vercel dashboard
2. The build should now use pnpm consistently
3. The SWC warning should disappear

### Note on vulnerabilities:

The "17 vulnerabilities" message does not fail the build. Do not run `npm audit fix --force` unless necessary, as it may cause breaking changes.
