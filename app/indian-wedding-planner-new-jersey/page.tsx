import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, MapPin, Sparkles } from "@/components/icons"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Wedding Planner in New Jersey | Gujarati, Tamil & Fusion Specialists – CeremonyVerse",
  description:
    "Expert Indian wedding planning services in New Jersey and tri-state area. Gujarati Hindu weddings, Tamil Christian ceremonies, and multicultural fusion weddings. Serving Edison, Iselin, Jersey City, and all of NJ.",
  keywords:
    "Indian wedding planner New Jersey, Gujarati wedding planner NJ, Tamil Christian wedding NJ, Indian wedding Edison NJ, Indian wedding Iselin, wedding planner Jersey City",
  openGraph: {
    title: "Indian Wedding Planner in New Jersey | CeremonyVerse",
    description: "Full-service Indian wedding planning throughout New Jersey and the tri-state area",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/indian-wedding-planner-new-jersey",
  },
}

export default function IndianWeddingPlannerNewJerseyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Serving All of New Jersey</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Indian Wedding Planner in New Jersey
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Expert planning for Gujarati Hindu, Tamil Christian, and multicultural fusion weddings throughout New
                Jersey and the tri-state area. From Edison to Jersey City, we bring authentic Indian wedding traditions
                to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/book-consultation">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View NJ Weddings</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gujarati-wedding-couple-traditional-chaniya-choli-.jpg"
                alt="Indian wedding couple at New Jersey venue celebrating with traditional decorations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Jersey Service Areas */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Serving Indian Communities Throughout New Jersey
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert local knowledge and vendor relationships across the Garden State
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">North Jersey</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Jersey City & Hoboken</li>
                <li>• Newark & Elizabeth</li>
                <li>• Fort Lee & Palisades Park</li>
                <li>• Parsippany & Morristown</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Central Jersey</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Edison & Iselin</li>
                <li>• Piscataway & New Brunswick</li>
                <li>• Woodbridge & Bridgewater</li>
                <li>• Princeton & Plainsboro</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">South Jersey</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Cherry Hill & Voorhees</li>
                <li>• Marlton & Mount Laurel</li>
                <li>• Princeton Junction</li>
                <li>• Plus tri-state area (PA, NY)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our New Jersey Expertise */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Why Choose CeremonyVerse for Your New Jersey Indian Wedding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Established relationships with top Indian wedding venues across NJ",
              "Network of verified Gujarati, Tamil, and South Indian vendors",
              "Experience with NJ temple ceremonies and banquet hall receptions",
              "Knowledge of best catering teams for authentic Indian cuisine",
              "Coordination with local mandap decorators and lighting specialists",
              "Expertise in multi-day celebrations at NJ venues",
              "Familiarity with parking, logistics, and venue regulations across NJ",
              "Close proximity for in-person meetings and venue visits",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Styles We Specialize In */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Indian Wedding Styles We Plan in New Jersey
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/gujarati-wedding-planner" className="hover:text-accent transition-colors">
                  Gujarati Hindu Weddings
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Traditional Gujarati ceremonies including grah shanti, pithi, garba, dandiya, and mandap muhurat with
                authentic vidhi items.
              </p>
              <Link href="/gujarati-wedding-planner" className="text-accent text-sm font-medium hover:underline">
                Learn more about Gujarati wedding planning →
              </Link>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/tamil-christian-wedding-planner" className="hover:text-accent transition-colors">
                  Tamil Christian Weddings
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Beautiful blend of church ceremonies and South Indian traditions, including manthrakodi saree changes
                and Tamil Catholic customs.
              </p>
              <Link href="/tamil-christian-wedding-planner" className="text-accent text-sm font-medium hover:underline">
                Learn more about Tamil Christian wedding planning →
              </Link>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/fusion-wedding-planner" className="hover:text-accent transition-colors">
                  Multicultural Fusion Weddings
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Expert coordination of Hindu-Christian, Indian-American, and multicultural ceremonies that honor both
                families' traditions.
              </p>
              <Link href="/fusion-wedding-planner" className="text-accent text-sm font-medium hover:underline">
                Learn more about fusion wedding planning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Scope Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Pricing & Scope for New Jersey Indian Weddings
            </h2>
            <p className="text-lg text-muted-foreground">
              We customize our services to fit your budget and wedding vision in New Jersey.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border mb-8">
            <h3 className="text-xl font-medium mb-4">Budget Flexibility</h3>
            <p className="text-muted-foreground mb-6">
              New Jersey Indian weddings vary greatly in scale and cultural requirements. Your investment depends on the
              number of events, guest count, and whether you're incorporating traditions from multiple regions.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Minimum Included:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Complete NJ venue coordination and timeline</li>
                  <li>Vendor management and cultural guidance</li>
                  <li>Month-of coordination for all events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">May Increase Depending On:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Number of ceremonies and pre-wedding events</li>
                  <li>Guest count and multi-venue coordination</li>
                  <li>Full design and decor services</li>
                  <li>Virtual shopping from India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/pricing">View Full Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/start-planning">Start Planning</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-6">
            Ready to Plan Your New Jersey Indian Wedding?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your vision and create an unforgettable celebration in the Garden State
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-consultation">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Serving Edison, Iselin, Jersey City, and all of New Jersey • Free consultation • Call +1-215-341-9990
          </p>
        </div>
      </section>
    </div>
  )
}
