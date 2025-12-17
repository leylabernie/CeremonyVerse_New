import type { Metadata } from "next"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import CalendlyEmbed from "@/components/calendly-embed"

export const metadata: Metadata = {
  title: "Book Your Free Consultation | CeremonyVerse Wedding Planning",
  description:
    "Schedule your free 30-minute wedding planning consultation. Discuss your Indian-American fusion wedding vision with our experienced planners. Available online or by phone.",
  keywords:
    "book wedding consultation, schedule wedding planner, Indian fusion wedding appointment, free wedding consultation, multicultural wedding planner booking",
}

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-warm-beige/30 via-cream to-warm-beige/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight text-charcoal mb-6 leading-tight">
              Book Your Free <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-charcoal/80 mb-8 leading-relaxed">
              Let's discuss your wedding vision in a relaxed, no-pressure conversation
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: What to Expect */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-light text-charcoal mb-6">What to Expect</h2>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                  Your 30-minute consultation is completely free and pressure-free. We'll get to know your vision,
                  answer your questions, and show you how we can help create your perfect fusion wedding.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-charcoal mb-1">
                      Personalized Planning Roadmap
                    </h3>
                    <p className="text-charcoal/70">
                      We'll create a custom timeline and approach specifically for your wedding vision and budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-charcoal mb-1">Honest Budget Discussion</h3>
                    <p className="text-charcoal/70">
                      Transparent pricing with no hidden fees. We'll show you exactly how our secure payment processing
                      works.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-charcoal mb-1">Cultural Expertise</h3>
                    <p className="text-charcoal/70">
                      Learn how we seamlessly blend Indian traditions with American celebrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-charcoal mb-1">Q&A Session</h3>
                    <p className="text-charcoal/70">
                      Ask anything! From vendor selection to family traditions, we're here to help.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-lg text-white">
                <h3 className="font-serif text-2xl font-light mb-4">Your Security Matters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="font-light">Clear Milestone-Based Payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="font-light">Three-Tier Verified Suppliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="font-light">Transparent Pricing & Contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="font-light">No Hidden Fees or Surprises</span>
                  </li>
                </ul>
              </div>

              {/* Alternative Contact */}
              <div className="border-t border-warm-beige/60 pt-8">
                <h3 className="font-serif text-2xl font-light text-charcoal mb-4">Prefer to Call?</h3>
                <p className="text-charcoal/70 mb-4">
                  We're available to chat during business hours. Call us directly for immediate assistance.
                </p>
                <a
                  href="tel:+12153419990"
                  className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-sm hover:bg-accent/90 transition-all font-sans font-semibold text-lg shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1-215-341-9990
                </a>
                <p className="text-sm text-charcoal/60 mt-3">Mon-Fri: 9am-7pm EST | Sat: 10am-4pm EST</p>
              </div>
            </div>

            {/* Right: Calendly Embed */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-lg shadow-xl border border-warm-beige/40 overflow-hidden">
                <div className="bg-gradient-to-r from-primary via-primary to-accent text-white p-6">
                  <h2 className="font-serif text-3xl font-semibold mb-2 text-white drop-shadow-lg">Choose Your Time</h2>
                  <p className="font-normal text-white text-lg drop-shadow">
                    Select a date and time that works best for you
                  </p>
                </div>
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-warm-beige/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-light text-charcoal mb-12 text-center">Booking FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "What if I need to reschedule?",
                a: "No problem! You can reschedule or cancel your appointment up to 24 hours in advance through the confirmation email you'll receive after booking.",
              },
              {
                q: "Will this consultation be online or in-person?",
                a: "Most consultations are conducted via video call (Zoom or Google Meet) for your convenience. If you're local to our area, we can arrange an in-person meeting upon request.",
              },
              {
                q: "Do I need to prepare anything before the call?",
                a: "Not at all! Just come with your questions and ideas. If you have specific details about your wedding date, venue, or budget, that's helpful but not required.",
              },
              {
                q: "Is there any obligation after the consultation?",
                a: "Absolutely none. Our consultation is genuinely free with no strings attached. We want you to make the best decision for your wedding, whether that's with us or not.",
              },
              {
                q: "Can both partners join the consultation?",
                a: "Of course! We encourage both partners to join if possible. Having both perspectives helps us understand your vision better.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-warm-beige/40">
                <h3 className="font-serif text-xl font-medium text-charcoal mb-3">{faq.q}</h3>
                <p className="text-charcoal/70 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
