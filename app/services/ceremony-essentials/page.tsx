import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Package, Sparkles, Heart, Gift } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Ceremony Essentials Concierge | Hindu, Gujarati, Tamil & Christian Wedding Items | CeremonyVerse",
  description:
    "Curated ceremony essentials for Hindu, Gujarati, Tamil, and Christian weddings. Vidhi items, ritual supplies, welcome bags, favors, and ceremonial accessories delivered through our concierge service.",
  keywords:
    "gujarati vidhi items, hindu ceremony essentials, tamil wedding items, christian ceremony accessories, wedding favors, welcome bags, ritual items rental",
}

export default function CeremonyEssentialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative bg-gradient-to-br from-cream via-background to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              Ceremony Essentials Concierge
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Authentic Ceremony Items, Curated & Delivered
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Gujarati vidhi items, Tamil/Hindu/Christian ritual supplies, welcome bags, favors, and ceremonial
              essentials—all sourced and coordinated through our trusted partners
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                <a href="tel:+12153419990">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1-215-341-9990
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/book-consultation">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">What We Provide</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Traditional ceremony items for all major Indian and Christian wedding rituals
              </p>
            </div>

            {/* Ceremony Showcase Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/haldi.jpeg"
                  alt="Traditional haldi ceremony setup with marigold flowers and turmeric"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/wedding-20favors.jpg"
                  alt="Colorful mehndi night favors and welcome gifts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl border border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-full flex items-center justify-center mb-6">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Gujarati Vidhi Items (Rental)</h3>
                <p className="text-muted-foreground mb-4">
                  Complete rental packages for traditional Gujarati pre-wedding rituals:
                </p>
                <ul className="space-y-3">
                  {[
                    "Ganesh Sthapna items (idol, platform, decorations)",
                    "Grah Shanti ritual supplies",
                    "Pithi/Haldi ceremony sets (thaal, turmeric, sandalwood)",
                    "Kalash with coconut and toran decorations",
                    "Aarti thalis with diyas and camphor",
                    "Traditional Garba/Dandiya accessories",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Rental Terms:</strong> Items delivered 2 days before ceremony,
                    picked up 2 days after. Security deposit required.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background to-white p-8 rounded-2xl border border-accent/20">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Tamil / Hindu / Christian Ceremony Items</h3>
                <p className="text-muted-foreground mb-4">Ritual essentials for traditional ceremonies:</p>
                <ul className="space-y-3">
                  {[
                    "Thambulam sets for guest distribution",
                    "Fresh flower garland sourcing and delivery",
                    "Church ceremony accessories (candles, unity cross)",
                    "Hindu ceremony items (agni kund, sacred thread)",
                    "Tamil wedding thali and necklace coordination",
                    "Mangalsutra and kumkum sets",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Fresh flower garlands require 48-hour advance
                    notice for sourcing and delivery coordination.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl border border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-full flex items-center justify-center mb-6">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Welcome Bags & Favors</h3>
                <p className="text-muted-foreground mb-4">Curated guest welcome bags and wedding favors:</p>
                <ul className="space-y-3">
                  {[
                    "Custom welcome bags with local treats and info",
                    "Traditional Indian sweets (mithai) packaging",
                    "Personalized favor boxes and tags",
                    "Cultural gift items (incense, tea, spices)",
                    "Weekend itinerary cards and maps",
                    "Emergency kits for out-of-town guests",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Gift className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-background to-white p-8 rounded-2xl border border-accent/20">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Additional Ceremony Support</h3>
                <p className="text-muted-foreground mb-4">Extra services to complete your ceremonial experience:</p>
                <ul className="space-y-3">
                  {[
                    "Pandit/priest coordination and scheduling",
                    "Bilingual ceremony program printing",
                    "Cultural consultation for mixed traditions",
                    "Ritual item shopping lists and guidance",
                    "Ceremony timeline coordination",
                    "Post-ceremony item return logistics",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-3xl border-2 border-primary shadow-xl">
              <div className="text-center mb-8">
                <h2 className="font-serif text-4xl text-foreground mb-4">How It Works</h2>
                <p className="text-muted-foreground">Simple process to get your ceremony essentials</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Consultation</h3>
                    <p className="text-muted-foreground">
                      Share your ceremony details, traditions, and guest count. We'll recommend appropriate items and
                      rental/purchase options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Curation</h3>
                    <p className="text-muted-foreground">
                      We source items from our verified partners, coordinate rental logistics, or facilitate custom
                      orders for special pieces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Delivery</h3>
                    <p className="text-muted-foreground">
                      Items delivered to your venue or accommodation 2 days before ceremony. For rentals, we coordinate
                      pickup after your event.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Important:</strong> Non-refundable deposits required for custom
                  orders and international sourcing. Rental items require security deposit (refunded after return
                  inspection).
                </p>
              </div>

              <div className="text-center mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-12 py-6 text-lg"
                >
                  <Link href="/book-consultation">Schedule Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Ready to Complete Your Ceremony?</h2>
            <p className="text-xl text-muted-foreground mb-8">Contact us to discuss your ceremony essential needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                <a href="tel:+12153419990">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1-215-341-9990
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg bg-transparent"
              >
                <a href="mailto:hello@ceremonyverse.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
