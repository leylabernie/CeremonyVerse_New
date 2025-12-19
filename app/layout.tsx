import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer" // Import the comprehensive footer instead of simple footer
import { cx } from "@/lib/cx"
import { Fraunces } from "next/font/google"
import { Inter } from "next/font/google"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceremonyverse.com"),
  title: {
    default: "CeremonyVerse | Indian & Fusion Wedding Planning",
    template: "%s | CeremonyVerse",
  },
  description:
    "Indian & fusion wedding planning with cultural clarity—multi-day ceremonies, timelines, vendor coordination, and seamless execution.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CeremonyVerse | Indian & Fusion Wedding Planning",
    description:
      "Process-led planning for Indian and fusion weddings—timelines, cultural precision, and seamless coordination.",
    url: "https://www.ceremonyverse.com",
    siteName: "CeremonyVerse",
    type: "website",
  },
    generator: 'v0.app'
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanning",
  name: "CeremonyVerse",
  url: "https://www.ceremonyverse.com",
  description:
    "Indian and fusion wedding planning with cultural clarity—multi-day ceremonies, timelines, vendor coordination, and virtual planning support.",
  priceRange: "$$",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Mexico" },
  ],
  sameAs: [
    "https://www.instagram.com/ceremonyverse",
    "https://www.facebook.com/ceremonyverse",
    "https://www.pinterest.com/ceremonyverse",
  ],
  makesOffer: [
    { "@type": "Offer", name: "Full Wedding Planning" },
    { "@type": "Offer", name: "Partial Planning & Coordination" },
    { "@type": "Offer", name: "Virtual Planning & India Sourcing" },
    { "@type": "Offer", name: "Destination Wedding Planning" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx(fraunces.variable, inter.variable)}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </head>
      <body className={cx("min-h-screen antialiased bg-cvBg text-cvInk font-sans")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
