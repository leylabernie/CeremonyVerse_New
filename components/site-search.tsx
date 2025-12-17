"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, ArrowRight } from "@/components/icons"
import Link from "next/link"

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

const searchableContent: SearchResult[] = [
  // Services
  {
    title: "Full Wedding Planning",
    description: "End-to-end coordination from concept to celebration",
    href: "/services",
    category: "Services",
  },
  {
    title: "Cultural Fusion Weddings",
    description: "Blending Hindu and Christian traditions",
    href: "/heritage-harmony",
    category: "Services",
  },
  {
    title: "Virtual Shopping from India",
    description: "Shop bridal wear, jewelry, decor from India",
    href: "/services",
    category: "Services",
  },
  {
    title: "Day-of Coordination",
    description: "Professional coordination on your wedding day",
    href: "/services",
    category: "Services",
  },

  // Resources
  {
    title: "Wedding Budget Calculator",
    description: "Interactive budget planner for fusion weddings",
    href: "/budget-planner",
    category: "Free Tools",
  },
  {
    title: "12-Month Wedding Checklist",
    description: "Complete planning timeline and tasks",
    href: "/free-resources#checklist",
    category: "Free Tools",
  },
  {
    title: "Auspicious Wedding Dates 2025",
    description: "Hindu muhurat dates for your wedding",
    href: "/free-resources#auspicious-dates",
    category: "Free Tools",
  },
  {
    title: "Wedding Glossary",
    description: "A-Z guide to wedding terms and traditions",
    href: "/wedding-glossary",
    category: "Free Tools",
  },

  // Outfits
  {
    title: "Portfolio & Gallery",
    description: "Browse bridal party ensembles, lehengas, sarees from India",
    href: "/portfolio",
    category: "Portfolio",
  },
  {
    title: "Bridesmaids Lehengas",
    description: "Coordinated lehenga collections for your bridal party",
    href: "/portfolio",
    category: "Portfolio",
  },
  {
    title: "Custom Outfit Styling",
    description: "Personalized bridal party coordination service",
    href: "/portfolio",
    category: "Portfolio",
  },
  {
    title: "Indian Wedding Attire",
    description: "Traditional and fusion wedding outfits",
    href: "/portfolio",
    category: "Portfolio",
  },

  // Blog & Guides
  {
    title: "Indian Wedding Traditions Guide",
    description: "Complete guide to Hindu wedding rituals",
    href: "/blog/indian-wedding-traditions-guide",
    category: "Guides",
  },
  {
    title: "Mehndi Ceremony Guide",
    description: "Everything about the henna ceremony",
    href: "/blog/mehndi-ceremony-guide",
    category: "Guides",
  },
  {
    title: "Fusion Wedding Timeline",
    description: "How to plan a multi-cultural celebration",
    href: "/blog/fusion-wedding-timeline",
    category: "Guides",
  },
  {
    title: "South Asian Wedding Budget Guide",
    description: "Budgeting tips for Indian weddings",
    href: "/blog/south-asian-wedding-budget-guide",
    category: "Guides",
  },

  // Pages
  { title: "Our Story", description: "Learn about CeremonyVerse", href: "/our-story", category: "About" },
  {
    title: "Wedding Journeys",
    description: "Real Indian wedding planning case studies",
    href: "/wedding-journeys",
    category: "Planning",
  },
  { title: "Contact Us", description: "Get in touch with our team", href: "/contact", category: "Contact" },
  {
    title: "Book Consultation",
    description: "Schedule a free planning session",
    href: "/book-consultation",
    category: "Contact",
  },
  { title: "FAQ", description: "Frequently asked questions", href: "/faq", category: "Help" },
]

export default function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    // Keyboard shortcut: Cmd/Ctrl + K to open search
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (query.trim()) {
      const q = query.toLowerCase()
      const filtered = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q),
      )
      setResults(filtered.slice(0, 8))
    } else {
      setResults([])
    }
  }, [query])

  const handleSelect = () => {
    setIsOpen(false)
    setQuery("")
    setResults([])
  }

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-charcoal/60 hover:text-charcoal bg-warm-beige/30 hover:bg-warm-beige/50 rounded-lg transition-colors"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-warm-beige/40">
          <span>⌘</span>K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          {/* Search Panel */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl mx-4 overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, resources, guides..."
                className="flex-1 text-lg outline-none placeholder:text-gray-400"
              />
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded transition-colors">
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query && results.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-2">Try searching for services, guides, or outfits</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="p-2">
                  {results.map((result, i) => (
                    <Link
                      key={i}
                      href={result.href}
                      onClick={handleSelect}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div>
                        <p className="font-medium text-charcoal group-hover:text-primary transition-colors">
                          {result.title}
                        </p>
                        <p className="text-sm text-gray-500">{result.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{result.category}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Quick Links when no query */}
              {!query && (
                <div className="p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Quick Links</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { title: "Budget Calculator", href: "/budget-planner" },
                      { title: "Auspicious Dates", href: "/free-resources#auspicious-dates" },
                      { title: "Portfolio", href: "/portfolio" },
                      { title: "Wedding Glossary", href: "/wedding-glossary" },
                      { title: "Book Consultation", href: "/book-consultation" },
                      { title: "Our Services", href: "/services" },
                    ].map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        onClick={handleSelect}
                        className="p-3 text-sm text-charcoal hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded border">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-white rounded border">↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded border">Enter</kbd>
                  to select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white rounded border">Esc</kbd>
                to close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
