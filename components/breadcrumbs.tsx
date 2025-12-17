"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "@/components/icons"

export function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  // Map path segments to readable names
  const segmentNames: Record<string, string> = {
    "our-story": "About Us",
    services: "Services",
    portfolio: "Portfolio",
    "heritage-harmony": "Heritage & Harmony",
    "free-resources": "Resources & Tools",
    "bridal-party-coordination": "Outfit Coordination",
    "wedding-glossary": "Wedding Glossary",
    "budget-planner": "Budget Calculator",
    blog: "Blog",
    contact: "Contact",
    "book-consultation": "Schedule a Free Consultation",
    "wedding-journeys": "Wedding Journeys",
    faq: "FAQ",
    "how-it-works": "How It Works",
    testimonials: "Testimonials",
    "privacy-policy": "Privacy Policy",
    "terms-of-service": "Terms of Service",
    "indian-wedding-planner-new-jersey": "Indian Wedding Planner New Jersey",
    "indian-wedding-planner-new-york": "Indian Wedding Planner New York",
    "indian-wedding-planner-california": "Indian Wedding Planner California",
    "mexico-indian-destination-weddings": "Mexico Destination Weddings",
  }

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const name = segmentNames[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    const isLast = index === segments.length - 1

    return { href, name, isLast }
  })

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center gap-2 text-sm font-sans">
        <li>
          <Link href="/" className="flex items-center gap-1 text-charcoal/60 hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-charcoal/40" />
            {crumb.isLast ? (
              <span className="text-primary font-medium" aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link href={crumb.href} className="text-charcoal/60 hover:text-primary transition-colors">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
