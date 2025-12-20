#!/bin/bash

echo "=== PRICING ALIGNMENT VERIFICATION ==="
echo ""
echo "Checking all service pages for required 'Pricing & Scope' section..."
echo ""

# Define service pages
SERVICE_PAGES=(
  "app/fusion-wedding-planner/page.tsx"
  "app/gujarati-wedding-planner/page.tsx"
  "app/indian-american-fusion-wedding-planner/page.tsx"
  "app/indian-wedding-planner-california/page.tsx"
  "app/indian-wedding-planner-new-jersey/page.tsx"
  "app/indian-wedding-planner-new-york/page.tsx"
  "app/south-indian-wedding-coordinator/page.tsx"
  "app/tamil-christian-wedding-planner/page.tsx"
  "app/tamil-christian-wedding-planner-usa/page.tsx"
  "app/telugu-wedding-coordinator/page.tsx"
  "app/shopping-from-india/page.tsx"
  "app/outfit-coordinator/page.tsx"
)

echo "✅ PART 1: Pricing Page"
if grep -q "Pricing & Planning Support" app/pricing/page.tsx && \
   grep -q "Starting at \$1,250" app/pricing/page.tsx && \
   grep -q "Starting at \$3,000" app/pricing/page.tsx && \
   grep -q "Starting at \$6,500" app/pricing/page.tsx && \
   grep -q "Starting at \$2,500" app/pricing/page.tsx; then
  echo "  ✓ Pricing page has approved copy and prices"
else
  echo "  ✗ Pricing page missing required content"
fi

echo ""
echo "✅ PART 2: FAQ Schema"
if grep -q '"@type": "FAQPage"' app/pricing/page.tsx; then
  echo "  ✓ FAQ JSON-LD schema present"
else
  echo "  ✗ FAQ schema missing"
fi

echo ""
echo "✅ PART 3: Service Pages with Pricing Sections"
MISSING_COUNT=0
for page in "${SERVICE_PAGES[@]}"; do
  if grep -q "Pricing & Scope for This Service" "$page" 2>/dev/null; then
    echo "  ✓ $page"
  else
    echo "  ✗ $page - MISSING SECTION"
    ((MISSING_COUNT++))
  fi
done

echo ""
echo "=== SUMMARY ==="
echo "Total service pages checked: ${#SERVICE_PAGES[@]}"
echo "Pages with pricing section: $((${#SERVICE_PAGES[@]} - MISSING_COUNT))"
echo "Pages missing section: $MISSING_COUNT"
echo ""

if [ $MISSING_COUNT -eq 0 ]; then
  echo "✅ ALL REQUIREMENTS MET - READY FOR DEPLOYMENT"
  exit 0
else
  echo "⚠️  $MISSING_COUNT pages still need pricing sections"
  exit 1
fi
