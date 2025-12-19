# URGENT: Manual GitHub Fix Required

The v0→GitHub sync is not working. The files in v0 are CORRECT, but GitHub has old broken code.

## Fix Required in GitHub

**File:** `app/start-planning/page.tsx`

**Line 134** currently says:
```tsx
<Section alt>
```

**Change it to:**
```tsx
<Section variant="warm">
```

## Why This Fix is Needed

The `Section` component does not accept an `alt` prop. It only accepts:
- `variant="default"`
- `variant="surface"` 
- `variant="surface2"`
- `variant="warm"`
- `variant="warm2"`

## How to Fix in GitHub

1. Go to: https://github.com/leylabernie/CeremonyVerse_New
2. Navigate to: `app/start-planning/page.tsx`
3. Click the pencil icon (✏️) to edit
4. Find line 134: `<Section alt>`
5. Change to: `<Section variant="warm">`
6. Commit with message: "fix: replace Section alt with variant prop"
7. Vercel will automatically redeploy

## Verification

After committing, the build should succeed. The error was:
```
Type '{ children: Element; alt: true; }' is not assignable to type 'IntrinsicAttributes & { children: ReactNode; className?: string | undefined; variant?: "default" | "surface" | "surface2" | "warm" | "warm2" | undefined; }'
```

This will be resolved once `alt` is replaced with `variant="warm"`.

---

Last updated: After commit 06892df failed to build
