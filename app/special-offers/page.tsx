import { Sparkles, Clock, Gift, Star, CheckCircle2, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Special Offers & Promotions | CeremonyVerse",
  description:
    "Exclusive wedding planning packages and limited-time offers for Indian-American fusion weddings. Save on our premium services.",
}

export default function SpecialOffersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-6">
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-charcoal">Limited Time Offers</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
            Exclusive <span className="text-primary">Wedding Planning</span> Offers
          </h1>

          <p className="text-xl text-charcoal/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            Start your wedding planning journey with special savings and exclusive benefits designed for couples like
            you.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Offer 1: Early Bird Discount */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-primary/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Limited Time</span>
                </div>

                <h2 className="font-serif text-3xl text-charcoal mb-4">Early Bird Planning Package</h2>

                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Book your Heritage & Harmony Plan 12+ months in advance and save $2,500 on our comprehensive wedding
                  planning service.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Full Heritage & Harmony Plan included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Priority vendor selection and booking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Complimentary engagement party planning consultation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Extended payment plan options</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-primary">$12,500</span>
                  <span className="text-xl text-charcoal/50 line-through">$15,000</span>
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    Save $2,500
                  </span>
                </div>

                <Link
                  href="/start-planning"
                  className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all"
                >
                  Claim This Offer
                </Link>
              </div>

              <div className="w-full md:w-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-serif text-2xl text-charcoal mb-2">Offer Expires</p>
                  <p className="text-charcoal/70">When you book 12+ months in advance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Offer 2: Virtual Shopping Credit */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-secondary/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">New Client Bonus</span>
                </div>

                <h2 className="font-serif text-3xl text-charcoal mb-4">$1,000 Virtual Shopping Credit</h2>

                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  New clients receive $1,000 credit toward our Virtual Shopping Concierge service when you book any
                  full-service planning package.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Use toward bridal attire, jewelry, or wedding essentials</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Access to verified Indian suppliers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Live video consultations included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Secure payment processing and milestone-based schedules</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-secondary">$1,000</span>
                  <span className="text-charcoal/70">Shopping Credit</span>
                </div>

                <Link
                  href="/start-planning"
                  className="inline-block bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all"
                >
                  Get Your Credit
                </Link>
              </div>

              <div className="w-full md:w-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6">
                <div className="text-center">
                  <Gift className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="font-serif text-2xl text-charcoal mb-2">Bonus Value</p>
                  <p className="text-charcoal/70">For new clients booking full-service packages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Offer 3: Referral Program */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-primary/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Ongoing Program</span>
                </div>

                <h2 className="font-serif text-3xl text-charcoal mb-4">Refer a Friend, Get $500</h2>

                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Love our service? Refer another couple and receive $500 credit when they book any planning package.
                  They'll also receive $250 off their first service.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">You get $500 credit toward any service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Your friend gets $250 off their first package</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">No limit on referrals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">Credits never expire</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-primary">$500</span>
                  <span className="text-charcoal/70">Per Referral</span>
                </div>

                <Link
                  href="/start-planning"
                  className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all"
                >
                  Learn More
                </Link>
              </div>

              <div className="w-full md:w-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-serif text-2xl text-charcoal mb-2">Unlimited</p>
                  <p className="text-charcoal/70">Refer as many couples as you'd like</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Offer */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <div className="text-center max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl text-charcoal mb-4">Spring 2025 Wedding Special</h2>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                Book your April-June 2025 wedding by the end of this month and receive complimentary Mehendi artist
                coordination (valued at $800) plus upgraded floral arrangements for your Mandap.
              </p>
              <Link
                href="/start-planning"
                className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all"
              >
                Book Spring 2025
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
            Schedule your free consultation today and let's discuss which offer works best for your wedding vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-planning"
              className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+12153419990"
              className="bg-white text-charcoal px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all border-2 border-charcoal/10"
            >
              Call +1-215-341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
