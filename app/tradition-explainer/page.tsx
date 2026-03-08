import { Section } from "@/components/site/section"
import { InternalCTA } from "@/components/internal-cta"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Wedding Traditions Explained | CeremonyVerse",
  description:
    "Learn the meaning of Indian wedding traditions including Haldi, Mehndi, Sangeet, Baraat and Saat Phere. Planning tips and outfit guidance included.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/tradition-explainer",
  },
}

export default function TraditionExplainerPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-text mb-4">
            Indian Wedding Traditions Explained
          </h1>

          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Indian weddings are rich with cultural rituals that take place over
            several days. Each ceremony celebrates family, community, and
            spiritual blessings for the couple’s future together. This guide
            explains some of the most common traditions you may encounter when
            planning an Indian or fusion wedding.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-4xl space-y-12">

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Haldi Ceremony
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Haldi ceremony is one of the most joyful pre-wedding rituals.
              Family members apply a paste made from turmeric, sandalwood, and
              rosewater to the bride and groom. Turmeric is believed to purify
              the skin, ward off negative energy, and bless the couple with
              prosperity and happiness.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Haldi celebrations often include music, laughter, and vibrant
              yellow décor. Because turmeric can stain clothing, couples
              typically choose comfortable outfits in shades of yellow or
              gold.
            </p>

            <p className="text-muted-foreground">
              If you're planning a Haldi event and need coordinated outfits for
              family members or bridesmaids, explore our guide to{" "}
              <Link href="/shop-from-india" className="underline">
                sourcing wedding outfits from India
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Mehndi Ceremony
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The Mehndi ceremony celebrates the application of intricate henna
              designs to the bride’s hands and feet. Traditionally the darker
              the henna stain, the stronger the love and bond between the
              couple.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Mehndi events are often festive gatherings with dancing, music,
              and colorful décor. Brides frequently wear embroidered lehengas
              or flowy anarkali outfits for this celebration.
            </p>

            <p className="text-muted-foreground">
              Looking for the right outfit? Our guide on{" "}
              <Link href="/buy-lehenga-from-india" className="underline">
                buying bridal lehengas from India
              </Link>{" "}
              explains how couples in the US source designer pieces directly
              from Indian boutiques.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Sangeet Celebration
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The Sangeet is an energetic celebration where both families come
              together for music and dance performances. It is often one of the
              most memorable events of the wedding weekend.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Couples frequently coordinate themed outfits for the Sangeet.
              Bridesmaids and groomsmen may wear coordinated lehengas, kurta
              sets, or Indo-western outfits.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Baraat Procession
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The Baraat is the groom’s ceremonial arrival at the wedding venue.
              Traditionally he arrives on horseback accompanied by friends and
              family dancing to lively music.
            </p>

            <p className="text-muted-foreground">
              Sherwanis and traditional menswear are commonly worn for this
              event. Learn how grooms source their outfits through our guide to{" "}
              <Link href="/buy-sherwani-from-india-usa" className="underline">
                buying sherwanis from India
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Saat Phere (Wedding Ceremony)
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              During the wedding ceremony the couple walks around a sacred fire
              seven times while reciting vows that symbolize commitment,
              friendship, and partnership. Each circle represents a promise the
              couple makes to one another.
            </p>
          </div>

        </div>
      </Section>

      <InternalCTA />
    </>
  )
}
