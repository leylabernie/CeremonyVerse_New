import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-cvBorder bg-cvBg font-sans mt-16">
      <div className="mx-auto max-w-page px-5 md:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="font-semibold font-serif text-lg">CeremonyVerse</div>
          <p className="mt-2 text-sm text-cvMuted">Indian & fusion wedding planning with cultural clarity.</p>
        </div>

        <div className="text-sm">
          <div className="font-medium mb-3">Explore</div>
          <ul className="space-y-2 text-cvMuted">
            <li>
              <Link href="/services" className="hover:text-cvInk transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/wedding-journeys" className="hover:text-cvInk transition-colors">
                Wedding Journeys
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-cvInk transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-cvInk transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/indian-destination-wedding-planner-mexico" className="hover:text-cvInk transition-colors">
                Mexico Destination Weddings
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-cvMuted">
            <li>
              <Link href="/our-story" className="hover:text-cvInk transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-cvInk transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cvInk transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-medium mb-3">Legal</div>
          <ul className="space-y-2 text-cvMuted">
            <li>
              <Link href="/privacy" className="hover:text-cvInk transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cvInk transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cvBorder py-6">
        <p className="text-center text-sm text-cvMuted">
          &copy; {new Date().getFullYear()} CeremonyVerse. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
