import { Section } from "@/components/site/section"
import { InternalCTA } from "@/components/internal-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Wedding Traditions Explained",
  description:
    "Learn the meaning and cultural significance of Indian wedding traditions including Haldi, Mehndi, Sangeet, Baraat, and Saat Phere.",
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
            Indian weddings include a series of vibrant traditions and
            ceremonies that celebrate family, culture, and community. Below are
            some of the most common rituals you may encounter during an Indian
            wedding celebration.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-4xl space-y-10">

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Haldi Ceremony
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Haldi ceremony involves applying turmeric paste to the bride
              and groom before the wedding. The ritual symbolizes purification,
              protection from evil, and blessings for prosperity and happiness
              in married life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Mehndi Ceremony
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              During the Mehndi ceremony, intricate henna designs are applied
              to the bride’s hands and feet. The tradition represents beauty,
              joy, and spiritual awakening. It is usually accompanied by music,
              dancing, and celebration with family and friends.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Sangeet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Sangeet is a lively celebration filled with music and dance.
              Families from both sides perform choreographed dances and enjoy a
              festive evening before the wedding ceremony.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Baraat
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Baraat is the groom’s wedding procession. The groom arrives at
              the wedding venue accompanied by family and friends, often with
              music, dancing, and vibrant celebrations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Saat Phere
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              During the Saat Phere, the bride and groom walk around the sacred
              fire seven times while taking vows that symbolize commitment,
              love, and partnership in marriage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text mb-3">
              Vidaai
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vidaai marks the emotional farewell when the bride leaves her
              family home to begin her new life with her partner. The ceremony
              represents transition, gratitude, and blessings from family.
            </p>
          </div>

        </div>
      </Section>

      <InternalCTA />
    </>
  )
}
