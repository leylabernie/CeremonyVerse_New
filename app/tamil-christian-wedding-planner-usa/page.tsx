import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Tamil Christian Wedding Planner in USA | Church & Reception Fusion",
  description:
    "Tamil Christian wedding planner for US-based couples. We coordinate church ceremonies, receptions and Indian traditions like manthrakodi and thali with verified vendors and virtual shopping from India.",
  keywords: [
    "Tamil Christian wedding planner",
    "Tamil Christian wedding USA",
    "church wedding South Indian",
    "manthrakodi",
    "thali ceremony",
  ],
  openGraph: {
    title: "Tamil Christian Wedding Planner in USA | CeremonyVerse",
    description: "Beautiful Tamil Christian weddings blending church traditions with South Indian culture.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/tamil-christian-wedding-planner-usa",
  },
}

export default function TamilChristianWeddingPlannerPage() {
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
            Tamil Christian Wedding Planner for US-Based Couples
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Tamil Christian weddings are a beautiful blend of church traditions, family customs and modern celebration.
            Planning all of that from the US—often with relatives in India—can feel overwhelming. CeremonyVerse makes
            the process simple and respectful for everyone involved.
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

      {/* Church & Reception Planning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Church Ceremony and Reception, Planned Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design a complete plan that brings your church ceremony and reception together as one cohesive
              experience:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl p-8">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Church ceremony</strong> – working with your pastor or priest,
                    coordinating décor, music, readings and photography in a respectful way.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Cultural traditions</strong> – incorporating Bible verse prints,
                    manthrakodi, thali and family blessings where appropriate.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Reception</strong> – entrances, speeches, dances, cake cutting
                    and Tamil/English music that makes both sides of the family feel at home.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-6">
                Our goal is for your day to feel unified instead of like two separate events stitched together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tamil Christian Traditions */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-muted/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Honoring Tamil Christian Traditions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every family's customs are slightly different. We help you:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-muted-foreground">
                Decide how to include manthrakodi and thali in a way that fits your church's guidelines.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-muted-foreground">
                Coordinate dress codes and color schemes for family and bridal party.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-muted-foreground">
                Plan prayer time, blessings and special moments with parents and elders.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-muted-foreground">Communicate plans clearly to both families and the church team.</p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
            <p className="text-muted-foreground text-center">
              We're comfortable talking directly with parents, pastors and elders so you don't have to translate every
              detail by yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Shopping & Vendors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">Virtual Shopping from India</h2>
              <p className="text-muted-foreground mb-6">
                While your wedding may be in the US, many of your outfits and jewelry can still come from India. Through
                our virtual shopping concierge, we help you source:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Bridal sarees and reception gowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Manthrakodi and blouse designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Thali chains, gold jewelry and accessories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Coordinated sarees or suits for bridesmaids and family</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Return gifts and favors with a Tamil and Christian touch</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">Vendors Who Understand Your Culture</h2>
              <p className="text-muted-foreground mb-6">
                We work with photographers, DJs, caterers and decorators who:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Know how to cover both church and Tamil or fusion reception moments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Handle Tamil and English music and announcements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Respect modesty, timing and rules around church spaces</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-6">
                Your payments are protected through secure, clearly structured agreements so you always know where your
                money is going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed-Background Support */}
      <section className="py-20 bg-gradient-to-br from-muted/10 to-secondary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Supporting Mixed-Background Couples and Families
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              If one partner isn't Tamil or isn't from a Christian background, we:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <p className="text-muted-foreground text-sm">
                Provide simple explanations of key traditions and their meaning.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <p className="text-muted-foreground text-sm">
                Design timelines and programs that help guests from every background follow along.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <p className="text-muted-foreground text-sm">
                Suggest ways to include both families' heritage in décor, readings or blessings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Plan Your Tamil Christian Wedding?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Tell us about your church, your family's traditions and your dream reception.
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
