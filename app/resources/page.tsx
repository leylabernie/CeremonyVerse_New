import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources & Tools",
  description: "Free wedding planning tools, calculators, guides, and resources for Indian and fusion weddings.",
}

export default function ResourcesPage() {
  const tools = [
    {
      title: "Budget Calculator",
      href: "/budget-planner",
      description: "Plan your wedding budget with our comprehensive calculator tool.",
    },
    {
      title: "Wedding Glossary",
      href: "/wedding-glossary",
      description: "Understand Indian wedding terminology and traditions.",
    },
    {
      title: "Guest Estimator",
      href: "/guest-estimator",
      description: "Calculate your guest list and seating arrangements.",
    },
    {
      title: "Menu Planner",
      href: "/menu-planner",
      description: "Plan your wedding menu with our interactive tool.",
    },
  ]

  const guides = [
    {
      title: "Heritage & Harmony Guide",
      href: "/heritage-harmony-guide",
      description: "Navigate multicultural wedding planning with confidence.",
    },
    {
      title: "India Shopping Lookbook",
      href: "/shopping-from-india",
      description: "Source authentic wedding items from India.",
    },
    {
      title: "Wedding Planning Blog",
      href: "/blog",
      description: "Expert advice, tips, and inspiration for your wedding.",
    },
  ]

  const forms = [
    {
      title: "Client Intake Form",
      href: "/forms/new-client-intake",
      description: "Start your planning journey with us.",
    },
    {
      title: "Virtual Shopping Form",
      href: "/forms/virtual-shopping",
      description: "Request virtual shopping assistance from India.",
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-cvInk mb-4">Resources & Tools</h1>
          <p className="text-lg text-cvMuted">
            Free planning tools, guides, and resources to help you plan your perfect Indian or fusion wedding.
          </p>
        </div>
      </Section>

      <Section variant="default">
        <h2 className="font-serif text-3xl tracking-tight text-cvInk mb-8">Planning Tools</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-lg mb-2">{tool.title}</h3>
                <p className="text-sm text-cvMuted">{tool.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="warm2">
        <h2 className="font-serif text-3xl tracking-tight text-cvInk mb-8">Guides & Inspiration</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-lg mb-2">{guide.title}</h3>
                <p className="text-sm text-cvMuted">{guide.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <h2 className="font-serif text-3xl tracking-tight text-cvInk mb-8">Planning Forms</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {forms.map((form) => (
            <Link key={form.href} href={form.href} className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-lg mb-2">{form.title}</h3>
                <p className="text-sm text-cvMuted">{form.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
