import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Users, Globe } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Indian Fusion Wedding Planner USA | Hindu-Christian & Multicultural Specialists – CeremonyVerse",
  description:
    "Expert fusion wedding planning for Hindu-Christian, Indian-American, and multicultural couples. We blend traditions beautifully—from mandaps to church altars, sarees to gowns. Virtual shopping from India included.",
  keywords: [
    "Indian fusion wedding planner USA",
    "Hindu Christian wedding",
    "multicultural fusion wedding planner",
    "Indian American fusion wedding",
    "fusion wedding USA",
    "two-ceremony wedding planner",
  ],
  openGraph: {
    title: "Indian Fusion Wedding Planner USA | CeremonyVerse",
    description:
      "Beautiful fusion and multicultural wedding planning that honors both partners' traditions with respect and creativity.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/fusion-wedding-planner",
  },
}

export default function FusionWeddingPlannerPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight text-balance">
            Fusion & Multicultural Wedding Planning in the USA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Where two cultures become one celebration—we blend Hindu, Christian, and cultural traditions beautifully,
            honoring both families with creativity and respect
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-10 py-6 text-lg bg-transparent">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Why Fusion Couples Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We celebrate your unique love story by honoring both traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Cultural Respect</h3>
              <p className="text-muted-foreground">
                We deeply respect and understand both Hindu and Christian traditions, ensuring authentic representation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Creative Integration</h3>
              <p className="text-muted-foreground">
                We blend ceremonies, décor, and traditions seamlessly—from mandaps to church altars, sarees to gowns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Family Mediation</h3>
              <p className="text-muted-foreground">
                Sensitive coordination with both families to ensure everyone feels honored and included
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Intercultural Expertise</h3>
              <p className="text-muted-foreground">
                Experience with Hindu-Christian, Hindu-Jewish, Indian-Western, and other intercultural unions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fusion Weddings */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-muted/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Types of Fusion Weddings We Plan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every couple's fusion is unique—here's how we can help
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-4">Hindu-Christian Weddings</h3>
              <p className="text-muted-foreground mb-4">
                The most common fusion we coordinate—blending Hindu ceremonies with Christian traditions:
              </p>
              <ul className="space-y-2 text-muted-foreground pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Two separate ceremonies (Hindu ceremony followed by church wedding or vice versa)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Integrated ceremony combining elements from both faiths</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Outfit transitions—white gown to red lehenga or Western suit to sherwani</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Blended reception with both cultural traditions represented</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-4">Indian-Western Fusion</h3>
              <p className="text-muted-foreground mb-4">
                Blending Indian cultural traditions with Western/American wedding customs:
              </p>
              <ul className="space-y-2 text-muted-foreground pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Traditional Indian pre-wedding events (mehndi, sangeet) followed by Western ceremony</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Fusion décor blending mandap elements with Western floral design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Menu combining Indian cuisine with Western favorites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Cultural performances and modern entertainment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-4">Multicultural Fusion & Intercultural</h3>
              <p className="text-muted-foreground mb-4">Other beautiful combinations we've coordinated:</p>
              <ul className="space-y-2 text-muted-foreground pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Hindu-Jewish weddings with both mandap and chuppah elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Muslim-Christian fusion ceremonies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Tamil-Gujarati or North Indian-South Indian cultural blending</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>LGBTQ+ fusion weddings honoring both partners' backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Blend Traditions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              How We Blend Traditions Beautifully
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creative solutions that honor both families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Ceremony Design</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Mandap design incorporating crosses or Christian symbols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Church altar with traditional Indian fabric draping and flowers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Combined processional with both baraat and bridal party</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Bilingual ceremonies honoring both languages</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Attire Coordination</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>White Christian gown for church, red/traditional lehenga for Hindu ceremony</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Fusion bridal attire—white saree, ivory lehenga, or modern fusion gown</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Groom in Western suit and traditional sherwani</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Coordinated family attire respecting both cultural dress codes</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Reception Design</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Fusion décor blending both cultural aesthetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Menu combining cuisines from both backgrounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Entertainment mixing traditional dances with modern music</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Seating that integrates both families harmoniously</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Cultural Rituals</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Saptapadi (seven steps) alongside Christian vows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Mangalsutra/thali ceremony and ring exchange</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Blessing from both priest/pandit and pastor/minister</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Unity candle and/or sacred fire elements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gradient-to-br from-muted/10 to-secondary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Comprehensive Fusion Wedding Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for a seamless fusion celebration
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Complete Planning & Design</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Custom fusion ceremony design respecting both traditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Coordination with priests, pandits, pastors, and religious officiants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Venue selection suitable for both ceremony types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Timeline management for single or multi-day celebrations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Family Coordination & Mediation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Sensitive navigation of cultural differences and family expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Education and cultural sensitivity training for both families</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Coordination of cultural customs and ritual participation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Guest education materials explaining both traditions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Attire & Shopping Assistance</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Sourcing traditional Indian wedding attire from India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Western bridal gown and suit coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Styling for multiple outfit changes throughout the celebration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Bridal party coordination respecting both cultural aesthetics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Scope Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cream to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">
              Pricing & Scope for This Service
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              CeremonyVerse works with couples and families across a range of wedding budgets, depending on priorities,
              guest size, and event structure.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Pricing for this service is based on the scope of planning support and cultural coordination involved. All
              services begin with a clearly defined scope — no pressure, no unnecessary upsells.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/10">
                <h3 className="font-semibold text-lg text-foreground mb-4">Minimum included:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Core planning support specific to this service</li>
                  <li>• Cultural guidance relevant to your ceremonies</li>
                  <li>• Budget-aligned recommendations</li>
                  <li>• Clear planning structure and next steps</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/10">
                <h3 className="font-semibold text-lg text-foreground mb-4">May increase depending on:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Number of events</li>
                  <li>• Guest count and logistics</li>
                  <li>• Vendor complexity</li>
                  <li>• Sourcing or travel coordination</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/pricing">View Full Pricing</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/start-planning">Start with Budget + Vision Form</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Let's Create Your Perfect Fusion Wedding</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how we can honor both your traditions beautifully
          </p>
          <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 px-10 py-6 text-lg">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
