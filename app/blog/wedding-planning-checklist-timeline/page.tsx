import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Check, ChevronRight, Clock, AlertCircle, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Wedding Planning Checklist & 12-Month Timeline 2025 | CeremonyVerse",
  description:
    "The ultimate wedding planning checklist with month-by-month timeline for Indian-American fusion weddings. Comprehensive task list from engagement to honeymoon with expert tips and deadlines.",
  keywords:
    "wedding planning checklist, wedding timeline, 12 month wedding planning, Indian wedding checklist, fusion wedding planning guide, wedding planning steps, wedding to-do list",
}

export default function WeddingPlanningChecklistPage() {
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
              <span className="text-sm text-foreground/60">20 min read</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Complete Wedding Planning Checklist & 12-Month Timeline
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
              Your comprehensive month-by-month guide to planning a stress-free Indian-American fusion wedding.
              Everything you need to do from "yes!" to "I do" and beyond.
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
              Planning a wedding—especially a multi-day Indian-American fusion celebration—can feel overwhelming.
              Between coordinating traditional ceremonies, managing vendor contracts, and keeping family members happy,
              it's easy to lose track of what needs to be done and when.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              That's why we've created this comprehensive 12-month wedding planning timeline. Whether you're planning a
              grand three-day celebration with Mehendi, Sangeet, and multiple ceremonies, or a more intimate fusion
              wedding, this checklist will keep you organized and on track.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-8">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pro Tip: Customize Your Timeline</h3>
                  <p className="text-sm text-foreground/70">
                    This timeline assumes a 12-month planning period. If you have more or less time, adjust the timeline
                    accordingly. The key is to book essential vendors (venue, photographer, planner) as early as
                    possible, especially during peak wedding season (May-October).
                  </p>
                </div>
              </div>
            </div>

            {/* Immediate: Right After Engagement */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">Immediate: Right After Engagement</h2>
                  <p className="text-foreground/60">The first 2 weeks</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckSquare />
                  Essential First Steps
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Celebrate and share the news!</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Call close family and friends first, then announce on social media if you'd like.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Discuss your vision together</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Big or intimate? Traditional or modern? Three-day celebration or single-day fusion? Align on
                        your overall vision before diving into details.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Set a rough budget</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Determine who's contributing and how much you can realistically spend. Indian-American weddings
                        average $40,000-$80,000 for multi-day events.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Create a rough guest list</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Estimate numbers for budget and venue planning. You'll refine this later, but knowing if you're
                        planning for 150 or 350 guests changes everything.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Pick potential wedding dates</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Consider family schedules, auspicious dates, venue availability, and peak vs. off-peak seasons.
                        Have 3-4 backup dates ready.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Start a planning folder/account</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Create a dedicated email, shared Pinterest board, and Google Drive folder for inspiration and
                        vendor communications.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-secondary" />
                  Cultural Considerations
                </h4>
                <p className="text-sm text-foreground/70">
                  For Indian weddings, consult with a priest or astrologer about auspicious dates (muhurat) early. These
                  dates book up quickly, especially during wedding season. If you're having a Roka or engagement
                  ceremony, plan this now too.
                </p>
              </div>
            </section>

            {/* 12 Months Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">12</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">12 Months Before</h2>
                  <p className="text-foreground/60">Lock in the essentials</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">
                        Hire a wedding planner (highly recommended for fusion weddings)
                      </strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        A specialized Indian-American wedding planner understands cultural nuances, has vendor networks
                        in both communities, and can navigate family expectations. Book early—the best planners book
                        12-18 months in advance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book your venue(s)</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        For multi-day weddings, you may need separate venues for Mehendi/Sangeet and ceremony/reception.
                        Prime dates at popular venues book 12-18 months out.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book photographer and videographer</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        For Indian weddings, look for photo/video teams experienced with long events, cultural rituals,
                        and multiple outfits. The best teams book 12+ months ahead.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Reserve hotel room blocks</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Especially important for multi-day weddings. Negotiate group rates at 2-3 hotels at different
                        price points near your venue.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book caterer or select venue catering package</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        For fusion weddings, you may want separate Indian and Western caterers. Ensure they can
                        accommodate dietary restrictions (vegetarian, vegan, halal, etc.).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Create a wedding website</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Essential for multi-day events. Include schedule, venue details, hotel info, cultural context
                        for non-Indian guests, and RSVP management.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Start shopping for wedding outfits</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Indian bridal outfits (lehenga, sherwanis) require 4-6 months for custom orders plus
                        alterations. Start browsing and considering virtual shopping from India.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 10-11 Months Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">10</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">10-11 Months Before</h2>
                  <p className="text-foreground/60">Build your vendor team</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book DJ/band/entertainment</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        For Sangeet and reception. Look for DJs who can mix Bollywood, bhangra, and Western music
                        seamlessly.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book florist and decorator</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Discuss Mandap design, stage decoration, Mehendi decor, and centerpieces. Share Pinterest boards
                        and color palette.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Research and book Mehendi artist</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Experienced bridal mehendi artists book months in advance. Review portfolios and discuss design
                        style (traditional, Arabic, modern).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book hair and makeup artist</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Find artists experienced with Indian bridal makeup and heavy jewelry. Schedule trial
                        appointments.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Finalize guest list and collect addresses</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        You'll need accurate counts for Save the Dates. Start a spreadsheet with names, addresses, meal
                        preferences, and plus-ones.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order wedding rings</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Custom rings take 6-8 weeks. Also consider Mangalsutra design if having a Hindu ceremony.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Start registry</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Many couples prefer cash funds for honeymoons or down payments. Consider cultural gift-giving
                        preferences.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 8-9 Months Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">8</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">8-9 Months Before</h2>
                  <p className="text-foreground/60">Attire and design details</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order bride's outfits</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Lehenga, saree, or fusion dress for ceremony; Mehendi and Sangeet outfits; reception dress.
                        Consider virtual shopping from India with secure payment processing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order groom's outfits</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Sherwani, indo-western suit, or traditional attire for each event. Coordinate with bride's
                        outfits for photos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order Save the Dates</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Mail 6-8 months before, especially for destination weddings or multi-day events requiring
                        travel.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Select wedding party</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Choose bridesmaids, groomsmen, and any cultural roles (best men for both sides, flower girl/ring
                        bearer). Ask them in a thoughtful way.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book transportation</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Baraat horse/car, wedding party transportation, guest shuttles between hotel and venue if
                        needed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Design invitation suite</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        For fusion weddings, consider including cultural context cards explaining ceremonies for
                        non-Indian guests.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book officiant and/or priest</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Hindu priest for ceremony rituals, Western officiant if having separate ceremony. Discuss
                        ceremony length and customization options.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Streamline Your Sourcing Process</h4>
                    <p className="text-sm text-foreground/70 mb-4">
                      Looking to source authentic items from India? Our{" "}
                      <Link href="/services/outfit-concierge" className="text-primary hover:underline font-medium">
                        Outfit Sourcing Concierge
                      </Link>{" "}
                      and{" "}
                      <Link href="/services/ceremony-essentials" className="text-primary hover:underline font-medium">
                        Ceremony Essentials
                      </Link>{" "}
                      services handle everything from measurements to customs, with complete quality verification.
                      Perfect for busy couples planning from the USA.
                    </p>
                    <Link
                      href="/bridal-party-coordination"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Explore Bridal Party Coordination →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* 6-7 Months Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">6-7 Months Before</h2>
                  <p className="text-foreground/60">Finalize major decisions</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Mail formal invitations</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Send 6-8 weeks before for local guests, 3 months for destination weddings. Include full
                        schedule, dress codes, and RSVP card/website.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Finalize menu and tastings</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Sample dishes from caterer. For fusion menus, ensure balance between traditional Indian and
                        Western options.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book wedding cake or mithai</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Traditional cake, fusion desserts, or Indian sweets display. Schedule tasting.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order bridesmaid dresses/outfits</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Many bridesmaids wear coordinating sarees or lehengas for Indian events, then matching Western
                        dresses for reception. Allow time for alterations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order jewelry and accessories</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Bridal jewelry sets, Maang tikka, Nath, bangles, Kalire. Consider virtual shopping from India
                        for authentic pieces.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Book honeymoon travel</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Flights, hotels, excursions. Consider visa requirements if traveling internationally.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Schedule dress fittings</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        First fitting for bridal outfits. Bring your shoes and undergarments that you'll wear on the
                        day.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 4-5 Months Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">4-5 Months Before</h2>
                  <p className="text-foreground/60">Details and personal touches</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order wedding favors and welcome bags</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        For multi-day events, welcome bags with schedule, snacks, and survival kit items are
                        appreciated. Traditional favors might include mithai boxes or small cultural gifts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Plan ceremony details with priest/officiant</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Discuss which rituals to include, ceremony length, and cultural explanations for mixed-audience
                        weddings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Purchase ceremony items</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Coconut, betel leaves, rice, sacred thread, flower garlands (Varmala), and any other puja items
                        your priest specifies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Plan seating arrangements</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Consider cultural dynamics, family politics, and mixing guests who don't know each other well.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Finalize Sangeet program and performances</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Coordinate with family and friends who want to perform. Schedule rehearsals and create playlist.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Schedule makeup and hair trials</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Test different looks for each event. Bring jewelry and outfit photos for color matching.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Apply for marriage license</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Check your state/city requirements for timing and documentation needed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 2-3 Months Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">2-3 Months Before</h2>
                  <p className="text-foreground/60">Final preparations</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Send RSVP reminder to non-responders</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Follow up with guests who haven't responded. You need accurate counts for catering and seating.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Finalize vendor details and timelines</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Confirm arrival times, setup schedules, payment schedules, and day-of contact information with
                        all vendors.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Create detailed day-of timeline</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Minute-by-minute schedule for each event. Share with planner, wedding party, and vendors.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Order program cards/ceremony guides</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Especially helpful for non-Indian guests to follow along with ceremony rituals and their
                        meanings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Final dress fittings and alterations</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        All outfits for all events should be fitted, pressed, and ready. Don't wait until the last
                        minute.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Break in wedding shoes</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Wear them around the house. Add cushion inserts if needed. You'll be standing for hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Prepare payments and tips for vendors</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Place payments in labeled envelopes. Assign someone trustworthy to distribute on wedding day.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Write vows (if applicable)</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Some couples write personal vows in addition to traditional ceremony vows.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 1 Month Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">1 Month Before</h2>
                  <p className="text-foreground/60">The final countdown</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Finalize guest count and seating chart</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Confirm final numbers with venue and caterer. Complete seating assignments.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Have final venue walkthrough</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Meet with venue coordinator, planner, and key vendors at each venue. Discuss setup, power needs,
                        wifi access, parking.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Confirm honeymoon reservations</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Check in online if possible. Confirm special requests (honeymoon upgrades, dinner reservations).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Get marriage license</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Don't wait until the last minute. Note expiration dates in some states.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Create emergency kit</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Safety pins, stain remover, backup jewelry, pain reliever, blotting papers, phone chargers,
                        snacks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Schedule rehearsal</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Usually the night before. Include wedding party, parents, officiant/priest, and any readers or
                        performers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Start beauty prep</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Facials, waxing, teeth whitening—do these 2-4 weeks before, not days before (in case of
                        reactions).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Send final timeline to all vendors</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Include contact phone numbers for planner and couple's point person.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Week Before */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">The Week Before</h2>
                  <p className="text-foreground/60">Final touches and self-care</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Confirm all vendor arrival times</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Call each vendor personally or have your planner do a final check-in.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Pack for honeymoon</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Don't leave this until the night before the wedding. Have bags ready to go.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Steam or press all wedding outfits</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Do this a few days before. Hang everything carefully and keep covered.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Break in your mehendi</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Get your mehendi 2-3 days before the wedding so it has time to darken and oxidize properly.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Give rings to best man/maid of honor</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Make sure they know where they'll keep them safe during the ceremony.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Prepare toasts/speeches</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        If you're giving a speech at the reception, practice it several times.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Get plenty of rest</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        This week is about self-care. Hydrate, sleep well, and try to stay relaxed. Delegate stress to
                        your planner or family.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Final Week Reminder
                </h4>
                <p className="text-sm text-foreground/70">
                  By now, everything should be confirmed and ready. If something isn't done, delegate it or let it go.
                  The most important thing this week is taking care of yourself and being present with family and
                  friends who've traveled to celebrate with you.
                </p>
              </div>
            </section>

            {/* Day Before & Wedding Day */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">Day Before & Wedding Day</h2>
                  <p className="text-foreground/60">Your celebration is here!</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4">The Day Before</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Attend rehearsal and rehearsal dinner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Give gifts to wedding party (if you haven't already)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Pack getting-ready items and emergency kit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Set out clothes for each event in order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Charge all devices and cameras</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Get a good night's sleep!</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Wedding Day(s)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Eat breakfast (even if you're nervous)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Stay hydrated throughout the day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Follow your timeline but stay flexible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Trust your vendors and planner—let them handle problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Take moments to pause and soak it all in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">
                      Remember: imperfections make the day memorable and uniquely yours
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* After the Wedding */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">After the Wedding</h2>
                  <p className="text-foreground/60">Post-wedding tasks</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Submit marriage certificate paperwork</strong>
                      <p className="text-sm text-foreground/70 mt-1">Your officiant should have given you this.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Change name on legal documents (if applicable)</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Social security card, driver's license, passport, bank accounts, etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Send thank-you cards</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Within 3 months of the wedding. Personalize each note with specific gift mentions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Preserve wedding attire</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Professional cleaning and preservation for your lehenga, sherwani, or dress.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Review and order prints from photographer</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Most photographers deliver within 6-8 weeks. Create albums for parents and grandparents.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Leave vendor reviews</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Help other couples by sharing your experience with vendors who did great work.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Return rented items</strong>
                      <p className="text-sm text-foreground/70 mt-1">
                        Tuxedos, decor items, or other rentals should go back within the agreed timeframe.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Final Tips */}
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 my-12">
              <h2 className="font-serif text-3xl font-bold mb-6">Final Words of Wisdom</h2>
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  <strong>Stay flexible:</strong> Something will go wrong. The flowers might not match perfectly, a
                  family member might be late, the weather might not cooperate. These imperfections become the stories
                  you laugh about later.
                </p>
                <p className="leading-relaxed">
                  <strong>Delegate:</strong> You cannot do everything yourself. Let your planner, wedding party, and
                  family help. That's what they're there for.
                </p>
                <p className="leading-relaxed">
                  <strong>Be present:</strong> The day goes by faster than you can imagine. Take intentional moments
                  throughout to pause, look around, and absorb the love surrounding you.
                </p>
                <p className="leading-relaxed">
                  <strong>Prioritize each other:</strong> At the end of the day, it's about celebrating your commitment
                  to each other. Everything else is just beautiful decoration.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-cream rounded-2xl p-12 text-center mt-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help Planning Your Fusion Wedding?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our experienced team specializes in Indian-American fusion weddings. We'll handle the details so you can
              enjoy your engagement.
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
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

function CheckSquare() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
