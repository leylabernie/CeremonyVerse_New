import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { MobileStickyCTA } from "@/components/MobileStickyCTA"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

// Sans font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

// Serif font for headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ceremonyverse.com"),
  title: {
    default: "Indian Wedding Outfit Sourcing From India | CeremonyVerse",
    template: "%s | CeremonyVerse",
  },
  description:
    "CeremonyVerse helps couples in the US source Indian wedding outfits including bridal lehengas, sherwanis, bridesmaid outfits, jewelry, and ceremony accessories directly from trusted vendors in India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Indian Wedding Outfit Sourcing From India | CeremonyVerse",
    description:
      "Source bridal lehengas, sherwanis, bridesmaid outfits, jewelry, and wedding accessories from trusted vendors in India with guidance from CeremonyVerse.",
    url: "https://ceremonyverse.com",
    siteName: "CeremonyVerse",
    locale: "en_US",
    type: "website",
  },
  generator: "v0.app",
}

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "CeremonyVerse",
  url: "https://ceremonyverse.com",
  telephone: "+1-215-341-9990",
  email: "hello@ceremonyverse.com",
  description:
    "CeremonyVerse helps couples source Indian wedding outfits including bridal lehengas, sherwanis, bridesmaid outfits, jewelry, and accessories directly from trusted vendors in India.",
  priceRange: "$$",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: [
    "Indian Bridal Outfit Sourcing",
    "Sherwani & Menswear Sourcing",
    "Bridesmaid Outfit Coordination",
    "Wedding Jewelry & Accessories Sourcing",
  ],
  sameAs: [
    "https://www.instagram.com/ceremonyverse",
    "https://www.facebook.com/ceremonyverse",
    "https://www.pinterest.com/ceremonyverse",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd),
          }}
        />
      </head>

      <body
        className="min-h-screen antialiased bg-background text-foreground"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
