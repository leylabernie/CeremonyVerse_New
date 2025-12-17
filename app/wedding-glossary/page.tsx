import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen } from "@/components/icons"
import FadeInSection from "@/components/fade-in-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding Glossary A-Z | Indian & Fusion Wedding Terms | CeremonyVerse",
  description:
    "Complete glossary of Indian, Hindu, and fusion wedding terms. Learn about traditions, ceremonies, attire, and rituals from A to Z.",
}

const glossaryTerms = [
  // A
  {
    term: "Antarpat",
    definition:
      "A cloth held between the bride and groom during Hindu ceremonies, symbolizing their separate lives before marriage. It's dramatically lowered during the ceremony.",
    category: "Ceremony",
  },
  {
    term: "Aarti",
    definition:
      "A Hindu ritual of worship where light from wicks soaked in ghee is offered to deities or to honor the bride and groom.",
    category: "Ritual",
  },

  // B
  {
    term: "Baraat",
    definition:
      "The groom's wedding procession, traditionally arriving on horseback with family members dancing to dhol music.",
    category: "Ceremony",
  },
  {
    term: "Bidaai",
    definition:
      "The emotional farewell ceremony when the bride leaves her parents' home. She throws rice over her shoulder, symbolizing prosperity for her family.",
    category: "Ceremony",
  },
  {
    term: "Bindi",
    definition:
      "A decorative dot worn on the forehead, traditionally red for married women. Now worn in various colors as fashion.",
    category: "Attire",
  },

  // C
  {
    term: "Chunni",
    definition: "A long scarf or dupatta draped over the bride's head, often heavily embroidered or embellished.",
    category: "Attire",
  },

  // D
  {
    term: "Dhol",
    definition: "A double-headed drum played during the baraat and sangeet, essential for energetic celebrations.",
    category: "Music",
  },
  {
    term: "Dupatta",
    definition:
      "A long scarf that completes Indian outfits like lehengas and salwar kameez, often draped over the head or shoulders.",
    category: "Attire",
  },

  // G
  {
    term: "Ganesh Puja",
    definition:
      "A prayer to Lord Ganesh, the remover of obstacles, performed at the start of Hindu weddings for blessings.",
    category: "Ceremony",
  },
  {
    term: "Gharoli",
    definition: "A ceremony where married women from the family fill an earthen pot with water from a sacred source.",
    category: "Ritual",
  },

  // H
  {
    term: "Haldi",
    definition:
      "A pre-wedding ceremony where turmeric paste is applied to the bride and groom for glowing skin and good luck.",
    category: "Pre-Wedding",
  },
  {
    term: "Hasta Milap",
    definition: "The joining of hands between bride and groom, often with their scarves tied together.",
    category: "Ceremony",
  },

  // J
  {
    term: "Jai Mala",
    definition: "Also called Varmala - the exchange of flower garlands between bride and groom, signifying acceptance.",
    category: "Ceremony",
  },
  {
    term: "Joota Chupai",
    definition:
      "A fun tradition where the bride's sisters steal the groom's shoes and demand payment for their return.",
    category: "Fun",
  },

  // K
  {
    term: "Kalire",
    definition:
      "Gold or silver ornamental hangings attached to the bride's bangles, often shaken over unmarried girls.",
    category: "Attire",
  },
  {
    term: "Kanyadaan",
    definition: "The giving away of the bride by her father, one of the most emotional moments in Hindu weddings.",
    category: "Ceremony",
  },
  {
    term: "Kundan",
    definition:
      "A traditional jewelry style from Rajasthan featuring gemstones set in gold, popular for bridal jewelry.",
    category: "Jewelry",
  },

  // L
  {
    term: "Lehenga",
    definition:
      "A traditional bridal outfit consisting of a fitted blouse (choli), full skirt, and dupatta. Often heavily embroidered.",
    category: "Attire",
  },
  {
    term: "Saptapadi",
    definition: "Another name for the seven steps/pheras taken around the sacred fire, each with specific vows.",
    category: "Ceremony",
  },

  // M
  {
    term: "Mandap",
    definition:
      "The decorated canopy under which Hindu wedding ceremonies take place, often elaborately decorated with flowers.",
    category: "Decor",
  },
  {
    term: "Mangalsutra",
    definition:
      "A sacred necklace tied by the groom around the bride's neck, symbolizing their union. Worn daily by married women.",
    category: "Jewelry",
  },
  {
    term: "Mehndi",
    definition:
      "Intricate henna designs applied to the bride's hands and feet. The depth of color is said to indicate the groom's love.",
    category: "Pre-Wedding",
  },
  {
    term: "Milni",
    definition: "A ceremony where male members of both families are formally introduced and exchange garlands.",
    category: "Ceremony",
  },

  // P
  {
    term: "Pandit",
    definition: "A Hindu priest who officiates the wedding ceremony and guides the couple through rituals.",
    category: "Officiant",
  },
  {
    term: "Pheras",
    definition: "The seven circles walked around the sacred fire by the bride and groom, each representing a vow.",
    category: "Ceremony",
  },
  {
    term: "Polki",
    definition: "Uncut diamond jewelry popular for bridal wear, especially in Rajasthani traditions.",
    category: "Jewelry",
  },

  // R
  {
    term: "Roka",
    definition: "An engagement ceremony where both families formally agree to the marriage.",
    category: "Pre-Wedding",
  },

  // S
  {
    term: "Sangeet",
    definition: "A musical celebration featuring choreographed dances and performances by family and friends.",
    category: "Pre-Wedding",
  },
  {
    term: "Sehra",
    definition: "A veil of flowers or beads worn by the groom, covering his face during the baraat.",
    category: "Attire",
  },
  {
    term: "Sherwani",
    definition: "The traditional groom's outfit - a long coat-like garment worn with churidar pants.",
    category: "Attire",
  },
  {
    term: "Sindoor",
    definition: "Red vermillion powder applied by the groom to the bride's hair parting, marking her as married.",
    category: "Ceremony",
  },

  // T
  {
    term: "Tikka",
    definition: "A headpiece worn on the forehead, usually with a single pendant hanging from the center hair parting.",
    category: "Jewelry",
  },

  // V
  {
    term: "Varmala",
    definition: "The exchange of flower garlands between bride and groom, symbolizing acceptance and respect.",
    category: "Ceremony",
  },
  {
    term: "Vidaai",
    definition: "Alternate spelling of Bidaai - the bride's farewell from her family home.",
    category: "Ceremony",
  },
]

