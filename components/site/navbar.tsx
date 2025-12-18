import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "/services", label: "Services" },
  { href: "/wedding-journeys", label: "Wedding Journeys" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/our-story", label: "About" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-page px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="CeremonyVerse" width={160} height={40} className="h-10 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-text">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book" className="hidden md:inline text-sm text-muted hover:text-text">
            Book a Call
          </Link>
          <Button href="/start-planning">Start Planning</Button>
        </div>
      </div>
    </header>
  )
}
