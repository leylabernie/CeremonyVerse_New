"use client"

import { useState, useEffect } from "react"
import { X, AlertCircle } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenExitPopup = localStorage.getItem("ceremonyverse_exit_popup_dismissed")

    if (hasSeenExitPopup) {
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  const handleClose = () => {
    localStorage.setItem("ceremonyverse_exit_popup_dismissed", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-in slide-in-from-top duration-500">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 rounded-full p-1 transition-all"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-accent" />
        </div>

        <h3 className="font-serif text-3xl text-charcoal text-center mb-4">Wait! Don't Miss Out</h3>

        <p className="font-sans text-charcoal/70 text-center mb-6 leading-relaxed text-lg">
          <strong>Only 3 slots remaining for May 2025 weddings!</strong>
        </p>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 mb-6">
          <p className="font-sans text-sm text-charcoal/80 mb-3 font-medium">Book your free consultation now and get:</p>
          <ul className="font-sans text-sm text-charcoal/70 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5 font-bold">✓</span>
              <span>Personalized wedding timeline (worth $500)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5 font-bold">✓</span>
              <span>Detailed budget breakdown for your guest count</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5 font-bold">✓</span>
              <span>Access to our exclusive vendor network</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 font-bold">★</span>
              <span className="font-semibold">Early bird discount: Save $1,000 if you book within 48 hours</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            size="lg"
            asChild
            className="w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg transition-all"
          >
            <Link href="/contact">Book Free Consultation Now</Link>
          </Button>
          <button onClick={handleClose} className="font-sans text-sm text-charcoal/60 hover:text-charcoal transition-colors">
            No thanks, I'll miss this opportunity
          </button>
        </div>
      </div>
    </div>
  )
}
