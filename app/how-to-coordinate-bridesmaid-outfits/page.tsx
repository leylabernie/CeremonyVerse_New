import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/site/section"

export const metadata: Metadata = {
  title: "How to Coordinate Bridesmaid Outfits for an Indian Wedding",
  description:
    "Guide for coordinating bridesmaid lehengas, sarees, and wedding party outfits for Indian weddings in the United States.",
}

export default function Page() {
  return (
    <main>

      <Section className="pt-16 pb-10">
        <h1 className="text-4xl font-serif">
          How to Coordinate Bridesmaid Outfits for an Indian Wedding
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Coordinating bridesmaid outfits for an Indian wedding can be
          challenging when wedding parties are spread across multiple cities
          or countries. Fabric choices, color palettes, and tailoring must
          be planned carefully to create a cohesive wedding look.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          Choose a Consistent Color Palette
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Many brides choose one primary color family for bridesmaids, such as
          shades of pink, sage green, champagne, or navy. Different lehenga
          designs can still match as long as the color palette remains
          consistent.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          Decide on Matching or Coordinated Designs
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Some wedding parties wear identical outfits, while others choose
          coordinated styles. For example, bridesmaids might wear the same
          fabric but different blouse designs or embroidery patterns.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          Plan Measurements Early
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Accurate measurements are critical when ordering outfits from India.
          Coordinating measurements early helps avoid last-minute tailoring
          issues once outfits arrive in the United States.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          Allow Enough Time for Production and Shipping
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Bridesmaid outfits are often produced with custom embroidery and
          tailoring. Orders should typically be placed several months before
          the wedding to allow time for production and international delivery.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          Related Guides
        </h2>

        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>
            <Link href="/indian-bridesmaid-outfits" className="underline">
              Indian bridesmaid outfit guide →
            </Link>
          </li>

          <li>
            <Link href="/buy-lehenga-from-india" className="underline">
              Buying a bridal lehenga from India →
            </Link>
          </li>

          <li>
            <Link href="/indian-wedding-outfit-timeline" className="underline">
              Indian wedding outfit timeline →
            </Link>
          </li>

          <li>
            <Link href="/shop-from-india" className="underline">
              Learn how sourcing from India works →
            </Link>
          </li>
        </ul>
      </Section>

    </main>
  )
}
