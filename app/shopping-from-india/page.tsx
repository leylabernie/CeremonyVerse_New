import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Video, Shield, Star, Package, Sparkles } from "lucide-react"
import Footer from "@/components/footer"

export const metadata = {
  title: "India Without the Flight - Wedding Outfit & Jewelry Shopping | CeremonyVerse",
  description:
    "Shop authentic Indian wedding outfits, Silk Mark sarees, manthrakodi, bridal jewelry, and ceremony items from India via live video. No travel required.",
}

export default function ShoppingFromIndiaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent/10 px-6 py-2 rounded-full text-sm font-medium text-accent mb-6">
              Virtual Shopping Service
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              India Without the Flight
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Wedding Outfit & Jewelry Shopping with CeremonyVerse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/book-consultation">Start Shopping</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Couples Use Our Shopping Service */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              Why Couples Use Our Shopping Service
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Visa & Travel Pain Points</h3>
                <p className="text-muted-foreground text-sm">
                  No need for expensive flights, visa applications, or taking weeks off work to shop in India.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Overwhelm with Random Vendors</h3>
                <p className="text-muted-foreground text-sm">
                  We've pre-vetted every supplier so you don't waste time with unreliable online stores.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Authentic, Coordinated Looks</h3>
                <p className="text-muted-foreground text-sm">
                  Get genuine Indian wedding attire that matches your style, without the chaos of DIY sourcing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help You Shop For */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              What We Help You Shop For
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Bridal Lehenga / Saree",
                  description: "Including manthrakodi sarees with Silk Mark certification and custom embroidery",
                  icon: Package,
                },
                {
                  title: "Groom Sherwani / Indo-Western",
                  description: "Complete groom attire including accessories, turbans, and footwear",
                  icon: Sparkles,
                },
                {
                  title: "Outfits for Parents & Siblings",
                  description: "Coordinated family attire for all wedding events and ceremonies",
                  icon: Star,
                },
                {
                  title: "Bridesmaids & Groomsmen Styling",
                  description: "Color-matched lehengas, sarees, kurtas, and sherwanis for your wedding party",
                  icon: Shield,
                },
                {
                  title: "Jewelry (Bridal & Family Sets)",
                  description: "Temple jewelry, kundan, polki, and matching accessories",
                  icon: Star,
                },
                {
                  title: "Vidhi Items / Ceremony Essentials",
                  description: "Gujarati vidhi items, Tamil ceremony supplies, and ritual accessories",
                  icon: Package,
                },
                {
                  title: "Favors & Welcome Bag Items",
                  description: "Personalized gifts with Indian touches for your guests",
                  icon: Sparkles,
                },
                {
                  title: "Custom Requests",
                  description: "Specialized items, decorative elements, and unique cultural accessories",
                  icon: Star,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Our Process</h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Style Consultation",
                  description:
                    "We discuss your vision, preferences, budget, and timeline. You share inspiration photos and we understand your needs.",
                },
                {
                  step: "2",
                  title: "Curated Options",
                  description:
                    "We present verified supplier options via photos, videos, and detailed descriptions with pricing.",
                },
                {
                  step: "3",
                  title: "Live Video Shopping",
                  description:
                    "Schedule live video calls with suppliers to see fabrics, try jewelry virtually, and ask questions in real-time.",
                },
                {
                  step: "4",
                  title: "Order & Production",
                  description:
                    "You approve items and fund purchases directly. We coordinate measurements, customization, and production timelines.",
                },
                {
                  step: "5",
                  title: "Quality Check & Shipping",
                  description:
                    "We inspect items via video before shipping and coordinate international delivery to your address.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Once-a-Year India Buying Trip */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Video className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">Once-a-Year India Buying Trip</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                For couples who want hands-on, in-person shopping with our team accompanying you through India's best
                wedding markets and boutiques.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Premium service with limited availability (one dedicated trip each year, usually February/March)",
                  "Personal accompaniment in Mumbai, Delhi, Surat, or Chennai",
                  "Direct access to wholesale markets, designer studios, and artisan workshops",
                  "Immediate purchases with our team handling logistics and shipping",
                  "Requires advance booking and non-refundable service fee",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/forms/india-buying-trip-interest">Join Interest List</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Limited spots available • Advance booking required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Payment Structure */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              Investment & How Payments Work
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-4">Service Fee</h3>
                <p className="text-muted-foreground mb-4">Our shopping coordination service fee covers:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Supplier vetting and curation</li>
                  <li>• Style consultation and coordination</li>
                  <li>• Live video shopping sessions</li>
                  <li>• Quality checks and shipping coordination</li>
                  <li>• Ongoing support throughout the process</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-4">Product Payments</h3>
                <p className="text-muted-foreground mb-4">You fund all product purchases directly:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Transparent pricing (no markups on items)</li>
                  <li>• You approve every purchase before payment</li>
                  <li>• Direct payments to suppliers via secure processors</li>
                  <li>• Milestone-based payment schedules</li>
                  <li>• Customs duties and taxes are your responsibility</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> All handcrafted outfits, sarees, jewelry, and
                ceremonial items require non-refundable deposits due to overseas production and personalization. See our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">
                  Refund & Deposit Policy
                </Link>{" "}
                and{" "}
                <Link href="/sourcing-disclaimer" className="text-primary hover:underline">
                  Sourcing Disclaimer
                </Link>{" "}
                for complete details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Shop from India?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Schedule a free consultation to discuss your shopping needs and see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
              <Link href="/book-consultation">Start Your Shopping Journey</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
