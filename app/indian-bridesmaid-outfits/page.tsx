import { Section } from "@/components/site/section"
import { InternalCTA } from "@/components/internal-cta"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buy Bridesmaid Lehengas From India | CeremonyVerse",
  description:
    "Bridesmaid lehengas sourced directly from India for US weddings. Coordinated bridal party outfits with reliable international shipping.",
  alternates: {
    canonical:
      "https://www.ceremonyverse.com/bridesmaid-lehenga-from-india",
  },
}

export default function BridesmaidLehengaPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-text mb-4">
            Bridesmaid Lehengas From India
          </h1>

          <p className="text-lg text-muted-foreground">
            Coordinating bridesmaid outfits for an Indian wedding can be
            challenging, especially when family members live in different
            cities or countries. CeremonyVerse helps couples source
            bridesmaid lehengas directly from trusted Indian boutiques while
            simplifying measurements, coordination, and delivery.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-4xl space-y-10">

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Coordinated Bridal Party Outfits
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Indian weddings often include multiple events such as the
              Mehndi, Sangeet, Haldi, and the wedding ceremony itself.
              Bridesmaids may wear coordinated lehengas, sarees, or
              Indo-western outfits depending on the event.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Sourcing Bridesmaid Lehengas From India
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Many couples prefer purchasing outfits directly from India
              because Indian boutiques offer a much wider selection of
              fabrics, embroidery styles, and custom color palettes.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Our sourcing service helps you coordinate designs, sizes,
              and shipping timelines so your bridal party receives their
              outfits in time for the wedding.
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
