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
              <Link href="/start-planning" className="hover:text-cvInk transition-colors">
                Start Planning
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-medium mb-3">Help</div>
          <ul className="space-y-2 text-cvMuted">
            <li>
              <Link href="/faq" className="hover:text-cvInk transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cvInk transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-cvInk transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-cvInk transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-medium mb-3">Connect</div>
          <ul className="space-y-2 text-cvMuted">
            <li>
              <a
                href="https://www.instagram.com/ceremonyverse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cvInk transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/ceremonyverse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cvInk transition-colors"
              >
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ceremonyverse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cvInk transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cvBorder">
        <div className="mx-auto max-w-page px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cvMuted">
          <p>&copy; {new Date().getFullYear()} CeremonyVerse. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-cvInk transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-cvInk transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-cvInk transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
