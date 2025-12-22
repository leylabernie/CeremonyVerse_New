"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Calendar } from "lucide-react"

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg">
      <div className="flex">
        <Link
          href="tel:+12153419990"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-medium"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Link>
        <Link
          href="/book-consultation"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent text-accent-foreground font-medium"
        >
          <Calendar className="h-4 w-4" />
          Book Free Consult
        </Link>
      </div>
    </div>
  )
}
