import { Section } from "@/components/site/section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "CeremonyVerse serves couples across Pennsylvania, New Jersey, Delaware, Maryland, and nationwide via virtual planning.",
}

export default function ServiceAreaPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-cvInk mb-6">Service Area</h1>
          <p className="text-lg text-cvMuted mb-8">
            CeremonyVerse is a service-area business providing Indian and fusion wedding planning across the
            Mid-Atlantic region and nationwide.
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="font-serif text-2xl tracking-tight text-cvInk mb-4">Primary Service Area (In-Person)</h2>
            <p className="text-cvMuted mb-4">
              We provide full in-person planning and day-of coordination services throughout:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cvMuted">
              <li>Pennsylvania (Philadelphia, Pittsburgh, Harrisburg, Lancaster, and surrounding areas)</li>
              <li>New Jersey (entire state, including Jersey City, Newark, Princeton)</li>
              <li>Delaware (Wilmington and surrounding areas)</li>
              <li>Maryland (Baltimore, Annapolis, and surrounding areas)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl tracking-tight text-cvInk mb-4">Destination & Travel Weddings</h2>
            <p className="text-cvMuted mb-4">
              We love destination weddings! We travel nationwide and internationally for full planning services,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cvMuted">
              <li>Mexico (Cabo, Cancún, Riviera Maya)</li>
              <li>California, Texas, Florida, New York</li>
              <li>India (for couples planning weddings abroad)</li>
            </ul>
            <p className="text-sm text-cvMuted mt-4">
              Travel fees apply for weddings outside our primary service area. We'll provide a custom quote based on
              your location.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl tracking-tight text-cvInk mb-4">Virtual Planning (Nationwide)</h2>
            <p className="text-cvMuted">
              Our virtual planning services are available to couples anywhere in the United States. This includes vendor
              sourcing, budget management, timeline creation, design consultation, and cultural ceremony guidance—all
              conducted via video calls and online collaboration tools.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl tracking-tight text-cvInk mb-4">Home-Based Business</h2>
            <p className="text-cvMuted">
              CeremonyVerse operates as a home-based service business. All consultations and planning meetings are
              conducted by appointment only, either virtually or at your preferred location (venue, café, etc.). We do
              not have a public storefront or walk-in office.
            </p>
          </div>

          <div className="pt-8 border-t border-cvBorder">
            <p className="text-cvMuted">
              Questions about whether we serve your area?{" "}
              <a href="/contact" className="text-cvAccent hover:underline font-medium">
                Contact us
              </a>{" "}
              to discuss your wedding location and how we can help.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
