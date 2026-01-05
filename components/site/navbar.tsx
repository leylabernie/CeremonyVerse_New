import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "/home", label: "Home" },
  { href: "/services", label: "Services" },
  // Highlight our virtual shopping service with a concise label
  { href: "/shopping-from-india", label: "Shop" },
  // Shortened label to improve readability
  { href: "/wedding-journeys", label: "Journeys" },
  // Shortened label to improve readability
  { href: "/indian-destination-wedding-planner-mexico", label: "Destinations" },
  { href: "/resources", label: "Resources" },
  // New: link to our portfolio gallery so couples can see past weddings and outfit examples
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/our-story", label: "About" },
  // Removed duplicate 'Shopping' entry to avoid confusion
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cvBg/95 backdrop-blur border-b border-cvBorder">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
        {/* Centered logo */}
        <div className="flex justify-center mb-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="CeremonyVerse - Wedding Planning + Cultural Sourcing"
              width={500}
              height={500}
              className="h-[120px] w-auto md:h-[150px]"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-1">
          {nav.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <Link href={item.href} className="cv-nav-link px-4 text-cvMuted hover:text-cvText transition-colors">
                {item.label}
              </Link>
              {index < nav.length - 1 && <span className="text-foreground/30">|</span>}
            </div>
          ))}
        </nav>

        {/* Mobile menu - keeping font-sans for readability */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          <nav className="flex flex-wrap items-center justify-center gap-4 text-[14px] font-medium text-cvInk">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
