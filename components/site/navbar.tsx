import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "/services", label: "Services" },
  { href: "/wedding-journeys", label: "Wedding Journeys" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/our-story", label: "About" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cvBg/95 backdrop-blur border-b border-cvBorder">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        {/* Centered logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CeremonyVerse - Indian Fusion Wedding & Sourcing"
              width={400}
              height={200}
              className="h-[120px] w-auto md:h-[150px]"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-1">
          {nav.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="font-serif text-[13px] uppercase tracking-[0.22em] font-medium text-foreground/80 hover:text-foreground transition px-4 py-1"
              >
                {item.label}
              </Link>
              {index < nav.length - 1 && <span className="text-foreground/30">|</span>}
            </div>
          ))}
        </nav>

        {/* Mobile menu - simplified */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          <nav className="flex flex-wrap items-center justify-center gap-4 text-[14px] font-medium text-cvInk">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif uppercase tracking-[0.15em] hover:text-cvAccent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/start-planning" variant="default" size="sm">
            Start Planning
          </Button>
        </div>

        {/* Desktop CTA below menu */}
        <div className="hidden lg:flex justify-center mt-5">
          <Button href="/start-planning" variant="default" size="lg">
            Start Planning
          </Button>
        </div>
      </div>
    </header>
  )
}
