import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-cvBorder bg-cvBg">
      <div className="mx-auto max-w-page px-5 md:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="font-semibold">CeremonyVerse</div>
          <p className="mt-2 text-sm text-cvMuted">Indian & fusion wedding planning with cultural clarity.</p>
        </div>

        <div className="text-sm">
          <div className="font-medium">Explore</div>
          <ul className="mt-3 space-y-2 text-cvMuted">
            <li>
              <Link href="/services" className="hover:text-cvInk">
                Services
              </Link>
            </li>
            <li>
              <Link href="/wedding-journeys" className="hover:text-cvInk">
                Wedding Journeys
              </Link>
            </li>
            <li>
              <Link href="/start-planning" className="hover:text-cvInk">
                Start Planning
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-medium">Help</div>
          <ul className="mt-3 space-y-2 text-cvMuted">
            <li>
              <Link href="/faq" className="hover:text-cvInk">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-cvInk">
                How It Works
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-cvMuted">
            <li>
              <Link href="/privacy-policy" className="hover:text-cvInk">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-cvInk">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cvBorder py-6">
        <div className="mx-auto max-w-page px-5 md:px-8 text-xs text-cvMuted">
          © {new Date().getFullYear()} CeremonyVerse. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
