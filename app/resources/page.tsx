import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { InternalCTA } from "@/components/internal-cta"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources & Tools",
  description:
    "Free wedding planning tools, calculators, guides, and resources for Indian and fusion weddings.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/resources",
  },
}

const resources = [
  {
    title: "AI Budget Calculator",
    href: "/budget-calculator",
    description:
      "Get personalized AI-powered budget recommendations for your Indian or fusion wedding.",
    icon: "🤖",
  },
    {
    title: "Budget Planner",
    href: "/budget-planner",
    description:
      "Plan your wedding budget with our comprehensive calculator tool.",
    icon: "💰",
  },
  {
    title: "Wedding Glossary",
    href: "/wedding-glossary",
    description:
      "Understand Indian wedding terminology and traditions.",
    icon: "📖",
  },
  {
    title: "Free Resources",
    href: "/free-resources",
    description:
      "Download free wedding planning templates and guides.",
    icon: "📋",
  },
  {
    title: "Wedding Journeys",
    href: "/wedding-journeys",
    description:
      "Explore real couples' stories and itineraries for inspiration.",
    icon: "🗺️",
  },
  {
    title: "Start Planning",
    href: "/start-planning",
    description:
      "Begin your wedding planning journey with our Budget + Vision Form.",
    icon: "🎯",
  },
  {
    title: "Blog",
    href: "/blog",
    description:
      "Expert advice, tips, and inspiration for your Indian or fusion wedding.",
    icon: "✍️",
  },

  // Outfit sourcing guides
  {
    title: "Shop Wedding Outfits From India",
    href: "/shop-from-india",
    description:
      "Learn how CeremonyVerse helps US couples source bridal lehengas, sherwanis, and wedding outfits directly from India.",
    icon: "🛍️",
  },
  {
    title: "Buy Indian Wedding Outfits Online (USA)",
    href: "/buy-indian-wedding-outfits-online-usa",
    description:
      "Guide for couples in the United States looking to buy Indian wedding outfits online.",
    icon: "💻",
  },
  {
    title: "How to Buy Indian Wedding Outfits From India",
    href: "/how-to-buy-indian-wedding-outfits-from-india",
    description:
      "Understand sizing, designer coordination, and production timelines when ordering outfits from India.",
    icon: "📦",
  },
  {
    title: "Shipping Indian Wedding Outfits to the USA",
    href: "/indian-wedding-outfits-shipping-to-usa",
    description:
      "Everything you need to know about international shipping, customs, and delivery timelines.",
    icon: "✈️",
  },
  {
  title: "Indian Wedding Outfit Timeline",
  href: "/indian-wedding-outfit-timeline",
  description:
    "Recommended timeline for ordering bridal lehengas, sherwanis, and bridesmaid outfits for weddings in the United States.",
  icon: "⏱️",
},
  {
  title: "What to Wear to an Indian Wedding",
  href: "/what-to-wear-indian-wedding",
  description:
    "Complete guide for wedding guests choosing outfits for Indian ceremonies including lehengas, sarees, and sherwanis.",
  icon: "👗",
},
]

export default function ResourcesPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-text mb-4">
            Wedding Planning Resources
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Expert guides, tools, and resources for planning Indian and fusion
            weddings.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="block group">
              <Card
                hover
                className="h-full p-6 transition-all duration-200 group-hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-text text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <InternalCTA />
    </>
  )
}
