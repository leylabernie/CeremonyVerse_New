import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Heart, Sparkles } from "@/components/icons"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gujarati Wedding Planner in USA | Grah Shanti & Garba Experts – CeremonyVerse",
  description:
    "Full-service Gujarati Hindu wedding planner for US couples. We coordinate grah shanti, pithi, garba, mandap ceremony and reception, plus virtual shopping for Gujarati outfits and vidhi items.",
  keywords:
    "Gujarati wedding planner USA, Gujarati Hindu wedding, Garba Dandiya, grah shanti ceremony, pithi ceremony, Gujarati wedding customs, Gujarati vidhi items",
  openGraph: {
    title: "Gujarati Wedding Planner in USA | CeremonyVerse",
    description:
      "Authentic Gujarati Hindu wedding planning with expertise in traditional ceremonies and garba coordination",
  },
}

export default function GujaratiWeddingPlannerPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">Gujarati Wedding Specialists</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                  Celebrate Your Gujarati Heritage with Vibrant Traditions
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From colorful Garba nights to sacred Hindu ceremonies, we bring authentic Gujarati traditions to life
                  with deep cultural expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact?service=gujarati-wedding">
                      Plan Your Gujarati Wedding
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/wedding-journeys">View Wedding Journeys</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gujarati-wedding-couple-traditional-chaniya-choli-.jpg"
                  alt="Beautiful Gujarati wedding couple in traditional chaniya choli and kediyu during Garba celebration"
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
                Traditional Gujarati Wedding Ceremonies
              </h2>
              <p className="text-lg text-muted-foreground">Honoring every ritual with cultural authenticity</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gol Dhana",
                  description: "Engagement ceremony with exchange of coriander seeds and jaggery",
                },
                {
                  title: "Mehendi & Sangeet",
                  description: "Henna application and musical celebration with traditional folk songs",
                },
                {
                  title: "Garba & Dandiya",
                  description: "Vibrant pre-wedding celebration with traditional Gujarati dances",
                },
                {
                  title: "Mandap Muhurat",
                  description: "Auspicious ceremony to set up the wedding canopy",
                },
                {
                  title: "Jaan & Ponkvu",
                  description: "Groom's procession and welcoming ceremony at bride's home",
                },
                {
                  title: "Pheras & Saptapadi",
                  description: "Seven sacred rounds around the holy fire",
                },
              ].map((ceremony, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <Heart className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-serif text-xl font-medium mb-3">{ceremony.title}</h3>
                  <p className="text-sm text-muted-foreground">{ceremony.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
                Why Choose Us for Your Gujarati Wedding
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Fluent in Gujarati for seamless family communication",
                "Expertise in Hindu wedding traditions and customs",
                "Network of authentic Gujarati vendors (caterers, musicians, decorators)",
                "Professional Garba and Dandiya night coordination",
                "Traditional Gujarati cuisine specialists (dhokla, thepla, undhiyu)",
                "Authentic decor with torans, bandhanwar, and traditional elements",
                "Experience with both temple and banquet hall celebrations",
                "Cultural consultation for authentic rituals and ceremonies",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Scope Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
                Pricing & Scope for Gujarati Wedding Planning
              </h2>
              <p className="text-lg text-muted-foreground">
                Every Gujarati wedding is unique. We work within your budget and scale services to fit your vision.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border mb-8">
              <h3 className="text-xl font-medium mb-4">Budget Flexibility</h3>
              <p className="text-muted-foreground mb-6">
                We coordinate Gujarati weddings of all sizes—from intimate family ceremonies to grand 500-guest
                celebrations. Your investment depends on how many events you're hosting, what level of coordination you
                need, and whether you're sourcing items from India.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Minimum Included:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Detailed Gujarati wedding timeline and cultural guidance</li>
                    <li>Vendor recommendations and coordination</li>
                    <li>Month-of coordination for all events</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">May Increase Depending On:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Number of pre-wedding events (Garba, Pithi, etc.)</li>
                    <li>Guest count and venue complexity</li>
                    <li>Virtual shopping and sourcing from India</li>
                    <li>Full design and decor coordination</li>
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
              Ready to Plan Your Authentic Gujarati Wedding?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a vibrant celebration that honors your Gujarati heritage and family traditions
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact?service=gujarati-wedding">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
