import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Heart, Sparkles } from "@/components/icons"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "South Indian Wedding Coordinator | Tamil, Telugu, Kannada, Malayalam Wedding Planning | CeremonyVerse",
  description:
    "Expert South Indian wedding coordination. Traditional Tamil, Telugu, Kannada, Malayalam ceremonies. Muhurtham, Kanyadaan, Saptapadi rituals. Call +1-215-341-9990",
  keywords:
    "South Indian wedding planner, Tamil wedding, Telugu wedding, Kannada wedding, Malayalam wedding, Muhurtham ceremony, traditional South Indian wedding",
  openGraph: {
    title: "South Indian Wedding Coordinator | CeremonyVerse",
    description: "Authentic South Indian wedding planning with deep knowledge of regional traditions and Vedic rituals",
  },
}

export default function SouthIndianWeddingCoordinatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">South Indian Wedding Experts</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                  Honor Your South Indian Heritage with Sacred Traditions
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From Muhurtham to Saptapadi, we coordinate every Vedic ritual with precision and cultural
                  authenticity. Specializing in Tamil, Telugu, Kannada, and Malayalam weddings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link href="/contact?service=south-indian-wedding">
                      Plan Your South Indian Wedding
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/muhurat">Find Auspicious Muhurtham</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/south-indian-tamil-wedding-couple-traditional-silk.jpg"
                  alt="Beautiful South Indian Tamil wedding couple in traditional silk saree and veshti during sacred ceremony"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Ceremonies */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
                Traditional South Indian Wedding Rituals
              </h2>
              <p className="text-lg text-muted-foreground">
                Every sacred ritual performed according to Vedic traditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Nichayathartham",
                  description: "Engagement ceremony where families exchange gifts and fix the wedding date",
                },
                {
                  title: "Panda Kaal Muhurtham",
                  description: "Auspicious ceremony to erect the wedding canopy (mandapam)",
                },
                {
                  title: "Mehendi & Sangeet",
                  description: "Pre-wedding celebrations with henna application and musical performances",
                },
                {
                  title: "Kashi Yatra",
                  description: "Groom's symbolic journey to Kashi, stopped by bride's father",
                },
                {
                  title: "Oonjal & Kanyadaan",
                  description: "Swing ceremony followed by giving away of the bride",
                },
                {
                  title: "Saptapadi & Mangalsutra",
                  description: "Seven sacred steps and tying of the holy thread",
                },
              ].map((ceremony, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <Heart className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-serif text-xl font-medium mb-3">{ceremony.title}</h3>
                  <p className="text-sm text-muted-foreground">{ceremony.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Expertise */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
                Our South Indian Wedding Expertise
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Fluent in Tamil, Telugu, Kannada, and Malayalam",
                "Coordination with Vedic priests and pandits for authentic rituals",
                "Expertise in regional variations (Iyer, Iyengar, Reddy, Naidu, Nair customs)",
                "Traditional South Indian cuisine specialists (sambar, rasam, payasam)",
                "Authentic decor with banana leaves, mango leaves, and kolam designs",
                "Coordination of traditional music (nadaswaram, thavil, Carnatic)",
                "Experience with temple weddings and kalyana mandapam venues",
                "Knowledge of auspicious timings and Vedic astrology (Muhurtham)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-6">
              Ready to Plan Your Authentic South Indian Wedding?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a sacred celebration that honors your regional traditions and family customs
            </p>
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact?service=south-indian-wedding">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
