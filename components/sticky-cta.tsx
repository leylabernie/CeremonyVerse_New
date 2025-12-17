"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "@/components/icons"
import Link from "next/link"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-sans font-semibold text-foreground">Ready to start planning?</p>
            <p className="font-sans text-sm text-muted-foreground">Get your free consultation today</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button size="lg" variant="outline" asChild className="flex-1 sm:flex-none bg-transparent">
              <a href="tel:+12153419990">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="font-sans flex-1 sm:flex-none bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                <Calendar className="h-4 w-4 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
