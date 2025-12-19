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
    <header className="sticky top-0 z-40 bg-[#F7F2EA]/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-page px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="CeremonyVerse" width={160} height={40} className="h-10 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-cvInk/80">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-cvInk font-medium transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book" className="hidden md:inline text-sm text-cvInk/80 hover:text-cvInk font-medium">
            Book a Call
          </Link>
          <Button href="/start-planning" variant="default">
            Start Planning
          </Button>
        </div>
      </div>
    </header>
  )
}
