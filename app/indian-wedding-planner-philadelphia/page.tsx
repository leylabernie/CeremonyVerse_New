import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, MapPin, Sparkles } from "@/components/icons"
import Image from "next/image"
import type { Metadata } from "next"
import { JsonLd } from "@/components/schema/JsonLd"
import { FAQSchema } from "@/components/schema/FAQSchema"

export const metadata: Metadata = {
  title: "Indian Wedding Planner Philadelphia | Hindu, Gujarati & Fusion Weddings – CeremonyVerse",
  description:
    "Expert Indian wedding planning in Philadelphia, Main Line, and Bucks County. Hindu, Gujarati, South Indian, and fusion wedding specialists. Budget-first planning with cultural expertise.",
  keywords:
    "Indian wedding planner Philadelphia, Hindu wedding planner PA, Gujarati wedding Philadelphia, South Indian wedding planner, fusion wedding Philadelphia",
  openGraph: {
    title: "Indian Wedding Planner Philadelphia | CeremonyVerse",
    description: "Full-service Indian wedding planning in Philadelphia and surrounding areas",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/indian-wedding-planner-philadelphia",
  },
}

const philadelphiaFAQs = [
  {
    question: "How much does an Indian wedding cost in Philadelphia?",
    answer:
      "Indian weddings in Philadelphia typically range from $50,000 to $150,000+ depending on guest count, venue, and traditions included. A 200-guest wedding with mandap, baraat, and reception averages $80,000-$120,000.",
  },
  {
    question: "What Philadelphia venues accommodate Indian weddings?",
    answer:
      "Popular Philadelphia venues for Indian weddings include The Bellevue, Crystal Tea Room, Union League, Arts Ballroom, Please Touch Museum, and Cescaphe venues. Many offer outdoor space for baraat processions.",
  },
  {
    question: "Do you coordinate with Philadelphia-area temples?",
    answer:
      "Yes, we work with Hindu temples throughout the Philadelphia area including BAPS Shri Swaminarayan Mandir, Hindu Temple of Delaware Valley, and others for traditional ceremony coordination.",
  },
  {
    question: "Can you help find Indian caterers in Philadelphia?",
    answer:
      "Absolutely. We have established relationships with top Indian caterers in Philadelphia serving Gujarati, South Indian, Punjabi, and fusion cuisines with experience in large-scale wedding events.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "WeddingPlanner",
  name: "CeremonyVerse - Philadelphia",
  description:
    "Indian wedding planning services in Philadelphia, PA. Specializing in Hindu, Gujarati, South Indian, and fusion weddings.",
  url: "https://ceremonyverse.com/indian-wedding-planner-philadelphia",
  telephone: "+1-215-341-9990",
  areaServed: {
    "@type": "City",
    name: "Philadelphia",
    containedInPlace: {
      "@type": "State",
      name: "Pennsylvania",
    },
  },
  serviceType: [
    "Indian Wedding Planning",
    "Hindu Wedding Coordination",
    "Gujarati Wedding Planning",
    "Fusion Wedding Planning",
  ],
}

export default function IndianWeddingPlannerPhiladelphiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={localBusinessSchema} />
      <FAQSchema faqs={philadelphiaFAQs} />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Serving Greater Philadelphia</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Indian Wedding Planner in Philadelphia
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Expert planning for Hindu, Gujarati, South Indian, and multicultural fusion weddings throughout
                Philadelphia, the Main Line, and Bucks County. Budget-first approach with deep cultural expertise.
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
                alt="Indian wedding couple at Philadelphia venue"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philadelphia Service Areas */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Serving Indian Communities Throughout Philadelphia
            </h2>
            <p className="text-lg text-muted-foreground">
              Local expertise and vendor relationships across the Greater Philadelphia area
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Center City & South Philly</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Rittenhouse Square venues</li>
                <li>• Old City historic locations</li>
                <li>• South Philadelphia banquet halls</li>
                <li>• University City options</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Main Line & Suburbs</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Ardmore & Bryn Mawr</li>
                <li>• King of Prussia</li>
                <li>• Villanova & Wayne</li>
                <li>• Conshohocken & Plymouth Meeting</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Bucks & Montgomery County</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Doylestown & New Hope</li>
                <li>• Lansdale & North Wales</li>
                <li>• Blue Bell & Fort Washington</li>
                <li>• Warminster & Warrington</li>
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
              Why Choose CeremonyVerse for Your Philadelphia Indian Wedding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Deep relationships with top Philadelphia Indian wedding venues",
              "Network of verified Hindu priests, caterers, and decorators",
              "Experience with BAPS Mandir and local temple ceremonies",
              "Knowledge of best mandap decorators and lighting specialists",
              "Coordination expertise for multi-day celebrations",
              "Budget-first approach with transparent pricing",
              "Cultural sourcing support for outfits and ceremony items",
              "Local presence for in-person meetings and venue visits",
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
              Indian Wedding Styles We Plan in Philadelphia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/gujarati-wedding-planner" className="hover:text-accent transition-colors">
                  Gujarati Hindu Weddings
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Traditional Gujarati ceremonies including grah shanti, pithi, garba, mandap muhurat with authentic vidhi
                items.
              </p>
              <Link href="/gujarati-wedding-planner" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/south-indian-wedding-coordinator" className="hover:text-accent transition-colors">
                  South Indian Weddings
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tamil, Telugu, Kannada, and Malayalam wedding traditions with proper ceremony coordination.
              </p>
              <Link
                href="/south-indian-wedding-coordinator"
                className="text-accent text-sm font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">
                <Link href="/fusion-wedding-planner" className="hover:text-accent transition-colors">
                  Multicultural Fusion
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Hindu-Christian, Indian-American, and multicultural ceremonies honoring both families.
              </p>
              <Link href="/fusion-wedding-planner" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-8 text-center">
            Philadelphia Indian Wedding FAQs
          </h2>
          <div className="space-y-6">
            {philadelphiaFAQs.map((faq, index) => (
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
            Ready to Plan Your Philadelphia Indian Wedding?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your vision and create an unforgettable celebration in the City of Brotherly Love
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-consultation">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Serving Philadelphia, Main Line & Bucks County • Free consultation • Call +1-215-341-9990
          </p>
        </div>
      </section>
    </div>
  )
}
