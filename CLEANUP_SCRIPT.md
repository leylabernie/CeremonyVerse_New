# Complete Cleanup Script for CeremonyVerse

## Overview
This document provides the exact commands to clean up all old Navigation/Footer imports, fix text-muted issues, and deprecate old components.

## Step 1: Remove Old Navigation/Footer Imports (131 files)

Run these commands in your repository root:

\`\`\`bash
# Remove old Navigation imports
find app -name "*.tsx" -type f -exec perl -i -pe 's/^import\s+(?:Navigation|\{?\s*Navigation\s*\}?)\s+from\s+"@\/components\/navigation"\s*;?\s*\n//g' {} \;

# Remove old Footer imports  
find app -name "*.tsx" -type f -exec perl -i -pe 's/^import\s+(?:Footer|\{?\s*Footer\s*\}?)\s+from\s+"@\/components\/footer"\s*;?\s*\n//g' {} \;

# Remove <Navigation /> JSX
find app -name "*.tsx" -type f -exec perl -i -pe 's/^\s*<Navigation\s*\/>\s*\n//g' {} \;

# Remove <Footer /> JSX
find app -name "*.tsx" -type f -exec perl -i -pe 's/^\s*<Footer\s*\/>\s*\n//g' {} \;
\`\`\`

## Step 2: Fix text-muted → text-muted-foreground (200+ instances)

\`\`\`bash
# Replace text-muted with text-muted-foreground globally
find app components -name "*.tsx" -type f -exec perl -i -pe 's/\btext-muted\b(?!-foreground)/text-muted-foreground/g' {} \;
\`\`\`

## Step 3: Remove Spacing Hacks

\`\`\`bash
# Remove pt-20 from budget-planner
perl -i -pe 's/pt-20//g' app/budget-planner/page.tsx

# Remove pt-20 from homepage (if className="pt-12 md:pt-20" exists)
perl -i -pe 's/pt-12 md:pt-20/pt-12/g' app/page.tsx
\`\`\`

## Step 4: Deprecate Old Components

\`\`\`bash
# Create deprecated directory
mkdir -p components/_deprecated

# Move old navigation
git mv components/navigation.tsx components/_deprecated/navigation-old.tsx

# Move old footer
git mv components/footer.tsx components/_deprecated/footer-dark.tsx

# Add deprecation notices
cat > components/_deprecated/README.md << 'EOF'
# Deprecated Components

These components are no longer used. DO NOT import them in new code.

- **navigation-old.tsx**: Replaced by `components/site/navbar.tsx` (now in layout)
- **footer-dark.tsx**: Replaced by `components/site/footer.tsx` (now in layout)

All pages should rely on the global layout for header/footer.
EOF
\`\`\`

## Step 5: Verify Cleanup

\`\`\`bash
# Verify no old imports remain
echo "Checking for old Navigation imports..."
grep -r "@/components/navigation" app || echo "✅ Clean"

echo "Checking for old Footer imports..."
grep -r "@/components/footer" app || echo "✅ Clean"

echo "Checking for text-muted (should be 0 or only bg-muted)..."
grep -r "text-muted\b" app components | grep -v "text-muted-foreground" | grep -v "bg-muted" || echo "✅ Clean"

echo "Checking for <Navigation /> JSX..."
grep -r "<Navigation" app || echo "✅ Clean"

echo "Checking for <Footer /> JSX..."
grep -r "<Footer" app || echo "✅ Clean"
\`\`\`

## Step 6: Build and Deploy

\`\`\`bash
# Install dependencies
pnpm install

# Build locally to verify
pnpm build

# If build succeeds, commit and push
git add .
git commit -m "cleanup: standardize layout, fix text colors, deprecate old components"
git push origin main
\`\`\`

## Vercel Configuration

Make sure Vercel is configured with:
- **Install Command**: `pnpm install --frozen-lockfile`
- **Build Command**: `pnpm build`  
- **Output Directory**: `.next`

## Expected Results

After cleanup:
- ✅ 0 files import from `@/components/navigation`
- ✅ 0 files import from `@/components/footer`
- ✅ 0 instances of standalone `text-muted` (only `text-muted-foreground`)
- ✅ All pages use global layout's Navbar + Footer
- ✅ No double headers/footers
- ✅ Readable text colors throughout
- ✅ `pnpm build` succeeds
- ✅ Vercel deployment succeeds
