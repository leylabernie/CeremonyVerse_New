import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Heart, Award, Sparkles } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bridal Party Outfit Coordination | CeremonyVerse - Curated Indian Wedding Attire",
  description:
    "See how we bring wedding visions to life with perfectly coordinated bridal party outfits. Browse our couples' favorite lehenga styles, color palettes, and craftsmanship from India's premier boutiques.",
  keywords:
    "bridal party coordination, bridesmaids lehengas, coordinated wedding outfits, Indian bridal party, lehenga colors, wedding outfit shopping India, bridal party styling",
}

export default function BridalPartyCoordinationPage() {
  const outfitShowcase = [
    {
      title: "Rose Gold Glamour",
      description: "What Sarah's Bridesmaids Loved",
      story:
        "Sarah envisioned soft, romantic elegance for her bridesmaids. We sourced these champagne pink lehengas with intricate gold embellishment that perfectly complemented her ivory bridal ensemble.",
      image: "/images/bridesmaids-201.jpeg",
      colors: ["Rose Gold", "Champagne Pink", "Antique Gold"],
      venue: "Garden Wedding, California",
    },
    {
      title: "Soft Blush Romance",
      description: "Priya's Vision Come to Life",
      story:
        "Priya wanted her bridesmaids to feel like they were part of a fairy tale. These dusty rose lehengas with golden embroidery created the perfect harmony between traditional and modern.",
      image: "/images/google-ai-studio-2025-12-05t01-05-39.jpeg",
      colors: ["Dusty Rose", "Blush Pink", "Gold Accents"],
      venue: "Estate Wedding, Virginia",
    },
    {
      title: "Traditional Red Bridal",
      description: "The Classic Choice That Never Fails",
      story:
        "For brides who want timeless elegance, this red velvet lehenga with intricate zardosi work represents the pinnacle of traditional Indian bridal craftsmanship.",
      image: "/images/bridal-20lehenga.jpeg",
      colors: ["Deep Red", "Antique Gold", "Ivory Dupatta"],
      venue: "Palace Wedding, Rajasthan Style",
    },
    {
      title: "Earth Tone Harmony",
      description: "Maya's Sustainable Wedding Party",
      story:
        "Maya chose warm earth tones for her eco-conscious celebration. These mauve and olive green ensembles showed that sustainable choices can be stunning.",
      image: "/images/screenshot-202025-12-05-20133537.png",
      colors: ["Mauve", "Olive Green", "Natural Beige"],
      venue: "Vineyard Wedding, Napa",
    },
    {
      title: "Ice Blue Sophistication",
      description: "Winter Wonderland Vision",
      story:
        "For Aisha's winter wedding, we curated these powder blue lehengas with silver embroidery that captured the magic of a snow-kissed celebration.",
      image: "/images/google-ai-studio-2025-12-05t19-30-43.jpeg",
      colors: ["Powder Blue", "Ice Blue", "Silver"],
      venue: "Luxury Hotel, Chicago",
    },
    {
      title: "Burnt Orange Elegance",
      description: "Riya's Fall Festival Dream",
      story:
        "Riya's autumn wedding called for warm, inviting tones. This burnt orange lehenga with cream dupatta became the centerpiece of her fall-themed celebration.",
      image: "/images/orange-bridal-lehenga.jpeg",
      colors: ["Burnt Orange", "Cream", "Gold Details"],
      venue: "Outdoor Fall Wedding, New England",
    },
    {
      title: "Mehendi Green Celebration",
      description: "Perfect for Pre-Wedding Functions",
      story:
        "These olive green lehengas with contrasting yellow dupattas brought vibrant energy to the mehendi ceremony while maintaining sophistication.",
      image: "/images/screenshot-202025-12-05-20150045.png",
      colors: ["Olive Green", "Marigold Yellow", "Gold Border"],
      venue: "Garden Mehendi, Florida",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 px-6 py-2 text-sm">
              Get Inspired by Real Weddings
            </Badge>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight text-balance">
              See How We <span className="text-accent italic">Bring Wedding Visions</span> to Life
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Browse our couples' favorite outfit coordination showcasing how we translate Pinterest boards and wedding
              dreams into perfectly curated bridal party ensembles from India's premier boutiques.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-serif text-accent mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Bridal Parties Styled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Perfect Fit Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Verified Boutiques</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-accent mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Couples Loved Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">What Our Couples Loved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real weddings, real visions brought to life. Each outfit tells a story of how we transformed ideas into
              perfectly coordinated ensembles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {outfitShowcase.map((outfit, index) => (
              <div
                key={index}
                className="bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={outfit.image || "/placeholder.svg"}
                    alt={outfit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
                    <Heart className="h-4 w-4 fill-current" />
                    Client Favorite
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">{outfit.title}</h3>
                    <p className="text-accent font-medium text-sm mb-4">{outfit.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{outfit.story}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {outfit.colors.map((color, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Star className="h-4 w-4 text-accent" />
                    <span>{outfit.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Artisan Craftsmanship Details</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every piece showcases the intricate handwork and traditional techniques that make Indian bridal wear
              exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-96">
                <Image
                  src="/images/zardosi-20work-20close-up.jpeg"
                  alt="Intricate zardosi embroidery work close-up showing traditional gold thread craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Zardosi Embroidery
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Traditional gold and silver threadwork passed down through generations of master artisans. Each motif
                  is meticulously hand-stitched with precision.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-96">
                <Image
                  src="/images/close-up-20blouse-20embroidary.jpeg"
                  alt="Detailed blouse embroidery with paisley motifs and gold thread work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Hand-Stitched Details
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Delicate paisley patterns and floral motifs created with hours of careful needlework. No two pieces
                  are exactly alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Bring Your Vision to Life */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">How We Bring Your Vision to Life</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Pinterest inspiration to perfectly coordinated bridal party—our proven process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-serif text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Share Your Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Send us your Pinterest boards, color preferences, venue photos, and wedding theme. We understand your
                aesthetic.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-serif text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Curated Selection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We handpick 8-12 outfit options from our verified India boutiques that match your vision, budget, and
                timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-serif text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Video Consultation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See outfits via live video, request close-ups of embroidery, check fabric quality, and ask questions in
                real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-serif text-2xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Perfect Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Custom measurements, quality checks, secure shipping with tracking, and fitting adjustments if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-accent fill-accent" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed italic mb-4">
                  "I showed them my Pinterest board and they found the EXACT lehengas I had been dreaming about. My
                  bridesmaids looked stunning and felt comfortable all day. The color coordination was flawless!"
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold text-foreground">Meera P.</div>
                  <div>August 2024 Wedding • San Francisco Bay Area</div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                    <span className="text-accent font-semibold">100%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Perfect Fit Rate</span>
                    <span className="text-accent font-semibold">98%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Would Recommend</span>
                    <span className="text-accent font-semibold">99%</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-muted-foreground">Avg. Response Time</span>
                    <span className="text-accent font-semibold">{"<"} 2 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Free Initial Consultation
          </Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-tight text-balance">
            Ready to Bring <span className="text-accent italic">Your Wedding Vision</span> to Life?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Share your Pinterest boards, color palette, and wedding theme with us. We'll show you how we can transform
            your ideas into a perfectly coordinated bridal party that photographs beautifully.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 text-lg h-14 px-10 rounded-full shadow-lg"
              >
                Schedule Your Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-10 rounded-full bg-transparent border-2 hover:bg-accent/5"
              >
                View All Services
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 inline mr-1 text-accent" />
            No commitment required • Custom packages available • Secure payment processing included
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
