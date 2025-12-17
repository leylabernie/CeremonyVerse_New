import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialShare from "@/components/social-share"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Complete Guide to Indian Wedding Traditions for Modern Couples | CeremonyVerse",
  description:
    "Discover the meaning behind Indian wedding traditions including Mehendi, Haldi, Sangeet, and more. Perfect for couples planning authentic fusion weddings.",
  keywords:
    "Indian wedding traditions, Mehendi ceremony, Haldi ceremony, Sangeet night, Baraat, Hindu wedding rituals, fusion wedding traditions, Indian American wedding",
}

export default function IndianWeddingTraditionsGuide() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors mb-6 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">
              Complete Guide to Indian Wedding Traditions for Modern Couples
            </h1>
            <p className="text-xl text-charcoal/70 mb-8">
              Understanding the beautiful rituals that make Indian weddings unforgettable
            </p>
            <div className="flex items-center gap-4 text-charcoal/60">
              <span>By CeremonyVerse Team</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Wedding Planning</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 mb-12 border border-primary/10">
                <h2 className="font-serif text-3xl text-charcoal mb-4">Why Understanding Traditions Matters</h2>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  If you're planning an Indian-American fusion wedding, you might feel caught between two worlds.
                  Perhaps you grew up in the United States, celebrated American holidays, but your parents still speak
                  about the "proper way" to have a wedding. You want to honor your heritage, but you're not entirely
                  sure what each tradition means or why it matters.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  You're not alone. Many second-generation Indian-Americans feel disconnected from their cultural roots
                  while simultaneously wanting to celebrate them. This guide will walk you through the most important
                  Indian wedding traditions, explain their significance, and show you how to incorporate them
                  authentically into your modern fusion wedding.
                </p>
              </div>

              {/* Pre-Wedding Ceremonies */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">Pre-Wedding Ceremonies</h2>

              <h3 className="font-serif text-2xl text-primary mb-4">1. Roka Ceremony</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> The Roka is the official announcement that the couple is engaged. It's an
                intimate gathering where both families meet, exchange gifts, and give their blessings.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> This ceremony marks the formal acceptance of the bride and groom into
                each other's families. It's a promise that both families will support the union.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> Many couples combine the Roka with their engagement party, creating
                a fusion event that includes both traditional gift exchanges and Western engagement traditions like
                champagne toasts and speeches.
              </p>

              <h3 className="font-serif text-2xl text-primary mb-4">2. Mehendi Ceremony (Henna Night)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> The Mehendi ceremony involves applying intricate henna designs to the
                bride's hands and feet. Female family members and friends also get henna applied while celebrating with
                music, dancing, and food.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> Henna is believed to bring good luck and prosperity. The darker the
                henna stain, the stronger the love between the couple (according to tradition). It's also said that the
                bride doesn't have to do housework until the henna fades!
              </p>
              <div className="bg-sage/10 rounded-xl p-6 mb-6 border border-sage/20">
                <p className="text-charcoal/80 leading-relaxed mb-2">
                  <strong>Pro Tip:</strong> Book your Mehendi artist 6-8 months in advance, especially if you want
                  intricate bridal designs. A full bridal Mehendi can take 4-6 hours to apply.
                </p>
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> Turn your Mehendi into a garden party or spa day. Provide henna
                stations for guests, serve fusion appetizers, and create a playlist mixing Bollywood hits with your
                favorite Western songs.
              </p>

              <h3 className="font-serif text-2xl text-primary mb-4">3. Haldi Ceremony (Turmeric Ritual)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> Family members apply a paste made of turmeric, sandalwood, and rose water
                to the bride and groom (in separate ceremonies). This happens 1-2 days before the wedding.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> Turmeric is known for its cleansing and beautifying properties. The
                ritual is meant to purify the couple before marriage and give them a natural glow. It's also believed to
                ward off evil spirits.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> Embrace the mess! Wear yellow outfits you don't mind ruining, set up
                a photo booth with yellow props, and prepare for a fun, playful ceremony. Many couples now do joint
                Haldi ceremonies instead of separate ones.
              </p>

              <h3 className="font-serif text-2xl text-primary mb-4">4. Sangeet Night (Music & Dance Celebration)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> The Sangeet is a musical evening where both families come together to
                perform choreographed dances, sing songs, and celebrate. It's become one of the most anticipated events
                of Indian weddings.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> Originally, the Sangeet was for the bride's female relatives to sing
                traditional folk songs. Today, it's evolved into a full-scale performance night where both families
                compete in friendly dance battles.
              </p>
              <div className="bg-primary/5 rounded-xl p-6 mb-6 border border-primary/20">
                <p className="text-charcoal/80 leading-relaxed mb-2">
                  <strong>Budget Tip:</strong> The Sangeet can be one of your most cost-effective events. Rent a
                  community hall or host it in a large backyard. The entertainment is provided by your family and
                  friends!
                </p>
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> Mix Bollywood dance performances with Western songs. Include your
                non-Indian friends in the performances. Hire a DJ who can seamlessly blend both musical styles.
              </p>

              {/* Wedding Day Ceremonies */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">Wedding Day Ceremonies</h2>

              <h3 className="font-serif text-2xl text-primary mb-4">5. Baraat (Groom's Procession)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> The groom arrives at the wedding venue in a grand procession, traditionally
                on a decorated horse or elephant, accompanied by his family and friends dancing to dhol (drum) beats.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> The Baraat announces the groom's arrival and demonstrates the joy and
                celebration of the occasion. It's a show of the groom's family's happiness and pride.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> In the US, grooms often arrive in luxury cars, vintage cars, or even
                party buses. Some creative grooms have arrived on motorcycles, in helicopters, or leading a second-line
                parade (New Orleans style). The key is the energy and celebration, not the mode of transport.
              </p>

              <h3 className="font-serif text-2xl text-primary mb-4">6. Milni (Meeting of Families)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> After the Baraat arrives, the bride's family formally welcomes the groom's
                family. Male relatives from both sides are paired up and exchange garlands and gifts.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> Milni symbolizes the union of two families, not just two individuals.
                It's a recognition that marriage creates bonds between entire families.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> Include female relatives in the Milni ceremony. Some couples create
                a receiving line where all immediate family members from both sides greet each other.
              </p>

              <h3 className="font-serif text-2xl text-primary mb-4">7. Mandap Ceremony (The Main Wedding Ritual)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> The wedding ceremony takes place under a decorated canopy called a Mandap,
                which represents the universe. The ceremony includes several key rituals:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>
                  <strong>Kanyadaan:</strong> The bride's parents give away their daughter
                </li>
                <li>
                  <strong>Hasta Melap:</strong> The couple's hands are tied together with a sacred thread
                </li>
                <li>
                  <strong>Saptapadi (Seven Steps):</strong> The couple takes seven steps around the sacred fire, making
                  seven vows
                </li>
                <li>
                  <strong>Sindoor & Mangalsutra:</strong> The groom applies vermillion to the bride's hair parting and
                  ties a sacred necklace around her neck
                </li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> Each ritual has deep spiritual meaning. The seven steps represent
                seven aspects of married life: nourishment, strength, prosperity, happiness, progeny, longevity, and
                harmony.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> Work with your officiant to explain each ritual in English for
                non-Indian guests. Some couples write their own vows to recite alongside the traditional Sanskrit
                mantras. You can also shorten the ceremony from 2-3 hours to 45-60 minutes by condensing certain
                rituals.
              </p>

              {/* Post-Wedding Traditions */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">Post-Wedding Traditions</h2>

              <h3 className="font-serif text-2xl text-primary mb-4">8. Vidaai (Bride's Farewell)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> The bride says goodbye to her family and leaves with the groom. She
                traditionally throws rice over her shoulder toward her parents' home.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> The rice throwing symbolizes that the bride is repaying her parents
                for all they've given her. It's an emotional moment acknowledging that she's leaving her childhood home
                to start a new life.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> Since many couples already live together before marriage, the Vidaai
                can feel less relevant. Some couples do a symbolic Vidaai at the end of the reception, while others skip
                it entirely or replace it with a thank-you speech to both sets of parents.
              </p>

              <h3 className="font-serif text-2xl text-primary mb-4">9. Griha Pravesh (Welcome to New Home)</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>What it is:</strong> The bride is welcomed into the groom's family home. She kicks a pot of rice
                at the entrance, symbolizing bringing prosperity to the household.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                <strong>The significance:</strong> This ritual marks the bride's official entry into her new family and
                home.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Modern adaptation:</strong> If the couple has their own home, they can perform this ritual
                together at their own place. Some couples do a small ceremony when they return from their honeymoon.
              </p>

              {/* Regional Variations */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">Regional Variations to Know</h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Indian wedding traditions vary significantly by region and religion. Here are some key differences:
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 border border-charcoal/10">
                <h4 className="font-serif text-xl text-charcoal mb-3">
                  South Indian (Tamil, Telugu, Kannada) Weddings
                </h4>
                <ul className="list-disc pl-6 text-charcoal/80 space-y-2">
                  <li>Morning ceremonies are traditional</li>
                  <li>Bride wears a silk saree (often Kanjivaram)</li>
                  <li>Tying of the Thali (sacred thread) is the key moment</li>
                  <li>More subdued, spiritual atmosphere</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6 border border-charcoal/10">
                <h4 className="font-serif text-xl text-charcoal mb-3">Gujarati Weddings</h4>
                <ul className="list-disc pl-6 text-charcoal/80 space-y-2">
                  <li>Garba night before the wedding</li>
                  <li>Groom arrives in a procession with a sword</li>
                  <li>Jaan ceremony where groom's feet are washed</li>
                  <li>Lots of games and playful rituals</li>
                </ul>
              </div>

              {/* Creating Your Fusion Wedding */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">Creating Your Perfect Fusion Wedding</h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The beauty of a fusion wedding is that you get to choose which traditions resonate with you. Here's how
                to decide:
              </p>

              <div className="bg-sage/10 rounded-xl p-8 mb-8 border border-sage/20">
                <h4 className="font-serif text-2xl text-charcoal mb-4">Questions to Ask Yourself:</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Which traditions did you grow up seeing at family weddings?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>Which rituals have personal meaning to you and your partner?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>Which traditions are most important to your parents and grandparents?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <span>How much time do you have for your wedding events?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">5.</span>
                    <span>What's your budget for multiple events?</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">Sample Fusion Wedding Timeline</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Here's a popular structure for a 3-day Indian-American fusion wedding:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h5 className="font-bold text-charcoal mb-2">Day 1 (Friday Evening): Mehendi & Sangeet</h5>
                  <p className="text-charcoal/70">
                    Combined event with henna stations, performances, and dancing. Casual, colorful attire.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h5 className="font-bold text-charcoal mb-2">Day 2 (Saturday Morning): Haldi</h5>
                  <p className="text-charcoal/70">
                    Intimate morning ceremony with close family. Followed by lunch and rest time.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h5 className="font-bold text-charcoal mb-2">
                    Day 2 (Saturday Evening): Indian Ceremony & Reception
                  </h5>
                  <p className="text-charcoal/70">
                    Baraat arrival, Mandap ceremony, followed by cocktail hour and reception with dinner and dancing.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h5 className="font-bold text-charcoal mb-2">Day 3 (Sunday Morning): Western Ceremony (Optional)</h5>
                  <p className="text-charcoal/70">
                    Shorter Western-style ceremony for couples who want both. Followed by brunch.
                  </p>
                </div>
              </div>

              {/* Working with Family */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">Navigating Family Expectations</h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                One of the biggest challenges in planning a fusion wedding is balancing your vision with family
                expectations. Here's how to handle common situations:
              </p>

              <div className="bg-primary/5 rounded-xl p-8 mb-8 border border-primary/20">
                <h4 className="font-serif text-xl text-charcoal mb-4">When Parents Want All the Traditions:</h4>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  <strong>Strategy:</strong> Prioritize the "non-negotiables" for your parents. Ask them to choose their
                  top 3-5 must-have traditions. Explain that you want to honor these traditions meaningfully rather than
                  rushing through everything.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  <strong>Compromise:</strong> Offer to do certain rituals in a more intimate setting (like Haldi with
                  just close family) rather than skipping them entirely.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-8 mb-8 border border-primary/20">
                <h4 className="font-serif text-xl text-charcoal mb-4">When You Don't Understand the Traditions:</h4>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  <strong>Strategy:</strong> Have your parents or grandparents explain the significance of each
                  tradition. Understanding the "why" often makes you more excited to include it.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  <strong>Resource:</strong> Work with a cultural consultant or wedding planner who specializes in
                  Indian-American weddings. They can bridge the gap between generations and help you create meaningful
                  ceremonies.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-8 mb-8 border border-primary/20">
                <h4 className="font-serif text-xl text-charcoal mb-4">When Your Partner is Not Indian:</h4>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  <strong>Strategy:</strong> Education is key. Create a wedding website with explanations of each
                  tradition. Have your partner's family participate in rituals where appropriate.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  <strong>Inclusion:</strong> Incorporate traditions from your partner's culture as well. A true fusion
                  wedding honors both backgrounds equally.
                </p>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-br from-primary/10 to-sage/10 rounded-2xl p-10 mt-12 border border-primary/20">
                <h2 className="font-serif text-3xl text-charcoal mb-4">Your Heritage, Your Way</h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  There's no single "right way" to have an Indian-American fusion wedding. The most meaningful
                  celebrations are those that authentically reflect who you are as a couple—honoring your heritage while
                  embracing your modern identity.
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Whether you choose to include all the traditional ceremonies or select just a few meaningful rituals,
                  what matters most is that your wedding feels true to you. The traditions are there to enhance your
                  celebration, not constrain it.
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-8">
                  At CeremonyVerse, we specialize in helping couples like you navigate these decisions. We understand
                  the unique challenges of planning a fusion wedding because we've been there ourselves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Schedule Your Free Consultation
                  </Link>
                  <Link
                    href="/heritage-harmony"
                    className="inline-block bg-white text-charcoal px-8 py-4 rounded-full hover:bg-charcoal/5 transition-colors text-center font-medium border border-charcoal/20"
                  >
                    Explore Our Heritage & Harmony Plan
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16 pt-12 border-t border-charcoal/10">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/blog/essential-elements-fusion-wedding"
                    className="bg-white rounded-xl p-6 border border-charcoal/10 hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-serif text-xl text-charcoal mb-2">10 Essential Elements of a Fusion Wedding</h4>
                    <p className="text-charcoal/60 text-sm">Learn how to blend traditions seamlessly</p>
                  </Link>
                  <Link
                    href="/blog/fusion-wedding-timeline"
                    className="bg-white rounded-xl p-6 border border-charcoal/10 hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-serif text-xl text-charcoal mb-2">12-Month Fusion Wedding Planning Timeline</h4>
                    <p className="text-charcoal/60 text-sm">Your complete month-by-month guide</p>
                  </Link>
                </div>
              </div>

              <div className="mt-12">
                <SocialShare
                  url="https://ceremonyverse.com/blog/indian-wedding-traditions-guide"
                  title="Complete Guide to Indian Wedding Traditions for Modern Couples"
                />
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
