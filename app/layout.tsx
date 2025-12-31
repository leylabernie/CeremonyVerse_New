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
    "Plan your Indian or fusion wedding anywhere in the world with CeremonyVerse. Budget-first planning, cultural sourcing, and ceremony guidance for South Asian and fusion couples worldwide.",
  keywords: [
    "Indian wedding planner",
    "South Asian wedding planner",
    "fusion wedding planner",
    "Hindu wedding planner",
    "multicultural wedding",
    "destination Indian wedding",
    "budget Indian wedding",
    "Indian wedding coordinator",
  ],
  authors: [{ name: "CeremonyVerse" }],
  creator: "CeremonyVerse",
  publisher: "CeremonyVerse",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ceremonyverse.com",
    siteName: "CeremonyVerse",
    title: "Indian & Fusion Wedding Planner Nationwide | CeremonyVerse",
    description:
      "Plan your Indian or fusion wedding anywhere in the world with CeremonyVerse. Budget-first planning, cultural sourcing, and ceremony guidance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse - Indian & Fusion Wedding Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian & Fusion Wedding Planner Nationwide | CeremonyVerse",
    description:
      "Plan your Indian or fusion wedding anywhere in the world. Budget-first planning, cultural sourcing, and ceremony guidance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "CeremonyVerse",
      description:
        "Indian and fusion wedding planning services with cultural expertise and budget-first approach.",
      url: "https://ceremonyverse.com",
      telephone: "+1-XXX-XXX-XXXX",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      serviceType: "Wedding Planning",
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="min-h-screen antialiased bg-background text-foreground">
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
