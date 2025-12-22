import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { JsonLd } from "@/components/schema/JsonLd"
import { FAQSchema } from "@/components/schema/FAQSchema"
import { TrustSignals } from "@/components/TrustSignals"

export const metadata: Metadata = {
  title: "Indian & Fusion Wedding Planner Nationwide | CeremonyVerse",
  description:
    "Plan your Indian or fusion wedding anywhere in the USA with transparent pricing and cultural expertise. Virtual consultations available nationwide. Start with a clear budget roadmap.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indian & Fusion Wedding Planner | CeremonyVerse",
    description: "Budget-first Indian and fusion wedding planning for PA, NJ, DE & MD couples.",
    url: "https://ceremonyverse.com",
    type: "website",
  },
  twitter: {
    title: "Indian & Fusion Wedding Planner | CeremonyVerse",
    description: "Budget-first Indian and fusion wedding planning for PA, NJ, DE & MD couples.",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "WeddingPlanner",
  name: "CeremonyVerse",
  description: "Indian & fusion wedding planning services with budget transparency. Serving PA, NJ, DE, and MD.",
  url: "https://ceremonyverse.com",
  telephone: "+1-215-341-9990",
  email: "hello@ceremonyverse.com",
  priceRange: "$$",
  areaServed: [
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "Delaware" },
    { "@type": "State", name: "Maryland" },
  ],
  serviceType: [
    "Indian Wedding Planning",
    "Fusion Wedding Coordination",
    "Day-of Wedding Coordination",
    "Cultural Sourcing Support",
  ],
  sameAs: [
    "https://www.instagram.com/ceremonyverse",
    "https://www.facebook.com/ceremonyverse",
    "https://www.pinterest.com/ceremonyverse",
  ],
}

