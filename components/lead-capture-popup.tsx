"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Sparkles, Gift } from "@/components/icons"

export default function LeadCapturePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("ceremonyverse_popup_dismissed")
    const hasSubmitted = localStorage.getItem("ceremonyverse_popup_submitted")

    if (hasSeenPopup || hasSubmitted) {
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 45000)

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 60 && !isVisible) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isVisible])

  const handleClose = () => {
    localStorage.setItem("ceremonyverse_popup_dismissed", "true")
    setIsVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("ceremonyverse_popup_submitted", "true")
    window.location.href = `/thank-you?email=${encodeURIComponent(email)}`
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-in slide-in-from-bottom duration-500">
        <button
          onClick={handleClose}
          className="font-sans absolute top-4 right-4 text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 rounded-full p-1 transition-all"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6">
              <Gift className="font-sans w-8 h-8 text-primary" />
            </div>

            <h3 className="font-sans font-serif text-3xl text-charcoal text-center mb-4">Get Your Free Wedding Planning Guide</h3>

            <p className="font-sans text-charcoal/70 text-center mb-6 leading-relaxed">
              Download our comprehensive guide:{" "}
              <strong>"10 Essential Steps for Planning an Authentic Indian-American Fusion Wedding"</strong>
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="font-sans text-sm text-charcoal/80 mb-2 font-medium">You'll also get:</p>
              <ul className="font-sans text-sm text-charcoal/70 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="font-sans text-secondary mt-0.5">✓</span>
                  <span>Budget planning worksheet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-sans text-secondary mt-0.5">✓</span>
                  <span>Vendor verification checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-sans text-secondary mt-0.5">✓</span>
                  <span>Timeline templates for fusion weddings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-sans text-secondary mt-0.5">✓</span>
                  <span>Exclusive early access to special offers</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                aria-label="Email address"
              />

              <button
                type="submit"
                className="font-sans w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Download Free Guide Now
              </button>
            </form>

            <p className="font-sans text-xs text-charcoal/50 text-center mt-4">We respect your privacy. Unsubscribe anytime.</p>
          </>
        ) : (
          <div className="font-sans text-center py-8">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-6">
              <Sparkles className="font-sans w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-sans font-serif text-2xl text-charcoal mb-4">Thank You!</h3>
            <p className="font-sans text-charcoal/70">Check your email for your free wedding planning guide and resources.</p>
          </div>
        )}
      </div>
    </div>
  )
}
