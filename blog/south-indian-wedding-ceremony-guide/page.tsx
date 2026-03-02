import SocialShare from "@/components/social-share"
import Link from "next/link"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "South Indian Wedding Ceremony Guide 2025 | Tamil, Telugu, Kannada & Malayalam Traditions",
  description:
    "Complete guide to South Indian wedding traditions. Learn about Muhurtham, Kanyadanam, Saptapadi, Oonjal ceremony, and regional differences in Tamil, Telugu, Kannada, and Malayalam weddings.",
  keywords:
    "south indian wedding ceremony, tamil wedding traditions, telugu wedding rituals, kannada wedding customs, malayalam wedding ceremony, muhurtham timing, south indian wedding guide, kanyadanam ceremony",
  openGraph: {
    title: "South Indian Wedding Ceremony Guide | Regional Traditions Explained",
    description:
      "Everything you need to know about South Indian wedding ceremonies from Tamil Nadu, Andhra Pradesh, Karnataka, and Kerala.",
    type: "article",
  },
}

export default function SouthIndianWeddingGuidePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Blog", url: "https://www.ceremonyverse.com/blog" },
    {
      name: "South Indian Wedding Ceremony Guide",
      url: "https://www.ceremonyverse.com/blog/south-indian-wedding-ceremony-guide",
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
          South Indian Wedding Ceremony Guide: Tamil, Telugu, Kannada & Malayalam Traditions
        </h1>

        <div className="flex items-center gap-6 text-sm text-foreground/60 mb-8">
          <time>December 2025</time>
          <span>19 min read</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            South Indian weddings are deeply rooted in Vedic traditions with ceremonies that emphasize spirituality,
            family blessings, and auspicious timing. From Tamil Nadu to Kerala, each region brings unique customs while
            sharing common Hindu rituals. This comprehensive guide covers Tamil, Telugu, Kannada, and Malayalam wedding
            traditions to help you plan an authentic South Indian celebration.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Understanding South Indian Wedding Structure
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            South Indian weddings typically take place during a specific Muhurtham (auspicious time) determined by
            astrologers. Unlike North Indian weddings that span multiple days, traditional South Indian weddings focus
            on a single day with morning/daytime ceremonies, though modern celebrations often include pre-wedding
            events.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Typical South Indian Wedding Timeline:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Pre-Wedding (optional in modern weddings):</strong> Mehendi, Sangeet (fusion addition)
              </li>
              <li>
                <strong>Wedding Morning:</strong> Ganesh Puja, Kashi Yatra, Oonjal, Kanyadanam
              </li>
              <li>
                <strong>Muhurtham (Sacred Time):</strong> Mangalsutra/Thali tying, Saptapadi, blessings
              </li>
              <li>
                <strong>Post-Ceremony:</strong> Lunch, Reception (evening)
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">Regional Differences at a Glance</h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Element</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Tamil</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Telugu</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Kannada</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Malayalam</th>
                </tr>
              </thead>
              <tbody className="text-sm text-foreground/80">
                <tr>
                  <td className="border border-border p-3 font-medium">Sacred Thread</td>
                  <td className="border border-border p-3">Thali (gold pendant on yellow thread)</td>
                  <td className="border border-border p-3">Mangalsutra (black beads + gold)</td>
                  <td className="border border-border p-3">Mangalsutra</td>
                  <td className="border border-border p-3">Minnu (coin pendant)</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3 font-medium">Bridal Attire</td>
                  <td className="border border-border p-3">Kanchipuram silk saree</td>
                  <td className="border border-border p-3">Pattu saree (silk)</td>
                  <td className="border border-border p-3">Mysore silk saree</td>
                  <td className="border border-border p-3">Kasavu saree (white with gold border)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">Timing</td>
                  <td className="border border-border p-3">Strict Muhurtham (often early morning)</td>
                  <td className="border border-border p-3">Muhurtham (morning/afternoon)</td>
                  <td className="border border-border p-3">Muhurtham (morning)</td>
                  <td className="border border-border p-3">Flexible, often afternoon</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3 font-medium">Food Style</td>
                  <td className="border border-border p-3">Vegetarian, served on banana leaf</td>
                  <td className="border border-border p-3">Veg or non-veg options</td>
                  <td className="border border-border p-3">Mostly vegetarian</td>
                  <td className="border border-border p-3">Often includes non-veg</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Pre-Wedding Ceremonies (When Included)
          </h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Engagement / Nischayathartham</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The formal engagement where families exchange gifts and finalize wedding arrangements. Both families
            exchange betel leaves, coconuts, and sweets as symbols of acceptance.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Mehendi (Modern Addition)</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            While not traditional in South Indian culture, many modern couples now include a Mehendi night with henna
            application, singing, and dancing—borrowed from North Indian traditions.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Wedding Day Morning: Essential Rituals
          </h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Ganesh Puja: Invoking Blessings
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The day begins with prayers to Lord Ganesh (remover of obstacles) for a smooth ceremony and blessed married
            life. Both bride and groom perform this separately at their homes before heading to the venue.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Kashi Yatra: The Playful Drama (Tamil/Kannada)
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            In a charming ritual, the groom pretends to renounce worldly life and go to Kashi (Varanasi) for spiritual
            studies. He carries an umbrella, fan, and sacred texts. The bride's father intercepts him, convincing him
            that marriage and family life are equally sacred, and offers his daughter's hand.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Why Kashi Yatra Matters:</h4>
            <p className="text-foreground/80">
              This playful enactment symbolizes the groom's readiness to embrace family responsibility over ascetic
              life. It's often one of the most entertaining moments for guests, especially when the groom's friends join
              the "journey to Kashi" procession!
            </p>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Oonjal: The Swing Ceremony</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            The bride and groom sit together on a decorated swing (oonjal) while married women rock them gently and sing
            traditional songs. Guests take turns waving blessed items (like coconuts and betel leaves) around the couple
            to ward off evil eye.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Oonjal Ceremony Elements:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Timing:</strong> Before main ceremony, lasts 15–30 minutes
              </li>
              <li>
                <strong>Who participates:</strong> Married women from both families
              </li>
              <li>
                <strong>Songs:</strong> Traditional Tamil/Telugu/Kannada wedding songs
              </li>
              <li>
                <strong>Purpose:</strong> Bless the couple and ward off negative energy
              </li>
              <li>
                <strong>Fun element:</strong> Often involves playful teasing and blessings
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            The Main Ceremony: Sacred Muhurtham
          </h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Kanyadanam: Giving Away the Bride
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            Kanyadanam is the most emotional moment of the ceremony. The bride's parents formally give their daughter to
            the groom, trusting him to care for her throughout life.
          </p>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-3">Kanyadanam Ritual:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Bride sits on her father's lap (symbolic of her childhood)</li>
              <li>Father pours sacred water over bride's hands into groom's hands</li>
              <li>Prayers are recited entrusting the bride to the groom</li>
              <li>Parents place bride's hand in groom's hand</li>
              <li>Extremely emotional moment—tissues recommended!</li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Mangalsutra/Thali Dharanam: The Sacred Thread
          </h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            This is THE defining moment of a South Indian wedding. The groom ties the sacred thread (thali, mangalsutra,
            or minnu depending on region) around the bride's neck three times while the nadaswaram (traditional
            instrument) plays auspiciously.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Regional Variations:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Tamil:</strong> Thali (gold pendant on yellow turmeric-dyed thread), tied in 3 knots
              </li>
              <li>
                <strong>Telugu:</strong> Mangalsutra (black beads with gold pendant), also 3 knots
              </li>
              <li>
                <strong>Kannada:</strong> Similar to Telugu style mangalsutra
              </li>
              <li>
                <strong>Malayalam:</strong> Minnu (small gold coin) tied on thread, single knot
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Muhurtham precision:</strong> The exact second the thread is tied must align with the astrologically
            determined muhurtham. Priests monitor time closely—it's not uncommon for ceremonies to pause if they're
            ahead of schedule!
          </p>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Saptapadi: Seven Sacred Steps</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            After the mangalsutra is tied, the couple takes seven steps together around the sacred fire (Agni), making
            vows for each step. With each step, they promise to support each other in different aspects of life.
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">The Seven Vows (Saptapadi):</h4>
            <ol className="space-y-2 text-foreground/80">
              <li>
                <strong>First step:</strong> For nourishment and prosperity
              </li>
              <li>
                <strong>Second step:</strong> For strength and courage
              </li>
              <li>
                <strong>Third step:</strong> For wealth and spiritual growth
              </li>
              <li>
                <strong>Fourth step:</strong> For happiness and harmony
              </li>
              <li>
                <strong>Fifth step:</strong> For children and family
              </li>
              <li>
                <strong>Sixth step:</strong> For health and long life
              </li>
              <li>
                <strong>Seventh step:</strong> For eternal friendship and companionship
              </li>
            </ol>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">Aarti and Blessings</h3>

          <p className="text-foreground/80 leading-relaxed my-6">
            After Saptapadi, the bride and groom receive blessings from all elders present. Family members come forward
            to bless the couple, often giving gifts or envelopes with money.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">Unique Regional Ceremonies</h2>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Tamil Weddings: Paal Kuduthal & Seer Dhanam
          </h3>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Paal Kuduthal:</strong> After tying the thali, groom's sister offers milk mixed with banana to
                the couple
              </li>
              <li>
                <strong>Seer Dhanam:</strong> Bride's parents give the couple a tray with coconut, betel leaves, fruits,
                and clothes as a blessing for prosperity
              </li>
              <li>
                <strong>Nalangu:</strong> Playful ceremony where bride and groom apply turmeric paste on each other
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Telugu Weddings: Jeelakarra Bellam & Talambralu
          </h3>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Jeelakarra Bellam:</strong> Bride and groom apply paste made of cumin and jaggery on each
                other's heads, symbolizing their union becoming inseparable
              </li>
              <li>
                <strong>Talambralu:</strong> Playful ritual where bride and groom shower each other with colored rice
                mixed with turmeric (yellow) and kumkum (red)—whoever showers more is said to "rule" the household!
              </li>
              <li>
                <strong>Mangala Snanam:</strong> Ceremonial bath taken by bride and groom before wedding
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
            Malayalam (Kerala) Weddings: Minnu Kettu & Virundhu
          </h3>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Minnu Kettu:</strong> Groom ties the minnu (gold coin) around bride's neck with a single knot
              </li>
              <li>
                <strong>Mala Maatral:</strong> Exchange of garlands between bride and groom
              </li>
              <li>
                <strong>Virundhu:</strong> Grand feast immediately after ceremony, often on banana leaves
              </li>
              <li>
                <strong>Kasavu saree:</strong> Traditional white saree with gold border is iconic Kerala bridal attire
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">South Indian Wedding Attire</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Bride's Traditional Attire:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <strong>Tamil:</strong> Red/maroon Kanchipuram silk saree with heavy gold zari work
                </li>
                <li>
                  <strong>Telugu:</strong> Red or maroon Pattu (silk) saree, often with temple border
                </li>
                <li>
                  <strong>Kannada:</strong> Mysore silk saree in red, maroon, or green
                </li>
                <li>
                  <strong>Malayalam:</strong> White/cream Kasavu saree with gold border
                </li>
                <li>
                  <strong>Jewelry:</strong> Temple jewelry sets (necklace, earrings, maang tikka), gold bangles,
                  armlets, waist belt
                </li>
                <li>
                  <strong>Hair:</strong> Traditional braid with jasmine flowers (gajra), sometimes adorned with gold
                  ornaments
                </li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Groom's Traditional Attire:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <strong>Traditional:</strong> White/cream dhoti with angavastram (shawl), bare chest or silk shirt
                </li>
                <li>
                  <strong>Modern:</strong> Silk kurta with dhoti, or full sherwani
                </li>
                <li>
                  <strong>Telugu:</strong> Often wears elaborate headgear with decorations
                </li>
                <li>
                  <strong>Accessories:</strong> Gold chain, rings, sometimes watch
                </li>
                <li>
                  <strong>Sacred thread:</strong> Brahmin grooms wear sacred thread (poonal/yagnopaveetam)
                </li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            South Indian Wedding Food: The Feast
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            South Indian wedding meals are traditionally served on banana leaves and consist of multiple courses in a
            specific order. The meal is a culinary journey!
          </p>

          <div className="bg-accent-soft/20 border border-accent/30 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Traditional Banana Leaf Meal (Sadya):</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>Order matters:</strong> Items are placed in specific positions on the leaf
              </li>
              <li>
                <strong>Starters:</strong> Papadum, banana chips, pickles, chutneys
              </li>
              <li>
                <strong>Curries:</strong> Sambar, rasam, various vegetable curries (avial, kootu, poriyal)
              </li>
              <li>
                <strong>Rice dishes:</strong> White rice, lemon rice, curd rice, ghee rice
              </li>
              <li>
                <strong>Desserts:</strong> Payasam (sweet pudding), kesari, mysore pak
              </li>
              <li>
                <strong>Beverages:</strong> Filter coffee, buttermilk
              </li>
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed my-6">
            <strong>Telugu & Kannada weddings</strong> may include non-vegetarian options alongside vegetarian dishes.{" "}
            <strong>Tamil Brahmin weddings</strong> are strictly vegetarian.
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Modern Adaptations & Fusion Elements
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            Many South Indian couples blend traditional ceremonies with modern elements or fusion with non-South Indian
            partner traditions.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">Popular Modern Additions:</h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <strong>Evening reception:</strong> After traditional morning ceremony, with cocktail hour, DJ, dancing
              </li>
              <li>
                <strong>Mehendi & sangeet nights:</strong> Borrowed from North Indian traditions
              </li>
              <li>
                <strong>Bilingual ceremonies:</strong> Priest explains rituals in English for non-South Indian guests
              </li>
              <li>
                <strong>Shortened ceremony:</strong> Condensed to 90 minutes instead of 3+ hours
              </li>
              <li>
                <strong>Mixed attire:</strong> Bride wears lehenga or gown to reception after traditional saree
              </li>
              <li>
                <strong>Fusion cuisine:</strong> Continental/American options alongside South Indian feast
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Budget: South Indian Wedding Costs (USA)
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            South Indian weddings in the USA typically cost $25,000–$60,000 depending on guest count and vendors. Here's
            a breakdown:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Category</th>
                  <th className="border border-border p-3 text-left font-semibold text-foreground">Cost Range</th>
                </tr>
              </thead>
              <tbody className="text-sm text-foreground/80">
                <tr>
                  <td className="border border-border p-3">Venue</td>
                  <td className="border border-border p-3">$5,000–$15,000</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Catering (South Indian)</td>
                  <td className="border border-border p-3">$30–$60 per person (150–250 guests)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Priest & ceremony setup</td>
                  <td className="border border-border p-3">$500–$2,000</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Photography/videography</td>
                  <td className="border border-border p-3">$2,500–$6,000</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Bride's attire & jewelry</td>
                  <td className="border border-border p-3">$3,000–$10,000</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Groom's attire</td>
                  <td className="border border-border p-3">$500–$2,000</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Decor & flowers</td>
                  <td className="border border-border p-3">$2,000–$6,000</td>
                </tr>
                <tr className="bg-surface/50">
                  <td className="border border-border p-3">Hair, makeup, mehendi</td>
                  <td className="border border-border p-3">$800–$2,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
            Planning Your South Indian Wedding? We Can Help
          </h2>

          <p className="text-foreground/80 leading-relaxed my-6">
            CeremonyVerse understands the sacred traditions and regional nuances of South Indian weddings. We coordinate
            Tamil, Telugu, Kannada, and Malayalam ceremonies with cultural authenticity and modern execution.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-foreground mb-4">How We Support South Indian Weddings:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Find experienced South Indian priests familiar with your regional traditions</li>
              <li>Source authentic South Indian caterers (banana leaf service, traditional menu)</li>
              <li>Coordinate Muhurtham timing and ensure ceremony stays on schedule</li>
              <li>Arrange traditional musicians (nadaswaram, tavil) for authentic ceremony atmosphere</li>
              <li>Help navigate family expectations while incorporating your preferences</li>
              <li>Assist with fusion elements for interfaith or intercultural couples</li>
            </ul>
          </div>

          <div className="bg-accent-soft/20 border-l-4 border-accent p-6 my-8">
            <p className="text-foreground/90 font-medium mb-4">
              Whether you need full planning, day-of coordination, or just cultural guidance, we're here to honor your
              South Indian heritage while creating a celebration that feels authentic to you.
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
          url="https://www.ceremonyverse.com/blog/south-indian-wedding-ceremony-guide"
          title="South Indian Wedding Ceremony Guide: Tamil, Telugu, Kannada & Malayalam"
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
              href="/blog/punjabi-wedding-traditions-guide"
              className="p-6 border border-border rounded-lg hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-foreground mb-2">Punjabi Wedding Traditions Guide</h4>
              <p className="text-sm text-foreground/70">Complete guide to Punjabi and Sikh wedding ceremonies</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
