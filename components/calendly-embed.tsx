"use client"

import { useEffect } from "react"

/**
 * CalendlyEmbed Component
 *
 * Embeds the Calendly scheduling widget for booking consultations.
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a free Calendly account at https://calendly.com/signup
 * 2. Set up your event type (e.g., "Free Wedding Consultation - 30 min")
 * 3. Get your Calendly URL (e.g., https://calendly.com/yourusername/30min)
 * 4. Replace the calendlyUrl below with your actual Calendly URL
 * 5. Customize your availability in Calendly dashboard
 * https://calendly.com/newglamour25/new-meeting
 * TEMPORARY DEMO:
 * Currently using a demo Calendly link. You MUST replace this with your real account.
 */

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  // IMPORTANT: Replace this URL with your actual Calendly account URL
  // Example: "https://calendly.com/ceremonyverse/consultation"
  // Until Calendly is set up, we'll show a contact form fallback
  const calendlyUrl =
    "https://calendly.com/newglamour25/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=8b2346" // Set to empty until you create your Calendly account

  // Show fallback if no Calendly URL is configured
  if (!calendlyUrl) {
    return (
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="font-serif text-3xl text-primary mb-4">Schedule Your Consultation</h3>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Ready to start planning your perfect fusion wedding? Let's connect!
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-xl text-foreground mb-3">Call Us Directly</h4>
              <a
                href="tel:+12153419990"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1-215-341-9990
              </a>
              <p className="text-sm text-foreground/60 mt-3">Mon-Fri: 9am-7pm EST | Sat: 10am-4pm EST</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-xl text-foreground mb-3">Send Us a Message</h4>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Form
              </a>
              <p className="text-sm text-foreground/60 mt-3">We respond within 24 hours</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-foreground/10">
            <p className="text-sm text-foreground/60 mb-3">
              📅 <strong>Want to set up online booking?</strong>
            </p>
            <ol className="text-left text-sm text-foreground/70 space-y-2 max-w-md mx-auto">
              <li>
                1. Create free{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Calendly account
                </a>
              </li>
              <li>2. Set up "Free Wedding Consultation - 30 min" event</li>
              <li>
                3. Update <code className="bg-foreground/10 px-2 py-1 rounded text-xs">calendlyUrl</code> in{" "}
                <code className="bg-foreground/10 px-2 py-1 rounded text-xs">components/calendly-embed.tsx</code>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="calendly-inline-widget-container bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Calendly inline widget */}
      <div className="calendly-inline-widget" data-url={calendlyUrl} style={{ minWidth: "320px", height: "700px" }} />
    </div>
  )
}
