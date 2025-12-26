import { Card } from "@/components/site/card"
import Link from "next/link"

export default function TrustSignals() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <div className="text-3xl font-serif font-semibold text-primary mb-2">Transparent Pricing</div>
            <p className="text-muted-foreground">Clear pricing with no hidden fees or percentage-based markups</p>
          </Card>

          <Card className="text-center">
            <div className="text-3xl font-serif font-semibold text-primary mb-2">Cultural Expertise</div>
            <p className="text-muted-foreground">
              Deep understanding of Hindu, Sikh, Gujarati, Punjabi, and South Indian traditions
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-3xl font-serif font-semibold text-primary mb-2">No Vendor Pressure</div>
            <p className="text-muted-foreground">Unbiased recommendations focused on your needs and budget</p>
          </Card>

          <Card className="text-center">
            <div className="text-3xl font-serif font-semibold text-primary mb-2">Nationwide Service</div>
            <p className="text-muted-foreground">
              Virtual consultations available across the USA with travel for full planning clients
            </p>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm italic">
            CeremonyVerse is built on a simple idea: couples deserve budget clarity and cultural expertise without
            vendor pressure.{" "}
            <Link href="/our-story" className="text-primary hover:underline">
              Learn about our approach →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
