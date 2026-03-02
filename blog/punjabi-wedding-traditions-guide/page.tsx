import SocialShare from "@/components/social-share"
import Link from "next/link"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Punjabi Wedding Traditions Guide 2025 | Chooda, Jaggo, Anand Karaj & More",
  description:
    "Complete guide to Punjabi Sikh wedding traditions. Learn about Roka, Chunni ceremony, Jaggo, Chooda, Kalire, Anand Karaj, and vibrant Punjabi celebrations. Perfect for planning your Punjabi wedding.",
  keywords:
    "punjabi wedding traditions, sikh wedding ceremony, anand karaj, punjabi jaggo ceremony, chooda ceremony, kalire tradition, punjabi wedding planning, punjabi sangeet, sikh wedding guide",
  openGraph: {
    title: "Punjabi Wedding Traditions Guide | Complete Ceremony Breakdown",
    description:
      "Everything you need to know about Punjabi Sikh wedding traditions from Roka to Vidaai, with modern planning tips.",
    type: "article",
  },
}

export default function PunjabiWeddingGuidePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Blog", url: "https://www.ceremonyverse.com/blog" },
    {
      name: "Punjabi Wedding Traditions Guide",
      url: "https://www.ceremonyverse.com/blog/punjabi-wedding-traditions-guide",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="mb-8">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            Cultural Traditions
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Punjabi Wedding Traditions Guide: From Roka to Vidaai
        </h1>

        <div className="flex items-center gap-6 text-sm text-foreground/60 mb-8">
          <time>December 2025</time>
          <span>17 min read</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            Punjabi weddings are famous worldwide for their vibrant energy, joyful celebrations, and elaborate multi-day
            festivities. From the spirited Jaggo procession to the sacred Anand Karaj ceremony, every ritual carries
            deep meaning while creating unforgettable moments. This comprehensive guide walks you through every Punjabi
            wedding tradition, whether you're planning a Sikh Anand Karaj or a Hindu-Punjabi fusion celebration.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Understanding Punjabi Wedding Structure
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Punjabi weddings typically span 3–5 days with energetic pre-wedding ceremonies, the sacred wedding day, and
            joyful post-wedding celebrations. Each event brings families together in song, dance, and abundant food.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Typical Punjabi Wedding Timeline:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Pre-Wedding (2–4 days before):</strong> Roka, Chunni, Jaggo, Chooda, Sangeet, Mehendi
              </li>
              <li>
                <strong>Wedding Day:</strong> Ghara Gharoli, Anand Karaj (or Pheras for Hindu Punjabi), Joota Chupai,
                Doli/Vidaai
              </li>
              <li>
                <strong>Post-Wedding:</strong> Reception, Muklawa (bride's return to parents' home)
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">Pre-Wedding Ceremonies Explained</h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Roka: The Engagement</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Roka is the official engagement ceremony where both families formally agree to the marriage and exchange
            gifts. This intimate gathering marks the beginning of wedding preparations.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">What Happens at Roka:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Families exchange sweets (mithai) and dry fruits</li>
              <li>Groom's family gifts the bride clothes, jewelry, and cash (shagun)</li>
              <li>Bride's family reciprocates with gifts for groom</li>
              <li>Couple may exchange rings (modern addition)</li>
              <li>Light refreshments or lunch served</li>
              <li>Typically held at bride's home or banquet hall</li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Chunni Ceremony: Welcoming the Bride
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            During the Chunni ceremony, the groom's mother officially welcomes the bride into the family by draping a
            red chunni (scarf) over her head and showering her with gifts and blessings.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Chunni Ceremony Elements:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Red chunni:</strong> Symbolizes the bride's new role as daughter-in-law
              </li>
              <li>
                <strong>Gifts:</strong> Jewelry (often 22K gold), clothes, sweets, coconut, shagun envelope
              </li>
              <li>
                <strong>Blessings:</strong> Groom's mother and female relatives bless bride
              </li>
              <li>
                <strong>Location:</strong> Bride's home, often combined with Roka
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Jaggo: The Joyful Procession</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Jaggo is one of the most vibrant Punjabi pre-wedding traditions. Female relatives carry decorated copper
            pots (gaggar) with oil lamps, dancing through the neighborhood to announce the wedding and invite everyone
            to celebrate.
          </p>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Jaggo Night Planning:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Timing:</strong> Evening, 1–2 nights before wedding
              </li>
              <li>
                <strong>Who participates:</strong> Bride's female relatives and friends (separate Jaggo for groom's
                side)
              </li>
              <li>
                <strong>Props:</strong> Decorated copper pots (gaggar) with candles/diyas
              </li>
              <li>
                <strong>Music:</strong> Dhol players, traditional Punjabi songs ("Jaggo Fireh Raat Ve Jaggo")
              </li>
              <li>
                <strong>Dancing:</strong> Bhangra and Giddha through streets or venue
              </li>
              <li>
                <strong>Modern adaptation:</strong> Often done at banquet hall/hotel with choreographed dance
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Fun fact:</strong> Jaggo translates to "wake up" — historically, families would wake up neighbors to
            share the joyful news and invite them to the wedding!
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Sangeet: The Music & Dance Night
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The Sangeet is the ultimate pre-wedding party where both families come together for performances, dancing,
            and celebration. Punjabi Sangeets are known for their high energy and competitive dance-offs.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Sangeet Night Essentials:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Performances:</strong> Choreographed dances by bride's side vs. groom's side
              </li>
              <li>
                <strong>Music:</strong> Mix of Punjabi folk songs, Bollywood hits, and bhangra beats
              </li>
              <li>
                <strong>Dhol:</strong> Live dhol players are essential for authentic energy
              </li>
              <li>
                <strong>Attire:</strong> Colorful suits/lehengas, coordinated family colors encouraged
              </li>
              <li>
                <strong>Food:</strong> Punjabi appetizers (samosas, pakoras) and full dinner
              </li>
              <li>
                <strong>Duration:</strong> 4–6 hours of non-stop dancing
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Chooda Ceremony: The Sacred Bangles
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The Chooda ceremony is one of the most emotional and significant Punjabi bridal traditions. The bride's
            maternal uncle (mama) gifts her a set of red and white (or ivory) bangles that she must wear continuously
            for a specified period after marriage.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Chooda Ceremony Rituals:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Timing:</strong> Morning of wedding day or day before
              </li>
              <li>
                <strong>Who performs:</strong> Bride's maternal uncle and aunt (mama/mami)
              </li>
              <li>
                <strong>The bangles:</strong> 21 red/white ivory bangles (7, 9, or 21 bangles depending on family
                tradition)
              </li>
              <li>
                <strong>Purification:</strong> Bangles are washed in milk and rose water before wearing
              </li>
              <li>
                <strong>Kalire:</strong> Ornamental umbrella-shaped hangings attached to bangles afterward
              </li>
              <li>
                <strong>Covering:</strong> Bride cannot see chooda until it's fully worn (covered with cloth)
              </li>
              <li>
                <strong>Duration:</strong> Traditionally worn 40 days to 1 year (varies by family)
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Kalire tradition:</strong> After the Chooda ceremony, kalire (ornamental danglers) are tied to the
            bangles. The bride then shakes her kalire over unmarried girls' heads—if a kalire falls on someone, it's
            believed she'll be the next to get married!
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Mehendi: The Henna Night</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The Mehendi ceremony involves applying intricate henna designs to the bride's hands and feet. This is a
            ladies-only event filled with singing, dancing, and celebration.
          </p>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Mehendi Planning Tips:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Professional artists:</strong> Book experienced mehendi artists 3–6 months ahead
              </li>
              <li>
                <strong>Design:</strong> Bridal mehendi takes 3–5 hours for full arms and legs
              </li>
              <li>
                <strong>Hidden groom's name:</strong> Traditional to hide groom's name in the design
              </li>
              <li>
                <strong>Guest mehendi:</strong> Simple designs for bridesmaids and guests
              </li>
              <li>
                <strong>Aftercare:</strong> Keep mehendi on 6–8 hours for darkest stain
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Wedding Day: Anand Karaj (Sikh Ceremony)
          </h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Ghara Gharoli: Water Collection Ritual
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            On the morning of the wedding, the bride and groom separately visit a Gurdwara or holy place to collect
            water in a decorated pot (gharoli), symbolizing the couple's first duty as a married pair.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Anand Karaj: The Blissful Union
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Anand Karaj, meaning "ceremony of bliss," is the Sikh wedding ceremony performed in a Gurdwara or at the
            wedding venue with the Guru Granth Sahib present. This sacred ceremony joins two souls in the presence of
            God.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Anand Karaj Ceremony Steps:</h4>
            <ol className="space-y-4 text-foreground/80">
              <li>
                <strong>1. Ardas (Opening Prayer):</strong> Granthi (priest) performs prayer to begin ceremony
              </li>
              <li>
                <strong>2. Shabads (Hymns):</strong> Kirtan singers perform sacred hymns
              </li>
              <li>
                <strong>3. Palla Ceremony:</strong> Bride's father places bride's dupatta in groom's hand, symbolizing
                giving away the daughter
              </li>
              <li>
                <strong>4. Four Lavaan (Circumambulations):</strong> Couple walks around Guru Granth Sahib four times
                while hymns are sung, representing four stages of married life
              </li>
              <li>
                <strong>5. Anand Sahib:</strong> Final hymn of bliss
              </li>
              <li>
                <strong>6. Ardas (Closing Prayer):</strong> Final prayers and blessings
              </li>
              <li>
                <strong>7. Hukamnama:</strong> Random reading from Guru Granth Sahib as divine guidance
              </li>
              <li>
                <strong>8. Parsad Distribution:</strong> Sweet offering distributed to all guests
              </li>
            </ol>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Duration:</strong> Anand Karaj typically lasts 45 minutes to 1.5 hours depending on the number of
            shabads performed.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Hindu Punjabi Ceremony: Pheras
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Many Punjabi Hindu weddings feature a mandap ceremony with Saat Phere (seven circles around sacred fire)
            similar to other North Indian Hindu weddings, but with distinct Punjabi cultural elements and more energetic
            celebrations.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Joota Chupai: The Shoe-Hiding Game
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            This playful tradition involves the bride's sisters and friends "stealing" the groom's shoes during the
            ceremony and demanding ransom for their return. It's a lighthearted moment that brings laughter to the
            celebration.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Joota Chupai Tips:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>When it happens:</strong> When groom removes shoes before entering mandap/Gurdwara
              </li>
              <li>
                <strong>Negotiation:</strong> Groom's side negotiates "ransom" payment (usually $200–$500 in cash)
              </li>
              <li>
                <strong>Who plays:</strong> Bride's sisters vs. groom's brothers in friendly competition
              </li>
              <li>
                <strong>Modern twist:</strong> Sometimes bride's side hides fake shoes while real ones are secured!
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Doli/Vidaai: Emotional Farewell
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The Doli or Vidaai marks the bride's emotional departure from her parents' home. This bittersweet moment is
            one of the most touching parts of a Punjabi wedding.
          </p>

          <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Vidaai Traditions:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Bride throws rice over her shoulder (blessing parents' home with prosperity)</li>
              <li>Bride's brothers escort her to the car</li>
              <li>Bride looks back at her childhood home one last time</li>
              <li>Traditional Punjabi Vidaai songs are sung</li>
              <li>Extremely emotional—bride, family, and guests often cry</li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">Post-Wedding Ceremonies</h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Reception: The Grand Celebration
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The reception is a massive evening celebration where the newlyweds are welcomed by the groom's family and
            celebrate with all guests. Punjabi receptions are known for unlimited food, endless dancing, and
            over-the-top entertainment.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Reception Must-Haves:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Grand entrance:</strong> Couple enters to dhol and fireworks/sparklers
              </li>
              <li>
                <strong>Food:</strong> Lavish buffet with 15–20 dishes (Punjabi cuisine + continental)
              </li>
              <li>
                <strong>Bar:</strong> Open bar with whiskey, wine, beer (Punjabi receptions often have alcohol)
              </li>
              <li>
                <strong>DJ:</strong> Bhangra, Bollywood, and international hits
              </li>
              <li>
                <strong>Dance floor:</strong> Non-stop dancing until late night
              </li>
              <li>
                <strong>Speeches:</strong> Family and friends give toasts
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Muklawa: Returning Home</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Muklawa is the bride's first visit back to her parents' home after the wedding. This ceremony signifies that
            while she's married, she'll always be welcomed as a daughter in her parents' home.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Punjabi Wedding Attire: What to Wear
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Bride's Attire:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <strong>Mehendi:</strong> Yellow or green salwar kameez or lehenga
                </li>
                <li>
                  <strong>Sangeet:</strong> Colorful lehenga or Anarkali
                </li>
                <li>
                  <strong>Wedding:</strong> Red or maroon lehenga/bridal saree with heavy embroidery
                </li>
                <li>
                  <strong>Reception:</strong> Designer lehenga or gown (different from wedding outfit)
                </li>
                <li>
                  <strong>Jewelry:</strong> 22K gold sets (necklace, earrings, mathapatti, nath)
                </li>
                <li>
                  <strong>Chooda & Kalire:</strong> Red/white bangles with gold kalire
                </li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Groom's Attire:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <strong>Sangeet:</strong> Kurta pajama or Indo-western outfit
                </li>
                <li>
                  <strong>Wedding:</strong> Cream/ivory sherwani with pagdi (turban)
                </li>
                <li>
                  <strong>Sehra:</strong> Decorated veil attached to turban (worn during baraat)
                </li>
                <li>
                  <strong>Reception:</strong> Dark sherwani, tuxedo, or designer suit
                </li>
                <li>
                  <strong>Accessories:</strong> Kalghi (turban brooch), mojris (shoes), dupatta
                </li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Punjabi Wedding Food: Legendary Feasts
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Punjabi weddings are synonymous with abundant, delicious food. Expect a lavish spread that will leave no one
            hungry.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Signature Punjabi Wedding Dishes:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Appetizers:</strong> Samosas, pakoras, paneer tikka, chicken tikka, tandoori items
              </li>
              <li>
                <strong>Main Course:</strong> Butter chicken, dal makhani, rajma, chole bhature, sarson da saag with
                makki di roti
              </li>
              <li>
                <strong>Vegetarian:</strong> Paneer butter masala, kadhi pakora, aloo gobi, mix vegetables
              </li>
              <li>
                <strong>Non-Vegetarian:</strong> Lamb curry, tandoori chicken, fish tikka
              </li>
              <li>
                <strong>Rice:</strong> Biryani, jeera rice, pulao
              </li>
              <li>
                <strong>Breads:</strong> Naan, roti, paratha
              </li>
              <li>
                <strong>Desserts:</strong> Gulab jamun, rasmalai, jalebi, kheer, kulfi
              </li>
              <li>
                <strong>Drinks:</strong> Lassi (sweet/salted), masala chai, open bar
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Pro tip:</strong> Budget generously for food at a Punjabi wedding—guests expect variety and
            abundance, and it's better to have leftovers than run out.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Modern Fusion: Adapting Traditions
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Many Punjabi couples blend traditional rituals with modern elements or fusion with non-Punjabi partner
            traditions. Here are respectful ways to adapt:
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Fusion Ideas That Work:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Dual ceremonies:</strong> Anand Karaj + Christian/Jewish ceremony on same day
              </li>
              <li>
                <strong>Simplified Chooda:</strong> Wear chooda for 1 week instead of 40 days if needed for work
              </li>
              <li>
                <strong>Combined events:</strong> Jaggo + Sangeet on same night with different dress changes
              </li>
              <li>
                <strong>English explanations:</strong> Have someone explain rituals for non-Punjabi guests
              </li>
              <li>
                <strong>Mixed music:</strong> Bhangra + Western hits at reception
              </li>
              <li>
                <strong>Hybrid attire:</strong> Bride wears Western dress to reception after traditional lehenga
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Budget: What Punjabi Weddings Cost
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Punjabi weddings in the USA typically cost $40,000–$100,000 depending on guest count and vendor choices.
            Here's a realistic breakdown:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Category</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Cost Range</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm text-foreground/80">
                <tr>
                  <td className="border border-border p-3">Venue(s)</td>
                  <td className="border border-border p-3">$10,000–$25,000</td>
                  <td className="border border-border p-3">Multiple events (sangeet, ceremony, reception)</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Catering</td>
                  <td className="border border-border p-3">$50–$100 per person</td>
                  <td className="border border-border p-3">300–500 guests typical, includes bar</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Decor & lighting</td>
                  <td className="border border-border p-3">$5,000–$12,000</td>
                  <td className="border border-border p-3">Mandap/stage, floral, lighting for multiple events</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Photography/videography</td>
                  <td className="border border-border p-3">$4,000–$10,000</td>
                  <td className="border border-border p-3">Full coverage (3–5 days), cinematic video</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Outfits & jewelry</td>
                  <td className="border border-border p-3">$8,000–$20,000</td>
                  <td className="border border-border p-3">Bride (3–4 outfits), groom (3 outfits), gold jewelry</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Entertainment</td>
                  <td className="border border-border p-3">$3,000–$8,000</td>
                  <td className="border border-border p-3">DJ, dhol players, live band, dancers</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Mehendi & hair/makeup</td>
                  <td className="border border-border p-3">$2,000–$5,000</td>
                  <td className="border border-border p-3">Bridal party mehendi + hair/makeup for multiple events</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Need Help Planning Your Punjabi Wedding?
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            CeremonyVerse specializes in Punjabi and Sikh wedding planning with deep cultural knowledge and modern
            execution. We understand the importance of honoring traditions while creating a celebration that reflects
            your unique style.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">How We Help:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Coordinate Anand Karaj at Gurdwara or your venue with Guru Granth Sahib logistics</li>
              <li>Find authentic Punjabi caterers, dhol players, and entertainment</li>
              <li>Plan Jaggo, Chooda, and all pre-wedding ceremonies with proper customs</li>
              <li>Balance family expectations with your modern preferences</li>
              <li>Coordinate multi-day events and manage vendor timeline</li>
              <li>Help with fusion elements for interfaith couples</li>
            </ul>
          </div>

          <div className="bg-accent-soft/20 border-l-4 border-accent p-6 my-8">
            <p className="text-foreground/90 font-medium mb-4">
              Whether you need full planning, day-of coordination, or cultural guidance, we're here to create an
              authentic, joyful Punjabi wedding that honors your heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                View Planning Services
              </Link>
              <Link
                href="/book"
                className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <SocialShare
          url="https://www.ceremonyverse.com/blog/punjabi-wedding-traditions-guide"
          title="Punjabi Wedding Traditions Guide: Complete Ceremony Breakdown"
        />

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/gujarati-wedding-planning-guide"
              className="p-6 border border-border rounded-lg hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-foreground mb-2">Gujarati Wedding Planning Guide</h4>
              <p className="text-sm text-foreground/70">Understanding Gujarati wedding traditions and rituals</p>
            </Link>
            <Link
              href="/blog/south-asian-wedding-budget-guide"
              className="p-6 border border-border rounded-lg hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-foreground mb-2">Indian Wedding Budget Guide 2025</h4>
              <p className="text-sm text-foreground/70">Complete cost breakdown and money-saving strategies</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
