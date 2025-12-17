import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Plane, DollarSign, Check, AlertCircle, Star, Globe, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Honeymoon Planning Guide 2025 | CeremonyVerse",
  description:
    "Plan your perfect honeymoon after your Indian-American fusion wedding. Budget tips, destination ideas, booking timeline, and travel advice for newlyweds.",
  keywords:
    "honeymoon planning, honeymoon destinations, honeymoon budget, post-wedding travel, newlywed travel guide, romantic honeymoon ideas, honeymoon timeline",
}

export default function HoneymoonPlanningGuidePage() {
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
              <span className="text-sm text-foreground/60">14 min read</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Complete Honeymoon Planning Guide
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
              After months of wedding planning, you deserve an unforgettable honeymoon. Here's everything you need to plan
              the perfect post-wedding getaway—from budgeting to booking to making it stress-free.
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
              Your honeymoon is your first trip as a married couple—a chance to relax after the wedding chaos, celebrate
              your new marriage, and create memories that will last a lifetime. But planning a honeymoon while also
              planning a wedding (especially a multi-day Indian-American fusion celebration) can feel overwhelming.
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              The good news: honeymoon planning doesn't have to be stressful. This guide will walk you through timing,
              budgeting, destination selection, and all the practical details to ensure your honeymoon is as magical as
              your wedding day.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-8">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Start Early (But Not Too Early)</h3>
                  <p className="text-sm text-foreground/70">
                    Begin honeymoon planning 6-8 months before your wedding. This gives you time to research, save, and
                    book without the last-minute stress—but not so early that you're locked into plans that might need to
                    change.
                  </p>
                </div>
              </div>
            </div>

            {/* When to Take Your Honeymoon */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">When Should You Take Your Honeymoon?</h2>

              <div className="space-y-6">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    Timing Options
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Immediately After the Wedding</h4>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> Maximum wedding excitement, no time to stress, natural transition from
                          celebration to relaxation
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Cons:</strong> You'll be exhausted, might not enjoy it fully, potential travel delays
                          affect wedding timeline
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Best for:</strong> Couples who want to extend the celebration, shorter trips (4-7 days)
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">1-2 Weeks After the Wedding</h4>
                      <div className="bg-accent/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> Time to recover, handle post-wedding tasks, pack properly, actually enjoy
                          the trip
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Cons:</strong> Anticipation can feel anti-climactic, might need to take extra time off
                          work
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Best for:</strong> Multi-day weddings where you need recovery time, longer international
                          trips
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Postponed/Mini-moon Approach</h4>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>What it is:</strong> Short 2-3 day trip right after wedding, longer honeymoon months
                          later
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> Best of both worlds, time to save more money, can travel during better
                          weather/off-season
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Cons:</strong> Two trips to plan, wedding excitement fades, need to coordinate more time
                          off
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Best for:</strong> Budget-conscious couples, those getting married during bad travel
                          season, career obligations
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-accent" />
                      Important Timing Considerations
                    </h4>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-foreground/70">
                        • <strong>Passport validity:</strong> Many countries require 6 months validity beyond travel dates
                      </li>
                      <li className="text-sm text-foreground/70">
                        • <strong>Visa processing:</strong> Can take 4-8 weeks for some countries
                      </li>
                      <li className="text-sm text-foreground/70">
                        • <strong>Name change timing:</strong> If changing names, book before or after name change
                        process—not during
                      </li>
                      <li className="text-sm text-foreground/70">
                        • <strong>Peak season vs. off-season:</strong> Can affect both price and experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Budgeting */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Honeymoon Budgeting</h2>

              <div className="bg-background border border-border rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Average Honeymoon Costs (2025)
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/70 mb-4">
                      According to wedding industry data, couples spend an average of <strong>$4,000-$5,000</strong> on
                      honeymoons, but this varies widely based on destination and travel style.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-cream rounded-lg p-4">
                        <strong className="text-foreground">Budget Honeymoon ($2,000-$3,500):</strong>
                        <p className="text-sm text-foreground/70 mt-1">
                          Domestic beach resort, road trip, or nearby international destination. 4-5 days, mid-range
                          accommodations.
                        </p>
                      </div>

                      <div className="bg-cream rounded-lg p-4">
                        <strong className="text-foreground">Mid-Range Honeymoon ($4,000-$7,000):</strong>
                        <p className="text-sm text-foreground/70 mt-1">
                          Caribbean, Mexico, European city, or US adventure. 7-10 days, nice hotels, some splurge
                          experiences.
                        </p>
                      </div>

                      <div className="bg-cream rounded-lg p-4">
                        <strong className="text-foreground">Luxury Honeymoon ($8,000-$15,000+):</strong>
                        <p className="text-sm text-foreground/70 mt-1">
                          Maldives, Bora Bora, African safari, multi-country Europe. 10-14+ days, 5-star resorts, premium
                          experiences, business class flights.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included in Honeymoon Budget</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Flights:</strong> Usually 25-40% of total budget
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Accommodation:</strong> 30-40% of budget
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Food & drinks:</strong> 15-25% (varies by destination)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Activities & excursions:</strong> 10-15%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Transportation (local):</strong> 5-10%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Travel insurance:</strong> 2-4% (don't skip this!)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Money-Saving Honeymoon Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Create a honeymoon registry/fund</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Platforms like Honeyfund let guests contribute to your trip instead of physical gifts. This is
                        especially popular for Indian-American couples who receive cash gifts anyway.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Travel in shoulder season</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Just before or after peak season offers better prices with nearly the same experience. (e.g.,
                        Hawaii in May/September instead of June-August)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Use credit card points/miles</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        If you're putting wedding expenses on credit cards anyway, use rewards cards and redeem for
                        honeymoon travel.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book as a package</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        All-inclusive resorts or flight+hotel packages often save 15-30% vs. booking separately.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Tell them it's your honeymoon</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Hotels and resorts often offer upgrades, champagne, or special perks for honeymooners. Always
                        mention it!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Destination Ideas */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Popular Honeymoon Destinations</h2>

              <div className="space-y-6">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-primary" />
                    By Honeymoon Style
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">🏝️ Beach & Relaxation</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Maldives</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Overwater bungalows, crystal water, ultimate luxury. Best Nov-Apr. Budget: $$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Bora Bora</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            French Polynesia paradise, stunning lagoon. Best May-Oct. Budget: $$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Hawaii (Maui, Kauai)</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            No passport needed, diverse activities, beautiful beaches. Year-round. Budget: $$-$$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">St. Lucia</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Pitons views, resorts, rainforest. Best Dec-Apr. Budget: $$
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-foreground mb-3">🏛️ Culture & History</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Italy (Rome, Florence, Amalfi)</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Art, food, romance, history. Best Apr-Jun, Sep-Oct. Budget: $$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Greece (Santorini, Mykonos)</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            White cliffs, blue domes, incredible sunsets. Best May-Jun, Sep-Oct. Budget: $$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Morocco (Marrakech, Sahara)</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Exotic markets, desert, riads. Best Mar-May, Sep-Nov. Budget: $-$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Japan (Tokyo, Kyoto)</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Temples, food, technology, cherry blossoms. Best Mar-May, Oct-Nov. Budget: $$-$$$
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-foreground mb-3">🏔️ Adventure & Nature</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">New Zealand</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Mountains, fjords, adventure sports. Best Dec-Feb (summer). Budget: $$-$$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Costa Rica</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Rainforest, beaches, wildlife, ziplining. Best Dec-Apr. Budget: $-$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Iceland</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Northern lights, waterfalls, hot springs. Best Jun-Aug (summer), Sep-Mar (lights). Budget: $$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">South Africa</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Safari, wine country, Cape Town. Best May-Sep. Budget: $$
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-foreground mb-3">🌆 City & Romance</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Paris, France</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Classic romance, museums, cafés. Best Apr-Jun, Sep-Oct. Budget: $$-$$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Prague, Czech Republic</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Fairytale architecture, affordable luxury. Best Apr-Jun, Sep-Oct. Budget: $-$$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Barcelona, Spain</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Gaudí, tapas, beach, nightlife. Best Apr-Jun, Sep-Oct. Budget: $$
                          </p>
                        </div>
                        <div className="bg-cream rounded-lg p-4">
                          <strong className="text-foreground">Charleston, SC (USA)</strong>
                          <p className="text-sm text-foreground/70 mt-1">
                            Southern charm, historic, great food. Best Mar-May, Sep-Nov. Budget: $-$$
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Booking Timeline */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Honeymoon Booking Timeline</h2>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      6-8 Months Before Wedding
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-foreground/70">
                        • Decide on honeymoon style and budget
                      </li>
                      <li className="text-sm text-foreground/70">• Research destinations and create shortlist</li>
                      <li className="text-sm text-foreground/70">
                        • Check passport expiration dates (renew if needed)
                      </li>
                      <li className="text-sm text-foreground/70">
                        • Create honeymoon registry if using one
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">4-6 Months Before Wedding</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-foreground/70">• Finalize destination</li>
                      <li className="text-sm text-foreground/70">
                        • Book flights (prices typically best 3-6 months out)
                      </li>
                      <li className="text-sm text-foreground/70">• Reserve accommodation</li>
                      <li className="text-sm text-foreground/70">
                        • Apply for visas if required (some take 4-8 weeks)
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">2-3 Months Before Wedding</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-foreground/70">• Purchase travel insurance</li>
                      <li className="text-sm text-foreground/70">
                        • Book major activities/excursions that fill up (tours, spa days)
                      </li>
                      <li className="text-sm text-foreground/70">
                        • Research restaurants and make any needed reservations
                      </li>
                      <li className="text-sm text-foreground/70">• Check vaccination requirements</li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">1 Month Before Wedding</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-foreground/70">• Confirm all reservations</li>
                      <li className="text-sm text-foreground/70">• Arrange airport transportation</li>
                      <li className="text-sm text-foreground/70">• Notify credit card companies of travel dates</li>
                      <li className="text-sm text-foreground/70">• Download offline maps and translation apps</li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2">Week Before Wedding</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-foreground/70">• Check in for flights</li>
                      <li className="text-sm text-foreground/70">• Pack (but don't stress—you can buy most things)</li>
                      <li className="text-sm text-foreground/70">• Print/save digital copies of all confirmations</li>
                      <li className="text-sm text-foreground/70">• Set up out-of-office email replies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Tips */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Expert Honeymoon Tips</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">DO:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Build in downtime—you'll be tired from the wedding
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Get travel insurance (medical emergencies, flight cancellations)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Tell everyone it's your honeymoon for upgrades and perks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Leave wedding stress behind—don't check emails/social media constantly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Take photos, but also be present in moments
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
                        Over-schedule every day—leave room for spontaneity
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Skip travel insurance to save money (huge mistake if something goes wrong)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Bring wedding stress or family drama on the trip
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Go immediately after wedding if you're exhausted—wait a few days
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">
                        Forget to notify banks/credit cards (or they'll block your cards abroad)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 my-12">
              <h2 className="font-serif text-3xl font-bold mb-6">The Most Important Thing About Your Honeymoon</h2>
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  Your honeymoon doesn't have to be perfect, exotic, or expensive. It just needs to be what YOU want as a
                  couple. Don't let Instagram, family expectations, or wedding magazines pressure you into a honeymoon that
                  doesn't feel right.
                </p>
                <p className="leading-relaxed">
                  Whether you're camping in national parks, exploring European cities, lounging on a beach, or staying home
                  and taking day trips—the point is to spend quality time together as newlyweds, away from wedding stress
                  and daily responsibilities.
                </p>
                <p className="leading-relaxed">
                  Plan what excites YOU both. That's what will make it memorable—not how much you spent or how far you
                  traveled.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-cream rounded-2xl p-12 text-center mt-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let Us Handle Wedding Planning So You Can Focus on Your Honeymoon
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              With our full-service planning, you'll have more time and energy to plan the honeymoon of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
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
