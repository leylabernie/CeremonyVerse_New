import Link from "next/link"
import Image from "next/image"

/**
 * Top-level navigation component for CeremonyVerse.
 *
 * Updated navigation structure:
 *
 * - Promotes "Shop From India" as a core service since CeremonyVerse now
 *   provides outfit sourcing from India for US-based couples.
 * - Keeps the navigation clean without listing every sourcing page individually.
 * - The sourcing hub page links to lehenga, sherwani, bridesmaids,
 *   shipping and buying guides internally.
 *
 * Other navigation simplifications remain:
 * - "Journeys" appears inside Resources
 * - "Portfolio" removed until gallery is ready
 */

  const nav = [
  { href: "/home", label: "Home" },

  { href: "/indian-wedding-outfits-from-india", label: "Outfit Sourcing" },

  { href: "/services", label: "Services" },

  { href: "/shop-from-india", label: "Shop From India" },

  // Destination weddings
  { href: "/indian-destination-wedding-planner-mexico", label: "Destinations" },

  // Educational resources
  { href: "/resources", label: "Resources" },

  { href: "/blog", label: "Blog" },

  { href: "/pricing", label: "Pricing" },

  { href: "/our-story", label: "About" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cvBg/95 backdrop-blur border-b border-cvBorder">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">

        {/* Centered logo */}
        <div className="flex justify-center mb-3">
          <Link href="/" className="flex items-center justify-center">
  <Image
    src="/logo.svg"
    alt="CeremonyVerse"
    width={500}
    height={500}
    className="h-[120px] w-auto md:h-[150px]"
    priority
  />
</Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1">
          {nav.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="cv-nav-link px-4 text-cvMuted hover:text-cvText transition-colors"
              >
                {item.label}
              </Link>

              {index < nav.length - 1 && (
                <span className="text-foreground/30">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile navigation */}
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
