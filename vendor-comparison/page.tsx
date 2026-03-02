import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding Vendor Comparison Tool | CeremonyVerse",
  description:
    "Compare verified Indian wedding vendors side-by-side. Evaluate pricing, services, reviews, and specialties to find the perfect match for your celebration.",
  keywords:
    "wedding vendor comparison, Indian wedding vendors, vendor reviews, wedding planning tool, compare wedding services",
}

export default function VendorComparison() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Vendor Comparison Tool</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Compare verified wedding vendors side-by-side to make informed decisions
          </p>
        </div>

        {/* Quick Access to Vendor Directory */}
        <div className="bg-gradient-to-br from-primary/10 to-sage/10 rounded-2xl p-8 mb-12 border border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Browse Our Verified Vendor Directory</h2>
            <p className="text-charcoal/80 mb-6">
              Start by exploring our curated network of verified Indian wedding vendors. All suppliers have passed our
              rigorous three-tier verification process.
            </p>
            <Link
              href="/vendors"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
            >
              View Vendor Directory
            </Link>
          </div>
        </div>

        {/* Comparison Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Side-by-Side Comparison</h3>
            <p className="text-charcoal/70 text-sm">
              Compare up to 3 vendors at once across pricing, services, reviews, and specialties
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Verified Reviews</h3>
            <p className="text-charcoal/70 text-sm">
              Read authentic reviews from real couples who have worked with each vendor
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Pricing Transparency</h3>
            <p className="text-charcoal/70 text-sm">
              See clear pricing ranges and package details to stay within your budget
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Specialty Filters</h3>
            <p className="text-charcoal/70 text-sm">
              Filter by regional expertise (Punjabi, South Indian, Gujarati, etc.)
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Availability Calendar</h3>
            <p className="text-charcoal/70 text-sm">Check vendor availability for your wedding dates in real-time</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Direct Contact</h3>
            <p className="text-charcoal/70 text-sm">
              Request quotes and schedule consultations directly through our platform
            </p>
          </div>
        </div>

        {/* How to Choose Guide */}
        <div className="bg-white rounded-2xl p-8 border border-charcoal/10">
          <h2 className="font-serif text-3xl text-charcoal mb-6">How to Choose the Right Vendor</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl text-primary mb-3">1. Define Your Priorities</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Before comparing vendors, know what matters most to you: price, quality, cultural expertise, or
                availability?
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-3">2. Check Cultural Expertise</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Ensure the vendor has experience with your specific cultural traditions and regional customs.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-3">3. Review Past Work</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Look at portfolios and real wedding photos to ensure their style matches your vision.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-3">4. Read Reviews Carefully</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Pay attention to reviews mentioning communication, reliability, and how vendors handle issues.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-3">5. Schedule Consultations</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Meet with your top 2-3 choices before making a final decision. Chemistry matters!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-sage/10 to-primary/10 rounded-2xl p-10 text-center border border-sage/20">
          <h2 className="font-serif text-3xl text-charcoal mb-4">Need Help Choosing Vendors?</h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto mb-8">
            Our Heritage & Harmony Plan includes personalized vendor matching based on your specific needs, budget, and
            cultural requirements. We handle all the research and coordination for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/heritage-harmony"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
            >
              Explore Heritage & Harmony
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-charcoal border-2 border-charcoal px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors font-semibold"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
