import Link from "next/link"

const nav = [
  { href: "/", label: "Home" },
  { href: "/indian-wedding-outfits-from-india", label: "Outfit Sourcing" },
  { href: "/services", label: "Services" },
  { href: "/shop-from-india", label: "Shop From India" },
  { href: "/indian-destination-wedding-planner-mexico", label: "Destinations" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/our-story", label: "About" }
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cvBg/95 backdrop-blur border-b border-cvBorder">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
        <nav className="flex items-center justify-center gap-6 text-sm md:text-base">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-charcoal/80 hover:text-charcoal transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
