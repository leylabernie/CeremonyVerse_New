import SocialShare from "@/components/social-share"
import Link from "next/link"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Gujarati Wedding Planning Guide 2025 | Traditions, Rituals & Timeline",
  description:
    "Complete guide to planning a traditional Gujarati wedding. Learn about Gol Dhana, Pithi, Garba night, Jaan ceremonies, mandap rituals, and how to honor Gujarati customs while personalizing your celebration.",
  keywords:
    "gujarati wedding planning, gujarati wedding traditions, gol dhana ceremony, pithi ceremony gujarati, garba night wedding, gujarati mandap ceremony, gujarati wedding rituals, gujarati wedding guide",
  openGraph: {
    title: "Gujarati Wedding Planning Guide | Traditions & Rituals",
    description:
      "Everything you need to plan an authentic Gujarati wedding from Gol Dhana to Vidaai, with modern planning tips.",
    type: "article",
  },
}

export default function GujaratiWeddingGuidePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Blog", url: "https://www.ceremonyverse.com/blog" },
    {
      name: "Gujarati Wedding Planning Guide",
      url: "https://www.ceremonyverse.com/blog/gujarati-wedding-planning-guide",
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
          Gujarati Wedding Planning Guide: Traditions, Rituals & Modern Timeline
        </h1>

        <div className="flex items-center gap-6 text-sm text-foreground/60 mb-8">
          <time>December 2025</time>
          <span>16 min read</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            Gujarati weddings are vibrant, joyful celebrations filled with color, music, and meaningful rituals that
            honor family bonds and cultural heritage. Whether you're planning a traditional Gujarati wedding or blending
            Gujarati customs into a fusion celebration, this guide walks you through every ceremony, ritual, and
            planning consideration.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Understanding Gujarati Wedding Structure
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Gujarati weddings typically span 3–5 days with distinct pre-wedding, wedding day, and post-wedding
            ceremonies. Each ritual carries deep significance and brings together families in celebration.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Typical Gujarati Wedding Timeline:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Pre-Wedding (2–3 days before):</strong> Gol Dhana, Pithi, Mehendi, Garba/Sangeet
              </li>
              <li>
                <strong>Wedding Day:</strong> Jaan (baraat), Mandap ceremony, Pheras, Vidaai
              </li>
              <li>
                <strong>Post-Wedding:</strong> Reception, Graha Shanti (bride's first visit to groom's home)
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">Pre-Wedding Ceremonies Explained</h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Gol Dhana: The Engagement Ceremony
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Gol Dhana (also called Gol Dhana or Gor Dhana) is the formal engagement ceremony where both families
            exchange gifts and sweets, officially announcing the couple's intention to marry.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">What Happens:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Families exchange coriander seeds (dhana) and jaggery (gol) as symbols of prosperity</li>
              <li>Groom's family gifts clothes, jewelry, and sweets to the bride</li>
              <li>Bride's family reciprocates with gifts for the groom</li>
              <li>Formal announcement of wedding date and venue</li>
              <li>Typically held at bride's home or banquet hall</li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Modern adaptations:</strong> Many couples combine Gol Dhana with a cocktail hour or engagement party
            for non-Gujarati guests unfamiliar with the tradition.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Pithi (Haldi) Ceremony: Cleansing Ritual
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The Pithi ceremony involves applying a turmeric paste (pithi) to the bride and groom separately at their
            respective homes. This purification ritual is believed to bless the couple with good fortune and glowing
            skin.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Pithi Ceremony Elements:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Turmeric paste:</strong> Mixed with sandalwood, rose water, and chickpea flour
              </li>
              <li>
                <strong>Applied by:</strong> Married female relatives and close friends
              </li>
              <li>
                <strong>Location:</strong> Bride's home and groom's home separately (same day, same time preferred)
              </li>
              <li>
                <strong>Attire:</strong> Yellow or white clothes (pithi stains!), often coordinated
              </li>
              <li>
                <strong>Music:</strong> Traditional Gujarati songs, Bollywood classics
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Garba Night: The Celebration</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The Garba night (sometimes combined with Sangeet) is the most anticipated pre-wedding event. Guests dance
            traditional Garba and Dandiya Raas in colorful chaniya cholis and kediyus.
          </p>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Garba Night Planning Essentials:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Venue:</strong> Large space for circular dancing (hotels, banquet halls, outdoor venues)
              </li>
              <li>
                <strong>DJ/Music:</strong> Mix of traditional Garba songs and Bollywood hits
              </li>
              <li>
                <strong>Dandiya sticks:</strong> Provided for guests or ask them to bring their own
              </li>
              <li>
                <strong>Attire:</strong> Chaniya choli (women), kediyu (men), coordinated colors encouraged
              </li>
              <li>
                <strong>Duration:</strong> 3–5 hours, often starts evening/night
              </li>
              <li>
                <strong>Food:</strong> Gujarati snacks (dhokla, fafda, jalebi) and dinner buffet
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Pro tip:</strong> Consider hiring a Garba instructor for a 15-minute tutorial at the start if you
            have many non-Gujarati guests unfamiliar with the steps.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">Wedding Day: Mandap Ceremony</h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Jaan (Baraat): Groom's Arrival
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The Jaan is the groom's grand procession to the wedding venue, accompanied by his family, friends, and a
            live band. This joyful entrance sets the celebratory tone for the day.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Jaan Logistics:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Transportation:</strong> Groom arrives on horseback (ghodi), decorated car, or vintage vehicle
              </li>
              <li>
                <strong>Band:</strong> Dhol players, brass band, or DJ truck
              </li>
              <li>
                <strong>Dancing:</strong> Groom's side dances to venue entrance
              </li>
              <li>
                <strong>Milni:</strong> Groom's family greeted by bride's family at venue entrance
              </li>
              <li>
                <strong>Timing:</strong> Typically 30–60 minutes before mandap ceremony
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Mandap Ceremony: The Sacred Rituals
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The mandap ceremony is the heart of the Gujarati wedding, where the couple exchanges vows and completes
            rituals under a beautifully decorated mandap (wedding altar).
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Key Rituals in Order:</h4>
            <ol className="space-y-4 text-foreground/80">
              <li>
                <strong>1. Ponkvu:</strong> Bride's maternal uncle (mama) washes groom's feet, symbolizing respect and
                acceptance
              </li>
              <li>
                <strong>2. Madhuparka:</strong> Groom drinks a mixture of milk, honey, ghee, curd, and sugar as
                purification
              </li>
              <li>
                <strong>3. Ganesh Puja:</strong> Prayers to Lord Ganesh for removing obstacles
              </li>
              <li>
                <strong>4. Hasta Melap:</strong> Bride's and groom's hands are tied with a sacred thread
              </li>
              <li>
                <strong>5. Mangal Phera (Four Pheras):</strong> Couple circles sacred fire four times, making vows for
                dharma, artha, kama, and moksha
              </li>
              <li>
                <strong>6. Kanyadaan:</strong> Bride's parents give away their daughter
              </li>
              <li>
                <strong>7. Saptapadi (Seven Steps):</strong> Seven sacred vows taken together
              </li>
              <li>
                <strong>8. Mangal Sutra & Sindoor:</strong> Groom ties mangalsutra and applies sindoor to bride's
                forehead
              </li>
            </ol>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Duration:</strong> Traditional mandap ceremony lasts 2–3 hours. Some modern couples opt for shorter,
            condensed versions (60–90 minutes) while keeping core rituals.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Vidaai: Emotional Farewell</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Vidaai is the emotional moment when the bride leaves her parents' home to start her new life with her
            husband. This bittersweet ritual signifies the bride's transition from daughter to wife.
          </p>

          <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Vidaai Traditions:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Bride tosses rice over her shoulder (symbolizing prosperity for parents' home)</li>
              <li>Bride's brother accompanies her to the car</li>
              <li>Bride looks back at parents' home one last time</li>
              <li>Often emotional—have tissues ready!</li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">Post-Wedding Ceremonies</h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Reception: Formal Celebration</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The reception is a formal evening event where the newlyweds receive blessings from extended family and
            friends. This is typically when non-family guests are invited.
          </p>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Reception Elements:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Formal sit-down dinner or buffet</li>
              <li>Speeches and toasts from family</li>
              <li>First dance (optional, modern addition)</li>
              <li>Cake cutting (fusion element)</li>
              <li>DJ and dancing</li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Gujarati Wedding Attire: What to Wear
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Bride's Attire:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <strong>Pithi:</strong> Yellow or white salwar kameez
                </li>
                <li>
                  <strong>Garba:</strong> Colorful chaniya choli (traditional Gujarati ghagra)
                </li>
                <li>
                  <strong>Wedding:</strong> Red or maroon panetar (Gujarati bridal saree) or lehenga
                </li>
                <li>
                  <strong>Reception:</strong> Heavy lehenga or designer saree
                </li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Groom's Attire:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <strong>Pithi:</strong> White or yellow kurta pajama
                </li>
                <li>
                  <strong>Garba:</strong> Traditional kediyu with dhoti or churidar
                </li>
                <li>
                  <strong>Wedding:</strong> Cream or ivory sherwani with pagdi (turban)
                </li>
                <li>
                  <strong>Reception:</strong> Dark sherwani or Indo-western suit
                </li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Gujarati Wedding Food: Essential Dishes
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Gujarati weddings are known for their incredible vegetarian cuisine—sweet, savory, and bursting with flavor.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Must-Have Dishes:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Appetizers:</strong> Dhokla, khandvi, fafda, samosa
              </li>
              <li>
                <strong>Main Course:</strong> Undhiyu, dal dhokli, kadhi, bhakri, thepla
              </li>
              <li>
                <strong>Sweets:</strong> Jalebi, basundi, shrikhand, mohanthal, ghee-laden ladoos
              </li>
              <li>
                <strong>Drinks:</strong> Chaas (buttermilk), masala chai
              </li>
              <li>
                <strong>Special:</strong> Gujarati thali for wedding lunch (12–16 items!)
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Note:</strong> Traditional Gujarati weddings are 100% vegetarian (no onion/garlic for some orthodox
            families). Discuss dietary restrictions with your caterer early.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Modern Fusion: Adapting Traditions
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Many Gujarati couples blend traditional rituals with modern elements or fusion with non-Gujarati partner
            traditions. Here's how to do it respectfully:
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Fusion Ideas That Work:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Shortened mandap ceremony:</strong> Keep core rituals (Pheras, Saptapadi) but condense to 90
                minutes
              </li>
              <li>
                <strong>Dual ceremonies:</strong> Gujarati mandap + Christian/Jewish ceremony back-to-back
              </li>
              <li>
                <strong>Bilingual officiants:</strong> Priest explains rituals in English for non-Gujarati guests
              </li>
              <li>
                <strong>Cocktail hour:</strong> Add between ceremony and reception (Western element)
              </li>
              <li>
                <strong>First dance/speeches:</strong> Include at reception (not traditional, but popular)
              </li>
              <li>
                <strong>Mixed cuisine:</strong> Gujarati thali + continental/American options for non-veg guests
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Planning Timeline: When to Book What
          </h2>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">12 Months Before:</h4>
              <p className="text-foreground/80">
                Book venue(s), priest, photographer, caterer. Venues book fast for peak wedding season (Oct–Feb).
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">8–10 Months Before:</h4>
              <p className="text-foreground/80">
                Book DJ/entertainment, florist, mandap decorator. Start outfit shopping (lehenga, sherwani).
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">6 Months Before:</h4>
              <p className="text-foreground/80">
                Finalize guest list, send save-the-dates. Book hair/makeup artist, mehendi artist, dhol players.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">3–4 Months Before:</h4>
              <p className="text-foreground/80">
                Send formal invitations. Finalize ceremony details with priest. Order jewelry, accessories, favors.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">1–2 Months Before:</h4>
              <p className="text-foreground/80">
                Final dress/sherwani fittings. Confirm all vendor details. Create day-of timeline and shot list for
                photographer.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-foreground mb-2">1 Week Before:</h4>
              <p className="text-foreground/80">
                Final vendor confirmations, rehearsal with priest, pack wedding emergency kit.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Budget Breakdown: What Gujarati Weddings Cost
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Average Gujarati wedding costs in the USA range from $30,000–$80,000 depending on guest count and location.
            Here's a typical breakdown:
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
                  <td className="border border-border p-3">$8,000–$20,000</td>
                  <td className="border border-border p-3">Multiple events (garba, ceremony, reception)</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Catering (Gujarati vegetarian)</td>
                  <td className="border border-border p-3">$40–$80 per person</td>
                  <td className="border border-border p-3">200–300 guests typical</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Mandap & decor</td>
                  <td className="border border-border p-3">$3,000–$8,000</td>
                  <td className="border border-border p-3">Traditional carved wood mandap costs more</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Photography/videography</td>
                  <td className="border border-border p-3">$3,000–$7,000</td>
                  <td className="border border-border p-3">Full coverage (3–5 days)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Outfits & jewelry</td>
                  <td className="border border-border p-3">$5,000–$15,000</td>
                  <td className="border border-border p-3">Bride, groom, parents' outfits</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Entertainment (DJ, dhol, garba)</td>
                  <td className="border border-border p-3">$2,000–$5,000</td>
                  <td className="border border-border p-3">Multiple events</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Priest & religious items</td>
                  <td className="border border-border p-3">$500–$1,500</td>
                  <td className="border border-border p-3">Dakshina (donation) varies</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Hair/makeup/mehendi</td>
                  <td className="border border-border p-3">$1,500–$3,000</td>
                  <td className="border border-border p-3">Bride + bridal party</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Need Help Planning Your Gujarati Wedding?
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            CeremonyVerse specializes in Gujarati and fusion wedding planning with cultural expertise you can trust. We
            understand the importance of honoring tradition while creating a celebration that reflects your unique
            story.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">How We Help:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Navigate family expectations and tradition vs. modern preferences</li>
              <li>Coordinate Gujarati priest and ensure ceremony runs smoothly</li>
              <li>Source authentic Gujarati catering, mandap decorators, and entertainment</li>
              <li>Plan fusion elements that honor both partners' backgrounds</li>
              <li>Manage timeline and vendor coordination across 3–5 days of events</li>
            </ul>
          </div>

          <div className="bg-accent-soft/20 border-l-4 border-accent p-6 my-8">
            <p className="text-foreground/90 font-medium mb-4">
              Whether you need full planning, day-of coordination, or just guidance on cultural details, we're here to
              help you create an authentic, joyful Gujarati wedding.
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
          url="https://www.ceremonyverse.com/blog/gujarati-wedding-planning-guide"
          title="Gujarati Wedding Planning Guide: Traditions & Rituals"
        />

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/indian-wedding-traditions-guide"
              className="p-6 border border-border rounded-lg hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-foreground mb-2">Complete Guide to Indian Wedding Traditions</h4>
              <p className="text-sm text-foreground/70">Understanding rituals across different Indian cultures</p>
            </Link>
            <Link
              href="/blog/south-asian-wedding-budget-guide"
              className="p-6 border border-border rounded-lg hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-foreground mb-2">Indian Wedding Budget Guide 2025</h4>
              <p className="text-sm text-foreground/70">Complete cost breakdown and planning tips</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
