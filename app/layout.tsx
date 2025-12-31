import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { MobileStickyCTA } from "@/components/MobileStickyCTA"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import WeddingPlanningChatbot from "@/components/WeddingPlanningChatbot"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans", // body/UI font
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif", // headings/brand font
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ceremonyverse.com"),
  title: {
    default: "Indian & Fusion Wedding Planner Nationwide | CeremonyVerse",
    template: "%s | CeremonyVerse",
  },
  description:
    "Plan your Indian or fusion wedding anywhere in the USA with CeremonyVerse. Budget-first planning, cultural sourcing, and ceremony guidance for South Asian and fusion couples.",
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
  twitter: {
    card: "summary_large_image",
    title: "Indian & Fusion Wedding Planner | CeremonyVerse",
    description:
      "Budget-first Indian and fusion wedding planning for PA, NJ, DE & MD couples.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
        <WhatsAppWidget />
        <WeddingPlanningChatbot />
      </body>
    </html>
  )
}
