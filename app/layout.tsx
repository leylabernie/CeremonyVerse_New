import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { MobileStickyCTA } from "@/components/MobileStickyCTA"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cv-sans",
  weight: ["400", "500", "600"],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cv-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceremonyverse.com"),
  title: {
    default: "Indian Wedding Outfit Sourcing From India | CeremonyVerse",
    template: "%s | CeremonyVerse",
  },
  description:
    "CeremonyVerse helps USA-based couples source bridal lehengas, sherwanis, bridesmaid outfits, jewelry, and wedding essentials directly from trusted vendors in India.",
}

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "CeremonyVerse",
  url: "https://www.ceremonyverse.com",
  description:
    "CeremonyVerse helps couples source authentic Indian wedding outfits from India.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd),
          }}
        />
      </head>

      <body className="min-h-screen antialiased font-sans text-[#1F2933] bg-[#F7F3ED]">

        {/* CV monogram watermark */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/cv-watermark.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "700px",
            opacity: 0.05,
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileStickyCTA />
          <WhatsAppWidget />
        </div>

      </body>
    </html>
  )
}
