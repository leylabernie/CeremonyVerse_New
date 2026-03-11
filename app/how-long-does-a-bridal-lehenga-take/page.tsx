import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/site/section"

export const metadata: Metadata = {
  title: "How Long Does a Bridal Lehenga Take to Make?",
  description:
    "Timeline for ordering a bridal lehenga from India, including design, embroidery, tailoring, and shipping to the USA.",
}

export default function Page() {
  return (
    <main>

      <Section className="pt-16 pb-10">
        <h1 className="text-4xl font-serif">
          How Long Does a Bridal Lehenga Take to Make?
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Many brides planning Indian weddings in the United States ask how
          long it takes to receive a bridal lehenga from India. Production,
          embroidery, tailoring, and shipping timelines all affect when
          you should place your order.
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          Typical Bridal Lehenga Timeline
        </h2>

        <ul className="mt-4 space-y-3 text-muted-foreground max-w-3xl">
          <li>Design selection and customization</li>
          <li>Measurements and tailoring</li>
          <li>Embroidery and garment production</li>
          <li>Final alterations and quality checks</li>
          <li>International shipping to the USA</li>
        </ul>
      </Section>

      <Section className="py-12">
        <h2 className="text-2xl font-serif">
          When Should Brides Order Their Lehenga?
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl">
          Brides should begin sourcing their bridal lehenga several months
          before the wedding to allow time for customization, embroidery,
          and international delivery.
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
            <Link href="/indian-wedding-outfits-from-india" className="underline">
              Complete outfit sourcing guide →
            </Link>
          </li>
        </ul>
      </Section>

    </main>
  )
}
