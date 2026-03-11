import { Section } from "@/components/site/section"
import { InternalCTA } from "@/components/internal-cta"
import Link from "next/link"
import type { Metadata } from "next"
import { Section } from "@/components/site/section"

export const metadata: Metadata = {
  title: "Indian Bridesmaid Outfits | CeremonyVerse",
  description:
    "Indian bridesmaid outfits sourced from trusted boutiques in India. Lehengas, sarees, anarkalis and coordinated bridal party styles for US weddings.",
  alternates: {
    canonical:
      "https://www.ceremonyverse.com/indian-bridesmaid-outfits",
  },
}

export default function BridesmaidOutfitsPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-text mb-4">
            Indian Bridesmaid Outfits
          </h1>

          <p className="text-lg text-muted-foreground">
            Bridesmaids play an important role in Indian weddings and their
            outfits often coordinate with the wedding theme and color palette.
            CeremonyVerse helps couples source bridesmaid outfits directly
            from India while simplifying measurements, customization,
            and international delivery.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-4xl space-y-10">

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Popular Bridesmaid Outfit Styles
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Indian bridesmaids commonly wear a variety of traditional
              outfits depending on the event. Popular options include
              lehengas, sarees, anarkali suits, sharara sets, and
              contemporary Indo-western styles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Coordinating Bridal Party Looks
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Many couples coordinate their bridesmaids’ outfits by color
              palette or embroidery style rather than choosing identical
              designs. This approach allows each bridesmaid to wear a
              flattering silhouette while maintaining a cohesive look.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Sourcing Bridesmaid Outfits From India
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Indian boutiques offer far more variety than most US stores.
              CeremonyVerse helps couples source outfits from trusted
              boutiques in India while managing measurements, timelines,
              and shipping logistics.
            </p>

            <p className="text-muted-foreground mt-4">
              Learn more about our{" "}
              <Link href="/shop-from-india" className="underline">
                outfit sourcing process
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Related Outfit Guides
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/buy-lehenga-from-india" className="underline">
                  Buying Bridal Lehengas From India
                </Link>
              </li>

              <li>
                <Link href="/buy-sherwani-from-india-usa" className="underline">
                  Buying Sherwanis From India
                </Link>
              </li>

              <li>
                <Link href="/shop-from-india" className="underline">
                  How Our Outfit Sourcing Works
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </Section>

      <InternalCTA />
    </>
  )
}