const homepageFAQs = [
  {
    question: "How much does an Indian wedding planner cost?",
    answer:
      "Our Indian wedding planning services range from $2,500 for planning intensives to $15,000+ for full planning, depending on the number of events and level of support needed. We provide transparent pricing upfront.",
  },
  {
    question: "Do you plan fusion weddings with non-Indian traditions?",
    answer:
      "Yes! We specialize in multicultural fusion weddings that honor both families' traditions, including Hindu-Christian, Indian-Jewish, and Indian-American ceremonies.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve couples in Pennsylvania, New Jersey, Delaware, and Maryland, including Philadelphia, Cherry Hill, Wilmington, and Baltimore areas.",
  },
  {
    question: "Can you help source outfits and jewelry from India?",
    answer:
      "Yes, our Cultural Sourcing Support service helps you coordinate purchases from India, including bridal lehengas, groom sherwanis, jewelry, and ceremony items with quality verification.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <FAQSchema faqs={homepageFAQs} />

      <Section className="pt-12 md:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-warm-2/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="grid gap-12 md:grid-cols-2 md:items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text">
              Indian & Fusion Wedding Planning Nationwide
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
              Thoughtfully Designed to Fit Your Real Budget
            </p>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              CeremonyVerse helps Indian and multicultural couples plan culturally aligned weddings, coordinate trusted
              vendors, and source the right outfits and ceremony essentials — without overspending or guesswork.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/start-planning">Start with Budget + Vision Form</Button>
              <Button href="/book" variant="secondary">
                Schedule a Free Consultation
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link href="/services" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Clear Pricing</span>
              </Link>
              <Link
                href="/blog/gujarati-wedding-planning-guide"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Cultural Expertise</span>
              </Link>
              <Link href="/about" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Family-Friendly Planning</span>
              </Link>
              <Link
                href="/indian-wedding-planner-philadelphia"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Serving Nationwide</span>
              </Link>
            </div>
          </div>

          <Card hover className="overflow-hidden p-0 aspect-[4/5] border-none">
            <Image
              src="/images/hero-couple.png"
              alt="Elegant Indian wedding couple in traditional attire"
              width={640}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </Card>
        </div>
      </Section>

      <TrustSignals />

      <Section variant="surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-text mb-6">Nationwide Indian Wedding Planning with Virtual & In-Person Options</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            CeremonyVerse provides Indian and fusion wedding planning services throughout the United States. Whether
            you're in California, Texas, New York, Illinois, or anywhere else—we work with couples virtually and
            in-person to create culturally aligned weddings with budget clarity.
          </p>

          <h3 className="text-text text-2xl mb-6">How Virtual Wedding Planning Works</h3>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <div className="font-serif text-lg font-semibold text-text mb-3">Virtual Budget Planning Sessions</div>
              <p className="text-muted-foreground leading-relaxed">
                90-minute Zoom calls to map your budget, priorities, and vendor strategy
              </p>
            </Card>

            <Card>
              <div className="font-serif text-lg font-semibold text-text mb-3">Remote Vendor Research</div>
              <p className="text-muted-foreground leading-relaxed">
                We research and recommend vendors in your city/state based on your needs
              </p>
            </Card>

            <Card>
              <div className="font-serif text-lg font-semibold text-text mb-3">Digital Planning Tools</div>
              <p className="text-muted-foreground leading-relaxed">
                Shared documents, timelines, and budget trackers you access anywhere
              </p>
            </Card>

            <Card>
              <div className="font-serif text-lg font-semibold text-text mb-3">Video Vendor Meetings</div>
              <p className="text-muted-foreground leading-relaxed">
                We can join your virtual vendor consultations for guidance
              </p>
            </Card>

            <Card>
              <div className="font-serif text-lg font-semibold text-text mb-3">Travel for Events</div>
              <p className="text-muted-foreground leading-relaxed">
                For full planning clients, we travel to your location for key events (costs discussed upfront)
              </p>
            </Card>
          </div>

          <h3 className="text-text text-2xl mb-6">Popular Regions We Serve</h3>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We work with couples planning Indian weddings in major metros and beyond, including:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <div className="p-6 rounded-lg bg-warm-2/30">
              <div className="font-serif font-semibold text-text mb-3">East Coast</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                New York, New Jersey, Pennsylvania, Maryland, Virginia, North Carolina, Florida
              </p>
            </div>

            <div className="p-6 rounded-lg bg-warm-2/30">
              <div className="font-serif font-semibold text-text mb-3">West Coast</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                California (Bay Area, LA, San Diego), Washington, Oregon
              </p>
            </div>

            <div className="p-6 rounded-lg bg-warm-2/30">
              <div className="font-serif font-semibold text-text mb-3">South</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Texas (Houston, Dallas, Austin), Georgia, Tennessee
              </p>
            </div>

            <div className="p-6 rounded-lg bg-warm-2/30">
              <div className="font-serif font-semibold text-text mb-3">Midwest</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Illinois, Michigan, Ohio, Minnesota, Wisconsin
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Our budget-first approach works regardless of location—wedding costs vary by region, and we help you plan
            within your local market while sourcing items strategically (India vs. USA).
          </p>
        </div>
      </Section>

      <Section variant="warm2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-text mb-6">Cultural Traditions We Specialize In</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            CeremonyVerse understands the nuances of different{" "}
            <Link href="/blog/south-indian-wedding-ceremony-guide" className="text-primary hover:underline">
              South Asian wedding traditions
            </Link>
            :
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card hover className="bg-surface">
              <div className="font-serif text-lg font-semibold text-text mb-3">
                <Link
                  href="/blog/indian-wedding-traditions-guide"
                  className="text-text hover:text-primary transition-colors"
                >
                  Hindu Weddings
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Complete ceremony guidance including Ganesh Puja, Mandap setup, Saat Phere, Vidaai, and regional
                variations
              </p>
            </Card>

            <Card hover className="bg-surface">
              <div className="font-serif text-lg font-semibold text-text mb-3">Sikh Weddings</div>
              <p className="text-muted-foreground leading-relaxed">
                Anand Karaj ceremony coordination, Gurdwara protocols, Milni, and cultural event planning
              </p>
            </Card>

            <Card hover className="bg-surface">
              <div className="font-serif text-lg font-semibold text-text mb-3">
                <Link
                  href="/blog/gujarati-wedding-planning-guide"
                  className="text-text hover:text-primary transition-colors"
                >
                  Gujarati Traditions
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pithi, Garba, Haldi customs, and regional ceremony requirements specific to Gujarati families
              </p>
            </Card>

            <Card hover className="bg-surface">
              <div className="font-serif text-lg font-semibold text-text mb-3">
                <Link
                  href="/blog/punjabi-wedding-traditions-guide"
                  className="text-text hover:text-primary transition-colors"
                >
                  Punjabi Celebrations
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sangeet choreography support, Jaggo, Chooda ceremony, and vibrant celebration planning
              </p>
            </Card>

            <Card hover className="bg-surface">
              <div className="font-serif text-lg font-semibold text-text mb-3">
                <Link
                  href="/blog/south-indian-wedding-ceremony-guide"
                  className="text-text hover:text-primary transition-colors"
                >
                  South Indian Weddings
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tamil, Telugu, Kannada, and Malayalam ceremony traditions including Muhurtham timing and rituals
              </p>
            </Card>

            <Card hover className="bg-surface">
              <div className="font-serif text-lg font-semibold text-text mb-3">
                <Link
                  href="/blog/essential-elements-fusion-wedding"
                  className="text-text hover:text-primary transition-colors"
                >
                  Fusion & Interfaith
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Hindu-Christian, Sikh-Jewish, and other multicultural ceremony design with respectful tradition blending
              </p>
            </Card>
          </div>

          <div className="mt-12 p-6 rounded-lg bg-warm-2/30">
            <h3 className="font-serif font-semibold text-text mb-4">Helpful Resources</h3>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/blog/south-asian-wedding-budget-guide" className="text-primary hover:underline">
                Indian wedding budget planning guide
              </Link>
              <Link href="/blog/wedding-shopping-india-vs-usa" className="text-primary hover:underline">
                India vs USA sourcing comparison
              </Link>
              <Link href="/blog/vendor-verification-guide" className="text-primary hover:underline">
                Learn about our vendor verification process
              </Link>
              <Link href="/services" className="text-primary hover:underline">
                Explore CeremonyVerse wedding planning services
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <h2 className="text-text mb-6">Serving Indian & Fusion Weddings Across the Region</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/indian-wedding-planner-philadelphia"
            className="p-4 rounded-lg bg-warm-2/50 hover:bg-warm-2 transition-colors text-center"
          >
            <span className="font-serif text-lg text-text">Philadelphia, PA</span>
          </Link>
          <Link
            href="/indian-wedding-planner-new-jersey"
            className="p-4 rounded-lg bg-warm-2/50 hover:bg-warm-2 transition-colors text-center"
          >
            <span className="font-serif text-lg text-text">New Jersey</span>
          </Link>
          <Link
            href="/south-asian-wedding-planner-delaware"
            className="p-4 rounded-lg bg-warm-2/50 hover:bg-warm-2 transition-colors text-center"
          >
            <span className="font-serif text-lg text-text">Delaware</span>
          </Link>
          <Link
            href="/hindu-wedding-planner-maryland"
            className="p-4 rounded-lg bg-warm-2/50 hover:bg-warm-2 transition-colors text-center"
          >
            <span className="font-serif text-lg text-text">Maryland</span>
          </Link>
        </div>
      </Section>

      <Section variant="warm">
        <Card hover className="md:p-14 text-center max-w-3xl mx-auto bg-surface">
          <h3 className="text-text">Ready to plan with clarity and cultural understanding?</h3>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Start with our Budget + Vision Form so we can recommend the right level of support for your wedding.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="/start-planning">Start with Budget + Vision Form</Button>
            <Button href="/book" variant="secondary">
              Schedule a Free Consultation
            </Button>
          </div>
        </Card>
      </Section>
    </>
  )
}
