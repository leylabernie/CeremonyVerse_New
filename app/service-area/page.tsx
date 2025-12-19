import { Section } from "@/components/site/section"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Service-area business based in PA/NJ/DE/MD. Serving Pennsylvania, New Jersey, Delaware, Maryland, and offering virtual support nationwide.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/service-area",
  },
  openGraph: {
    title: "Service Area | CeremonyVerse",
    description: "Serving PA, NJ, DE, MD with virtual support available nationwide.",
    url: "https://www.ceremonyverse.com/service-area",
    type: "website",
  },
  twitter: {
    title: "Service Area | CeremonyVerse",
    description: "Serving PA, NJ, DE, MD with virtual support available nationwide.",
  },
}

export default function ServiceAreaPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-text mb-6">Service Area</h1>
          <p className="text-lg text-muted-foreground mb-4">Service-area business, based in PA/NJ/DE/MD</p>
          <p className="text-lg text-muted-foreground mb-4">
            Serving PA / NJ / DE / MD (and virtual support available)
          </p>
          <p className="text-lg text-muted-foreground">By appointment / virtual consultations</p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-text mb-4">Primary Service Area (In-Person)</h2>
            <p className="text-muted-foreground mb-4">
              We provide full in-person planning and day-of coordination services throughout:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Pennsylvania (Philadelphia, Pittsburgh, Harrisburg, Lancaster, and surrounding areas)</li>
              <li>New Jersey (entire state, including Jersey City, Newark, Princeton)</li>
              <li>Delaware (Wilmington and surrounding areas)</li>
              <li>Maryland (Baltimore, Annapolis, and surrounding areas)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-text mb-4">Virtual Planning (Nationwide)</h2>
            <p className="text-muted-foreground">
              Our virtual planning services are available to couples anywhere in the United States. This includes vendor
              sourcing, budget management, timeline creation, design consultation, and cultural ceremony guidance—all
              conducted via video calls and online collaboration tools.
            </p>
          </div>

          <div>
            <h2 className="text-text mb-4">Home-Based Business</h2>
            <p className="text-muted-foreground">
              CeremonyVerse operates as a home-based service business. All consultations and planning meetings are
              conducted by appointment only, either virtually or at your preferred location (venue, café, etc.). We do
              not have a public storefront or walk-in office.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="warm">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-text mb-4">Ready to Get Started?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/start-planning">Start Planning</Button>
            <Button href="/book" variant="secondary">
              Book Call
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
