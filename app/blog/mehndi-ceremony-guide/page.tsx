import { ArticleSchema, BreadcrumbSchema } from "@/components/structured-data"
import SocialShare from "@/components/social-share"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mehndi Ceremony Guide | Planning the Perfect Mehndi Night 2025",
  description:
    "Complete guide to planning an unforgettable Mehndi ceremony. Traditions, modern ideas, decor inspiration, and expert tips for your Indian wedding Mehndi night.",
  keywords:
    "mehndi ceremony, mehndi night, henna party, indian wedding mehndi, mehndi decoration ideas, mehndi ceremony traditions, mehndi party planning, bridal mehndi",
  openGraph: {
    title: "Mehndi Ceremony Guide | Planning the Perfect Mehndi Night",
    description:
      "Everything you need to know about planning a beautiful Mehndi ceremony. Traditional customs, modern twists, and expert planning tips.",
    type: "article",
  },
  alternates: {
    canonical: "https://www.ceremonyverse.com/blog/mehndi-ceremony-guide",
  },
}

export default function MehndiCeremonyGuidePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Blog", url: "https://www.ceremonyverse.com/blog" },
    { name: "Mehndi Ceremony Guide", url: "https://www.ceremonyverse.com/blog/mehndi-ceremony-guide" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <ArticleSchema
        title="The Ultimate Mehndi Ceremony Guide: Traditions, Planning & Modern Ideas"
        description="Everything you need to create an unforgettable Mehndi night that honors tradition while celebrating your unique style"
        image="https://www.ceremonyverse.com/indian-bride-hands-with-intricate-mehndi-henna-des.jpg"
        datePublished="2025-12-20"
        url="https://www.ceremonyverse.com/blog/mehndi-ceremony-guide"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              The Ultimate Mehndi Ceremony Guide: Traditions, Planning & Modern Ideas
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to create an unforgettable Mehndi night that honors tradition while celebrating your
              unique style
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <time dateTime="2025-12-20">December 20, 2025</time>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </header>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
            <Image
              src="/indian-bride-hands-with-intricate-mehndi-henna-des.jpg"
              alt="Indian bride's hands adorned with intricate mehndi henna designs showing traditional patterns"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              The Mehndi ceremony is one of the most anticipated and joyful pre-wedding celebrations in Indian culture.
              This vibrant event brings together family and friends for an evening of henna art, music, dancing, and
              celebration. Whether you're planning a traditional Mehndi night or a modern fusion event, this
              comprehensive guide will help you create an unforgettable experience.
            </p>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">What is a Mehndi Ceremony?</h2>

            <p>
              The Mehndi ceremony (also called Mehendi or Henna night) is a pre-wedding ritual where intricate henna
              designs are applied to the bride's hands and feet. Traditionally held 1-2 days before the wedding, it's
              become a full-fledged celebration featuring music, dancing, food, and fun for all guests.
            </p>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">The Significance of Mehndi</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Symbol of Love:</strong> The darker the mehndi stain, the deeper the love between bride and
                groom (according to tradition)
              </li>
              <li>
                <strong>Blessing & Good Fortune:</strong> Mehndi is believed to bring good luck and prosperity to the
                new couple
              </li>
              <li>
                <strong>Celebration of Femininity:</strong> A time for women to gather, bond, and celebrate together
              </li>
              <li>
                <strong>Stress Relief:</strong> The cooling properties of henna are said to calm pre-wedding nerves
              </li>
              <li>
                <strong>Beauty Ritual:</strong> Adorning the bride with beautiful art before her big day
              </li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-primary mb-2">💡 Did You Know?</p>
              <p className="text-foreground">
                In many traditions, the groom's name is hidden within the bride's mehndi design, and he must find it on
                the wedding night. This playful custom is believed to bring good luck to the marriage!
              </p>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Planning Your Mehndi Ceremony</h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Timeline & Scheduling</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Traditional Timing</h4>
                <p className="text-sm text-muted-foreground">
                  1-2 days before the wedding, typically in the evening (6 PM - 11 PM). This allows the mehndi to
                  develop its deepest color by the wedding day.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Modern Alternatives</h4>
                <p className="text-sm text-muted-foreground">
                  Some couples host the Mehndi 3-4 days before to allow more time for the design to darken and for the
                  bride to rest before the wedding.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Combined Events</h4>
                <p className="text-sm text-muted-foreground">
                  Many couples combine Mehndi with Sangeet for a longer, more elaborate celebration (typically 4-6
                  hours).
                </p>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Guest List Considerations</h3>
            <p>Traditionally, Mehndi ceremonies were women-only events, but modern celebrations often include:</p>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Traditional:</strong> Close female relatives and friends (30-50 guests)
              </li>
              <li>
                <strong>Modern:</strong> All wedding guests, including men (100-200+ guests)
              </li>
              <li>
                <strong>Hybrid:</strong> Women-only mehndi application, then men join for dinner and dancing
              </li>
            </ul>

            <div className="aspect-video relative rounded-xl overflow-hidden my-8">
              <Image
                src="/colorful-mehndi-ceremony-decoration-with-marigold-.jpg"
                alt="Vibrant Mehndi ceremony decoration with marigold flowers and colorful drapes"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Mehndi Ceremony Decor Ideas</h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Color Palettes</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-serif text-lg font-medium mb-3">Traditional</h4>
                <ul className="space-y-2 text-sm">
                  <li>🟡 Yellow & Orange (marigolds)</li>
                  <li>🟢 Green & Gold</li>
                  <li>🔴 Red & Pink</li>
                  <li>💜 Purple & Fuchsia</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-serif text-lg font-medium mb-3">Modern Fusion</h4>
                <ul className="space-y-2 text-sm">
                  <li>🌸 Blush Pink & Gold</li>
                  <li>🌿 Sage Green & Ivory</li>
                  <li>🦚 Peacock Blue & Teal</li>
                  <li>🌺 Coral & Mint</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Decor Elements</h3>

            <h4 className="font-semibold mt-6 mb-3">Seating Arrangements</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Low Seating:</strong> Traditional floor cushions (gaddis) and low tables for authentic feel
              </li>
              <li>
                <strong>Lounge Areas:</strong> Comfortable sofas and ottomans for guests waiting for mehndi
              </li>
              <li>
                <strong>Bride's Throne:</strong> Decorated chair or swing (jhula) for the bride during application
              </li>
              <li>
                <strong>Mehndi Stations:</strong> Multiple areas with good lighting for artists to work
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-3">Floral Decor</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Marigold Garlands:</strong> Traditional and fragrant, perfect for entrances and backdrops
              </li>
              <li>
                <strong>Flower Walls:</strong> Instagram-worthy photo backdrops with roses, carnations, or mixed blooms
              </li>
              <li>
                <strong>Hanging Installations:</strong> Suspended floral arrangements or umbrellas
              </li>
              <li>
                <strong>Centerpieces:</strong> Low arrangements that don't obstruct conversation
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-3">Lighting</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>String Lights:</strong> Create a magical ambiance for evening celebrations
              </li>
              <li>
                <strong>Lanterns:</strong> Moroccan or Indian-style lanterns for warm glow
              </li>
              <li>
                <strong>Diyas:</strong> Traditional oil lamps for authentic touch
              </li>
              <li>
                <strong>Uplighting:</strong> Colored lights to enhance the mood
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-3">Unique Touches</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Mehndi Bar:</strong> Display of different henna cones and designs for guests to choose from
              </li>
              <li>
                <strong>Photo Booth:</strong> Props like bangles, dupattas, and traditional jewelry
              </li>
              <li>
                <strong>Welcome Sign:</strong> Personalized board with couple's names and mehndi motifs
              </li>
              <li>
                <strong>Favor Display:</strong> Decorated table with take-home mehndi cones or bangles
              </li>
            </ul>

            <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-secondary mb-2">✨ Pro Tip:</p>
              <p className="text-foreground">
                Choose an outdoor venue if weather permits! Garden or courtyard settings provide natural beauty and
                plenty of space for guests to mingle while waiting for mehndi application.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Hiring Mehndi Artists</h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">How Many Artists Do You Need?</h3>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold mb-4">Artist-to-Guest Ratio Guide</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>30-50 guests</span>
                  <span className="font-semibold">2-3 artists</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>50-100 guests</span>
                  <span className="font-semibold">4-5 artists</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>100-150 guests</span>
                  <span className="font-semibold">6-8 artists</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>150+ guests</span>
                  <span className="font-semibold">8-10+ artists</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                *Plus 1 specialized artist dedicated to the bride's intricate design
              </p>
            </div>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              Questions to Ask Mehndi Artists
            </h3>
            <ul className="space-y-2 mb-6">
              <li>How many years of experience do you have?</li>
              <li>Can I see your portfolio of bridal mehndi designs?</li>
              <li>What style do you specialize in? (Indian, Arabic, Pakistani, fusion)</li>
              <li>Do you use natural henna? (Important for safety and color)</li>
              <li>How long will the bride's design take?</li>
              <li>What's your pricing structure? (per person, per hour, flat rate)</li>
              <li>Do you provide your own supplies?</li>
              <li>What's your cancellation policy?</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Mehndi Design Styles</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-serif text-lg font-medium mb-3">Traditional Indian</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Dense, intricate patterns covering hands and feet completely. Features peacocks, paisleys, florals,
                  and fine details.
                </p>
                <p className="text-sm">
                  <strong>Best for:</strong> Traditional brides who love detailed artwork
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-serif text-lg font-medium mb-3">Arabic</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Bold, flowing designs with more negative space. Features vines, leaves, and geometric patterns.
                </p>
                <p className="text-sm">
                  <strong>Best for:</strong> Modern brides who prefer elegant simplicity
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-serif text-lg font-medium mb-3">Pakistani</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Mix of Indian and Arabic styles with emphasis on tikki (filled patterns) and bold outlines.
                </p>
                <p className="text-sm">
                  <strong>Best for:</strong> Brides wanting the best of both worlds
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-serif text-lg font-medium mb-3">Modern Fusion</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Contemporary designs incorporating portraits, mandalas, or minimalist patterns.
                </p>
                <p className="text-sm">
                  <strong>Best for:</strong> Brides seeking unique, personalized designs
                </p>
              </div>
            </div>

            <div className="aspect-video relative rounded-xl overflow-hidden my-8">
              <Image
                src="/mehndi-artist-applying-intricate-henna-design-on-b.jpg"
                alt="Skilled mehndi artist applying intricate henna design on bride's hands"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Mehndi Ceremony Entertainment</h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Music & Dancing</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>DJ or Live Music:</strong> Bollywood hits, bhangra, and regional folk songs
              </li>
              <li>
                <strong>Dhol Players:</strong> Traditional drummers to energize the crowd
              </li>
              <li>
                <strong>Choreographed Performances:</strong> Family and friends perform dances for the couple
              </li>
              <li>
                <strong>Open Dance Floor:</strong> Let guests dance freely between mehndi applications
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Games & Activities</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Mehndi Design Contest:</strong> Guests vote on best designs
              </li>
              <li>
                <strong>Bangle Ceremony:</strong> Guests gift bangles to the bride
              </li>
              <li>
                <strong>Couple Trivia:</strong> Fun questions about the bride and groom
              </li>
              <li>
                <strong>Henna Tattoo Station:</strong> Quick designs for guests who want simple art
              </li>
              <li>
                <strong>Photo Scavenger Hunt:</strong> List of fun photos for guests to capture
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Food & Refreshments</h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Menu Ideas</h3>

            <h4 className="font-semibold mt-6 mb-3">Traditional Options</h4>
            <ul className="space-y-2 mb-6">
              <li>Chaat station (pani puri, bhel puri, dahi puri)</li>
              <li>Samosas, pakoras, and other fried snacks</li>
              <li>Biryani or pulao</li>
              <li>Paneer dishes and vegetarian curries</li>
              <li>Naan, roti, and rice</li>
              <li>Indian sweets (gulab jamun, jalebi, barfi)</li>
            </ul>

            <h4 className="font-semibold mt-6 mb-3">Modern Fusion</h4>
            <ul className="space-y-2 mb-6">
              <li>Indian-inspired appetizers (tikka sliders, samosa tacos)</li>
              <li>Grazing tables with cheese, fruits, and nuts</li>
              <li>Fusion desserts (chai cupcakes, mango cheesecake)</li>
              <li>Signature cocktails with Indian flavors</li>
            </ul>

            <h4 className="font-semibold mt-6 mb-3">Beverage Station</h4>
            <ul className="space-y-2 mb-6">
              <li>Masala chai and coffee</li>
              <li>Fresh fruit juices (mango, pomegranate)</li>
              <li>Lassi bar (sweet, salty, fruit flavors)</li>
              <li>Mocktails and cocktails</li>
              <li>Infused water with cucumber, mint, or rose</li>
            </ul>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-accent mb-2">🍽️ Serving Tip:</p>
              <p className="text-foreground">
                Opt for finger foods and small plates that guests can eat easily while getting mehndi applied. Avoid
                messy foods that might smudge fresh henna!
              </p>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Mehndi Aftercare Tips</h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              For the Darkest, Longest-Lasting Color
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  1
                </div>
                <div>
                  <p className="font-medium mb-1">Keep it on as long as possible</p>
                  <p className="text-sm text-muted-foreground">
                    Leave henna paste on for 6-12 hours (overnight is ideal)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  2
                </div>
                <div>
                  <p className="font-medium mb-1">Apply lemon-sugar mixture</p>
                  <p className="text-sm text-muted-foreground">
                    Dab on mixture every 2-3 hours while paste is on to keep it moist
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  3
                </div>
                <div>
                  <p className="font-medium mb-1">Scrape off, don't wash</p>
                  <p className="text-sm text-muted-foreground">
                    Remove dried paste by scraping with a butter knife or credit card
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  4
                </div>
                <div>
                  <p className="font-medium mb-1">Apply oil or balm</p>
                  <p className="text-sm text-muted-foreground">
                    Coat design with coconut oil, eucalyptus oil, or Vicks VapoRub
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  5
                </div>
                <div>
                  <p className="font-medium mb-1">Avoid water for 24 hours</p>
                  <p className="text-sm text-muted-foreground">
                    No washing, swimming, or excessive sweating for first day
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  6
                </div>
                <div>
                  <p className="font-medium mb-1">Heat helps!</p>
                  <p className="text-sm text-muted-foreground">
                    Warm hands near a stove or use a hair dryer on low heat to darken color
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Modern Mehndi Ceremony Trends</h2>

            <ul className="space-y-3 mb-8">
              <li>
                <strong>White Henna:</strong> Temporary body art using white paste for a modern, bohemian look
              </li>
              <li>
                <strong>Glitter Mehndi:</strong> Adding gold or colored glitter to traditional designs
              </li>
              <li>
                <strong>Minimalist Designs:</strong> Simple, elegant patterns for modern brides
              </li>
              <li>
                <strong>Groom's Mehndi:</strong> More grooms getting simple designs on their hands
              </li>
              <li>
                <strong>Portrait Mehndi:</strong> Incorporating couple's faces or meaningful symbols
              </li>
              <li>
                <strong>Destination Mehndi:</strong> Beach or resort settings for intimate celebrations
              </li>
              <li>
                <strong>Eco-Friendly:</strong> Using organic henna and sustainable decor
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Budget Breakdown</h2>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold mb-4">Average Mehndi Ceremony Costs</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>Venue rental</span>
                  <span className="font-semibold">$500 - $2,000</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>Mehndi artists (4-6 artists)</span>
                  <span className="font-semibold">$800 - $2,500</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>Decor & florals</span>
                  <span className="font-semibold">$1,000 - $3,000</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>Catering (100 guests)</span>
                  <span className="font-semibold">$1,500 - $4,000</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>Entertainment (DJ/dhol)</span>
                  <span className="font-semibold">$500 - $1,500</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-border">
                  <span>Photography</span>
                  <span className="font-semibold">$500 - $1,500</span>
                </li>
                <li className="flex justify-between items-center font-semibold text-lg">
                  <span>Total Average</span>
                  <span className="text-primary">$4,800 - $14,500</span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Final Thoughts</h2>

            <p>
              Your Mehndi ceremony is a beautiful opportunity to celebrate your heritage, bond with loved ones, and
              create lasting memories before your wedding day. Whether you choose a traditional celebration or a modern
              fusion event, the most important element is creating an atmosphere of joy, love, and togetherness.
            </p>

            <p>
              Remember: the perfect Mehndi ceremony is one that reflects your personality and honors your cultural
              traditions in a way that feels authentic to you. Don't be afraid to blend old and new, traditional and
              modern, to create an event that's uniquely yours.
            </p>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <h3 className="font-serif text-2xl font-medium mb-4">Need Help Planning Your Mehndi Ceremony?</h3>
              <p className="text-muted-foreground mb-6">
                Our wedding planning experts specialize in creating unforgettable Mehndi celebrations that honor
                tradition while celebrating your unique style. From finding the perfect mehndi artists to coordinating
                every detail, we'll help you create a magical evening.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold"
              >
                Schedule Free Consultation
              </Link>
            </div>

            <SocialShare />
          </div>
        </div>
      </article>
    </div>
  )
}
