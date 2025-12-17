import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Pinterest } from "@/components/icons"

export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-charcoal border-t border-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="font-serif text-3xl font-light text-white tracking-tight hover:text-accent transition-colors"
            >
              CeremonyVerse
            </Link>
            <p className="font-sans text-sm text-white/60 uppercase tracking-wider">Your Heritage, Your Harmony</p>
            <p className="font-sans text-white/70 leading-relaxed">
              Expert Indian wedding planning for Indian and multicultural fusion weddings across the USA. Verified
              vendors, clear contracts, and cultural expertise.
            </p>

            <div className="pt-4 space-y-3">
              <a
                href="tel:+12153419990"
                className="flex items-center gap-3 text-white hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">+1-215-341-9990</span>
              </a>
              <a
                href="mailto:hello@ceremonyverse.com"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>hello@ceremonyverse.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5" />
                <span>Serving USA Nationwide</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-accent text-charcoal rounded-sm hover:bg-accent/90 transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-sans font-medium text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="font-sans text-white/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/heritage-harmony" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Heritage & Harmony
                </Link>
              </li>
              <li>
                <Link
                  href="/bridal-party-coordination"
                  className="font-sans text-white/70 hover:text-accent transition-colors"
                >
                  Outfit Coordination
                </Link>
              </li>
              <li>
                <Link href="/wedding-journeys" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Wedding Journeys
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-sans font-medium text-white text-sm uppercase tracking-wider">Resources & Tools</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/heritage-harmony-guide"
                  className="font-sans text-white/70 hover:text-accent transition-colors"
                >
                  Heritage & Harmony Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping-from-india"
                  className="font-sans text-white/70 hover:text-accent transition-colors"
                >
                  India Shopping Lookbook
                </Link>
              </li>
              <li>
                <Link
                  href="/forms/new-client-intake"
                  className="font-sans text-white/70 hover:text-accent transition-colors"
                >
                  Client Intake Form
                </Link>
              </li>
              <li>
                <Link
                  href="/forms/virtual-shopping"
                  className="font-sans text-white/70 hover:text-accent transition-colors"
                >
                  Virtual Shopping Form
                </Link>
              </li>
              <li>
                <Link
                  href="/forms/mexico-pre-consult"
                  className="font-sans text-white/70 hover:text-accent transition-colors"
                >
                  Mexico Pre-Consult Form
                </Link>
              </li>
              <li>
                <Link href="/free-resources" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/budget-planner" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Budget Calculator
                </Link>
              </li>
              <li>
                <Link href="/wedding-glossary" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Wedding Glossary
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="font-sans text-white/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="font-sans text-white/70 hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="font-sans font-medium text-white text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Schedule a Free Consultation
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="font-sans text-white/70 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <p className="font-sans text-sm font-medium text-white mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/839146832623298"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1877F2] transition-transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://pinterest.com/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Pinterest"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#E60023] transition-transform hover:scale-110"
                >
                  <Pinterest className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-white/60">© 2025 CeremonyVerse. All rights reserved.</p>
          <div className="font-sans flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-white/60">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-accent transition-colors">
              Refund & Deposit Policy
            </Link>
            <Link href="/sourcing-disclaimer" className="hover:text-accent transition-colors">
              Sourcing Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
