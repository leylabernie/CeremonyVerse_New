"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "@/components/icons"
import { useState } from "react"
import Logo from "@/components/logo"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const linkStyles = (href: string) =>
    `font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium rounded-sm transition-all ${
      isActive(href)
        ? "text-cvAccent bg-cvAccent/10 border-b-2 border-cvAccent"
        : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/98 backdrop-blur-md border-b border-warm-beige/40">
      <div className="hidden lg:block bg-cvAccent text-white py-1.5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between text-sm">
          <span className="font-light">Your Heritage, Your Harmony - Personalized Wedding Planning</span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+12153419990"
              rel="noopener"
              className="flex items-center gap-2 font-medium hover:text-cvAccentHover transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+1-215-341-9990</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 py-2">
          <Link href="/" className="flex items-center group transition-all">
            <div className="flex items-center gap-3">
              <Logo className="w-80 h-24 group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className={linkStyles("/")}>
              Home
            </Link>

            <Link href="/services" className={linkStyles("/services")}>
              Services
            </Link>

            <Link href="/heritage-harmony" className={linkStyles("/heritage-harmony")}>
              Heritage & Harmony
            </Link>

            <Link href="/portfolio" className={linkStyles("/portfolio")}>
              Portfolio
            </Link>

            <Link href="/blog" className={linkStyles("/blog")}>
              Blog
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <Link
                href="/free-resources"
                className={`font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium rounded-sm transition-all inline-block ${
                  isActive("/heritage-harmony-guide") ||
                  isActive("/shopping-from-india") ||
                  isActive("/forms") ||
                  isActive("/free-resources")
                    ? "text-cvAccent bg-cvAccent/10 border-b-2 border-cvAccent"
                    : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
                }`}
              >
                Resources
              </Link>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-sm border border-warm-beige/40 py-2 z-50">
                  <Link
                    href="/heritage-harmony-guide"
                    className="block px-4 py-2 text-sm text-cvInk hover:bg-warm-beige/30 hover:text-cvAccent transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    Heritage & Harmony Guide
                  </Link>
                  <Link
                    href="/shopping-from-india"
                    className="block px-4 py-2 text-sm text-cvInk hover:bg-warm-beige/30 hover:text-cvAccent transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    India Shopping Lookbook
                  </Link>
                  <div className="border-t border-warm-beige/40 my-2" />
                  <Link
                    href="/forms/new-client-intake"
                    className="block px-4 py-2 text-sm text-cvInk hover:bg-warm-beige/30 hover:text-cvAccent transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    New Client Intake Form
                  </Link>
                  <Link
                    href="/forms/virtual-shopping"
                    className="block px-4 py-2 text-sm text-cvInk hover:bg-warm-beige/30 hover:text-cvAccent transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    Virtual Shopping Form
                  </Link>
                  <Link
                    href="/forms/mexico-pre-consult"
                    className="block px-4 py-2 text-sm text-cvInk hover:bg-warm-beige/30 hover:text-cvAccent transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    Mexico Pre-Consult Form
                  </Link>
                  <div className="border-t border-warm-beige/40 my-2" />
                  <Link
                    href="/free-resources"
                    className="block px-4 py-2 text-sm text-cvInk hover:bg-warm-beige/30 hover:text-cvAccent transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    Free Resources
                  </Link>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 ml-3 pl-3 border-l border-warm-beige/40">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center bg-cvAccent text-white hover:bg-cvAccentHover hover:text-white shadow-md text-base font-sans font-semibold px-6 py-2.5 rounded-md transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+12153419990"
              rel="noopener"
              className="p-2 hover:bg-warm-beige/30 rounded-sm transition-colors text-cvAccent"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="p-2 hover:bg-warm-beige/30 rounded-sm transition-colors text-cvInk"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-warm-beige/40">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={`font-sans px-4 py-3 text-[15px] font-medium rounded-sm transition-all ${
                  isActive("/")
                    ? "text-cvAccent bg-cvAccent/10"
                    : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`font-sans px-4 py-3 text-[15px] font-medium rounded-sm transition-all ${
                  isActive("/services")
                    ? "text-cvAccent bg-cvAccent/10"
                    : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/heritage-harmony"
                className={`font-sans px-4 py-3 text-[15px] font-medium rounded-sm transition-all ${
                  isActive("/heritage-harmony")
                    ? "text-cvAccent bg-cvAccent/10"
                    : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Heritage & Harmony
              </Link>
              <Link
                href="/portfolio"
                className={`font-sans px-4 py-3 text-[15px] font-medium rounded-sm transition-all ${
                  isActive("/portfolio")
                    ? "text-cvAccent bg-cvAccent/10"
                    : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className={`font-sans px-4 py-3 text-[15px] font-medium rounded-sm transition-all ${
                  isActive("/blog")
                    ? "text-cvAccent bg-cvAccent/10"
                    : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/free-resources"
                className={`font-sans px-4 py-3 text-[15px] font-medium rounded-sm transition-all ${
                  isActive("/free-resources")
                    ? "text-cvAccent bg-cvAccent/10"
                    : "text-cvInk hover:text-cvAccent hover:bg-warm-beige/30"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="px-4 py-3 pl-8">
                <div className="space-y-2">
                  <Link
                    href="/heritage-harmony-guide"
                    className="block font-sans text-sm text-cvMuted hover:text-cvAccent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Heritage & Harmony Guide
                  </Link>
                  <Link
                    href="/shopping-from-india"
                    className="block font-sans text-sm text-cvMuted hover:text-cvAccent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    India Shopping Lookbook
                  </Link>
                  <Link
                    href="/forms/new-client-intake"
                    className="block font-sans text-sm text-cvMuted hover:text-cvAccent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    New Client Intake Form
                  </Link>
                  <Link
                    href="/forms/virtual-shopping"
                    className="block font-sans text-sm text-cvMuted hover:text-cvAccent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Virtual Shopping Form
                  </Link>
                  <Link
                    href="/forms/mexico-pre-consult"
                    className="block font-sans text-sm text-cvMuted hover:text-cvAccent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mexico Pre-Consult Form
                  </Link>
                  <Link
                    href="/free-resources"
                    className="block font-sans text-sm text-cvMuted hover:text-cvAccent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Free Resources
                  </Link>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-warm-beige/40 space-y-3">
                <a
                  href="tel:+12153419990"
                  rel="noopener"
                  className="font-sans flex items-center gap-2 px-4 py-3 text-[15px] font-semibold text-cvAccent hover:text-cvAccentHover transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1-215-341-9990</span>
                </a>
                <Link
                  href="/book-consultation"
                  className="block w-full text-center bg-cvAccent text-white hover:bg-cvAccentHover hover:text-white font-sans font-semibold py-3 px-6 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
