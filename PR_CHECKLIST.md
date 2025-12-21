# PR Acceptance Checklist

## Required Verification Commands

Run these in your terminal and include output in PR description:

\`\`\`bash
# 1. Build succeeds
pnpm build
# Expected: "Compiled successfully"

# 2. No old navigation imports
grep -r "@/components/navigation" app | wc -l
# Expected: 0

# 3. No old footer imports  
grep -r "@/components/footer" app | wc -l
# Expected: 0

# 4. No Navigation JSX
grep -r "<Navigation" app | wc -l
# Expected: 0

# 5. No Footer JSX
grep -r "<Footer" app | wc -l
# Expected: 0

# 6. No standalone text-muted (only text-muted-foreground allowed)
grep -r "text-muted\b" app components | grep -v "text-muted-foreground" | grep -v "bg-muted" | wc -l
# Expected: 0 (or very few justified cases)
\`\`\`

## Required Screenshots

Take screenshots showing:

1. **Home page** (`/`)
   - Header with logo and navigation visible
   - Text is readable (not faint/gray)
   - White footer at bottom

2. **Start Planning page** (`/start-planning`)
   - No blank space under header
   - All text readable (especially paragraph text)
   - Same white footer

3. **Blog page** (`/blog`)
   - Same header/footer as other pages
   - No double header/footer

4. **Budget Planner** (`/budget-planner`)
   - No blank space under header
   - Text readable
   - Same footer

## Expected Results

✅ `pnpm build` succeeds  
✅ 0 old navigation imports  
✅ 0 old footer imports  
✅ 0 `text-muted` (only `text-muted-foreground`)  
✅ Consistent white footer across all pages  
✅ No double headers/footers  
✅ All text readable (proper contrast)  
✅ No large blank spaces under header  
✅ Vercel deployment succeeds  

## Commit Message Template

\`\`\`
cleanup: standardize layout system and fix text contrast

- Remove old Navigation/Footer imports from 131 app pages
- Replace text-muted with text-muted-foreground (200+ instances)
- Remove fixed-header spacing hacks (pt-20, pt-24, pt-28)
- Deprecate old components to _deprecated folder
- All pages now use global layout's Navbar + Footer
- Fixes invisible text on Start Planning and other pages
- Build verified with pnpm build
