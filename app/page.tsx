import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"
import TrustSignals from "@/components/site/trust-signals" // Declare TrustSignals variable

export const metadata: Metadata = {
  title: "Indian & Fusion Wedding Planner Nationwide | Budget-First | CeremonyVerse",
  description:
    "Plan your Indian or fusion wedding anywhere in the USA with transparent pricing and cultural expertise. Virtual consultations available nationwide. Get your free budget roadmap.",
  keywords:
    "indian wedding planner, fusion wedding planner, budget wedding planner, virtual wedding planner, south asian wedding planner, indian wedding planning services, affordable indian wedding planner",
  openGraph: {
    title: "Indian & Fusion Wedding Planner Nationwide | Budget-First | CeremonyVerse",
    description:
      "Plan an Indian or fusion wedding anywhere in the USA with transparent pricing and cultural expertise. Virtual consultations available nationwide.",
    url: "https://ceremonyverse.com",
    siteName: "CeremonyVerse",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse - Indian & Fusion Wedding Planning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian & Fusion Wedding Planner Nationwide | Budget-First",
    description:
      "Budget-first Indian & fusion wedding planning with transparent pricing. Virtual consultations available nationwide.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CeremonyVerse",
    description:
      "Budget-first Indian & fusion wedding planning services nationwide with cultural expertise in Hindu, Sikh, Gujarati, Punjabi, and South Indian traditions. Virtual and in-person planning available.",
    url: "https://ceremonyverse.com",
    telephone: "+1-215-341-9990",
    email: "hello@ceremonyverse.com",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Indian Wedding Planning",
      "Fusion Wedding Planning",
      "South Asian Wedding Coordination",
      "Cultural Wedding Sourcing",
      "Virtual Wedding Planning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding Planning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Planning Intensives",
            description: "90-minute Budget & Vision Roadmap session",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Partial Planning & Coordination",
            description: "Ongoing guidance with vendor support and day-of coordination",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Wedding Planning",
            description: "Complete end-to-end wedding planning and management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cultural Sourcing Support",
            description: "Guidance on sourcing outfits, jewelry, and ceremony items from India or USA",
          },
        },
      ],
    },
    knowsAbout: [
      "Indian Wedding Planning",
      "Hindu Wedding Ceremonies",
      "Sikh Wedding Ceremonies",
      "Gujarati Wedding Traditions",
      "Punjabi Wedding Traditions",
      "South Indian Wedding Ceremonies",
      "Fusion Wedding Planning",
      "Interfaith Wedding Coordination",
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do your wedding planning services cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Planning Intensives start at $800, Partial Planning starts at $3,500, and Full Planning starts at $6,500. All pricing is transparent with no hidden fees or percentage-based markups.",
        },
      },
      {
        "@type": "Question",
        name: "Do you only work with couples in certain states?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We work with couples planning Indian weddings anywhere in the USA. Most of our services are virtual (video consultations, digital planning tools), and for full planning clients, we travel to your location for key events.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with sourcing outfits and jewelry from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cultural Sourcing Support is available as a standalone service or add-on. We provide guidance on what to source from India vs USA, timelines for international coordination, and trusted vendor recommendations.",
        },
      },
      {
        "@type": "Question",
        name: "What cultural traditions do you understand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with Hindu (Gujarati, Punjabi, South Indian, Bengali, Marathi), Sikh, Jain, and fusion/interfaith weddings. We understand regional ceremony differences, multi-day event logistics, and how to balance traditional expectations with modern preferences.",
        },
      },
      {
        "@type": "Question",
        name: "How does virtual wedding planning work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We conduct planning sessions via Zoom, share digital planning tools and timelines, research vendors in your local area, and can join virtual vendor meetings with you. For full planning clients, we travel to your location for the wedding weekend and key events as needed.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Section className="pt-12 md:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-warm-2/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="grid gap-12 md:grid-cols-2 md:items-center-center z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text">
              Indian & Fusion Wedding Planning Nationwide
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
              Thoughtfully Designed to Fit Your Real Budget
            </p>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              CeremonyVerse helps Indian and multicultural couples plan culturally aligned weddings, coordinate trusted
              vendors, and source the right outfits and jewelry essentials — without overspending or guesswork.
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

          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            Thoughtfully Designed to Fit Your Real Budget
          </p>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            CeremonyVerse helps Indian and multicultural couples plan culturally aligned weddings, coordinate trusted
            vendors, and source the right outfits and jewelry essentials — without overspending or guesswork.
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
      </Section>

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

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions About Indian Wedding Planning
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How much do your wedding planning services cost?</h3>
              <p className="text-gray-700">
                Our Planning Intensives start at $800, Partial Planning starts at $3,500, and Full Planning starts at
                $6,500. All pricing is transparent with no hidden fees or percentage-based markups. We discuss travel
                costs upfront for out-of-area weddings.{" "}
                <a href="/pricing" className="text-blue-600 hover:underline">
                  View detailed pricing →
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Do you only work with couples in certain states?</h3>
              <p className="text-gray-700">
                No. We work with couples planning Indian weddings anywhere in the USA. Most of our services are virtual
                (video consultations, digital planning tools), and for full planning clients, we travel to your location
                for key events.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Can you help with sourcing outfits and jewelry from India?</h3>
              <p className="text-gray-700">
                Yes. Cultural Sourcing Support is available as a standalone service or add-on. We provide guidance on
                what to source from India vs USA, timelines for international coordination, and trusted vendor
                recommendations based on your needs.{" "}
                <a href="/blog/wedding-shopping-india-vs-usa" className="text-blue-600 hover:underline">
                  Read our India vs USA sourcing guide →
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What cultural traditions do you understand?</h3>
              <p className="text-gray-700">
                We work with Hindu (Gujarati, Punjabi, South Indian, Bengali, Marathi), Sikh, Jain, and
                fusion/interfaith weddings. We understand regional ceremony differences, multi-day event logistics, and
                how to balance traditional expectations with modern preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How does virtual wedding planning work?</h3>
              <p className="text-gray-700">
                We conduct planning sessions via Zoom, share digital planning tools and timelines, research vendors in
                your local area, and can join virtual vendor meetings with you. For full planning clients, we travel to
                your location for the wedding weekend and key events as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

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
