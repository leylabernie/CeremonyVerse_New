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
              <Link href="/how-it-works" className="hover:text-cvInk transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/our-story" className="hover:text-cvInk transition-colors">
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-medium mb-3">Legal</div>
          <ul className="space-y-2 text-cvMuted">
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
      </div>

      <div className="border-t border-cvBorder bg-gray-50 py-8 px-4">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <h3 className="font-serif text-gray-900 mb-4 text-base">Important Disclaimers</h3>
          <div className="grid md:grid-cols-2 gap-4 text-xs leading-relaxed font-sans">
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Religious & Cultural Information:</span> Information about
                wedding ceremonies, traditions, and religious customs provided on this website is for general
                educational purposes only. Always consult with your family priest, religious advisor, or community
                elders for authoritative guidance on religious ceremonies specific to your tradition.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Budget & Financial Information:</span> Budget estimates
                and financial planning tools are based on general market research. Actual wedding costs vary
                significantly. All information is provided for informational purposes only and should not be considered
                financial advice.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">AI-Generated Content:</span> Some content and
                recommendations are generated using artificial intelligence. While we strive for accuracy, AI-generated
                content may contain errors. All AI-generated content should be independently verified.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Wedding Planning Services:</span> CeremonyVerse provides
                wedding planning and coordination services but does not guarantee specific outcomes. We are not liable
                for vendor failures, venue problems, or circumstances beyond our reasonable control.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cvBorder py-6 bg-cvSand">
        <div className="mx-auto max-w-page px-5 md:px-8 text-xs text-cvMuted text-center md:text-left font-sans">
          © {new Date().getFullYear()} CeremonyVerse. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
