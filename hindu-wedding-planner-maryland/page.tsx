import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, MapPin, Sparkles } from "@/components/icons"
import Image from "next/image"
import type { Metadata } from "next"
import { JsonLd } from "@/components/schema/JsonLd"
import { FAQSchema } from "@/components/schema/FAQSchema"

export const metadata: Metadata = {
  title: "Hindu Wedding Planner Maryland | Indian & Fusion Weddings – CeremonyVerse",
  description:
    "Hindu and Indian wedding planning in Maryland. Expert coordination in Baltimore, Annapolis, Columbia, and Bethesda. Cultural ceremonies, budget clarity, and local vendor knowledge.",
  keywords:
    "Hindu wedding planner Maryland, Indian wedding planner Baltimore, South Asian wedding MD, Indian wedding Bethesda, Hindu wedding Columbia MD",
  openGraph: {
    title: "Hindu Wedding Planner Maryland | CeremonyVerse",
    description: "Full-service Hindu and Indian wedding planning in Maryland",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/hindu-wedding-planner-maryland",
  },
}

const marylandFAQs = [
  {
    question: "What Maryland venues are popular for Hindu weddings?",
    answer:
      "Popular Maryland venues for Hindu weddings include Gramercy Mansion, Baltimore Museum of Art, Newton White Mansion, Martin's Crosswinds, and various hotels in the DC suburbs that accommodate multi-day celebrations.",
  },
  {
    question: "Do you coordinate Hindu ceremonies with Maryland temples?",
    answer:
      "Yes, we work with Hindu temples throughout Maryland including those in the Baltimore and DC metro areas to coordinate traditional ceremonies, priest scheduling, and ceremony logistics.",
  },
  {
    question: "What areas of Maryland do you serve?",
    answer:
      "We serve all of Maryland including Baltimore, Annapolis, Columbia, Bethesda, Rockville, Silver Spring, Frederick, and the DC suburbs. We also coordinate with DC and Virginia vendors.",
  },
  {
    question: "How much does an Indian wedding cost in Maryland?",
    answer:
      "Indian weddings in Maryland typically range from $60,000 to $180,000 depending on venue, guest count, and traditions. DC-area venues tend to be higher, while Baltimore offers more moderate options.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "WeddingPlanner",
  name: "CeremonyVerse - Maryland",
  description:
    "Hindu and Indian wedding planning services in Maryland. Specializing in traditional Hindu ceremonies and fusion weddings.",
  url: "https://ceremonyverse.com/hindu-wedding-planner-maryland",
  telephone: "+1-215-341-9990",
  areaServed: {
    "@type": "State",
    name: "Maryland",
  },
  serviceType: ["Hindu Wedding Planning", "Indian Wedding Coordination", "Fusion Wedding Planning"],
}

export default function HinduWeddingPlannerMarylandPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={localBusinessSchema} />
      <FAQSchema faqs={marylandFAQs} />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Serving All of Maryland</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Hindu Wedding Planner in Maryland
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Expert Hindu and Indian wedding planning in Baltimore, Annapolis, Columbia, and the DC suburbs.
                Traditional ceremonies with modern coordination and budget-first planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/book-consultation">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/start-planning">Start Planning</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-couple.png"
                alt="Hindu wedding couple at Maryland venue"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maryland Service Areas */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Serving Hindu Communities Throughout Maryland
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Baltimore Area</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Baltimore City</li>
                <li>• Baltimore County</li>
                <li>• Towson & Pikesville</li>
                <li>• Ellicott City & Columbia</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">DC Suburbs</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Bethesda & Rockville</li>
                <li>• Silver Spring & Chevy Chase</li>
                <li>• Potomac & Gaithersburg</li>
                <li>• College Park & Bowie</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Greater Maryland</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Annapolis</li>
                <li>• Frederick</li>
                <li>• Howard County</li>
                <li>• Plus DC & Northern VA coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Why Choose CeremonyVerse for Your Maryland Hindu Wedding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Strong relationships with Maryland Hindu temples",
              "Network of experienced Indian wedding vendors in MD",
              "Expertise in traditional Hindu ceremony requirements",
              "Coordination with DC and Northern Virginia vendors",
              "Experience with both intimate and large-scale celebrations",
              "Budget-first planning with transparent pricing",
              "Cultural sourcing for outfits, jewelry, and ceremony items",
              "Multi-day event coordination expertise",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Styles */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Hindu Wedding Styles We Plan in Maryland
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Traditional Hindu</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete Vedic ceremonies with proper rituals, mandap setup, and traditional elements.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/south-indian-wedding-coordinator" className="hover:text-accent transition-colors">
                  South Indian
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tamil, Telugu, Kannada, and Malayalam ceremonies with regional traditions honored.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/fusion-wedding-planner" className="hover:text-accent transition-colors">
                  Hindu-Fusion
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Blending Hindu traditions with Christian, Jewish, or secular elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-8 text-center">
            Maryland Hindu Wedding FAQs
          </h2>
          <div className="space-y-6">
            {marylandFAQs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-6">
            Ready to Plan Your Maryland Hindu Wedding?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your vision and create an unforgettable celebration
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-consultation">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Serving Baltimore, Bethesda, Columbia & all of Maryland • Free consultation • Call +1-215-341-9990
          </p>
        </div>
      </section>
    </div>
  )
}
