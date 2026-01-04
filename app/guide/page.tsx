import { Download, CheckCircle2, Heart, Calendar, DollarSign, MapPin, Sparkles, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Free Wedding Planning Guide | CeremonyVerse",
  description:
    "Download our comprehensive guide: 10 Essential Steps for Planning an Authentic Indian-American Fusion Wedding. Expert tips, timelines, and checklists.",
}

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-charcoal">Free Wedding Planning Guide</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
            10 Essential Steps for Planning Your <span className="text-primary">Indian-American Fusion Wedding</span>
          </h1>

          <p className="text-xl text-charcoal/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            A comprehensive guide to help you blend tradition with modernity, honor your heritage, and create an
            unforgettable celebration.
          </p>

          <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Complete Guide (PDF)
          </button>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-12">
            {/* Step 1 */}
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">Step 1: Set Your Timeline</h2>
                  <p className="text-charcoal/60 text-sm">12-18 months before wedding</p>
                </div>
              </div>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Indian-American fusion weddings require more planning time than traditional Western weddings due to
                  multiple ceremonies and cultural elements. Start planning 12-18 months in advance.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Decide on the number of events (Mehendi, Sangeet, Ceremony, Reception)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Consider seasonal factors and family availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Account for international guest travel time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-secondary pl-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">Step 2: Establish Your Budget</h2>
                  <p className="text-charcoal/60 text-sm">Critical foundation for all decisions</p>
                </div>
              </div>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Fusion weddings typically cost 30-50% more than single-culture celebrations due to multiple events,
                  specialized vendors, and imported items. Be realistic about costs.
                </p>
                <div className="bg-cream/50 p-6 rounded-lg space-y-3">
                  <p className="font-medium text-charcoal">Typical Budget Breakdown:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Venue & Catering (40-50%)</span>
                      <span className="font-medium">$40,000-$75,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Attire & Jewelry (15-20%)</span>
                      <span className="font-medium">$15,000-$30,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Photography & Videography (10-15%)</span>
                      <span className="font-medium">$10,000-$20,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Decor & Flowers (10-15%)</span>
                      <span className="font-medium">$10,000-$20,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Entertainment & DJ (5-10%)</span>
                      <span className="font-medium">$5,000-$15,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">Step 3: Define Your Cultural Balance</h2>
                  <p className="text-charcoal/60 text-sm">Honor both traditions authentically</p>
                </div>
              </div>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Decide which cultural elements are non-negotiable and where you can blend traditions. This
                  conversation should involve both families.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Traditional ceremony elements (Mandap, Saat Phere, vows)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Attire choices for each event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Menu balance (Indian, Western, fusion options)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Music and entertainment mix</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-secondary pl-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">Step 4: Choose Your Venue(s)</h2>
                  <p className="text-charcoal/60 text-sm">Space for multiple events</p>
                </div>
              </div>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Look for venues that can accommodate multiple events over 2-3 days, or select complementary venues for
                  different ceremonies.
                </p>
                <div className="bg-secondary/5 p-6 rounded-lg">
                  <p className="font-medium text-charcoal mb-3">Venue Checklist:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Capacity for your guest count (typically 200-400 for Indian weddings)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Outdoor space for Baraat and Mandap setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Kitchen facilities for Indian catering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Accommodation options for out-of-town guests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">Step 5: Select Verified Vendors</h2>
                  <p className="text-charcoal/60 text-sm">Quality and reliability matter</p>
                </div>
              </div>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Work with vendors who understand both Indian and Western wedding traditions. Verification and
                  references are crucial for high-stakes purchases.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg space-y-3">
                  <p className="font-medium text-charcoal">Essential Vendors:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Wedding planner/coordinator with fusion experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Caterer experienced in Indian cuisine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Photographer/videographer familiar with Indian ceremonies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Decorator who can create authentic Mandap setups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>DJ/entertainment with Bollywood and Western music</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Remaining steps summary */}
            <div className="bg-gradient-to-br from-cream to-secondary/5 p-8 rounded-xl">
              <h3 className="font-serif text-2xl text-charcoal mb-6">Steps 6-10 Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">6</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Source Authentic Attire & Jewelry</p>
                    <p className="text-sm text-charcoal/60">From verified suppliers in India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-secondary">7</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Plan Your Ceremonies</p>
                    <p className="text-sm text-charcoal/60">Mehendi, Sangeet, ceremony details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">8</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Design Your Invitations</p>
                    <p className="text-sm text-charcoal/60">Blend cultural aesthetics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-secondary">9</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Coordinate Guest Experience</p>
                    <p className="text-sm text-charcoal/60">Welcome bags, itineraries, cultural guides</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">10</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Create Your Timeline</p>
                    <p className="text-sm text-charcoal/60">Day-of coordination and schedules</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Complete 50-Page Guide
                </button>
                <p className="text-sm text-charcoal/60 mt-3">Includes checklists, timelines, and budget templates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">Ready to Start Planning?</h2>
          <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
            Let us handle the details while you enjoy the journey. Book a free consultation to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-planning"
              className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/special-offers"
              className="bg-white text-charcoal px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all border-2 border-charcoal/10"
            >
              View Special Offers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
