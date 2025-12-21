import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Cormorant_Garamond, Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cv-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cv-serif",
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
  generator: "v0.app",
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CeremonyVerse",
  url: "https://www.ceremonyverse.com",
  telephone: "+1-215-341-9990",
  description:
    "Indian and fusion wedding planning with cultural clarity—multi-day ceremonies, timelines, vendor coordination, and virtual planning support.",
  priceRange: "$$",
  serviceArea: ["PA", "NJ", "DE", "MD"],
  areaServed: [
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "Delaware" },
    { "@type": "State", name: "Maryland" },
  ],
  sameAs: [
    "https://www.instagram.com/ceremonyverse",
    "https://www.facebook.com/ceremonyverse",
    "https://www.pinterest.com/ceremonyverse",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      // Guarantee the vars exist even if something weird happens with class injection
      style={{
        ["--font-cv-sans" as any]: inter.style.fontFamily,
        ["--font-cv-serif" as any]: cormorant.style.fontFamily,
      }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* FINAL BOSS: Force fonts from the root, overriding any CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                font-family: var(--font-cv-sans) !important;
              }
              body * {
                font-family: var(--font-cv-sans) !important;
              }
              h1, h2, h3, h4, h5, h6,
              nav, nav a, nav button {
                font-family: var(--font-cv-serif) !important;
              }
            `,
          }}
        />
      </head>

      <body className="min-h-screen antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
