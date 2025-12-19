import { Navigation, Footer } from "@/components"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "@/components/icons"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Vision",
      description:
        "We start with a deep dive into your story, your families, and your vision. We discuss the specific cultural elements you want to honor and how to blend them seamlessly.",
      details: [
        "Initial 60-minute video call",
        "Budget estimation & breakdown",
        "Venue scouting criteria",
        "Cultural priority checklist",
      ],
    },
    {
      number: "02",
      title: "Vendor Curation & Contracts",
      description:
        "We source the best vendors from both the US and India. Our professional contract system and secure payment processing ensure your payments are protected with clear milestone-based agreements.",
      details: [
        "Verified vendor matching",
        "Contract negotiation",
        "Secure payment processing",
        "Custom outfit & decor sourcing from India",
      ],
    },
    {
      number: "03",
      title: "Design & Logistics",
      description:
        "We create a cohesive design plan that respects both traditions. We handle all the logistics, from shipping timelines to guest transportation.",
      details: [
        "Moodboard creation",
        "Timeline development (minute-by-minute)",
        "Shipping & customs management",
        "Guest concierge services",
      ],
    },
    {
      number: "04",
      title: "The Celebration",
      description:
        "On your wedding days, we are there to ensure everything flows perfectly. You focus on the moment; we handle the rest.",
      details: ["On-site coordination team", "Vendor management", "Guest assistance", "Emergency problem solving"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-6">How It Works</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Our proven 4-step process for a stress-free fusion wedding experience.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0">
                <span className="text-6xl font-serif text-primary/20 font-bold">{step.number}</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-charcoal">{step.title}</h2>
                <p className="text-lg text-charcoal/70 leading-relaxed">{step.description}</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Ready to start planning?</h2>
          <Button size="lg" asChild>
            <Link href="/contact">
              Book Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
