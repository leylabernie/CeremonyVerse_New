import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Wedding Budget Guide 2025 | Cost Breakdown & Planning Tips",
  description:
    "Complete budget guide for Indian, Pakistani, and multicultural fusion weddings in USA. Average costs, money-saving tips, and detailed breakdown by ceremony. Plan your dream wedding within budget.",
  keywords:
    "indian wedding budget, indian wedding cost USA, pakistani wedding budget, wedding budget breakdown, indian wedding expenses, fusion wedding cost, wedding budget planner, multicultural wedding planning",
  openGraph: {
    title: "Indian Wedding Budget Guide 2025 | Complete Cost Breakdown",
    description:
      "Detailed budget guide for Indian weddings in USA. Learn average costs, money-saving strategies, and how to plan your dream wedding within budget.",
    type: "article",
  },
}

export default function SouthAsianWeddingBudgetGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Layout handles Navigation and Footer */}

      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Indian Wedding Budget Guide 2025: Complete Cost Breakdown
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about budgeting for your Indian, Pakistani, or fusion wedding in the USA
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </header>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
            <Image
              src="/elegant-indian-wedding-reception-decor-with-flower.jpg"
              alt="Elegant Indian wedding reception with traditional decor and modern lighting"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Planning an Indian wedding in the USA? Understanding the costs involved is crucial for creating a
              realistic budget. This comprehensive guide breaks down every expense category to help you plan your dream
              wedding without financial stress.
            </p>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Average Indian Wedding Costs in USA (2025)
            </h2>

            <div className="bg-muted/50 rounded-xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-medium mb-6">Budget Ranges by Wedding Size</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-semibold text-foreground">Intimate Wedding (50-100 guests)</p>
                    <p className="text-sm text-muted-foreground">1-2 day celebration</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">$15K - $30K</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-semibold text-foreground">Medium Wedding (150-250 guests)</p>
                    <p className="text-sm text-muted-foreground">2-3 day celebration</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">$40K - $75K</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-semibold text-foreground">Large Wedding (300-500 guests)</p>
                    <p className="text-sm text-muted-foreground">3-4 day celebration</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">$80K - $150K</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-foreground">Luxury Wedding (500+ guests)</p>
                    <p className="text-sm text-muted-foreground">4-5 day celebration</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">$150K+</p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Detailed Cost Breakdown by Category
            </h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">1. Venue & Catering (40-50%)</h3>
            <p>The largest expense for most Indian weddings:</p>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Venue rental:</strong> $3,000 - $15,000 per event (Mehndi, Sangeet, Ceremony, Reception)
              </li>
              <li>
                <strong>Catering:</strong> $50 - $150 per person for authentic Indian cuisine
              </li>
              <li>
                <strong>Bar service:</strong> $25 - $75 per person (if serving alcohol)
              </li>
              <li>
                <strong>Cake/desserts:</strong> $500 - $2,000
              </li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-primary mb-2">💡 Money-Saving Tip:</p>
              <p className="text-foreground">
                Consider venues that allow outside catering or have in-house Indian catering options. Hotel ballrooms
                often provide better value than standalone venues for multi-day events.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              2. Bridal Attire & Jewelry (15-20%)
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Bridal lehengas:</strong> $2,000 - $15,000 (designer pieces can exceed $50,000)
              </li>
              <li>
                <strong>Groom's sherwani:</strong> $500 - $3,000
              </li>
              <li>
                <strong>Jewelry rental/purchase:</strong> $3,000 - $20,000
              </li>
              <li>
                <strong>Additional outfits:</strong> $1,000 - $5,000 (Mehndi, Sangeet, Reception)
              </li>
              <li>
                <strong>Alterations & accessories:</strong> $500 - $1,500
              </li>
            </ul>

            <div className="aspect-video relative rounded-xl overflow-hidden my-8">
              <Image
                src="/indian-bride-in-red-lehenga-with-gold-jewelry.jpg"
                alt="Indian bride in traditional red lehenga with gold jewelry"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              3. Photography & Videography (10-15%)
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Photography:</strong> $3,000 - $8,000 for full coverage
              </li>
              <li>
                <strong>Videography:</strong> $3,000 - $10,000 for cinematic coverage
              </li>
              <li>
                <strong>Drone footage:</strong> $500 - $1,500
              </li>
              <li>
                <strong>Photo booth:</strong> $800 - $2,000
              </li>
              <li>
                <strong>Albums & prints:</strong> $500 - $2,000
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">4. Decor & Florals (10-15%)</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Mandap/stage decor:</strong> $2,000 - $10,000
              </li>
              <li>
                <strong>Floral arrangements:</strong> $3,000 - $15,000
              </li>
              <li>
                <strong>Lighting:</strong> $1,500 - $5,000
              </li>
              <li>
                <strong>Centerpieces:</strong> $50 - $200 per table
              </li>
              <li>
                <strong>Entrance decor:</strong> $1,000 - $5,000
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              5. Entertainment & Music (8-12%)
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>DJ services:</strong> $1,500 - $4,000 per event
              </li>
              <li>
                <strong>Live band:</strong> $3,000 - $10,000
              </li>
              <li>
                <strong>Dhol players:</strong> $500 - $1,500
              </li>
              <li>
                <strong>Dancers/performers:</strong> $1,000 - $5,000
              </li>
              <li>
                <strong>Sound system rental:</strong> $500 - $2,000
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              6. Mehndi & Beauty Services (3-5%)
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Bridal mehndi artist:</strong> $300 - $1,000
              </li>
              <li>
                <strong>Guest mehndi artists:</strong> $150 - $300 per artist
              </li>
              <li>
                <strong>Bridal makeup & hair:</strong> $500 - $2,000
              </li>
              <li>
                <strong>Bridesmaids makeup:</strong> $100 - $200 per person
              </li>
              <li>
                <strong>Pre-wedding beauty treatments:</strong> $500 - $2,000
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              7. Invitations & Stationery (2-3%)
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Custom invitations:</strong> $5 - $25 per invitation
              </li>
              <li>
                <strong>Save the dates:</strong> $2 - $8 per card
              </li>
              <li>
                <strong>Programs & menus:</strong> $500 - $1,500
              </li>
              <li>
                <strong>Thank you cards:</strong> $200 - $500
              </li>
              <li>
                <strong>Postage:</strong> $300 - $800
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              8. Wedding Planner/Coordinator (8-15%)
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Full planning services:</strong> $5,000 - $15,000 or 10-15% of total budget
              </li>
              <li>
                <strong>Partial planning:</strong> $3,000 - $8,000
              </li>
              <li>
                <strong>Day-of coordination:</strong> $1,500 - $3,500
              </li>
              <li>
                <strong>Cultural consultant:</strong> $500 - $2,000
              </li>
            </ul>

            <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-secondary mb-2">✨ Pro Tip:</p>
              <p className="text-foreground">
                A good wedding planner often saves you more than their fee through vendor negotiations and avoiding
                costly mistakes. They're especially valuable for multi-day Indian celebrations.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Money-Saving Strategies for Indian Weddings
            </h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">1. Prioritize Your Must-Haves</h3>
            <p>
              Identify the 3-5 elements that matter most to you and your families. Allocate more budget to these areas
              and find savings elsewhere.
            </p>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">2. Consider Off-Peak Timing</h3>
            <p>
              Weddings in January-March or July-August (avoiding peak season) can save 20-30% on venue and vendor costs.
              Friday or Sunday weddings are also typically less expensive than Saturdays.
            </p>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">3. Shop Smart for Attire</h3>
            <ul className="space-y-2 mb-6">
              <li>Order outfits directly from India (can save 40-60%)</li>
              <li>Consider renting jewelry instead of purchasing</li>
              <li>Shop during sale seasons (Diwali, New Year)</li>
              <li>Mix designer pieces with more affordable options</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">4. Combine Events</h3>
            <p>
              Consider combining Mehndi and Sangeet into one evening, or having a brunch reception instead of dinner to
              reduce per-person costs.
            </p>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">5. DIY Selectively</h3>
            <p>
              Handle smaller details yourself (favors, welcome bags, simple centerpieces) but leave complex elements to
              professionals.
            </p>

            <div className="aspect-video relative rounded-xl overflow-hidden my-8">
              <Image
                src="/indian-wedding-sangeet-night-with-dancing-and-ligh.jpg"
                alt="Vibrant Indian wedding Sangeet night with dancing and colorful lights"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Hidden Costs to Budget For</h2>

            <ul className="space-y-3 mb-8">
              <li>
                <strong>Vendor meals:</strong> $500 - $1,500 (photographers, videographers, planners, etc.)
              </li>
              <li>
                <strong>Overtime fees:</strong> $200 - $500 per hour for vendors
              </li>
              <li>
                <strong>Gratuities:</strong> 15-20% for key vendors
              </li>
              <li>
                <strong>Marriage license:</strong> $50 - $150
              </li>
              <li>
                <strong>Officiant fees:</strong> $300 - $800
              </li>
              <li>
                <strong>Transportation:</strong> $500 - $2,000 (baraat horse, vintage car, shuttles)
              </li>
              <li>
                <strong>Hotel room blocks:</strong> Negotiated rates for guests
              </li>
              <li>
                <strong>Welcome bags:</strong> $20 - $50 per bag
              </li>
              <li>
                <strong>Rehearsal dinner:</strong> $1,000 - $5,000
              </li>
              <li>
                <strong>Day-after brunch:</strong> $500 - $2,000
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Budget Allocation by Wedding Style
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-medium mb-4">Traditional Indian Wedding</h3>
                <ul className="space-y-2 text-sm">
                  <li>Venue & Catering: 45%</li>
                  <li>Attire & Jewelry: 20%</li>
                  <li>Decor & Florals: 15%</li>
                  <li>Photography: 10%</li>
                  <li>Entertainment: 10%</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-medium mb-4">Modern Fusion Wedding</h3>
                <ul className="space-y-2 text-sm">
                  <li>Venue & Catering: 40%</li>
                  <li>Photography & Video: 15%</li>
                  <li>Attire: 15%</li>
                  <li>Decor: 12%</li>
                  <li>Entertainment: 10%</li>
                  <li>Planner: 8%</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Payment Timeline & Tips</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">12-18 Months Before</h4>
                <p className="text-sm text-muted-foreground">
                  Book venue, planner, photographer (typically 25-50% deposit)
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">6-12 Months Before</h4>
                <p className="text-sm text-muted-foreground">
                  Book caterer, florist, entertainment, beauty services (deposits required)
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">3-6 Months Before</h4>
                <p className="text-sm text-muted-foreground">Order attire, finalize decor, book transportation</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">1-3 Months Before</h4>
                <p className="text-sm text-muted-foreground">
                  Final payments to most vendors, order favors and details
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Week Of</h4>
                <p className="text-sm text-muted-foreground">Final venue payment, gratuities prepared</p>
              </div>
            </div>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-accent mb-2">🔒 Secure Payment Terms:</p>
              <p className="text-foreground">
                For large international purchases (attire, jewelry from India), use milestone-based contracts with clear
                payment schedules. CeremonyVerse provides secure payment processing and contract review for all virtual
                shopping services.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Final Thoughts</h2>

            <p>
              Planning an Indian wedding budget requires careful consideration of cultural traditions, family
              expectations, and your personal vision. By understanding typical costs, prioritizing what matters most,
              and shopping strategically, you can create the celebration of your dreams while staying financially
              responsible.
            </p>

            <p>
              Remember: the most memorable weddings aren't necessarily the most expensive. Focus on creating meaningful
              moments that honor your heritage while celebrating your unique love story.
            </p>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <h3 className="font-serif text-2xl font-medium mb-4">Need Help Planning Your Budget?</h3>
              <p className="text-muted-foreground mb-6">
                Our wedding planning experts can help you create a realistic budget and find the best vendors within
                your price range. Get personalized guidance for your fusion celebration.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
