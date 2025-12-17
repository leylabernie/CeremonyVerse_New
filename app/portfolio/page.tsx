import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Portfolio - Wedding Outfits & Coordination | CeremonyVerse",
  description:
    "Browse our portfolio of bridal lehengas, silk sarees, groomsmen outfits, and complete bridal party coordination. Authentic Indian and fusion wedding attire sourced from India's finest boutiques.",
  keywords: [
    "wedding outfit portfolio",
    "bridal lehenga gallery",
    "Indian wedding outfits",
    "bridesmaid coordination",
    "groomsmen sherwanis",
    "silk sarees",
    "wedding party styling",
    "wedding jewelry",
    "mandap design",
  ],
  openGraph: {
    title: "Portfolio - Our Wedding Outfit Collection | CeremonyVerse",
    description:
      "Explore stunning bridal lehengas, silk sarees, groomsmen outfits, coordinated bridal party ensembles, and wedding jewelry from real weddings.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-background to-white py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight text-balance">
            Our Portfolio of Wedding Excellence
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Explore authentic Indian and fusion wedding attire—from bridal lehengas and silk sarees to jewelry and
            stunning mandap designs
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg"
            >
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bridal Lehenga Sourcing Section */}
      <section id="bridal-lehenga" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Bridal Lehenga Sourcing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Exquisite bridal lehengas directly from premier designers and weavers across India. From traditional
                heavy embroidery to contemporary silhouettes, we source the perfect lehenga that reflects your style and
                cultural heritage.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Sourced from renowned designers in Delhi, Mumbai, and Hyderabad
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Intricate embroidery work including zardozi, resham, and stone embellishments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Custom color palettes and personalized design modifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Complete quality verification and perfect fit coordination
                  </span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Request Sourcing Consultation</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bridal-lehenga-rust-orange.jpeg"
                alt="Bridal lehenga Indian wedding designer embroidery"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Combined Silk Sarees Section - Kanchipuram & Banarasi */}
      <section id="silk-sarees" className="py-20 bg-gradient-to-br from-secondary/5 to-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/kanchipuram-sarees.png"
                alt="Silk Mark certified Kanchipuram silk saree pure silk wedding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Pure Silk Sarees - Kanchipuram & Banarasi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Authentic handwoven silk sarees with Silk Mark certification from Kanchipuram and Banarasi weavers.
                Perfect for brides, mothers, and family members seeking genuine South and North Indian wedding attire.
                Including traditional Manthrakodi Sarees for Tamil Christian weddings.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Kanchipuram Silk Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-muted-foreground">
                        Official Silk Mark label guaranteeing pure mulberry silk
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-muted-foreground">
                        Traditional designs: temple borders, checks, stripes
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Banarasi Silk Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-muted-foreground">Authentic handloom weaving from Varanasi workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span className="text-muted-foreground">
                        Exquisite kadhua, jangla, and cutwork brocade techniques
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Request Sourcing Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal & Wedding Jewelry Section */}
      <section id="jewelry" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/generated-20image-201-20-2815-29.jpeg"
                alt="Bride's henna decorated hand with diamond engagement ring holding champagne glass"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Bridal & Wedding Jewelry</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Temple jewelry, Kundan, Polki, and custom jewelry sets for brides, mothers, and bridesmaids. Sourced
                from reputable jewelers in Chennai, Jaipur, and Hyderabad with authenticity verification for precious
                metals and stones.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Complete bridal sets: necklaces, earrings, maang tikka, bangles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Coordinated jewelry for mothers and bridal party members
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Options from traditional temple to modern fusion designs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">Authenticity certificates for precious metal pieces</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Request Sourcing Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mandap Design Section */}
      <section id="mandap" className="py-20 bg-gradient-to-br from-secondary/5 to-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Mandap & Ceremony Design</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Stunning mandap designs that blend traditional elements with modern aesthetics. We work with top
                decorators to create the perfect ceremonial canopy that honors your heritage while reflecting your
                personal style.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Custom mandap designs for Hindu, fusion, and interfaith ceremonies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">
                    Fresh floral arrangements with roses, marigolds, and orchids
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">Indoor and outdoor venue coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">Coordination with venue and lighting specialists</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Request Design Consultation</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/generated-20image-201-20-2818-29.jpeg"
                alt="Garden wedding mandap with white and blush floral arrangements and greenery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-secondary/20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Ready to Create Your Perfect Look?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's bring your wedding vision to life with authentic Indian attire and expert coordination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-10 py-6 bg-transparent">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
