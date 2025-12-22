import SocialShare from "@/components/social-share"
import Link from "next/link"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Wedding Shopping: India vs USA | Complete Cost & Quality Comparison 2025",
  description:
    "Should you buy wedding outfits in India or USA? Complete comparison of costs, quality, shipping, customs, and timeline for lehengas, sherwanis, jewelry, and ceremony items. Make informed decisions for your budget.",
  keywords:
    "wedding shopping india vs usa, buy lehenga india or usa, indian wedding outfit shopping, wedding shopping cost comparison, lehenga price india vs usa, sherwani shopping guide, indian jewelry india vs usa, wedding shopping budget",
  openGraph: {
    title: "Wedding Shopping: India vs USA Cost & Quality Comparison",
    description:
      "Complete guide comparing wedding shopping in India vs USA. Learn costs, quality, shipping, and which items are worth buying from each location.",
    type: "article",
  },
}

export default function IndiaVsUSAShoppingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Blog", url: "https://www.ceremonyverse.com/blog" },
    { name: "Wedding Shopping: India vs USA", url: "https://www.ceremonyverse.com/blog/wedding-shopping-india-vs-usa" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="mb-8">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            Shopping Guide
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Wedding Shopping: India vs USA — Complete Cost & Quality Comparison
        </h1>

        <div className="flex items-center gap-6 text-sm text-foreground/60 mb-8">
          <time>December 2025</time>
          <span>18 min read</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            One of the biggest decisions for Indian-American couples: should you buy your wedding outfits, jewelry, and
            ceremony items in India or the USA? The answer isn't always obvious—each option has distinct advantages
            depending on your budget, timeline, and priorities.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">The Real Cost Comparison</h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Bridal Lehenga: India vs USA</h3>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Buying in India:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Designer lehenga (Sabyasachi, Anita Dongre):</strong> $3,000–$8,000
              </li>
              <li>
                <strong>Mid-range boutique:</strong> $800–$2,500
              </li>
              <li>
                <strong>Local tailor/market:</strong> $200–$800
              </li>
              <li>
                <strong>Shipping to USA:</strong> $50–$200 (FedEx/DHL)
              </li>
              <li>
                <strong>Customs duty:</strong> 0–20% of declared value (variable)
              </li>
              <li>
                <strong>Alterations in USA:</strong> $100–$300
              </li>
            </ul>
          </div>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Buying in USA:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Indian boutique (Edison NJ, Artesia CA, Devon Chicago):</strong> $1,500–$5,000
              </li>
              <li>
                <strong>Designer trunk shows:</strong> $3,000–$10,000+
              </li>
              <li>
                <strong>Online retailers (Pernia's Pop-Up, Aza Fashions USA):</strong> $800–$3,500
              </li>
              <li>
                <strong>Alterations included:</strong> Often free or $50–$150
              </li>
              <li>
                <strong>No shipping/customs fees</strong>
              </li>
              <li>
                <strong>Try before you buy</strong>
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Bottom line:</strong> Shopping in India can save $500–$1,500 on mid-range lehengas, but USA shopping
            eliminates shipping risk, fitting issues, and customs uncertainty. For designer pieces, prices are similar
            in both markets.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Groom's Sherwani: India vs USA
          </h3>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">India Prices:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Designer: $800–$3,000</li>
                <li>Mid-range boutique: $200–$800</li>
                <li>Local tailor: $50–$300</li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">USA Prices:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Boutique: $500–$2,000</li>
                <li>Online: $300–$1,200</li>
                <li>Rental: $150–$500</li>
              </ul>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Jewelry: Gold vs Fashion</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            This is where India has the clearest advantage—but only for real gold jewelry.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Real Gold Jewelry:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>India gold price (22K):</strong> ~$55–$65 per gram
              </li>
              <li>
                <strong>USA gold price (22K):</strong> ~$70–$85 per gram
              </li>
              <li>
                <strong>Making charges in India:</strong> 8–15% of gold value
              </li>
              <li>
                <strong>Making charges in USA:</strong> 20–35% of gold value
              </li>
              <li>
                <strong>Typical bridal set (60–100 grams):</strong> Save $1,500–$3,000 buying in India
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Fashion/Imitation Jewelry:</h4>
            <p className="text-foreground/80 mb-3">
              Prices are comparable, with USA often having better quality control and return policies.
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>India (local markets):</strong> $50–$300 per set
              </li>
              <li>
                <strong>USA boutiques:</strong> $80–$400 per set
              </li>
              <li>
                <strong>Online (both markets):</strong> $30–$200
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Beyond Price: Quality, Timeline & Risk Factors
          </h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Fitting & Alterations Reality</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            This is the #1 risk with shopping in India: outfits that don't fit properly when they arrive.
          </p>

          <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Common Fitting Issues:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Blouse too tight or loose (standard measurements don't account for body shape variations)</li>
              <li>Lehenga length wrong (floor-length measurements are tricky from photos)</li>
              <li>Sherwani shoulder/chest fit off</li>
              <li>Dupatta attachment points in wrong location</li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Alterations in the USA cost $100–$400</strong> depending on complexity. Budget for this if shopping
            from India.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Shipping & Customs Timeline</h3>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold text-foreground">Standard shipping from India: 7–14 days</p>
              <p className="text-sm text-foreground/70">FedEx/DHL express: $100–$200</p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold text-foreground">Customs clearance: 1–7 days (sometimes longer)</p>
              <p className="text-sm text-foreground/70">Duty: 0–20% of declared value (unpredictable)</p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold text-foreground">Total timeline: 2–4 weeks realistically</p>
              <p className="text-sm text-foreground/70">Always order 3–4 months before wedding minimum</p>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Return/Exchange Policies: The Deal-Breaker
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Shopping in India:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Most boutiques: No returns on custom/bridal pieces</li>
                <li>Exchanges: Rare, store credit only</li>
                <li>Shipping back to India: $150–$300</li>
                <li>Processing time: 2–6 weeks</li>
              </ul>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Shopping in USA:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Many boutiques: 7–14 day returns</li>
                <li>Exchanges: Often available (store credit)</li>
                <li>Same-day or next-day returns possible</li>
                <li>Consumer protection laws apply</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            The Smart Strategy: Hybrid Approach
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Most couples don't need to choose "all India" or "all USA"—a strategic mix gets you the best value without
            excessive risk.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-foreground mb-4">Buy in India:</h3>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Real gold jewelry</strong> (savings of $1,500–$3,000 on bridal sets)
              </li>
              <li>
                <strong>Ceremony items</strong> (coconuts, kalash, puja materials—much cheaper, ship easily)
              </li>
              <li>
                <strong>Guest favors</strong> (mithai boxes, small gifts—bulk savings add up)
              </li>
              <li>
                <strong>Mehendi supplies</strong> (cones, oils, aftercare—pennies in India vs. USA markups)
              </li>
              <li>
                <strong>Extra outfits</strong> (sangeet, mehendi outfits—lower stakes if fit isn't perfect)
              </li>
            </ul>
          </div>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-foreground mb-4">Buy in USA:</h3>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Primary bridal lehenga</strong> (too risky to have fitting issues—needs perfection)
              </li>
              <li>
                <strong>Groom's wedding day sherwani</strong> (fit is crucial, alterations easier locally)
              </li>
              <li>
                <strong>Fashion/imitation jewelry</strong> (similar price, better return policies)
              </li>
              <li>
                <strong>Bridesmaid outfits</strong> (coordination easier when everyone can try in person)
              </li>
              <li>
                <strong>Last-minute items</strong> (dupatta pins, bangles, accessories—Amazon/local shops)
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Practical Shopping Timeline: When to Order What
          </h2>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">6–8 Months Before Wedding:</h4>
              <p className="text-foreground/80">
                Start researching India boutiques, get quotes, confirm family contacts who can help with quality
                verification
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">4–6 Months Before:</h4>
              <p className="text-foreground/80">
                Place India orders (gold jewelry, ceremony items, guest favors, extra outfits). Allow 3–4 months for
                production + shipping + alterations buffer.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">3–5 Months Before:</h4>
              <p className="text-foreground/80">
                Shop for primary wedding outfits in USA (bridal lehenga, groom sherwani). This gives time for custom
                orders + alterations.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">2–3 Months Before:</h4>
              <p className="text-foreground/80">
                India shipments should arrive. Schedule alterations appointments. Order USA fashion jewelry and
                accessories.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">1 Month Before:</h4>
              <p className="text-foreground/80">
                Final fittings, last-minute accessory runs, backup dupatta/jewelry shopping if needed.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Red Flags: When NOT to Shop in India
          </h2>

          <div className="bg-rose-500/10 border-l-4 border-rose-500 p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Don't shop in India if:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>You have less than 4 months until the wedding</strong> (not enough buffer for shipping +
                alterations)
              </li>
              <li>
                <strong>You don't have a trusted contact in India</strong> to verify quality before shipping
              </li>
              <li>
                <strong>The outfit is your primary wedding day look</strong> and fit must be perfect
              </li>
              <li>
                <strong>You're ordering online from an unfamiliar vendor</strong> with no reviews or referrals
              </li>
              <li>
                <strong>Your budget is extremely tight</strong> and you can't afford the risk of needing replacements
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Real Couples: What Worked & What Didn't
          </h2>

          <div className="space-y-6 my-8">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <p className="font-semibold text-foreground mb-2">Success Story #1:</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                "We bought our gold jewelry set in India (saved $2,500) but got my lehenga from a boutique in Edison,
                NJ. The lehenga fit perfectly and I could return it if needed. The jewelry took 6 weeks to arrive but it
                was worth the wait."
              </p>
            </div>

            <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-6">
              <p className="font-semibold text-foreground mb-2">What Went Wrong:</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                "I ordered my entire bridal outfit from India to save money. The blouse was 2 sizes too small and the
                skirt length was wrong. Alterations cost $300 and I was stressed 3 weeks before my wedding. I wish I'd
                just shopped locally."
              </p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <p className="font-semibold text-foreground mb-2">Success Story #2:</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                "We used a hybrid approach: bought sangeet/mehendi outfits from India (saved ~$800), but got our main
                wedding outfits in the USA. The secondary outfits had minor fit issues but nothing critical. Main
                outfits were perfect."
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">The Bottom Line Decision Matrix</h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Item Type</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">
                    Buy in India If...
                  </th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Buy in USA If...</th>
                </tr>
              </thead>
              <tbody className="text-sm text-foreground/80">
                <tr>
                  <td className="border border-border p-3 font-medium">Real Gold Jewelry</td>
                  <td className="border border-border p-3">You have 4+ months & trusted contact</td>
                  <td className="border border-border p-3">You need it in less than 2 months</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3 font-medium">Bridal Lehenga</td>
                  <td className="border border-border p-3">Secondary/sangeet outfit only</td>
                  <td className="border border-border p-3">Primary wedding day outfit (fit critical)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">Groom Sherwani</td>
                  <td className="border border-border p-3">You have exact measurements & 4+ months</td>
                  <td className="border border-border p-3">Standard/wedding day outfit</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3 font-medium">Fashion Jewelry</td>
                  <td className="border border-border p-3">Buying in bulk (5+ sets) for family</td>
                  <td className="border border-border p-3">Individual pieces, need return option</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">Ceremony Items</td>
                  <td className="border border-border p-3">Always (massive savings, easy shipping)</td>
                  <td className="border border-border p-3">Emergency/last-minute needs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Need Help Coordinating Your Wedding Shopping?
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            CeremonyVerse offers <strong>Cultural Sourcing Support</strong>—a service designed to help you make smart
            shopping decisions, coordinate purchases from India, verify quality, and avoid common pitfalls.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">What We Help With:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>India vs USA shopping strategy based on your budget and timeline</li>
              <li>Trusted vendor recommendations (India and USA)</li>
              <li>Quality verification coordination through our network</li>
              <li>Shipping/customs guidance and timeline management</li>
              <li>Backup plans if orders don't work out</li>
            </ul>
          </div>

          <div className="bg-accent-soft/20 border-l-4 border-accent p-6 my-8">
            <p className="text-foreground/90 font-medium mb-4">
              Our Cultural Sourcing Support service is available as an add-on to any planning package, or as a
              standalone service if you just need shopping guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/cultural-sourcing"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Learn About Cultural Sourcing
              </Link>
              <Link
                href="/book"
                className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Key Takeaways: India vs USA Shopping
          </h2>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-foreground/80">
              <li>
                ✓ <strong>Real gold jewelry:</strong> India wins (save $1,500–$3,000)
              </li>
              <li>
                ✓ <strong>Primary wedding outfits:</strong> USA wins (better fit guarantee, easier alterations)
              </li>
              <li>
                ✓ <strong>Ceremony items & favors:</strong> India wins (massive savings, low shipping risk)
              </li>
              <li>
                ✓ <strong>Fashion jewelry:</strong> Roughly even (USA has better return policies)
              </li>
              <li>
                ✓ <strong>Timeline:</strong> India requires 4+ months; USA is more flexible
              </li>
              <li>
                ✓ <strong>Hybrid approach:</strong> Buy high-value items in India, high-stakes items in USA
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            The smartest strategy isn't "all India" or "all USA"—it's knowing which items to buy from each location to
            maximize value while minimizing risk. Plan your shopping timeline early, budget for shipping and
            alterations, and always have a backup plan for critical items.
          </p>
        </div>

        <SocialShare
          url="https://www.ceremonyverse.com/blog/wedding-shopping-india-vs-usa"
          title="Wedding Shopping: India vs USA Complete Comparison"
        />

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/virtual-shopping-india-guide"
              className="p-6 border border-border rounded-lg hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-foreground mb-2">Virtual Shopping for Indian Wedding Items</h4>
              <p className="text-sm text-foreground/70">
                Complete guide to shopping online from India with quality verification tips
              </p>
            </Link>
            <Link
              href="/blog/south-asian-wedding-budget-guide"
              className="p-6 border border-border rounded-lg hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-foreground mb-2">Indian Wedding Budget Guide 2025</h4>
              <p className="text-sm text-foreground/70">Complete cost breakdown and money-saving strategies</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
