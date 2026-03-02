import { Button } from "@/components/ui/button"
import { Quote, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Client Testimonials | CeremonyVerse - Real Wedding Stories",
  description:
    "Read authentic reviews from couples who trusted CeremonyVerse with their Indian-American fusion weddings. See how we helped create their perfect day with verified suppliers and professional service.",
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-tight">
            Real Couples. <span className="text-primary italic">Real Stories.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Discover how we've helped couples like you create authentic, stress-free fusion weddings that honor both
            heritage and harmony.
          </p>
          <div className="w-24 h-1 bg-primary/30 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Testimonial 1 - Priya & Michael */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden">
            <div className="h-64 md:h-80 bg-muted relative">
              <img
                src="/indian-bride-and-groom-portrait.jpg"
                alt="Priya and Michael Thompson wedding portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-12 space-y-8">
              <div className="flex items-start justify-between">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              <blockquote className="text-2xl font-light text-foreground leading-relaxed italic">
                "CeremonyVerse transformed what could have been an overwhelming experience into the most magical weekend
                of our lives."
              </blockquote>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a second-generation Indian-American marrying someone from outside my culture, I was worried about
                  balancing traditions while making Michael's family feel included. CeremonyVerse understood exactly
                  what we needed.
                </p>
                <p>
                  Their coordinator helped us design a three-day celebration that honored my parents' expectations while
                  feeling authentic to us. The secure payment processing gave us complete confidence when ordering my
                  lehenga and jewelry from India—something I never would have done on my own.
                </p>
                <p>
                  Every vendor was verified, every detail was managed, and we actually got to enjoy our engagement
                  instead of drowning in logistics. Worth every penny.
                </p>
              </div>

              <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg text-foreground">Priya & Michael Thompson</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA • 250 guests • June 2024</p>
                </div>
                <div className="text-sm text-muted-foreground">Heritage & Harmony Plan</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Anjali & Rajesh */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden">
            <div className="h-64 md:h-80 bg-muted relative">
              <img
                src="/south-asian-couple-wedding-photo.jpg"
                alt="Anjali and Rajesh Kumar wedding celebration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-12 space-y-8">
              <div className="flex items-start justify-between">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Quote className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              <blockquote className="text-2xl font-light text-foreground leading-relaxed italic">
                "As two busy professionals, we needed someone who could handle everything. CeremonyVerse exceeded our
                expectations."
              </blockquote>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Between our demanding careers and planning a wedding across three countries, we were completely
                  overwhelmed. Our CeremonyVerse coordinator became our lifeline—managing vendors in India, coordinating
                  with our venue in Austin, and keeping both sets of parents informed.
                </p>
                <p>
                  The virtual shopping service was incredible. We had live video calls with suppliers in Mumbai and
                  Delhi, saw everything in real-time, and the quality was exactly as promised. The three-tier
                  verification process meant we never worried about authenticity.
                </p>
                <p>
                  On our wedding day, we were completely present because we knew every detail was handled. That peace of
                  mind was priceless.
                </p>
              </div>

              <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg text-foreground">Anjali & Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Austin, TX • 180 guests • September 2024</p>
                </div>
                <div className="text-sm text-muted-foreground">Luxury Concierge Package</div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 - Meera & James */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 space-y-8">
            <div className="flex items-start justify-between">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Quote className="h-8 w-8 text-secondary" />
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
            </div>

            <blockquote className="text-2xl font-light text-foreground leading-relaxed italic">
              "They helped me reconnect with my cultural roots while creating something uniquely ours."
            </blockquote>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I grew up in the US and honestly didn't know much about traditional Indian wedding ceremonies. I wanted
                to honor my heritage but felt disconnected from it. CeremonyVerse provided cultural consultation that
                was educational without being judgmental.
              </p>
              <p>
                They explained the significance of each ritual, helped us decide which traditions to include, and made
                sure James's family understood and felt welcomed throughout. The result was a celebration that felt
                deeply meaningful to both of us.
              </p>
              <p>
                My parents were moved to tears seeing traditions they thought I'd forgotten, and James's family said it
                was the most beautiful wedding they'd ever attended.
              </p>
            </div>

            <div className="pt-6 border-t border-border/50 flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg text-foreground">Meera & James Wilson</p>
                <p className="text-sm text-muted-foreground">Chicago, IL • 150 guests • April 2024</p>
              </div>
              <div className="text-sm text-muted-foreground">Essential Coordination</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground leading-tight">
            Ready to Create Your <span className="text-primary italic">Own Story?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Schedule a complimentary consultation to discuss your vision and discover how we can help you create an
            authentic, stress-free fusion wedding.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 text-lg h-16 px-12 rounded-full shadow-2xl hover:shadow-3xl transition-all"
              >
                Schedule Your Free Consultation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
