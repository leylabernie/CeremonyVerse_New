import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Phone } from "@/components/icons"
import Link from "next/link"
import { FAQSchema, BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | CeremonyVerse Indian Wedding Planning",
  description:
    "Get answers to common questions about planning Indian weddings, our services, pricing, and how milestone-based payments work.",
  keywords: "Indian wedding FAQ, fusion wedding planning, wedding planning questions, milestone payments",
  alternates: {
    canonical: "https://www.ceremonyverse.com/faq",
  },
}

export default function FAQPage() {
  const faqs = [
    {
      category: "Indian Wedding Planning",
      questions: [
        {
          q: "How is planning an Indian wedding different from a Western wedding?",
          a: "Indian weddings typically involve multiple ceremonies across several days, cultural and religious requirements, and significant family participation. Planning requires precise timelines, ceremony sequencing, and coordination beyond a single event.",
        },
        {
          q: "Do you plan all types of Indian weddings?",
          a: "Yes. We work with Gujarati, South Indian, Punjabi, Jain, and Indian–American fusion weddings, tailoring our planning approach to each tradition.",
        },
        {
          q: "Do you help with destination Indian weddings?",
          a: "Yes. We support destination weddings, including Mexico and other international locations, coordinating vendors, timelines, and ceremony logistics.",
        },
        {
          q: "When should we start planning an Indian wedding?",
          a: "Most couples begin planning 9–14 months in advance, depending on location, guest count, and number of events.",
        },
      ],
    },
    {
      category: "Services & Process",
      questions: [
        {
          q: "Do you offer virtual planning or India sourcing?",
          a: "Yes. We offer virtual planning services and coordinate India sourcing for attire, décor, and ceremonial items when required.",
        },
        {
          q: "What services do you offer?",
          a: "We offer full wedding planning, partial planning and coordination, and virtual planning with India sourcing. Each service is tailored to multi-day Indian and fusion weddings.",
        },
        {
          q: "Can you help if I'm disconnected from my cultural roots?",
          a: "Absolutely. Many of our clients are second or third-generation Indian-Americans rediscovering their heritage. We provide cultural guidance, explain traditions, and help you incorporate meaningful elements.",
        },
      ],
    },
    {
      category: "Payments & Pricing",
      questions: [
        {
          q: "How do payments work?",
          a: "Payments are handled through secure, milestone-based invoicing via Stripe, PayPal, or Zelle. Invoices are tied to specific planning deliverables.",
        },
        {
          q: "Are there any hidden fees?",
          a: "Never. We believe in complete transparency. All costs are outlined in your contract upfront, including our service fees and any applicable expenses.",
        },
        {
          q: "What is your pricing structure?",
          a: "Our services start at $3,500 for essential coordination and go up based on scope. During your free consultation, we'll create a custom package that fits your specific needs and budget.",
        },
      ],
    },
  ]

  const allFaqs = faqs.flatMap((category) =>
    category.questions.map((q) => ({
      question: q.q,
      answer: q.a,
    })),
  )

  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "FAQ", url: "https://www.ceremonyverse.com/faq" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <FAQSchema faqs={allFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about planning your Indian or fusion wedding with CeremonyVerse
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h2 className="font-serif text-3xl text-foreground mb-8 pb-4 border-b-2 border-primary/20">
                {category.category}
              </h2>
              <div className="space-y-8">
                {category.questions.map((faq, qIdx) => (
                  <div
                    key={qIdx}
                    className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                  >
                    <h3 className="font-serif text-xl text-foreground mb-4">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Free Planning Resource</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download our Indian Wedding Planning Timeline — a step-by-step guide for planning multi-day celebrations.
          </p>
          <Link
            href="/free-resources"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all"
          >
            Get Free Timeline PDF
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're here to help. Schedule a free consultation or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:+12153419990"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground rounded-full font-medium hover:shadow-lg transition-all border-2 border-primary/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1-215-341-9990
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
