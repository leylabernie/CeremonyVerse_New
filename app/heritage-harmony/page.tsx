import type { Metadata } from "next"
import { Check, Shield, Video, Calendar, Users, Star, Phone, Mail, Sparkles, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Heritage & Harmony Plan | Luxury Indian-American Fusion Wedding Planning",
  description:
    "Complete Indian-American fusion wedding planning starting at $8,500. Includes Mehendi, Sangeet, Baraat coordination, verified Indian suppliers, virtual shopping from India, and day-of coordination. Serving USA & Mexico.",
  keywords: [
    "Indian American fusion wedding planner",
    "multicultural wedding planning",
    "luxury Indian wedding coordinator",
    "fusion wedding packages",
    "Mehendi Sangeet planning",
    "verified Indian suppliers",
    "secure wedding services",
    "Indian wedding planner USA",
    "destination Indian wedding Mexico",
  ],
  openGraph: {
    title: "Heritage & Harmony Plan | Complete Fusion Wedding Planning",
    description:
      "Your heritage. Your harmony. Complete Indian-American fusion wedding planning with verified suppliers and virtual shopping from India.",
    type: "website",
    url: "https://www.ceremonyverse.com/heritage-harmony",
  },
  alternates: {
    canonical: "https://www.ceremonyverse.com/heritage-harmony",
  },
}

