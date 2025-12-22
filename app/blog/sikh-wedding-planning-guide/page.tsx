import { Section } from "@/components/site/section"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/schema/JsonLd"
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema"

export const metadata = {
  title: "Sikh Wedding Planning Guide | Anand Karaj Ceremony & Traditions | CeremonyVerse",
  description:
    "Complete guide to planning a Sikh wedding including Anand Karaj ceremony requirements, Gurdwara protocols, pre-wedding rituals, timeline, and cultural traditions for Punjabi Sikh weddings.",
  keywords:
    "sikh wedding planning guide, anand karaj planning, sikh wedding ceremony, gurdwara wedding, punjabi sikh wedding traditions, sikh wedding coordinator",
}

export default function SikhWeddingPlanningGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sikh Wedding Planning Guide: Anand Karaj Ceremony & Traditions",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    author: {
      "@type": "Person",
      name: "CeremonyVerse Team",
    },
    publisher: {
      "@type": "Organization",
      name: "CeremonyVerse",
    },
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ceremonyverse.com" },
          { name: "Blog", url: "https://ceremonyverse.com/blog" },
          { name: "Sikh Wedding Planning Guide", url: "https://ceremonyverse.com/blog/sikh-wedding-planning-guide" },
        ]}
      />

      <Section>
        <article className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Sikh Wedding Planning Guide: Anand Karaj Ceremony & Traditions
          </h1>

          <p className="text-cvMuted mb-8">
            A Sikh wedding centers around the Anand Karaj (ceremony of bliss), a sacred religious ceremony held in a
            Gurdwara before the Guru Granth Sahib. This guide covers everything you need to plan an authentic Sikh
            wedding including ceremony requirements, Gurdwara protocols, pre-wedding rituals, and timeline planning.
          </p>

          <div className="bg-cvWarm p-6 rounded-lg mb-10">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is-anand-karaj" className="text-cvAccent hover:underline">
                  What is Anand Karaj?
                </a>
              </li>
              <li>
                <a href="#gurdwara-requirements" className="text-cvAccent hover:underline">
                  Gurdwara Requirements & Protocols
                </a>
              </li>
              <li>
                <a href="#pre-wedding-rituals" className="text-cvAccent hover:underline">
                  Pre-Wedding Rituals
                </a>
              </li>
              <li>
                <a href="#ceremony-day" className="text-cvAccent hover:underline">
                  Ceremony Day Timeline
                </a>
              </li>
              <li>
                <a href="#reception-celebrations" className="text-cvAccent hover:underline">
                  Reception & Celebrations
                </a>
              </li>
              <li>
                <a href="#budget-breakdown" className="text-cvAccent hover:underline">
                  Budget Breakdown
                </a>
              </li>
            </ul>
          </div>

          <h2 id="what-is-anand-karaj" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            What is Anand Karaj?
          </h2>
          <p className="text-cvMuted mb-6">
            Anand Karaj means "ceremony of bliss" in Punjabi. It is the Sikh marriage ceremony performed in the presence
            of the Guru Granth Sahib (Sikh holy scripture) with a Granthi (religious officiant) leading the proceedings.
          </p>
          <p className="text-cvMuted mb-6">
            The ceremony involves four Lavaan (hymns) sung while the couple circles the Guru Granth Sahib four times,
            symbolizing their spiritual union and commitment to walk through life together with the Guru's blessings.
          </p>

          <h2 id="gurdwara-requirements" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Gurdwara Requirements & Protocols
          </h2>

          <h3 className="text-xl font-semibold mb-3">Booking the Gurdwara</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>Contact your local Gurdwara 6-12 months in advance</li>
            <li>Gurdwara fees typically range from $500-$2,000 depending on location and services</li>
            <li>Some Gurdwaras require both partners to be Sikh; check requirements early</li>
            <li>Timing: Ceremonies are usually held in the morning or early afternoon</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Dress Code & Protocols</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>Head coverings required:</strong> All guests must cover their heads (bring scarves or wear
              turbans)
            </li>
            <li>
              <strong>Remove shoes:</strong> Shoes are removed before entering the Darbar Hall
            </li>
            <li>
              <strong>Modest attire:</strong> Shoulders and legs should be covered; avoid revealing clothing
            </li>
            <li>
              <strong>No alcohol or meat:</strong> These are not permitted in the Gurdwara premises
            </li>
            <li>
              <strong>Seating:</strong> Guests sit on the floor; ensure elderly guests are comfortable or arrange for
              chairs if permitted
            </li>
          </ul>

          <h2 id="pre-wedding-rituals" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Pre-Wedding Rituals
          </h2>

          <h3 className="text-xl font-semibold mb-3">1. Roka Ceremony</h3>
          <p className="text-cvMuted mb-6">
            The formal engagement where both families meet and give their blessings. Gifts are exchanged, and the
            wedding date may be announced. This can be a simple family gathering or an elaborate celebration.
          </p>

          <h3 className="text-xl font-semibold mb-3">2. Kurmai (Engagement)</h3>
          <p className="text-cvMuted mb-6">
            A formal engagement ceremony where the couple exchanges rings and families exchange gifts. Prayers are
            recited for the couple's future together.
          </p>

          <h3 className="text-xl font-semibold mb-3">3. Chunni Ceremony</h3>
          <p className="text-cvMuted mb-6">
            The groom's family presents a red chunni (scarf) to the bride along with gifts, sweets, and jewelry. This
            symbolizes acceptance of the bride into the groom's family.
          </p>

          <h3 className="text-xl font-semibold mb-3">4. Sangeet & Mehendi</h3>
          <p className="text-cvMuted mb-6">
            Similar to other Indian weddings, Sikh families often celebrate with Sangeet (music and dance night) and
            Mehendi (henna application) in the days before the wedding.
          </p>

          <h3 className="text-xl font-semibold mb-3">5. Jaggo & Chooda Ceremony (Night Before Wedding)</h3>
          <p className="text-cvMuted mb-6">
            <strong>Jaggo:</strong> Family members carry decorated pots with candles, singing and dancing through the
            streets to announce the upcoming wedding.
            <br />
            <br />
            <strong>Chooda Ceremony:</strong> The bride's maternal uncle gives her red and ivory bangles (chooda) which
            she wears for a specified period after the wedding. Kalire (decorative hangings) are tied to the chooda.
          </p>

          <h2 id="ceremony-day" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Ceremony Day Timeline
          </h2>

          <h3 className="text-xl font-semibold mb-3">Morning Preparations</h3>
          <p className="text-cvMuted mb-6">
            The bride and groom prepare separately. The groom's family may hold a Sehra Bandi ceremony where the groom's
            turban and sehra (floral veil) are tied.
          </p>

          <h3 className="text-xl font-semibold mb-3">Baraat (Groom's Arrival)</h3>
          <p className="text-cvMuted mb-6">
            The groom arrives at the Gurdwara with his family and friends in a celebratory procession (baraat). This may
            include music, dancing, and a decorated car or horse. The bride's family welcomes the groom with the Milni
            ceremony, where elders from both families exchange hugs and gifts.
          </p>

          <h3 className="text-xl font-semibold mb-3">Anand Karaj Ceremony (60-90 minutes)</h3>
          <ol className="list-decimal pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>Kirtan (Hymns):</strong> The ceremony begins with Ardas (prayer) and Kirtan
            </li>
            <li>
              <strong>Hukamnama:</strong> A random verse is read from the Guru Granth Sahib as divine guidance
            </li>
            <li>
              <strong>Lavaan (Four Hymns):</strong> The Granthi sings each Lavan while the couple circles the Guru
              Granth Sahib four times, led by the groom with the bride following. Family members may join.
            </li>
            <li>
              <strong>Anand Sahib:</strong> A hymn of bliss is sung after the four Lavaan
            </li>
            <li>
              <strong>Ardas & Hukamnama:</strong> Final prayer and reading
            </li>
            <li>
              <strong>Langar:</strong> Community meal served to all guests (vegetarian)
            </li>
          </ol>

          <h2 id="reception-celebrations" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Reception & Celebrations
          </h2>
          <p className="text-cvMuted mb-6">
            After the Anand Karaj, families typically hold a reception in the evening at a separate venue. This
            celebration includes:
          </p>
          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>Dinner (may include both vegetarian and non-vegetarian options depending on family preferences)</li>
            <li>Music and dancing (bhangra, Bollywood, and Western music)</li>
            <li>Speeches and toasts from family members</li>
            <li>Cake cutting and first dance (Western elements often incorporated)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Doli & Vidaai</h3>
          <p className="text-cvMuted mb-6">
            At the end of the reception, the bride bids farewell to her family in an emotional ceremony called Vidaai.
            She tosses rice over her shoulder symbolizing prosperity for her parents, then departs with the groom's
            family.
          </p>

          <h2 id="budget-breakdown" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Sikh Wedding Budget Breakdown
          </h2>
          <p className="text-cvMuted mb-6">Here's a typical budget range for a Sikh wedding with 300-400 guests:</p>

          <div className="bg-cvWarm p-6 rounded-lg mb-6">
            <ul className="space-y-3 text-cvMuted">
              <li>
                <strong>Gurdwara ceremony & langar:</strong> $500-$2,000
              </li>
              <li>
                <strong>Reception venue:</strong> $5,000-$15,000
              </li>
              <li>
                <strong>Catering (300-400 guests):</strong> $15,000-$40,000
              </li>
              <li>
                <strong>Bridal attire (multiple outfits):</strong> $2,000-$8,000
              </li>
              <li>
                <strong>Groom's attire:</strong> $1,000-$3,000
              </li>
              <li>
                <strong>Jewelry:</strong> $3,000-$15,000
              </li>
              <li>
                <strong>Photography & videography:</strong> $3,000-$8,000
              </li>
              <li>
                <strong>Décor & florals:</strong> $3,000-$10,000
              </li>
              <li>
                <strong>DJ & entertainment:</strong> $1,500-$4,000
              </li>
              <li>
                <strong>Pre-wedding events (Sangeet, Mehendi):</strong> $3,000-$10,000
              </li>
              <li>
                <strong>Wedding planner:</strong> $3,000-$10,000
              </li>
            </ul>
            <p className="mt-4 font-semibold">Total Estimated Range: $40,000-$125,000</p>
          </div>

          <div className="bg-cvWarm p-8 rounded-lg mb-10 mt-10">
            <h3 className="text-xl font-semibold mb-4">Need Help Planning Your Sikh Wedding?</h3>
            <p className="text-cvMuted mb-6">
              CeremonyVerse provides Sikh wedding planning services with cultural expertise in Anand Karaj ceremonies,
              Gurdwara protocols, and Punjabi traditions. We offer virtual planning nationwide and in-person
              coordination in PA, NJ, DE, and MD.
            </p>
            <div className="flex gap-3">
              <Button href="/start-planning">Start Planning</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2">
            <li>
              <a href="/blog/punjabi-wedding-traditions-guide" className="text-cvAccent hover:underline">
                Punjabi Wedding Traditions Explained
              </a>
            </li>
            <li>
              <a href="/blog/fusion-wedding-planning-guide" className="text-cvAccent hover:underline">
                Fusion Wedding Planning Guide
              </a>
            </li>
            <li>
              <a href="/blog/south-asian-wedding-budget-guide" className="text-cvAccent hover:underline">
                Indian Wedding Budget Planning
              </a>
            </li>
          </ul>
        </article>
      </Section>
    </>
  )
}
