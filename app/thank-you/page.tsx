import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle2, Download, Gift, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Thank You | CeremonyVerse",
  description:
    "Thank you for your interest in CeremonyVerse. Access your free wedding planning guide and special offers.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-secondary" />
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            Thank You for <span className="text-primary">Joining Us!</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're excited to help you plan your dream Indian-American fusion wedding. Your free guide and special offers
            are ready below.
          </p>
        </div>
      </section>

      {/* Guide Access */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-8 border border-border">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-foreground mb-4">Your Free Wedding Planning Guide</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Access our comprehensive 50-page guide: "10 Essential Steps for Planning an Authentic Indian-American
                  Fusion Wedding" with checklists, timelines, and budget templates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/guide"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Access Your Guide
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all border-2 border-border">
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Gift className="w-8 h-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-foreground mb-4">Exclusive Offers Just for You</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As a thank you for joining our community, you have access to exclusive wedding planning packages and
                  limited-time promotions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">Early Bird Discount</h3>
                <p className="text-muted-foreground text-sm mb-3">Save $2,500 when you book 12+ months in advance</p>
                <p className="text-2xl font-bold text-primary">$2,500 OFF</p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">Shopping Credit</h3>
                <p className="text-muted-foreground text-sm mb-3">$1,000 toward Virtual Shopping Concierge service</p>
                <p className="text-2xl font-bold text-secondary">$1,000 Credit</p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">Spring Special</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Complimentary Mehendi coordination + upgraded florals
                </p>
                <p className="text-2xl font-bold text-primary">$800 Value</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/special-offers"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all"
              >
                View All Special Offers
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-foreground mb-6">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-medium text-foreground mb-2">Check Your Email</h3>
              <p className="text-sm text-muted-foreground">
                We've sent you the guide and offers to your inbox (check spam if you don't see it)
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-secondary">2</span>
              </div>
              <h3 className="font-medium text-foreground mb-2">Explore Our Services</h3>
              <p className="text-sm text-muted-foreground">
                Browse our planning packages and see how we can help bring your vision to life
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-medium text-foreground mb-2">Schedule a Call</h3>
              <p className="text-sm text-muted-foreground">
                Book your free consultation to discuss your wedding and claim your special offers
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+12153419990"
              className="bg-card text-foreground px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all border-2 border-border"
            >
              Call +1-215-341-9990
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