export default function HeritageHarmonyPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Services", url: "https://www.ceremonyverse.com/services" },
    { name: "Heritage & Harmony Plan", url: "https://www.ceremonyverse.com/heritage-harmony" },
  ]

  const pageFaqs = [
    {
      question: "What makes Heritage & Harmony different?",
      answer:
        "We offer secure milestone-based payment structures, three-tier supplier verification, and live virtual shopping from India. Your investments are protected with professional contracts for every vendor, all suppliers are personally vetted, and you can shop authentic Indian items via video consultation.",
    },
    {
      question: "Do you plan weddings in both the USA and Mexico?",
      answer:
        "Yes! We specialize in planning Indian-American fusion weddings throughout the USA and Mexico. For Mexico resort weddings, we collaborate with a trusted Mexico-based coordinator and travel advisors who handle room blocks and group contracts, while we focus on your ceremonies, guests and Indian/fusion details.",
    },
    {
      question: "How does the virtual shopping from India work?",
      answer:
        "We schedule live video consultations with our verified suppliers in India. You'll see fabrics, jewelry, and other items in real-time, ask questions, and make selections from the comfort of your home. We handle all shipping, customs, and quality checks.",
    },
    {
      question: "What events are included in multi-day planning?",
      answer:
        "We coordinate all traditional events including Mehendi, Haldi, Sangeet, Baraat, the main ceremony under a custom Mandap, and Western-style reception. We can also plan additional events like engagement parties or post-wedding brunches.",
    },
    {
      question: "How does your payment structure work?",
      answer:
        "We use clear, milestone-based payment schedules with professional contracts. Payments are made directly via Stripe, PayPal, or Zelle, tied to specific deliverables. Each vendor agreement outlines what is included, when services will be provided, and when payments are due.",
    },
  ]

  return (
    <main className="min-h-screen">
      <ServiceSchema
        name="Heritage & Harmony Plan - Indian-American Fusion Wedding Planning"
        description="Complete multi-day Indian-American fusion wedding planning including Mehendi, Sangeet, Baraat coordination, verified Indian suppliers, virtual shopping from India, and day-of coordination."
        priceRange="$8,500 - $15,000+"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={pageFaqs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--cream)] via-white to-[var(--background)] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                  Our Flagship Service
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] mb-6 leading-tight">
                  The Heritage & Harmony Plan
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Complete fusion wedding planning with verified suppliers and seamless coordination for your multi-day
                  celebration
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                  >
                    <a href="tel:+12153419990">
                      <Phone className="mr-2 h-5 w-5" />
                      Call +1-215-341-9990
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg bg-transparent"
                  >
                    <Link href="/book-consultation">Schedule Free Consultation</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 mt-12">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Shield className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm font-medium">Secure Payments</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Check className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm font-medium">Verified Suppliers</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Video className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-sm font-medium">Live Virtual Shopping</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/baarat.jpg"
                  alt="Vibrant Indian baraat celebration with bride and groom on yellow car surrounded by wedding party"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] mb-4">
                Everything You Need for Your Perfect Day
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial planning to day-of coordination, we handle every detail of your multi-day fusion
                celebration
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Multi-Day Event Planning */}
              <div className="bg-gradient-to-br from-[var(--cream)] to-white p-8 rounded-2xl border border-[var(--primary)]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-full flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-4">Multi-Day Event Planning</h3>
                <ul className="space-y-3">
                  {[
                    "Mehendi Ceremony coordination",
                    "Haldi celebration planning",
                    "Sangeet night entertainment",
                    "Baraat procession logistics",
                    "Traditional ceremony under custom Mandap",
                    "Western-style reception coordination",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dedicated Wedding Coordinator */}
              <div className="bg-gradient-to-br from-[var(--background)] to-white p-8 rounded-2xl border border-[var(--accent)]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--accent)] rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-4">Dedicated Wedding Coordinator</h3>
                <ul className="space-y-3">
                  {[
                    "Single point of contact throughout",
                    "Unlimited consultations (phone, video, email)",
                    "Cultural consultation and guidance",
                    "Timeline and budget management",
                    "Vendor contract negotiation",
                    "Day-of coordination for all events",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Virtual Shopping Concierge */}
              <div className="bg-gradient-to-br from-[var(--cream)] to-white p-8 rounded-2xl border border-[var(--primary)]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-full flex items-center justify-center mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-4">Virtual Shopping Concierge</h3>
                <ul className="space-y-3">
                  {[
                    "Live video consultations with Indian suppliers",
                    "Bride & groom outfit sourcing",
                    "Bridal party and family attire",
                    "Jewelry and accessories",
                    "Wedding favors and welcome bags",
                    "Invitations and save-the-dates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curated Vendor Network */}
              <div className="bg-gradient-to-br from-[var(--background)] to-white p-8 rounded-2xl border border-[var(--accent)]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--accent)] rounded-full flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-4">Curated Vendor Network</h3>
                <ul className="space-y-3">
                  {[
                    "Verified photographers and videographers",
                    "Fusion catering with dietary accommodations",
                    "Bilingual entertainment and DJs",
                    "Mandap and decor specialists",
                    "Mehndi artists and beauty professionals",
                    "Transportation and logistics coordination",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Propositions */}
      <section className="py-20 bg-gradient-to-br from-[var(--cream)] via-white to-[var(--background)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] mb-4">Why We're Different</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unique features you won't find with other wedding planners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--primary)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[var(--foreground)] mb-3">Secure Payment Processing</h3>
                <p className="text-gray-600 mb-4">
                  We help you set up milestone-based payment schedules with professional contracts for all vendors.
                  Payments are made directly via Stripe, PayPal, or Zelle, tied to clear deliverables and your
                  satisfaction.
                </p>
                <div className="text-sm text-[var(--accent)] font-medium">Professional Standards</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--accent)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent)] rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[var(--foreground)] mb-3">Three-Tier Supplier Verification</h3>
                <p className="text-gray-600 mb-4">
                  Every supplier undergoes legal verification, quality assessment, and reference checks. We personally
                  inspect workshops via video before recommending them.
                </p>
                <div className="text-sm text-[var(--primary)] font-medium">Verified Quality</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--foreground)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--foreground)] to-[var(--foreground)] rounded-full flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[var(--foreground)] mb-3">Live Virtual Shopping from India</h3>
                <p className="text-gray-600 mb-4">
                  Shop authentic Indian wedding items via live video with our verified suppliers. See fabrics, try
                  jewelry virtually, and make confident decisions from home.
                </p>
                <div className="text-sm text-[var(--accent)] font-medium">Authentic & Convenient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] mb-4">Investment</h2>
              <p className="text-xl text-gray-600">Transparent pricing for your complete fusion wedding</p>
            </div>

            <div className="bg-gradient-to-br from-[var(--cream)] to-white p-12 rounded-3xl border-2 border-[var(--primary)] shadow-xl">
              <div className="text-center mb-8">
                <div className="text-5xl font-serif text-[var(--foreground)] mb-2">Starting at $8,500</div>
                <p className="text-gray-600">For complete multi-day wedding coordination</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Planning & Coordination (all events)</span>
                  <span className="font-medium text-[var(--foreground)]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Virtual Shopping Concierge</span>
                  <span className="font-medium text-[var(--foreground)]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Vendor Sourcing & Management</span>
                  <span className="font-medium text-[var(--foreground)]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Day-of Coordination Team</span>
                  <span className="font-medium text-[var(--foreground)]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">Secure Payment Processing</span>
                  <span className="font-medium text-[var(--accent)]">Included</span>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-12 py-6 text-lg"
                >
                  <Link href="/book-consultation">Schedule Your Free Consultation</Link>
                </Button>
                <p className="text-sm text-gray-500 mt-4">No obligation. Just honest conversation about your vision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-gradient-to-br from-[var(--background)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {pageFaqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-serif text-xl text-[var(--foreground)] mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Start Planning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Schedule your free consultation today and discover how we make fusion wedding planning stress-free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[var(--foreground)] hover:bg-gray-100 px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call +1-215-341-9990
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--foreground)] px-8 py-6 text-lg bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Enhance Your Heritage & Harmony Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete your wedding with our specialized sourcing and concierge services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/services/outfit-concierge"
                className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20 hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">Outfit Concierge</h3>
                <p className="text-muted-foreground text-sm">
                  Manthrakodi sarees, pure silk, Banarasi sarees, bridal jewelry, and custom outfits sourced from India
                </p>
              </Link>

              <Link
                href="/services/ceremony-essentials"
                className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-accent/20 hover:border-accent transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Package className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">Ceremony Essentials</h3>
                <p className="text-muted-foreground text-sm">
                  Gujarati vidhi items, Tamil/Hindu/Christian ritual supplies, welcome bags, and ceremonial accessories
                </p>
              </Link>

              <Link
                href="/bridal-party-coordination"
                className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20 hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">Bridal Party Coordination</h3>
                <p className="text-muted-foreground text-sm">
                  Complete outfit coordination and styling for your entire bridal party with color matching and delivery
                </p>
              </Link>

              <Link
                href="/portfolio"
                className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20 hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">Portfolio & Gallery</h3>
                <p className="text-muted-foreground text-sm">
                  Browse our collection of bridal lehengas, silk sarees, groomsmen styling, and complete wedding party
                  coordination
                </p>
              </Link>
            </div>

            <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Legal Note:</strong> All handcrafted outfits, sarees, jewelry, and
                ceremonial items sourced through CeremonyVerse require a non-refundable deposit due to overseas
                production and personalization. See our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">
                  Refund & Deposit Policy
                </Link>{" "}
                and{" "}
                <Link href="/sourcing-disclaimer" className="text-primary hover:underline">
                  Sourcing Disclaimer
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
