// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

export const metadata: Metadata = {
  title: "CeremonyVerse — Indian & Fusion Wedding Planning",
  description:
    "Wedding Planning & Cultural Sourcing for Indian & Fusion Weddings",
};

// 👇 Only ONE font — used everywhere
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
