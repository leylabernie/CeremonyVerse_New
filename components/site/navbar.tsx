import Link from "next/link"

const nav = [
  { href: "/shop-from-india", label: "Shop From India" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Services" },
  { href: "/our-story", label: "About" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cvBg/95 backdrop-blur border-b border-cvBorder">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg text-charcoal tracking-tight"
        >
          CeremonyVerse
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm md:text-base">
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

        {/* CTA */}
        <Link
          href="/shop-from-india"
          className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
        >
          Start Sourcing
        </Link>

      </div>
    </header>
  )
}
