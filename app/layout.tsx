import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { MobileStickyCTA } from "@/components/MobileStickyCTA"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

// Sans-serif for body text - clean and readable
// IMPORTANT: use cv-prefixed variable so we can control mapping in CSS
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cv-sans",
  weight: ["400", "500", "600"],
})

// Serif for headings - elegant and sophisticated
// IMPORTANT: use cv-prefixed variable so we can control mapping in CSS
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cv-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ceremonyverse.com"),
  title: {
    default: "Indian & Fusion Wedding Planner Nationwide | CeremonyVerse",
    template: "%s | CeremonyVerse",
  },
  description:
    "Plan your Indian or fusion wedding anywhere in the USA with cultural expertise and transparent pricing. Virtual consultations available nationwide with travel for in-person events.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Indian & Fusion Wedding Planner | CeremonyVerse",
    description:
      "Budget-first Indian and fusion wedding planning for PA, NJ, DE & MD couples.",
    url: "https://ceremonyverse.com",
    siteName: "CeremonyVerse",
    locale: "en_US",
    type: "website",
  },
  generator: "v0.app",
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "WeddingPlanner",
  name: "CeremonyVerse",
  url: "https://ceremonyverse.com",
  telephone: "+1-215-341-9990",
  email: "hello@ceremonyverse.com",
  description:
    "Indian and fusion wedding planning with cultural clarity—multi-day ceremonies, timelines, vendor coordination, and virtual planning support.",
  priceRange: "$$",
  areaServed: [
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "Delaware" },
    { "@type": "State", name: "Maryland" },
  ],
  serviceType: [
    "Indian Wedding Planning",
    "Fusion Wedding Coordination",
    "Day-of Wedding Coordination",
    "Cultural Sourcing Support",
  ],
  sameAs: [
    "https://www.instagram.com/ceremonyverse",
    "https://www.facebook.com/ceremonyverse",
    "https://www.pinterest.com/ceremonyverse",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      // Attach font variables from next/font to the html element
      className={`${inter.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
