# Manual Cleanup Guide (If Scripts Don't Work)

If you can't run the automated scripts, follow this manual process:

## Files That Need Old Nav/Footer Removed (131 files total)

### Blog Posts (13 files)
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

### Service Pages (50+ files)
- app/budget-planner/page.tsx
- app/for-parents-and-elders/page.tsx
- app/free-resources/page.tsx
- app/fusion-wedding-planner/page.tsx
- app/guest-estimator/page.tsx
- app/guide/page.tsx
- app/gujarati-wedding-planner/page.tsx
- app/heritage-harmony-guide/page.tsx
- app/heritage-harmony/page.tsx
- ... (and 40+ more)

## For Each File, Do This:

### 1. Remove These Lines (top of file):
```tsx
import Navigation from "@/components/navigation"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { Footer } from "@/components/footer"
```

### 2. Remove These JSX Lines (in the return statement):
```tsx
<Navigation />
<Footer />
```

### 3. Replace All Instances:
```tsx
// FIND:
text-muted

// REPLACE WITH:
text-muted-foreground

// But DO NOT change bg-muted to bg-muted-foreground
```

## Example Before/After

**BEFORE:**
```tsx
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="container">
        <h1>Title</h1>
        <p className="text-muted">Description</p>
      </div>
      <Footer />
    </>
  )
}
```

**AFTER:**
```tsx
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="container">
      <h1>Title</h1>
      <p className="text-muted-foreground">Description</p>
    </div>
  )
}
```

Note: No need to add Navbar/Footer - the layout handles it globally!
