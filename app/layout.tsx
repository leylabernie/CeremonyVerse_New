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
      <body className="min-h-screen antialiased text-[#1F2933] font-sans bg-[#F7F3ED] text-[17px] md:text-[18px]">

        {/* watermark */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: "url('/cv-watermark.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "600px",
            opacity: 0.05,
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
