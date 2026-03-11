import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Calculator, FileText, Download, Check, Star, BookOpen } from "@/components/icons"
import FadeInSection from "@/components/fade-in-section"
import type { Metadata } from "next"
import LeadMagnetForm from "@/components/lead-magnet-form"

export const metadata: Metadata = {
  title: "Free Indian Wedding Guides | CeremonyVerse",
  description: "Access free guides for Indian wedding outfits, guest attire, cultural traditions, and sourcing wedding clothing from India."
}

// Auspicious dates for 2025–2026
const auspiciousDates2025 = [
  { month: "January 2025", dates: ["Jan 15", "Jan 22", "Jan 26", "Jan 29"] },
  { month: "February 2025", dates: ["Feb 3", "Feb 9", "Feb 12", "Feb 16", "Feb 20"] },
  { month: "March 2025", dates: ["Mar 2", "Mar 6", "Mar 9", "Mar 13"] },
  { month: "April 2025", dates: ["Apr 14", "Apr 17", "Apr 20", "Apr 24", "Apr 27"] },
  { month: "May 2025", dates: ["May 4", "May 8", "May 11", "May 15", "May 18"] },
  { month: "June 2025", dates: ["Jun 1", "Jun 5", "Jun 8", "Jun 12", "Jun 15"] }
]

export default function FreeResourcesPage() {
  return (
    <main className="bg-white text-charcoal">
      
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight">
          Free Indian Wedding Guides
        </h1>

        <p className="mt-6 text-lg text-charcoal/75 max-w-2xl">
          Explore practical guides for Indian wedding outfits, guest attire,
          cultural traditions, and sourcing wedding clothing from India.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 md:px-8">
        <FadeInSection>
          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-charcoal/10 p-6">
              <BookOpen className="h-6 w-6 mb-3" />
              <h2 className="font-serif text-xl">
                What to Wear to an Indian Wedding
              </h2>
              <p className="mt-2 text-charcoal/75">
                A practical guide for guests covering lehengas, sarees,
                sherwanis, colors, and event-specific attire.
              </p>

              <Link
                href="/what-to-wear-indian-wedding"
                className="mt-4 inline-flex items-center text-sm font-medium"
              >
                Read Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-charcoal/10 p-6">
              <Calendar className="h-6 w-6 mb-3" />
              <h2 className="font-serif text-xl">
                Indian Wedding Ceremony Timeline
              </h2>
              <p className="mt-2 text-charcoal/75">
                Understand the order of events across a traditional Indian
                wedding weekend.
              </p>

              <Link
                href="/indian-wedding-ceremony-timeline"
                className="mt-4 inline-flex items-center text-sm font-medium"
              >
                Read Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

          </div>
        </FadeInSection>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-8">
        <div className="rounded-2xl border border-charcoal/10 bg-[#f8f6f2] p-8">

          <h2 className="font-serif text-2xl">
            Planning an Indian Wedding?
          </h2>

          <p className="mt-3 text-charcoal/75 max-w-2xl">
            Download helpful resources and guides to simplify outfit sourcing,
            guest dress codes, and wedding traditions.
          </p>

          <div className="mt-6">
            <LeadMagnetForm />
          </div>

        </div>
      </section>

    </main>
  )
}
