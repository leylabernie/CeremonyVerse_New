import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Indian-American Fusion Wedding Planner | Hindu, Christian & Multicultural",
  description:
    "Indian-American fusion wedding planner for Hindu, Christian and multicultural couples. We plan mehndi, sangeet, ceremonies and receptions with balanced timelines and vendors who understand both cultures.",
  keywords: [
    "fusion wedding planner",
    "Indian-American wedding",
    "Hindu Christian wedding",
    "multicultural wedding planner",
    "intercultural wedding",
  ],
  openGraph: {
    title: "Indian-American Fusion Wedding Planner | CeremonyVerse",
    description: "Beautiful fusion and multicultural wedding planning that honors both partners' traditions.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/indian-american-fusion-wedding-planner",
  },
}

export default function FusionWeddingPlannerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight text-balance">
            Indian-American Fusion Wedding Planner
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Fusion weddings are beautiful—and complex. You're juggling multiple cultures, expectations from both
            families and a full schedule of events. CeremonyVerse helps you create a celebration that feels like you,
            without choosing one culture over the other.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-10 py-6 text-lg bg-transparent">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Designing Fusion Weddings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Designing a Fusion Wedding That Feels Natural
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We work with you to decide:</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl p-8">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Which traditions from each side you want to keep.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    How to arrange the sequence of events (mehndi, haldi, baraat, ceremony, church, reception and more).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Where to include American elements like first look, vows, speeches and dances.</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-6">
                We turn this into a clear timeline so guests stay engaged and you stay relaxed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blending Traditions */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-muted/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Blending Hindu, Christian and Other Traditions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common fusion combinations we support include:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <h3 className="font-serif text-xl text-foreground mb-2">Hindu + Christian</h3>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <h3 className="font-serif text-xl text-foreground mb-2">Hindu + Secular</h3>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <h3 className="font-serif text-xl text-foreground mb-2">Indian + Non-Indian</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-muted-foreground text-center">
              We help with ceremony formats, working with both pandit and pastor/officiant and incorporating readings,
              blessings and rituals in a balanced way.
            </p>
          </div>
        </div>
      </section>

      {/* Family Respect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Helping Both Families Feel Respected
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fusion weddings are as much about relationships as they are about décor. We:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <p className="text-muted-foreground">
                Have honest, respectful conversations with both families about expectations and non-negotiables.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <p className="text-muted-foreground">
                Explain venue, budget and timing realities in a calm, neutral way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <p className="text-muted-foreground">Provide written outlines of ceremonies for families and vendors.</p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-8">
              <p className="text-muted-foreground">
                Create programs and signage so guests from every background can follow along.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outfits and Vendors */}
      <section className="py-20 bg-gradient-to-br from-muted/10 to-secondary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">Outfits and Décor for Fusion Weddings</h2>
              <p className="text-muted-foreground mb-6">
                Through our virtual shopping and styling support, we help you create cohesive looks across cultures:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Indian outfits for mehndi or sangeet, Western gowns or suits for ceremonies and receptions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Coordinated looks for the bridal party that work for all events.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Décor concepts that blend colors, symbols and traditions from both sides.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">Verified Vendors and Secure Payments</h2>
              <p className="text-muted-foreground mb-6">
                Fusion weddings often involve higher budgets and complex logistics. To protect you, we:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Work with vendors experienced in both Indian and Western weddings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Use clear, secure payment structures and documentation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Keep communication organized so everyone stays on the same page.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Design Your Fusion Wedding?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether your guests are flying in from India, across the US or both, we'll help you create a celebration
            that feels authentic to your story.
          </p>
          <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 px-10 py-6 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
