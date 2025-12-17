import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "@/components/icons"
import Navigation from "@/components/navigation"
import Breadcrumbs from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import { ServiceSchema, BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Indian & Fusion Wedding Planning Services | CeremonyVerse",
  description:
    "Thoughtful planning, cultural understanding, and seamless coordination for multi-day Indian weddings. Full planning, partial coordination, and virtual planning services.",
  keywords: [
    "Indian wedding planning services",
    "fusion wedding planning",
    "multi-day Indian wedding coordination",
    "Indian wedding planner USA",
    "virtual wedding planning",
    "India sourcing",
  ],
  openGraph: {
    title: "Indian & Fusion Wedding Planning Services | CeremonyVerse",
    description:
      "Thoughtful planning, cultural understanding, and seamless coordination for multi-day Indian weddings.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ceremonyverse.com/services",
  },
}

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Services", url: "https://www.ceremonyverse.com/services" },
  ]

  return (
    <main className="min-h-screen">
      <ServiceSchema
        name="Indian & Fusion Wedding Planning Services"
        description="Thoughtful planning, cultural understanding, and seamless coordination for multi-day Indian weddings."
        priceRange="$3,500 - $15,000+"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navigation />
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-balance">
            Indian & Fusion Wedding Planning Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Thoughtful planning, cultural understanding, and seamless coordination for multi-day Indian weddings.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg"
            >
              <Link href="/book-consultation">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">Our Planning Approach</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Indian and fusion weddings are complex. They involve multiple ceremonies, traditions, families, and
            timelines. Our services are built around process, not just vendors—so every event flows smoothly from start
            to finish.
          </p>
        </div>
      </section>

      {/* 3 Core Services */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Full Wedding Planning */}
            <div className="bg-background border-2 border-accent/30 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-accent/50">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">Full Wedding Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Best for: Couples planning multi-day Indian or fusion weddings
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">End-to-end planning and coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Cultural guidance across ceremonies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Vendor sourcing and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Timeline creation for all events</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Guest experience and flow planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    Secure, milestone-based payments (Stripe / PayPal / Zelle)
                  </span>
                </li>
              </ul>

              <Button
                asChild
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <Link href="/book-consultation">Learn More</Link>
              </Button>
            </div>

            {/* Partial Planning */}
            <div className="bg-background border-2 border-secondary/30 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-secondary/50">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">Partial Planning & Coordination</h3>
                <p className="text-muted-foreground text-sm">Best for: Couples with some vendors booked</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Timeline and logistics planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Vendor coordination and communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Ceremony sequencing guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Event-day coordination support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Payment milestones tied to deliverables</span>
                </li>
              </ul>

              <Button
                asChild
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                <Link href="/book-consultation">Learn More</Link>
              </Button>
            </div>

            {/* Virtual Planning */}
            <div className="bg-background border-2 border-primary/30 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/50">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">Virtual Planning & India Sourcing</h3>
                <p className="text-muted-foreground text-sm">Best for: Couples coordinating across countries</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Virtual planning sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    India sourcing coordination (attire, décor, ceremonial items)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Quality checks and confirmation steps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Vendor communication across time zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">Secure invoicing and documentation</span>
                </li>
              </ul>

              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Link href="/book-consultation">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Journeys Transition */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            What These Services Look Like in Real Weddings
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Every wedding is different. Instead of inspiration images, we share real planning journeys that show how our
            services are applied across Indian and fusion weddings.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg">
            <Link href="/wedding-journeys">
              View Wedding Journeys
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Ready to Start Planning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation to discuss your wedding vision and learn how we can help.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6">
            <Link href="/book-consultation">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
