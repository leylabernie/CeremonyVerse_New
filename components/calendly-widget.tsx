"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "@/components/icons"

export function CalendlyWidget() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load Calendly widget script when modal opens
    if (isOpen) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [isOpen])

  const calendlyUrl =
    "https://calendly.com/newglamour25/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=8b2346"

  return (
    <>
      {/* Floating Calendly Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="font-sans fixed bottom-24 right-6 z-40 bg-gradient-to-r from-primary via-primary to-accent text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] shadow-2xl rounded-full h-14 px-6 flex items-center gap-2 transition-all duration-300 hover:scale-105 ring-2 ring-accent/20 hover:ring-accent/40"
      >
        <Calendar className="h-5 w-5" />
        <span className="hidden sm:inline font-semibold">Schedule a Free Consultation</span>
      </Button>

      {/* Calendly Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-[80vh]">
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
