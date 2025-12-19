# PR with 4 Commits - Implementation Guide

This document outlines the comprehensive fixes needed, organized into 4 logical commits.

## ✅ Status Overview

### Already Complete in v0:
- ✅ Button component has "icon" size
- ✅ Layout uses comprehensive Footer from components/footer.tsx
- ✅ Navbar has proper text contrast (text-cvInk/80)
- ✅ package.json has packageManager: "pnpm@10.0.0"
- ✅ Resources, Pricing, Service Area pages created
- ✅ Privacy and Terms legal pages created
- ✅ AI planning assistant uses size="sm" with custom classes

### ⚠️ Needs Manual GitHub Fixes:
The following issues exist in GitHub but not in v0 workspace:

1. **90+ pages still have duplicate nav/footer imports** - These need to be removed since layout.tsx now handles header/footer globally
2. **Section component `alt` prop errors** - A few pages may still use `<Section alt>` instead of `<Section variant="warm">`

---

## Commit 1: Layout Standardization

**Files changed:**
- `app/layout.tsx` - Uses comprehensive footer, includes Navbar
- All page files - Remove Navigation/Footer imports and components

**What to do:**

For each of the 90+ pages that have these imports:
```tsx
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
```

Remove:
1. The import statements
2. The `<Navigation />` component usage
3. The `<Footer />` component usage

Pages affected (131 matches): All files listed in grep results above

**Example before:**
```tsx
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>Content here</main>
      <Footer />
    </>
  )
}
```

**Example after:**
```tsx
export default function Page() {
  return (
    <main>Content here</main>
  )
}
```

---

## Commit 2: Fix Navbar Contrast + Remove Double-Nav

**Files changed:**
- `components/site/navbar.tsx` - Already fixed with text-cvInk/80

**Verification needed:**
Check that no pages render their own navigation after Commit 1 cleanup.

---

## Commit 3: Routes & Legal Pages

**Files created (already done in v0):**
- ✅ `app/resources/page.tsx`
- ✅ `app/pricing/page.tsx`
- ✅ `app/service-area/page.tsx`
- ✅ `app/privacy/page.tsx`
- ✅ `app/terms/page.tsx`

**Files to check in Footer:**
- Verify `/privacy` and `/terms` links work
- Remove any 404 page links

---

## Commit 4: Build Stability

**Files changed (already done in v0):**
- ✅ `components/ui/button.tsx` - Added "icon" to ButtonSize type
- ✅ `components/ai-planning-assistant.tsx` - Changed to size="sm" with h-10 w-10 p-0
- ✅ `package.json` - Added packageManager: "pnpm@10.0.0"

**Vercel Settings:**
Set install command to: `pnpm install --frozen-lockfile`

---

## Files That Need Manual GitHub Fixes

### 1. Section alt prop errors
Search for: `<Section alt>`
Replace with: `<Section variant="warm">` or `<Section variant="warm2">`

Files that may have this issue:
- `app/start-planning/page.tsx` (line ~134)
- `app/services/page.tsx` (line ~23)
- `app/tools/budget/page.tsx` (line ~55)
- `app/wedding-journeys/page.tsx` (line ~80)

### 2. Remove all page-level nav/footer
See Commit 1 section above for the 131 files that need nav/footer removed.

---

## Quick Manual Fix Script

For bulk cleanup, you can use find/replace in GitHub or your editor:

**Find:**
```
import Navigation from "@/components/navigation"\nimport Footer from "@/components/footer"
```

**Replace:**
```
// Layout handles nav/footer
```

Then manually remove `<Navigation />` and `<Footer />` from JSX.

---

## Testing Checklist

After all commits:
- [ ] All pages load without double navigation
- [ ] Footer appears on all pages  
- [ ] /privacy and /terms pages work
- [ ] /pricing, /resources, /service-area pages work
- [ ] No TypeScript build errors
- [ ] Vercel builds successfully with pnpm

---

## Notes

The v0 workspace already has all the correct code. The issue is that GitHub hasn't received all the updates due to sync problems. You may need to manually apply some fixes directly in GitHub until the sync is resolved.
