import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/site/section"

export const metadata: Metadata = {
  title: "Indian Wedding Outfit Timeline",
  description:
    "Timeline for ordering bridal lehengas, sherwanis, and bridesmaid outfits from India for weddings in the United States.",
}

export default function Page() {
  return (
    <main>

      <Section className="pt-16 pb-10">
        <h1 className="text-4xl font-serif">
          Indian Wedding Outfit Timeline
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Planning Indian wedding outfits requires careful timing. Bridal
          lehengas, groom sherwanis, and bridesmaid outfits are often produced
          with detailed embroidery and custom tailoring, which means orders
          must be placed well before the wedding date.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          6–8 Months Before the Wedding
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Begin researching bridal designers and outfit styles. This is the
          ideal time to explore fabrics, embroidery styles, and color
          palettes for your wedding events.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          4–6 Months Before the Wedding
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Place orders for bridal lehengas and groom sherwanis. Production
          and embroidery often require several weeks depending on the
          complexity of the design.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          3–4 Months Before the Wedding
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Finalize bridesmaid outfits and family attire. Coordinating fabrics
          and colors early helps ensure consistent designs across the wedding
          party.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          1–2 Months Before the Wedding
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Outfits are completed and shipped internationally. This stage
          allows time for minor alterations after delivery if needed.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          Related Guides
        </h2>

        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>
            <Link href="/buy-lehenga-from-india" className="underline">
              Buying a bridal lehenga from India →
            </Link>
          </li>

          <li>
            <Link href="/buy-sherwani-from-india-usa" className="underline">
              Buying a sherwani from India →
            </Link>
          </li>

          <li>
            <Link href="/indian-bridesmaid-outfits" className="underline">
              Coordinating bridesmaid outfits →
            </Link>
          </li>

          <li>
            <Link href="/indian-wedding-outfits-from-india" className="underline">
              Complete outfit sourcing guide →
            </Link>
          </li>
        </ul>
      </Section>

      <Section className="py-12">
  <h2 className="text-2xl font-serif">
    Planning Your Wedding Outfits?
  </h2>

  <p className="mt-4 text-muted-foreground max-w-3xl">
    CeremonyVerse helps couples in the United States source authentic
    Indian wedding outfits directly from India while coordinating
    measurements, customization, and delivery timelines.
  </p>

  <div className="mt-6 space-y-2">
    <Link href="/shop-from-india" className="underline block">
      Learn how sourcing from India works →
    </Link>

    <Link href="/buy-lehenga-from-india" className="underline block">
      Guide to buying a bridal lehenga →
    </Link>
  </div>
</Section>
    </main>
  )
}
