import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "@/components/icons"
import InstagramFeed from "@/components/instagram-feed"
import FadeInSection from "@/components/fade-in-section"
import InteractiveProcess from "@/components/interactive-process"
import HeroSectionV2 from "@/components/hero-section-v2"

export default function HomePageV2() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Updated Headline */}
      <HeroSectionV2 />

      {/* Services Grid - Kalki Fashion product grid style with large images */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            {/* Boho minimalist heading */}
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight text-charcoal mb-6 tracking-tight">
                Our Services
              </h2>
              <div className="w-24 h-px bg-accent mx-auto mb-6" />
              <p className="text-charcoal/60 text-lg font-light max-w-2xl mx-auto">
                Curated experiences for your celebration
              </p>
            </div>
          </FadeInSection>

          {/* 3 Main Services - Clean Text Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Service Card 1 - Full Planning */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream border-2 border-warm-beige/40 hover:border-primary transition-all duration-300 p-12 text-center h-full flex flex-col justify-center min-h-[300px]">
                <h3 className="font-serif text-4xl font-light mb-4 text-charcoal tracking-wide group-hover:text-primary transition-colors">
                  Full Planning
                </h3>
                <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                  Complete coordination from vision to celebration
                </p>
              </div>
            </Link>

            {/* Service Card 2 - Cultural Fusion */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream border-2 border-warm-beige/40 hover:border-primary transition-all duration-300 p-12 text-center h-full flex flex-col justify-center min-h-[300px]">
                <h3 className="font-serif text-4xl font-light mb-4 text-charcoal tracking-wide group-hover:text-primary transition-colors">
                  Cultural Fusion
                </h3>
                <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                  Blending traditions with modern elegance
                </p>
              </div>
            </Link>

            {/* Service Card 3 - Virtual Shopping */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream border-2 border-warm-beige/40 hover:border-primary transition-all duration-300 p-12 text-center h-full flex flex-col justify-center min-h-[300px]">
                <h3 className="font-serif text-4xl font-light mb-4 text-charcoal tracking-wide group-hover:text-primary transition-colors">
                  Virtual Shopping
                </h3>
                <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                  Live shopping from India for outfits & décor
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* REMOVED: Testimonials Section (Priority 1: Take down temporarily) */}
      {/* REMOVED: RecentCelebrations (Priority 1: Remove repeated blocks) */}

      {/* How It Works - Interactive Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
                Your Journey to the Perfect Day
              </h2>
              <p className="text-charcoal/70 text-lg font-sans max-w-2xl mx-auto">
                From first call to final celebration, we're with you every step of the way
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" className="mr-4 bg-transparent">
                  <Link href="/v2/how-it-works">Read Detailed Process</Link>
                </Button>
                <Button asChild>
                  <Link href="/v2/checklist">Download Free Checklist</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <InteractiveProcess />
          </FadeInSection>
        </div>
      </section>

      {/* Instagram Feed - Kept for visual interest but ensure it's not repeated elsewhere */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <InstagramFeed />
        </div>
      </section>

      {/* REMOVED: GoogleReviewsWidget (Priority 1: Delete "Leave us your first review!") */}

      {/* CTA Section - Boho minimalist with elegant simplicity */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight text-charcoal leading-tight tracking-tight">
            Let's Create
            <br />
            Something Beautiful
          </h2>

          <div className="w-24 h-px bg-accent mx-auto" />

          <p className="text-xl text-charcoal/70 font-light leading-relaxed max-w-xl mx-auto">
            Begin your journey with a complimentary consultation
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-charcoal text-white hover:bg-charcoal/90 h-14 px-12 font-light tracking-wide text-base"
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-14 px-12 font-light tracking-wide text-base bg-transparent"
            >
              <Link href="/v2/pricing">View Packages</Link>
            </Button>
          </div>

          <p className="text-sm text-charcoal/50 font-light italic">Thoughtful planning, exceptional celebration</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
