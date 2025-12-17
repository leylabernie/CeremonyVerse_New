import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "@/components/icons"
import Navigation from "@/components/navigation"
import Breadcrumbs from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Indian Wedding Planner in California | CeremonyVerse",
  description:
    "CeremonyVerse provides Indian and fusion wedding planning services in California, specializing in multi-day celebrations that require cultural understanding, detailed coordination, and seamless execution.",
  keywords: [
    "Indian wedding planner California",
    "California Indian wedding",
    "fusion wedding planner Bay Area",
    "Gujarati wedding planner California",
    "South Indian wedding planner LA",
  ],
  alternates: {
    canonical: "https://www.ceremonyverse.com/indian-wedding-planner-california",
  },
}

export default function IndianWeddingPlannerCalifornia() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    {
      name: "Indian Wedding Planner California",
      url: "https://www.ceremonyverse.com/indian-wedding-planner-california",
    },
  ]

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation />
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Indian Wedding Planner in California
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            CeremonyVerse provides Indian and fusion wedding planning services in California, specializing in multi-day
            celebrations that require cultural understanding, detailed coordination, and seamless execution.
          </p>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl text-foreground mb-8 text-center">Services in California</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Full Indian wedding planning</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Fusion wedding coordination</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Virtual planning and India sourcing</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Multi-ceremony timeline management</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Types of Weddings */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl text-foreground mb-8 text-center">Types of Weddings We Plan</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "Gujarati weddings",
              "South Indian weddings",
              "Punjabi weddings",
              "Jain weddings",
              "Indian–American fusion weddings",
            ].map((type) => (
              <div key={type} className="bg-background p-4 rounded-lg border border-border text-center">
                <span className="text-muted-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl text-foreground mb-8 text-center">Why Couples in California Choose Us</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Experience with Indian wedding traditions</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Structured planning process</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Vendor and timeline coordination</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">
                Secure milestone-based payments (Stripe, PayPal, Zelle)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground">Clear communication across events</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Planning an Indian Wedding in California?
          </h2>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg">
            <Link href="/book-consultation">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-primary hover:underline">
              Our Services
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/wedding-journeys" className="text-primary hover:underline">
              Wedding Journeys
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/book-consultation" className="text-primary hover:underline">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
