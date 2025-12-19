# Navigation and Footer Cleanup Instructions

## Current Status

✅ **Fixed in v0:**
- Layout uses correct NEW white footer: `components/site/footer.tsx`
- Layout uses correct navbar: `components/site/navbar.tsx`  
- Button component has "icon" size variant
- AI assistant uses `size="sm"` instead of `size="icon"`
- Package.json has packageManager field
- 6 sample pages cleaned (choosing-perfect-wedding-venue, book-consultation, contact, faq, how-it-works, testimonials)

❌ **Still needs cleanup (62 files in GitHub):**
All these files import old Navigation/Footer from `@/components/navigation` and `@/components/footer` which need to be removed since the global layout.tsx now provides these.

## Files that need cleanup:

### Blog Posts (10 files)
- app/blog/essential-elements-fusion-wedding/page.tsx
- app/blog/fusion-wedding-timeline/page.tsx
- app/blog/honeymoon-planning-guide/page.tsx
- app/blog/indian-wedding-planner-usa/page.tsx
- app/blog/indian-wedding-traditions-guide/page.tsx
- app/blog/mehndi-ceremony-guide/page.tsx
- app/blog/page.tsx
- app/blog/south-asian-wedding-budget-guide/page.tsx
- app/blog/vendor-verification-guide/page.tsx
- app/blog/virtual-shopping-india-guide/page.tsx
- app/blog/wedding-planning-checklist-timeline/page.tsx
- app/blog/wedding-registry-guide-indian-american/page.tsx

### Forms (4 files)
- app/forms/india-buying-trip-interest/page.tsx
- app/forms/mexico-pre-consult/page.tsx
- app/forms/new-client-intake/page.tsx
- app/forms/virtual-shopping/page.tsx

### Services & Tools (7 files)
- app/budget-planner/page.tsx
- app/guest-estimator/page.tsx
- app/menu-planner/page.tsx
- app/outfit-coordinator/page.tsx
- app/services/ceremony-essentials/page.tsx
- app/services/invitation-suite/page.tsx
- app/vendor-comparison/page.tsx

### Regional Planners (8 files)
- app/gujarati-wedding-planner/page.tsx
- app/indian-wedding-planner-california/page.tsx
- app/indian-wedding-planner-new-jersey/page.tsx
- app/indian-wedding-planner-new-york/page.tsx
- app/south-indian-wedding-coordinator/page.tsx
- app/tamil-christian-wedding-planner-usa/page.tsx
- app/tamil-christian-wedding-planner/page.tsx
- app/telugu-wedding-coordinator/page.tsx

### Marketing & Resources (10 files)
- app/free-resources/page.tsx
- app/fusion-wedding-planner/page.tsx
- app/guide/page.tsx
- app/image-library/page.tsx
- app/indian-american-fusion-wedding-planner/page.tsx
- app/launch-guide/page.tsx
- app/marketing-materials/page.tsx
- app/shopping-from-india/page.tsx
- app/social-media-assets/page.tsx
- app/social-media-guide/page.tsx

### Legal & Info Pages (9 files)
- app/for-parents-and-elders/page.tsx
- app/heritage-harmony-guide/page.tsx
- app/heritage-harmony/page.tsx
- app/our-story/page.tsx
- app/privacy-policy/page.tsx
- app/refund-policy/page.tsx
- app/sourcing-disclaimer/page.tsx
- app/terms-of-service/page.tsx
- app/thank-you/page.tsx

### Specialty Pages (8 files)
- app/mexico-indian-destination-weddings/page.tsx
- app/muhurat/page.tsx
- app/quiz/page.tsx
- app/special-offers/page.tsx
- app/vendors/page.tsx
- app/venue-partners/page.tsx
- app/wedding-glossary/page.tsx

### V2 Pages (6 files)
- app/v2/checklist/page.tsx
- app/v2/faq/page.tsx
- app/v2/how-it-works/page.tsx
- app/v2/indian-wedding-planner-austin-tx/page.tsx
- app/v2/page.tsx
- app/v2/pricing/page.tsx

## How to Fix Each File

For EVERY file listed above, you need to:

### 1. Remove imports at the top:
Delete these lines:
```tsx
import Navigation from "@/components/navigation"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { Footer } from "@/components/footer"
```

### 2. Remove JSX usage:
Delete these lines from the return statement:
```tsx
<Navigation />
<Footer />
```

### 3. Keep only the page content
The file should only contain the actual page-specific content, not nav/footer.

## Example Before/After

**BEFORE:**
```tsx
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <>
      <Navigation />
      <main>
        <h1>My Content</h1>
      </main>
      <Footer />
    </>
  )
}
```

**AFTER:**
```tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <main>
      <h1>My Content</h1>
    </main>
  )
}
```

## Quick Commands (Run from repo root)

If you have perl installed, these commands will clean all files automatically:

```bash
# Remove old footer imports
perl -pi -e 's/^import\s+Footer\s+from\s+"@\/components\/footer"\s*;\s*\n//g; s/^import\s+\{\s*Footer\s*\}\s+from\s+"@\/components\/footer"\s*;\s*\n//g;' $(git ls-files "app/**/*.tsx")

# Remove old navigation imports  
perl -pi -e 's/^import\s+Navigation\s+from\s+"@\/components\/navigation"\s*;\s*\n//g; s/^import\s+\{\s*Navigation\s*\}\s+from\s+"@\/components\/navigation"\s*;\s*\n//g;' $(git ls-files "app/**/*.tsx")

# Remove <Footer /> JSX
perl -pi -e 's/^\s*<Footer\s*\/>\s*\n//g' $(git ls-files "app/**/*.tsx")

# Remove <Navigation /> JSX
perl -pi -e 's/^\s*<Navigation\s*\/>\s*\n//g' $(git ls-files "app/**/*.tsx")

# Verify cleanup
rg -n "@/components/footer|@/components/navigation" app
```

## After Cleanup

Once all 62 files are cleaned:

1. Build locally: `pnpm install && pnpm build`
2. Fix any remaining TypeScript errors
3. Test a few key pages locally
4. Push to GitHub
5. Vercel will auto-deploy

## Why This is Needed

- **Before:** Each page had its own Navigation/Footer, causing duplication and inconsistency
- **After:** Layout.tsx provides Navigation/Footer globally, so all pages inherit them automatically
- **Benefit:** Single source of truth for header/footer across entire site
