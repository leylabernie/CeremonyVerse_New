"use client"

import Script from "next/script"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

const GA_MEASUREMENT_ID = "G-P49VF9FMV5"
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    // Track page view
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

export function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (!META_PIXEL_ID) return

    // Track page view
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "PageView")
    }
  }, [pathname])

  if (!META_PIXEL_ID) {
    return null
  }

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Track custom events
export function trackEvent(eventName: string, params?: Record<string, any>) {
  // Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag && GA_MEASUREMENT_ID) {
    ;(window as any).gtag("event", eventName, params)
  }

  // Meta Pixel
  if (typeof window !== "undefined" && (window as any).fbq && META_PIXEL_ID) {
    ;(window as any).fbq("trackCustom", eventName, params)
  }

  // Console log for debugging
  console.log("📊 Event tracked:", eventName, params)
}

// Lead tracking helper
export function trackLead(source: string, value?: number) {
  trackEvent("generate_lead", {
    event_category: "engagement",
    event_label: source,
    value: value || 0,
  })

  // Meta Pixel specific lead event
  if (typeof window !== "undefined" && (window as any).fbq && META_PIXEL_ID) {
    ;(window as any).fbq("track", "Lead", {
      content_name: source,
      value: value || 0,
      currency: "USD",
    })
  }
}

// Phone click tracking
export function trackPhoneClick(phoneNumber: string) {
  trackEvent("phone_click", {
    event_category: "contact",
    event_label: phoneNumber,
  })
}

// Email click tracking
export function trackEmailClick(email: string) {
  trackEvent("email_click", {
    event_category: "contact",
    event_label: email,
  })
}

// Button click tracking
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent("button_click", {
    event_category: "engagement",
    event_label: `${buttonName} - ${location}`,
  })
}
