import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Church, Sparkles, Users } from "lucide-react"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Tamil Christian Wedding Planner in USA | Church to Manthrakodi Saree Specialists – CeremonyVerse",
  description:
    "Expert Tamil Christian wedding planning blending church ceremonies with South Indian traditions. From white gown to manthrakodi saree, we honor both heritages beautifully. Virtual shopping for Tamil Christian brides.",
  keywords: [
    "Tamil Christian wedding planner USA",
    "Tamil Christian wedding",
    "church wedding South Indian",
    "manthrakodi saree",
    "white gown to saree",
    "Tamil Catholic wedding USA",
    "Tamil wedding traditions",
  ],
  openGraph: {
    title: "Tamil Christian Wedding Planner in USA | CeremonyVerse",
    description:
      "Beautiful Tamil Christian weddings blending church traditions with South Indian cultural elements in the USA.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/tamil-christian-wedding-planner",
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
            Tamil Christian Wedding Planning in the USA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Honoring both faiths beautifully—blending church traditions with South Indian cultural heritage for weddings
            that celebrate your complete identity
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Why Tamil Christian Families Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the beautiful complexity of honoring two rich traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Dual Heritage Expertise</h3>
              <p className="text-muted-foreground">
                We respect and honor both Christian faith traditions and Tamil cultural elements seamlessly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Thoughtful Integration</h3>
              <p className="text-muted-foreground">
                From white gowns to silk sarees, church ceremonies to reception customs—every detail harmonized
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Cultural Authenticity</h3>
              <p className="text-muted-foreground">
                Source traditional Tamil Christian attire, jewelry, and décor while honoring church traditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Family-Centered Planning</h3>
              <p className="text-muted-foreground">
                We coordinate with both sides of the family to honor each tradition and make everyone feel included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tamil Christian Wedding Elements */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-muted/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Tamil Christian Wedding Elements We Coordinate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Blending faith and culture in every beautiful detail
            </p>
          </div>

          <div className="space-y-12">
            {/* Church Ceremony */}
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-6">Church Ceremony</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Catholic/Protestant Wedding Service</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Full coordination with priests, church staff, and music directors for a reverent ceremony that
                    honors your denomination's traditions
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Bridal Attire Coordination</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Western white gown for the church ceremony, then a stunning transition to Kanjivaram silk saree or
                    Christian bridal saree for the reception
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Music & Choir</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Coordination of traditional hymns, contemporary Christian music, and Tamil Christian wedding songs
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Readings & Blessings</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Selection and coordination of scripture readings, prayers, and blessings in English and Tamil
                  </p>
                </div>
              </div>
            </div>

            {/* Tamil Cultural Elements */}
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-6">Tamil Cultural Traditions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Thali (Mangalsutra) Ceremony</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The sacred necklace tying ceremony that can be incorporated during or after the church vows,
                    honoring Tamil Christian tradition
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Traditional Silk Saree Reception Look</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Stunning Kanjivaram or Christian bridal sarees in white, gold, or pastel colors—blending tradition
                    with faith
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Kolam & Floral Décor</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional Tamil rangoli designs and South Indian floral arrangements for reception venues
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Tamil Christian Music</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Blend of traditional Tamil songs, Christian worship music, and contemporary celebration music
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">South Indian Feast</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Authentic Tamil Christian cuisine featuring biryani, appam, kurma, and traditional sweets alongside
                    Western dishes
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Cultural Performances</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional Tamil dances, Bharatanatyam performances, and cultural entertainment for the reception
                  </p>
                </div>
              </div>
            </div>

            {/* Pre-Wedding Events */}
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-6">Pre-Wedding Celebrations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Engagement Ceremony</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Formal engagement with ring exchange, prayer, and both families coming together
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Bridal Shower</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Western-style bridal shower with a Tamil twist—games, food, and celebration
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Mehndi/Henna Ceremony</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Optional traditional henna application for the bride and female family members
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-xl text-foreground mb-3">Rehearsal Dinner</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Evening before the wedding with family, wedding party, and close friends featuring fusion cuisine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Comprehensive Tamil Christian Wedding Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every detail coordinated with care and cultural sensitivity
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Complete Wedding Planning & Coordination</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Church venue coordination and relationship management with clergy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Reception venue selection with South Indian cultural considerations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Ceremony and reception timeline coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Vendor management for caterers, florists, photographers, and entertainment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Bridal Attire & Shopping</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Western bridal gown shopping assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Virtual shopping for Kanjivaram silk sarees and Christian bridal sarees from India's finest weavers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Traditional Tamil Christian jewelry sourcing—gold, temple jewelry, and diamond sets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Coordination for groom's suit and traditional South Indian attire</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Cultural Integration & Design</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Décor that honors both Christian and Tamil aesthetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Traditional kolam designs and South Indian floral arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Fusion menu planning with Tamil and Western cuisine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Cultural entertainment coordination—music, dance, and performances</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">Family Coordination & Support</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Liaison between families to honor both traditions respectfully</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Coordination for family members arriving from India or other countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Cultural sensitivity guidance for guests unfamiliar with Tamil Christian traditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Weddings */}
      <section className="py-20 bg-gradient-to-br from-muted/10 to-secondary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Tamil Christian Weddings Across America
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We coordinate beautiful fusion weddings in cities with strong Tamil Christian communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-serif text-xl text-foreground mb-2">New York & New Jersey</h3>
              <p className="text-muted-foreground text-sm">
                Strong Tamil Catholic and CSI communities in Edison, Jersey City, and Queens
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-serif text-xl text-foreground mb-2">California</h3>
              <p className="text-muted-foreground text-sm">
                Large Tamil Christian presence in Bay Area and Los Angeles
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-serif text-xl text-foreground mb-2">Texas</h3>
              <p className="text-muted-foreground text-sm">Growing Tamil Christian communities in Houston and Dallas</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-serif text-xl text-foreground mb-2">Illinois</h3>
              <p className="text-muted-foreground text-sm">Active Tamil churches and communities in Chicago area</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-serif text-xl text-foreground mb-2">Florida</h3>
              <p className="text-muted-foreground text-sm">
                Tamil Christian churches in Miami, Tampa, and Jacksonville
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-serif text-xl text-foreground mb-2">Georgia & North Carolina</h3>
              <p className="text-muted-foreground text-sm">Vibrant Tamil communities in Atlanta and Charlotte</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Let's Honor Both Your Traditions Beautifully
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your vision for a wedding that celebrates your complete heritage
          </p>
          <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 px-10 py-6 text-lg">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
