import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/schema/JsonLd"

export const metadata: Metadata = {
  title: "Planning Support Services | Indian & Fusion Weddings | CeremonyVerse",
  description:
    "Indian and fusion wedding planning services: Planning Intensives, Partial Planning, Comprehensive Planning, and Cultural Sourcing Support. Nationwide availability.",
  alternates: {
    canonical: "/services",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Indian Wedding Planning Services",
  provider: {
    "@type": "Organization",
    name: "CeremonyVerse",
    url: "https://ceremonyverse.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  description:
    "Professional Indian and fusion wedding planning services including Planning Intensives, Partial Planning, Comprehensive Planning, and Cultural Sourcing Support.",
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">Planning Support Services</h1>

          <p className="text-xl text-stone-600 mb-16">
            Support varies based on scope, complexity, and involvement. Not every couple needs the same level of
            planning assistance—services are structured to match actual requirements.
          </p>

          <div className="space-y-16">
            <section className="border-t border-stone-200 pt-12">
              <h2 className="text-2xl font-light text-stone-900 mb-4">Planning Intensives</h2>
              <p className="text-stone-600 mb-6">
                Structured guidance for couples managing most planning independently. Focused sessions addressing
                specific challenges—budget development, vendor strategy, or timeline creation.
              </p>

              <div className="bg-stone-50 p-6 mb-6">
                <h3 className="font-medium text-stone-900 mb-3">What's Included:</h3>
                <ul className="text-stone-600 space-y-2">
                  <li>• Defined session format with clear deliverables</li>
                  <li>• Budget framework development</li>
                  <li>• Vendor category guidance and vetting criteria</li>
                  <li>• Timeline and milestone planning</li>
                  <li>• Cultural considerations specific to your traditions</li>
                </ul>
              </div>

              <p className="text-sm text-stone-500">
                Best for: Couples who want expert input at key decision points without ongoing management
              </p>
            </section>

            <section className="border-t border-stone-200 pt-12">
              <h2 className="text-2xl font-light text-stone-900 mb-4">Partial Planning</h2>
              <p className="text-stone-600 mb-6">
                Ongoing support layered onto self-managed planning. Regular check-ins, vendor introductions, and
                guidance throughout the planning timeline.
              </p>

              <div className="bg-stone-50 p-6 mb-6">
                <h3 className="font-medium text-stone-900 mb-3">What's Included:</h3>
                <ul className="text-stone-600 space-y-2">
                  <li>• Regular planning check-ins (frequency determined by scope)</li>
                  <li>• Vendor introductions and coordination support</li>
                  <li>• Contract review guidance</li>
                  <li>• Timeline management and milestone tracking</li>
                  <li>• Cultural sourcing consultation</li>
                </ul>
              </div>

              <p className="text-sm text-stone-500">
                Best for: Couples who want consistent support without full delegation
              </p>
            </section>

            <section className="border-t border-stone-200 pt-12">
              <h2 className="text-2xl font-light text-stone-900 mb-4">Comprehensive Planning</h2>
              <p className="text-stone-600 mb-6">
                End-to-end involvement from initial planning through event execution. Full vendor management, design
                coordination, and on-site presence.
              </p>

              <div className="bg-stone-50 p-6 mb-6">
                <h3 className="font-medium text-stone-900 mb-3">What's Included:</h3>
                <ul className="text-stone-600 space-y-2">
                  <li>• Complete vendor sourcing, vetting, and management</li>
                  <li>• Design and aesthetic coordination</li>
                  <li>• Full budget management and tracking</li>
                  <li>• Timeline creation and execution</li>
                  <li>• Cultural sourcing coordination</li>
                  <li>• On-site presence and event management</li>
                  <li>• Multi-event coordination (sangeet, ceremony, reception)</li>
                </ul>
              </div>

              <p className="text-sm text-stone-500">
                Best for: Couples who want to delegate the complete planning process
              </p>
            </section>

            <section className="border-t border-stone-200 pt-12">
              <h2 className="text-2xl font-light text-stone-900 mb-4">Cultural Sourcing Support</h2>
              <p className="text-stone-600 mb-6">
                Focused assistance for sourcing outfits, jewelry, and ceremony items—whether from local vendors or
                coordinated from India. Available as standalone service or as part of planning packages.
              </p>

              <div className="bg-stone-50 p-6 mb-6">
                <h3 className="font-medium text-stone-900 mb-3">What's Included:</h3>
                <ul className="text-stone-600 space-y-2">
                  <li>• Outfit procurement coordination (bridal, groom, family)</li>
                  <li>• Jewelry sourcing and quality assessment</li>
                  <li>• Ceremony item procurement</li>
                  <li>• India coordination (if applicable)</li>
                  <li>• Shipping and customs guidance</li>
                  <li>• Quality assurance and timeline management</li>
                </ul>
              </div>

              <p className="text-sm text-stone-500">Best for: Couples navigating complex sourcing decisions</p>
            </section>
          </div>

          <section className="mt-16 bg-stone-900 text-white p-8 text-center">
            <h2 className="text-2xl font-light mb-4">Determine the Right Support Level</h2>
            <p className="text-stone-300 mb-6">
              An informational discussion to understand scope, requirements, and fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-medium hover:bg-stone-100 transition-colors"
            >
              Request Planning Overview
            </Link>
            <p className="text-sm text-stone-400 mt-4">No obligation · Complete confidentiality</p>
          </section>
        </div>
      </main>
    </>
  )
}
