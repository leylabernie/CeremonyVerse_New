import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Video, Shield, Package, Star, Calendar } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | CeremonyVerse Wedding Planning Process",
  description:
    "Discover our simple 6-step process for planning your Indian-American fusion wedding. From consultation to day-of coordination, we handle everything with verified suppliers and secure payment processing.",
  keywords:
    "wedding planning process, how wedding planning works, Indian wedding planning steps, fusion wedding coordination, verified wedding suppliers, secure payment processing",
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description:
        "We start with a complimentary 60-minute video call to understand your vision, cultural preferences, budget, and timeline. No pressure, just honest conversation about your dream wedding.",
      icon: Video,
      color: "bg-primary/10 text-primary",
    },
    {
      number: "02",
      title: "Custom Proposal",
      description:
        "Within 48 hours, receive a detailed proposal with service recommendations, verified supplier options, transparent pricing, and a preliminary timeline tailored to your needs.",
      icon: Calendar,
      color: "bg-secondary/10 text-secondary",
    },
    {
      number: "03",
      title: "Secure Agreement",
      description:
        "Once you approve, we establish secure, milestone-based payment schedules and clear contracts. Deposits are paid through secure processors (Stripe/PayPal/Zelle) and tied to clear deliverables, so you always know what you're paying for and when.",
      icon: Shield,
      color: "bg-accent/10 text-accent",
    },
    {
      number: "04",
      title: "Virtual Shopping & Planning",
      description:
        "Join live video consultations with our verified suppliers in India. Browse authentic items, ask questions in real-time, and make selections with confidence. We coordinate everything.",
      icon: Package,
      color: "bg-primary/10 text-primary",
    },
    {
      number: "05",
      title: "Quality Assurance",
      description:
        "Before shipment, we conduct thorough quality checks with photo/video documentation. You approve everything before items leave India. Optional third-party inspections available.",
      icon: Star,
      color: "bg-secondary/10 text-secondary",
    },
    {
      number: "06",
      title: "Delivery & Coordination",
      description:
        "Items arrive with full tracking. We coordinate with all vendors, manage your timeline, and provide day-of coordination to ensure your heritage wedding unfolds perfectly.",
      icon: Check,
      color: "bg-accent/10 text-accent",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Our proven 6-step process makes planning your Indian-American fusion wedding simple, secure, and
            stress-free. From first consultation to your perfect day, we're with you every step.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-start group hover:translate-x-2 transition-transform duration-300"
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="text-8xl font-serif font-bold text-foreground/5 absolute -top-8 -left-2">
                        {step.number}
                      </div>
                      <div
                        className={`relative z-10 w-20 h-20 rounded-full ${step.color} flex items-center justify-center`}
                      >
                        <Icon className="w-10 h-10" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Guarantee */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Guarantee to You</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Secure Milestone Payments */}
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Milestone Payments</h3>
              <p className="text-sm text-foreground/70">
                Payments via Stripe/PayPal/Zelle tied to clear deliverables and your satisfaction
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Verified Suppliers Only</h3>
              <p className="text-sm text-foreground/70">
                Three-tier verification ensures quality, authenticity, and reliability
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-foreground/70">
                Pre-shipment inspections and 72-hour satisfaction window on all items
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Book your free consultation today. No obligation, just honest conversation about your perfect day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+12153419990">Call +1-215-341-9990</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
