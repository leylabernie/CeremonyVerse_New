import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { MetaPixel } from "@/components/analytics"
import { LazyAIPlanningAssistant } from "@/components/lazy-ai-assistant"
import { LazyWhatsAppWidget } from "@/components/lazy-whatsapp-widget"
import { LazyCalendlyWidget } from "@/components/lazy-calendly-widget"
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/components/structured-data"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const siteUrl = "https://ceremonyverse.com"

export const metadata: Metadata = {
  metadataBase: new URL("https://ceremonyverse.com"),
  title: {
    default: "Indian Wedding Planner USA | Gujarati, Hindu & Multicultural Fusion | CeremonyVerse",
    template: "%s | CeremonyVerse - Indian Wedding Planner",
  },
  description:
    "A one-stop premium service suite for Gujarati, Hindu, Tamil Christian & multicultural fusion weddings — planning, outfits, ceremony essentials, and invitations. Looking for an Indian wedding planner in USA? Verified vendors, virtual shopping from India. Serving couples nationwide. Call +1-215-341-9990 for a free consultation.",
  keywords: [
    "Indian wedding planner USA",
    "Indian wedding planner near me",
    "fusion wedding planning",
    "Indian American wedding",
    "Hindu wedding planner",
    "Gujarati wedding planner",
    "Indian Christian wedding",
    "multicultural wedding planner",
    "desi wedding planner",
    "luxury Indian wedding",
    "Indian wedding vendors",
    "virtual shopping India wedding",
    "verified wedding suppliers",
  ],
  authors: [{ name: "CeremonyVerse", url: siteUrl }],
  creator: "CeremonyVerse",
  publisher: "CeremonyVerse",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "CeremonyVerse | #1 Indian Wedding Planner in USA - Fusion Wedding Experts",
    description:
      "Expert Indian-American fusion wedding planning with 200+ verified vendors and virtual shopping from India. Free consultation available.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CeremonyVerse",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "CeremonyVerse - Indian Wedding Planning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CeremonyVerse | Indian Wedding Planner USA",
    description: "Expert Indian-American fusion wedding planning. Verified vendors, virtual shopping from India.",
    images: [`${siteUrl}/og-image.jpg`],
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
  alternates: {
    canonical: "https://ceremonyverse.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.ico",
  },
  category: "Wedding Planning",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const email = process.env.NOTIFICATION_EMAIL || "hello@ceremonyverse.com"

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Favicon with cache busting */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P49VF9FMV5" strategy="afterInteractive" />
        <Script id="ga-ceremonyverse" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P49VF9FMV5');
          `}
        </Script>

        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased pb-16 md:pb-0">
        <MetaPixel />

        {children}

        <LazyAIPlanningAssistant />
        <LazyWhatsAppWidget />
        <LazyCalendlyWidget />
        <MobileBottomNav />
      </body>
    </html>
  )
}