export default function WeddingGlossaryPage() {
  // Group terms by first letter
  const groupedTerms = glossaryTerms.reduce(
    (acc, term) => {
      const letter = term.term[0].toUpperCase()
      if (!acc[letter]) acc[letter] = []
      acc[letter].push(term)
      return acc
    },
    {} as Record<string, typeof glossaryTerms>,
  )

  const alphabet = Object.keys(groupedTerms).sort()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-background">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Wedding Education
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight text-charcoal mb-6 tracking-tight">
              Wedding Glossary A-Z
            </h1>
            <div className="w-24 h-px bg-accent mx-auto mb-6" />
            <p className="text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
              Your complete guide to Indian, Hindu, and fusion wedding terms, traditions, and rituals.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <section className="sticky top-20 z-30 bg-white border-y border-warm-beige/40 py-3">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center text-sm font-medium text-charcoal hover:bg-primary hover:text-white rounded transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {alphabet.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-5xl font-light text-primary">{letter}</span>
                <div className="flex-1 h-px bg-warm-beige/40" />
              </div>

              <div className="space-y-6">
                {groupedTerms[letter].map((item, i) => (
                  <FadeInSection key={i} delay={i * 50}>
                    <div className="bg-white p-6 border border-warm-beige/40 hover:border-primary/40 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-serif text-xl font-medium text-charcoal">{item.term}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-charcoal/70 font-light leading-relaxed">{item.definition}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal">Planning a Fusion Wedding?</h2>
          <p className="text-xl text-charcoal/70 font-light">
            Our experts understand every tradition and can help you blend them beautifully.
          </p>
          <Button size="lg" asChild>
            <Link href="/book-consultation">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
