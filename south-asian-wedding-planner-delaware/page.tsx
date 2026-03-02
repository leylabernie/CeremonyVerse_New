import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, MapPin } from "@/components/icons"
import Image from "next/image"
import type { Metadata } from "next"
import { JsonLd } from "@/components/schema/JsonLd"
import { FAQSchema } from "@/components/schema/FAQSchema"

export const metadata: Metadata = {
  title: "South Asian Wedding Planner Delaware | Indian & Fusion Weddings – CeremonyVerse",
  description:
    "Indian and fusion wedding planning in Delaware. Serving Wilmington, Newark, and New Castle County with cultural expertise and budget-first planning.",
  keywords:
    "Indian wedding planner Delaware, South Asian wedding planner Wilmington, Hindu wedding DE, fusion wedding Delaware",
  openGraph: {
    title: "South Asian Wedding Planner Delaware | CeremonyVerse",
    description: "Full-service Indian wedding planning in Delaware and surrounding areas",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/south-asian-wedding-planner-delaware",
  },
}

const delawareFAQs = [
  {
    question: "What Delaware venues are best for Indian weddings?",
    answer:
      "Popular Delaware venues for Indian weddings include Hotel Du Pont in Wilmington, Deerfield Golf Club, Hartefeld National, and various banquet facilities that can accommodate multi-day celebrations and traditional ceremonies.",
  },
  {
    question: "Do you serve all of Delaware?",
    answer:
      "Yes, we serve Wilmington, Newark, New Castle, Dover, and surrounding areas. We also coordinate with venues and vendors across the Delaware Valley region including nearby Pennsylvania and New Jersey.",
  },
  {
    question: "Can you coordinate with Delaware temples for ceremonies?",
    answer:
      "Absolutely. We work with Hindu temples in Delaware and nearby areas to coordinate traditional ceremony requirements, priest scheduling, and venue logistics.",
  },
  {
    question: "What's the average cost for an Indian wedding in Delaware?",
    answer:
      "Indian weddings in Delaware typically range from $40,000 to $120,000 depending on guest count and traditions. Delaware often offers cost savings compared to nearby Philadelphia or New Jersey venues.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "WeddingPlanner",
  name: "CeremonyVerse - Delaware",
  description: "South Asian wedding planning services in Delaware. Specializing in Indian and fusion weddings.",
  url: "https://ceremonyverse.com/south-asian-wedding-planner-delaware",
  telephone: "+1-215-341-9990",
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  serviceType: ["Indian Wedding Planning", "South Asian Wedding Coordination", "Fusion Wedding Planning"],
}

export default function SouthAsianWeddingPlannerDelawarePage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={localBusinessSchema} />
      <FAQSchema faqs={delawareFAQs} />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Serving All of Delaware</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                South Asian Wedding Planner in Delaware
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Expert Indian and fusion wedding planning in Wilmington, Newark, and throughout Delaware. Budget-first
                approach with deep cultural understanding for Hindu, Sikh, and multicultural celebrations.
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
                alt="Indian wedding couple at Delaware venue"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delaware Service Areas */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
              Serving South Asian Communities Throughout Delaware
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">New Castle County</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Wilmington</li>
                <li>• Newark</li>
                <li>• New Castle</li>
                <li>• Hockessin & Greenville</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Kent & Sussex</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Dover</li>
                <li>• Rehoboth Beach</li>
                <li>• Lewes</li>
                <li>• Milford</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Delaware Valley Region</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Nearby Chester County, PA</li>
                <li>• Cecil County, MD</li>
                <li>• Salem County, NJ</li>
                <li>• Cross-state coordination</li>
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
              Why Choose CeremonyVerse for Your Delaware Indian Wedding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Knowledge of top Delaware venues for Indian celebrations",
              "Relationships with Delaware Valley Indian vendors",
              "Experience with intimate to large-scale weddings",
              "Cross-state coordination with PA, NJ, and MD vendors",
              "Budget-conscious approach with cost-effective solutions",
              "Cultural sourcing support for outfits and ceremony items",
              "Temple ceremony coordination throughout the region",
              "Personalized attention for Delaware couples",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-8 text-center">
            Delaware Indian Wedding FAQs
          </h2>
          <div className="space-y-6">
            {delawareFAQs.map((faq, index) => (
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
            Ready to Plan Your Delaware Indian Wedding?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your vision and create an unforgettable celebration in the First State
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-consultation">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Serving Wilmington, Newark & all of Delaware • Free consultation • Call +1-215-341-9990
          </p>
        </div>
      </section>
    </div>
  )
}
