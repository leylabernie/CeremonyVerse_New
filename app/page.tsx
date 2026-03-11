import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"
import TrustSignals from "@/components/site/trust-signals"
import HomeMexicoPromo from "@/components/home/HomeMexicoPromo"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Indian Wedding Outfit Sourcing From India | CeremonyVerse",
  description:
    "CeremonyVerse helps USA-based couples source bridal lehengas, sherwanis, bridesmaid outfits, jewelry, and ceremony essentials from trusted vendors in India with managed communication, timelines, and shipping support.",
  keywords:
    "buy lehenga from india usa, sherwani from india usa, indian bridesmaid outfits, indian wedding outfits shipping to usa, shop from india wedding outfits, indian wedding sourcing service",
  openGraph: {
    title: "Indian Wedding Outfit Sourcing From India | CeremonyVerse",
    description:
      "Source Indian wedding outfits and ceremony essentials from trusted vendors in India without managing overseas shopping alone.",
    url: "https://ceremonyverse.com",
    siteName: "CeremonyVerse",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CeremonyVerse",
    description:
      "USA-based Indian wedding outfit and cultural sourcing service helping couples source bridal lehengas, sherwanis, jewelry, and ceremony essentials from trusted vendors in India.",
    url: "https://ceremonyverse.com",
    telephone: "+1-215-341-9990",
    email: "bhamini@ceremonyverse.com",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Indian Wedding Outfit Sourcing",
      "Bridal Lehenga Sourcing",
      "Sherwani Sourcing",
      "Indian Bridesmaid Outfit Sourcing",
      "Wedding Jewelry Sourcing",
      "Ceremony Essentials Sourcing",
      "Indian Wedding Planning Support",
      "Destination Wedding Planning Mexico",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CeremonyVerse Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shop From India",
            description:
              "Managed sourcing for bridal lehengas, sherwanis, bridesmaid outfits, jewelry, and ceremony essentials from India.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Outfit Shipping Support",
            description:
              "Guidance on timelines, production coordination, and shipping wedding outfits from India to the USA.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Planning Support",
            description:
              "Optional planning guidance for Indian, fusion, and destination weddings.",
          },
        },
      ],
    },
    knowsAbout: [
      "Indian wedding outfit sourcing",
      "Bridal lehenga sourcing",
      "Sherwani sourcing",
      "Indian bridesmaid outfits",
      "Wedding outfit shipping to USA",
      "Indian wedding jewelry sourcing",
      "Ceremony essentials sourcing",
      "Hindu wedding traditions",
      "Fusion wedding logistics",
      "Destination wedding planning Mexico",
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does CeremonyVerse help source from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CeremonyVerse helps source bridal lehengas, sherwanis, bridesmaid outfits, wedding jewelry, and ceremony essentials from trusted vendors in India for couples based in the USA.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with shipping wedding outfits to the USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We help couples think through production timelines, vendor coordination, and shipping logistics so outfits and related items arrive on time.",
        },
      },
      {
        "@type": "Question",
        name: "Can CeremonyVerse help if I need planning support too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. CeremonyVerse also offers planning support for Indian, fusion, and destination weddings, but outfit sourcing from India is a core service.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work only with couples in Philadelphia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. CeremonyVerse works with USA-based couples virtually for sourcing and planning support, including destination wedding clients.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Section className="pt-12 md:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-warm-2/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="grid gap-12 md:grid-cols-2 md:items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900">
              Indian Wedding Outfit Sourcing From India — Managed From the US
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
              Source bridal lehengas, sherwanis, bridesmaid outfits, jewelry, and ceremony essentials from trusted vendors in India while we manage communication, timelines, and delivery logistics.
            </p>

            <p className="mt-4 text-lg text-charcoal/70">
              CeremonyVerse helps couples avoid the stress of navigating overseas vendors alone. We focus on guided sourcing, clearer coordination, and realistic shipping support for USA-based weddings.
            </p>

            <p className="mt-3 text-charcoal/70">
              <Link href="/shop-from-india" className="underline">
                Learn how our Shop From India sourcing process works →
              </Link>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/shop-from-india">Shop From India</Button>
              <Button href="/services" variant="secondary">
                Explore Planning Support
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link href="/buy-lehenga-from-india" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Bridal Lehenga Sourcing</span>
              </Link>
              <Link href="/buy-sherwani-from-india-usa" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Sherwani Sourcing</span>
              </Link>
              <Link href="/indian-bridesmaid-outfits" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Bridesmaid Outfits</span>
              </Link>
              <Link href="/indian-wedding-outfits-shipping-to-usa" className="flex items-center gap-2 hover:text-primary transition-colors">
  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
  <span>Shipping to USA</span>
</Link>
              <Link href="/indian-wedding-outfits-shipping-to-usa" className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Shipping to USA</span>
              </Link>
            </div>
          </div>
          <Card hover className="overflow-hidden p-0 aspect-[4/5] border-none">
            <Image
              src="/images/Gemini_Generated_Image_1io2yi1io2yi1io2.png"
              alt="Elegant Indian wedding couple in traditional attire"
              width={2560}
              height={1440}
              className="w-full h-full object-cover"
              priority
            />
          </Card>
        </div>
      </Section>

{/* WHO THIS IS FOR & WHAT WE HELP SOURCE */}
<Section className="pt-12 md:pt-16">
  <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
    {/* Who this is for */}
    <div>
      <h2 className="text-2xl font-semibold">Who this is for</h2>
      <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
        <li>Brides seeking authentic Indian bridal lehengas</li>
        <li>Couples coordinating multiple family outfits</li>
        <li>US‑based clients needing help with overseas vendors</li>
      </ul>
    </div>
    {/* What we help source */}
    <div>
      <h2 className="text-2xl font-semibold">What we help source</h2>
      <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
        <li>Bridal lehengas</li>
        <li>Sherwanis</li>
        <li>Bridesmaid & family outfits</li>
        <li>Wedding jewelry & ceremony essentials</li>
      </ul>
    </div>
  </div>
</Section>
     
      <TrustSignals />

      <Section className="py-16">
  <h2 className="text-3xl font-serif text-center">
    Real Outfit Examples
  </h2>

  <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
    Browse real bridal, groom, and wedding party outfit examples available through our curated Etsy shop.
  </p>

  <div className="mt-8 text-center">
    <a
      href="https://desiweddingstudious.etsy.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Browse outfits on Etsy →
    </a>
  </div>
</Section>
      <Section variant="surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-text mb-6">Shop Indian Wedding Outfits From India</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            These are the pages built to help USA-based couples understand what to buy, when to buy it, and how to manage sourcing from India more confidently.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card hover>
              <h3 className="text-lg font-semibold mb-3">Buy Lehenga From India</h3>
              <p className="text-muted-foreground mb-4">
                Bridal lehenga sourcing guidance for USA-based weddings.
              </p>
              <Link href="/buy-lehenga-from-india" className="underline">
                Visit page →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-lg font-semibold mb-3">Buy Sherwani From India</h3>
              <p className="text-muted-foreground mb-4">
                Groom and groomsmen sherwani sourcing support.
              </p>
              <Link href="/buy-sherwani-from-india-usa" className="underline">
                Visit page →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-lg font-semibold mb-3">Indian Bridesmaid Outfits</h3>
              <p className="text-muted-foreground mb-4">
                Coordinated bridesmaid outfit sourcing from India.
              </p>
              <Link href="/indian-bridesmaid-outfits" className="underline">
                Visit page →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-lg font-semibold mb-3">Shipping Wedding Outfits to USA</h3>
              <p className="text-muted-foreground mb-4">
                Timeline and shipping considerations for USA delivery.
              </p>
              <Link href="/indian-wedding-outfits-shipping-to-usa" className="underline">
                Visit page →
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      <Section variant="warm2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-text mb-6">Why Couples Use CeremonyVerse Instead of Shopping Alone</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card hover className="bg-surface">
              <h3 className="font-serif text-lg font-semibold text-text mb-3">Less Vendor Guesswork</h3>
              <p className="text-muted-foreground leading-relaxed">
                We focus on trusted sourcing paths so you are not starting from random Instagram accounts or unknown overseas contacts.
              </p>
            </Card>

            <Card hover className="bg-surface">
              <h3 className="font-serif text-lg font-semibold text-text mb-3">Better Timeline Awareness</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wedding shopping from India often fails because couples start too late. We help you think through lead times and shipping windows earlier.
              </p>
            </Card>

            <Card hover className="bg-surface">
              <h3 className="font-serif text-lg font-semibold text-text mb-3">More Coordinated Shopping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bridal, groom, bridesmaid, and ceremony items can be planned together instead of becoming disconnected purchases.
              </p>
            </Card>

            <Card hover className="bg-surface">
              <h3 className="font-serif text-lg font-semibold text-text mb-3">Planning Support When Needed</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you also need help with traditions, vendor strategy, or destination logistics, planning support is available without overpowering the sourcing side of the business.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-text mb-6">Educational Guides for Traditions, Shopping, and Planning</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            CeremonyVerse also publishes educational resources so couples can better understand traditions, shopping decisions, and wedding logistics before they commit.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/tradition-explainer" className="p-6 rounded-lg bg-warm-2/30 hover:bg-warm-2 transition-colors">
              <span className="font-serif text-lg text-text">Indian Wedding Traditions Explained</span>
            </Link>

            <Link href="/resources" className="p-6 rounded-lg bg-warm-2/30 hover:bg-warm-2 transition-colors">
              <span className="font-serif text-lg text-text">Resources</span>
            </Link>

            <Link href="/blog" className="p-6 rounded-lg bg-warm-2/30 hover:bg-warm-2 transition-colors">
              <span className="font-serif text-lg text-text">Blog</span>
            </Link>

            <Link href="/shop-from-india" className="p-6 rounded-lg bg-warm-2/30 hover:bg-warm-2 transition-colors">
              <span className="font-serif text-lg text-text">Shop From India Process</span>
            </Link>
          </div>
        </div>
      </Section>

      <HomeMexicoPromo />

      <Section variant="surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-text mb-6">
Optional Planning Support (If You Need It)
</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
CeremonyVerse primarily helps couples source authentic Indian wedding outfits from India. Planning support is available for couples who want deeper guidance with traditions, logistics, and timelines.
</p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold mb-3">Outfit Sourcing & Support</h3>
              <p className="text-muted-foreground mb-4">
                Explore the full range of CeremonyVerse support.
              </p>
              <Link href="/services" className="underline">
                View services →
              </Link>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-3">Destination Weddings</h3>
              <p className="text-muted-foreground mb-4">
                Planning help for destination Indian weddings in Mexico.
              </p>
              <Link href="/indian-destination-wedding-planner-mexico" className="underline">
                View Mexico page →
              </Link>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-3">Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Book a consultation to discuss your next step.
              </p>
              <Link href="/book" className="underline">
                <p className="text-sm text-muted-foreground mb-3">
  New to Indian wedding shopping? Start with our outfit sourcing guide.
</p>

<Link
  href="/indian-wedding-outfits-from-india"
  className="underline block mb-4"
>
  <p className="text-sm text-muted-foreground mb-2">
  Or browse ready-to-order outfit examples.
</p>

<a
  href="https://www.etsy.com/shop/DesiWeddingStudioUS?ref=dashboard-header"
  target="_blank"
  rel="noopener noreferrer"
  className="underline block mb-4"
>
  Browse outfits on Etsy →
</a>
  Read the outfit sourcing guide →
</Link>
                Schedule consultation →
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      <Section variant="warm">
        <Card hover className="md:p-14 text-center max-w-3xl mx-auto bg-surface">
          <h2 className="text-text">Ready to start with sourcing, not confusion?</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Start with the sourcing path that makes the most sense for your wedding, then add planning support only if you need it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="/shop-from-india">Shop From India</Button>
            <Button href="/book" variant="secondary">
              Schedule a Free Consultation
            </Button>
          </div>
        </Card>
      </Section>

      <JsonLd data={localBusinessSchema} />
    </>
  )
}
