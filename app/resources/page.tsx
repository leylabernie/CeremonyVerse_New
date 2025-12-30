import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { InternalCTA } from "@/components/internal-cta"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources & Tools",
  description: "Free wedding planning tools, calculators, guides, and resources for Indian and fusion weddings.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/resources",
  },
  openGraph: {
    title: "Resources & Tools | CeremonyVerse",
    description: "Free wedding planning tools, guides, and resources for Indian and fusion weddings.",
    url: "https://www.ceremonyverse.com/resources",
    type: "website",
  },
  twitter: {
    title: "Resources & Tools | CeremonyVerse",
    description: "Free wedding planning tools, guides, and resources for Indian and fusion weddings.",
  },
}

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Budget Calculator",
      href: "/budget-calculator",
      description: "Get personalized AI-powered budget recommendations for your Indian or fusion wedding.",
      icon: "🤖",
    },
    {
      title: "Tradition Explainer",
      href: "/tradition-explainer",
      description: "Learn about Indian wedding traditions and their cultural significance with AI assistance.",
      icon: "🕉️",
    },
    {
      title: "Budget Planner",
      href: "/budget-planner",
      description: "Plan your wedding budget with our comprehensive calculator tool.",
      icon: "💰",
    },
    {
      title: "Wedding Glossary",
      href: "/wedding-glossary",
      description: "Understand Indian wedding terminology and traditions.",
      icon: "📖",
    },
    {
      title: "Free Resources",
      href: "/free-resources",
      description: "Download free wedding planning templates and guides.",
      icon: "📋",
    },
    {
      title: "Start Planning",
      href: "/start-planning",
      description: "Begin your wedding planning journey with our Budget + Vision Form.",
      icon: "🎯",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Expert advice, tips, and inspiration for your Indian or fusion wedding.",
      icon: "✍️",
    },
  ]

  return (
    <>
      <section className="py-16 bg-cvBg">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cvInk mb-6 leading-tight">
            Resources &amp; Tools
          </h1>
          <p className="text-lg md:text-xl text-cvMuted font-sans max-w-3xl mx-auto">
            Free planning tools, budget calculators, and cultural guides to help you plan your perfect Indian or fusion wedding.
          </p>
        </div>
      </section>

      <Section variant="surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="block group">
              <Card hover className="h-full p-6 transition-all duration-200 group-hover:shadow-lg">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-text text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <InternalCTA />
    </>
  )
}
