import { Shield, Globe, Clock, Users } from "@/components/icons"
import FadeInSection from "@/components/fade-in-section"

const benefits = [
  {
    icon: Users,
    title: "Personalized Planning",
    description:
      "Every wedding is unique. We tailor our services to match your vision, budget, and traditions perfectly.",
  },
  {
    icon: Globe,
    title: "Cultural Expertise",
    description:
      "Deep understanding of Hindu, Gujarati, and South Indian Christian traditions and how to blend them beautifully.",
  },
  {
    icon: Shield,
    title: "Verified Vendors",
    description: "Every vendor is vetted, reviewed, and approved. No surprises, only professionals you can trust.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Questions at midnight? We're here. Dedicated support throughout your entire planning journey.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight text-charcoal mb-6 tracking-tight">
              Why Choose CeremonyVerse
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mb-6" />
            <p className="text-charcoal/60 text-lg font-light max-w-2xl mx-auto">
              Planning a fusion wedding is complex. We make it effortless.
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary/40 transition-all duration-300 text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-3">{benefit.title}</h3>
                <p className="text-charcoal/70 font-light leading-relaxed">{benefit.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
