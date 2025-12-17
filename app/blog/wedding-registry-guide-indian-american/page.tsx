import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Gift, Heart, DollarSign, Shield, Check, AlertCircle, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Wedding Registry Guide for Indian-American Couples | Cash Funds & Traditional Gifts | CeremonyVerse",
  description:
    "How to create a wedding registry that honors Indian cash gift traditions while accommodating Western registry expectations. Complete guide with registry recommendations and tips.",
  keywords:
    "Indian wedding registry, Indian wedding gifts, cash registry, honeymoon fund, wedding registry guide, Indian American wedding registry, cultural gift giving",
}

export default function WeddingRegistryGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-2 mb-6"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                Planning Guide
              </span>
              <span className="text-sm text-foreground/60">12 min read</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Wedding Registry Guide for Indian-American Couples
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
              Navigate the balance between traditional cash gifts and modern registries while honoring cultural
              expectations and personal preferences.
            </p>
            <div className="flex items-center gap-6 text-sm text-foreground/60 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated January 2025</span>
              </div>
              <span>By CeremonyVerse Planning Team</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              Creating a wedding registry as an Indian-American couple presents unique challenges. In many Indian
              cultures, cash gifts (Shagun) are traditional and expected, while Western wedding culture emphasizes
              physical gift registries. How do you honor both traditions without offending anyone or missing out on
              gifts you actually need?
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              The good news: most couples successfully blend both approaches. This comprehensive guide will help you
              navigate cultural expectations, modern registry options, and tactful communication with family and guests.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-8">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">The Short Answer</h3>
                  <p className="text-sm text-foreground/70">
                    Yes, you can have both a traditional registry AND accept cash gifts. Most Indian-American couples
                    do! The key is thoughtful communication about your preferences while respecting cultural norms.
                  </p>
                </div>
              </div>
            </div>

            {/* Understanding Cultural Gift-Giving */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Understanding Cultural Gift-Giving Traditions
              </h2>

              <div className="bg-background border border-border rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Indian Traditions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cash Gifts (Shagun)</h4>
                    <p className="text-foreground/70 leading-relaxed mb-3">
                      In Indian, Pakistani, Bangladeshi, and many other cultures, cash gifts are the norm. Money is
                      practical, helps newlyweds start their life together, and avoids the risk of duplicate or unwanted
                      gifts. Envelopes of cash are typically given directly to the couple or their parents during the
                      reception.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Amounts often end in 1 (e.g., $101, $501) for good luck
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Close family typically gives significantly more than distant relatives or friends
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Gold jewelry from family is also traditional in many communities
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Why Cash Gifts Make Sense</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Couples can use money for down payments, honeymoons, or paying off wedding expenses
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">No risk of duplicate gifts or returns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Guests don't have to shop, wrap, or transport physical gifts
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-primary" />
                  Western Registry Traditions
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  In American wedding culture, registries at stores like Target, Crate & Barrel, Amazon, and Williams
                  Sonoma are expected. Guests shop from your curated list of kitchen items, home decor, and other
                  household goods. Physical gifts are wrapped and displayed at bridal showers or sent to your home.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  For many American guests (especially non-Indian friends and coworkers), not having a traditional
                  registry can feel confusing or uncomfortable. They may not know cash gifts are customary and prefer
                  the guidance a registry provides.
                </p>
              </div>
            </section>

            {/* The Solution: Hybrid Approach */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">The Solution: A Hybrid Approach</h2>

              <p className="text-lg text-foreground/70 mb-6">
                Most successful Indian-American couples create a small, thoughtful registry while also accepting cash
                gifts. Here's how to balance both:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">For Indian Family & Friends:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Expect and graciously accept cash gifts (Shagun)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Don't push registry on elders who prefer traditional giving
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Word-of-mouth through parents handles communication
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">For American Friends & Coworkers:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Create a focused registry with essentials you actually need
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">Include items at various price points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">Add a cash fund option for flexibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Modern Registry Options */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Modern Registry Options</h2>

              <div className="space-y-6">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Cash Fund Registries
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Modern platforms bridge the gap between cash gifts and traditional registries:
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-foreground">Honeyfund, Zola, or Joy:</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Let guests contribute to your honeymoon, down payment, or home renovation. Better than asking
                        for cash directly, feels more like a traditional registry.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Venmo or PayPal:</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Some tech-savvy couples include these for easy digital transfers. Be subtle—don't make it the
                        first thing guests see.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Registry with cash fund component:</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Many platforms (Zola, The Knot, Blueprint) let you mix physical gifts with cash funds all in one
                        place.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-primary" />
                    Traditional Registries (Done Right)
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    If creating a physical registry, keep these principles in mind:
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-foreground">Keep it small and focused</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        40-60 items max. Register only for things you genuinely need and will use. Indian families
                        typically gift cash, so you won't need 200 registry items.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Mix price points</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        $20-30 items (coworkers), $50-100 items (friends), $200+ items (close friends/group gifts).
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Use universal registries</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Platforms like Zola, Joy, or MyRegistry let you add items from ANY store to one central list.
                        Guests see everything in one place.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Include experiences</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Date night funds, cooking class gift cards, museum memberships—experiences you'll treasure more
                        than another serving bowl.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Recommended Registry Platforms</h3>
                  <div className="space-y-4">
                    <div>
                      <strong className="text-foreground">Zola</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Most popular. Universal registry, cash funds, free wedding website. Great for mixing physical
                        gifts and cash.
                      </p>
                    </div>
                    <div>
                      <strong className="text-foreground">Amazon</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Huge selection, easy returns, guests already have accounts. Good completion discount after
                        wedding.
                      </p>
                    </div>
                    <div>
                      <strong className="text-foreground">Target</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Great for kitchen/home basics at reasonable prices. In-store pickup option for guests.
                      </p>
                    </div>
                    <div>
                      <strong className="text-foreground">Honeyfund</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Dedicated cash fund platform. Guests contribute to honeymoon experiences, home down payment, or
                        other goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Communication Strategy */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                How to Communicate Your Registry Preferences
              </h2>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Important Etiquette Rule</h3>
                    <p className="text-sm text-foreground/70">
                      Never mention cash or registry information on your wedding invitation. It's considered rude and
                      gift-grabby. Registry info belongs on your wedding website and can be shared by word of mouth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">On Your Wedding Website</h3>
                  <p className="text-foreground/70 mb-4">Sample wording that works well:</p>

                  <div className="bg-cream border border-border rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground/80 italic leading-relaxed">
                      "Your presence at our celebration is the greatest gift of all. For those who have been asking,
                      we've registered at [Store Names] for a few items to help us start our new home together. We've
                      also set up a honeymoon fund if you'd prefer to contribute to our travels. However, please know
                      that gifts are entirely optional—we're just grateful to celebrate with you!"
                    </p>
                  </div>

                  <p className="text-sm text-foreground/70">
                    This politely acknowledges that guests are asking about gifts (they always do) while emphasizing
                    that their attendance is what matters most.
                  </p>
                </div>

                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Word-of-Mouth Communication</h3>
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-foreground">Have parents communicate to Indian family:</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Your parents can let their relatives know that traditional cash gifts are welcomed and
                        appreciated. Elders will understand this immediately—it's what they expect to give anyway.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Bridesmaids/groomsmen can spread the word:</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        When friends ask "Where are you registered?", your wedding party can say "They have a small
                        registry at [store] and also a honeymoon fund on their website."
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">At the bridal shower:</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        This is where you'd traditionally use physical registry gifts. Keep the focus on your registry
                        for this event.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Practical Tips */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Practical Registry Tips</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">DO:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Register early (8-10 months before) for bridal showers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Include items at $25, $50, $75, $100, $150+ price points
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Consider completion discounts—buy remaining items after the wedding at 10-20% off
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">Update registry as items are purchased</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Have a plan for managing cash gifts securely at the wedding
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">DON'T:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Put registry info on invitations (major etiquette violation)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Register for too many items—you'll get cash from most Indian guests anyway
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Only register for expensive items—have budget-friendly options
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Pressure anyone about gifts—graciously accept whatever people choose to give
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Forget to write thank-you notes for all gifts received
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Managing Cash Gifts */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Managing Cash Gifts at Your Wedding
              </h2>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-secondary" />
                      Security is Critical
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      Indian weddings often involve thousands of dollars in cash gifts. You need a solid plan to keep
                      this money safe:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Assign a trustworthy person:</strong> A family member or wedding planner should
                          collect envelopes and keep them secure
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Have a locked box or bag:</strong> Not just a decorative card box—something actually
                          secure
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Move money periodically:</strong> Don't let thousands accumulate in a visible box.
                          Have someone move cash to a hotel safe throughout the event
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Track who gave what:</strong> Keep envelopes with names or log gifts as they arrive.
                          You'll need this for thank-you notes
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Deposit quickly:</strong> Get cash to the bank within a day or two after the wedding
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-secondary/20 pt-6">
                    <h4 className="font-semibold mb-3">Consider Digital Options</h4>
                    <p className="text-sm text-foreground/70">
                      Some modern couples include Venmo/Zelle QR codes on their wedding website for guests who prefer
                      not to carry cash. Just don't make it too prominent—keep it as an option, not the primary ask.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 my-12">
              <h2 className="font-serif text-3xl font-bold mb-6">Final Thoughts on Wedding Registries</h2>
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  Remember: the registry exists to make gift-giving easier for your guests, not to feel like a shopping
                  list you're imposing on people. Whether they give cash, purchase from your registry, or choose
                  something entirely different, the intention is what matters.
                </p>
                <p className="leading-relaxed">
                  Most Indian-American couples are pleasantly surprised by the generosity they receive—both in cash from
                  family and in thoughtful registry gifts from friends. By thoughtfully balancing both traditions,
                  you'll honor your heritage while embracing modern convenience.
                </p>
                <p className="leading-relaxed">
                  And always remember: your presence at the wedding is what your loved ones care about most. Everything
                  else is just a wonderful bonus.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-cream rounded-2xl p-12 text-center mt-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help with Wedding Planning Details?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              From registry advice to cultural ceremony planning, our team specializes in Indian-American fusion
              weddings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <Link href="/blog">Read More Planning Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
