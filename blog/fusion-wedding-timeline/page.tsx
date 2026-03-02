import Link from "next/link"
import type { Metadata } from "next"
import SocialShare from "@/components/social-share"

export const metadata: Metadata = {
  title: "12-Month Fusion Wedding Planning Timeline | CeremonyVerse",
  description:
    "Complete month-by-month timeline for planning an Indian-American fusion wedding. Expert guidance on vendor booking, outfit selection, and cultural ceremony coordination.",
  keywords:
    "fusion wedding timeline, Indian American wedding planning, wedding planning checklist, South Asian wedding timeline, multi-day wedding planning",
}

export default function FusionWeddingTimeline() {
  return (
    <div className="min-h-screen bg-background">
      {/* Layout handles Navigation and Footer */}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Breadcrumb */}
        <nav className="text-sm text-charcoal/60 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>Fusion Wedding Timeline</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            The Complete 12-Month Fusion Wedding Planning Timeline
          </h1>
          <div className="flex items-center gap-4 text-charcoal/60">
            <time dateTime="2025-01-10">January 10, 2025</time>
            <span className="mx-2">•</span>
            <span>15 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
            Planning an Indian-American fusion wedding requires coordinating multiple ceremonies, cultural traditions,
            and often hundreds of guests across several days. This comprehensive 12-month timeline breaks down exactly
            what to do and when, ensuring nothing falls through the cracks while you create a celebration that honors
            both your heritage and your modern love story.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
            <p className="text-charcoal font-semibold mb-2">Why 12 Months?</p>
            <p className="text-charcoal/80">
              While some couples plan weddings in 6-9 months, fusion weddings benefit from a full year of planning. The
              additional time allows for international vendor coordination, custom outfit creation, and the detailed
              cultural planning that makes fusion celebrations truly special.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">Months 12-10: Foundation & Vision</h2>

          <h3 className="font-serif text-2xl text-charcoal mt-8 mb-4">Month 12: Celebrate & Dream</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Announce your engagement</strong> to family and close friends
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Have the "big conversations"</strong> with both families about cultural expectations,
                  traditions, and non-negotiables
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Create a shared vision board</strong> with your partner—what does your perfect fusion wedding
                  look like?
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Determine your guest count range</strong> (this drives every other decision)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Set a realistic budget</strong> (average fusion wedding: $225K-$300K for 300 guests)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Decide on wedding season/timeframe</strong> (consider weather, family availability, venue
                  seasonality)
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-sage/10 border-l-4 border-sage p-6 my-8 rounded-r-lg">
            <p className="text-charcoal font-semibold mb-2">Pro Tip:</p>
            <p className="text-charcoal/80">
              Schedule separate conversations with each set of parents to understand their cultural priorities. Some
              families prioritize the religious ceremony, others the reception. Knowing what matters most helps you
              allocate budget and attention appropriately.
            </p>
          </div>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Month 11: Assemble Your Team</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Hire a wedding planner</strong> experienced in fusion weddings (this is non-negotiable for
                  multi-day events)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book your venue(s)</strong>—popular dates fill up 12-18 months in advance
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Reserve hotel room blocks</strong> for out-of-town guests
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Interview and book photographer/videographer</strong> (top vendors book 12+ months out)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Create a wedding website</strong> with event schedule and travel information
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Start your guest list</strong> (expect it to grow by 20-30%)
                </div>
              </li>
            </ul>
          </div>

          <p className="text-charcoal/80 leading-relaxed my-6">
            <strong>Budget Allocation at This Stage:</strong> You should have committed approximately 40-50% of your
            total budget by securing venue, planner, and photographer.
          </p>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Month 10: Cultural Planning Begins</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Decide which ceremonies to include</strong> (Mehendi, Sangeet, Haldi, Baraat, ceremony,
                  reception)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book your officiant(s)</strong>—you may need both a religious officiant and a legal officiant
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Research and book caterer</strong> experienced in Indian cuisine (tastings happen 6-8 months
                  out)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book DJ/entertainment</strong> who understands both Bollywood and Western music
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Start researching outfit options</strong> (custom pieces take 4-6 months)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Send save-the-dates</strong> for destination or multi-day weddings
                </div>
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">Months 9-7: Design & Details</h2>

          <h3 className="font-serif text-2xl text-charcoal mt-8 mb-4">Month 9: Visual Identity</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Finalize your color palette</strong> (consider how it works across multiple events)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book florist and discuss mandap design</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Design and order invitations</strong> (allow 8-10 weeks for printing and addressing)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book hair and makeup artists</strong> for trial runs
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Order your wedding outfits</strong> (bride's lehenga, groom's sherwani, reception attire)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book mehendi artist</strong> if having a traditional Mehendi ceremony
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
            <h4 className="font-semibold text-charcoal mb-3">CeremonyVerse Virtual Shopping Service</h4>
            <p className="text-charcoal/80 mb-4">
              This is the ideal time to leverage our Virtual Shopping Concierge. We'll coordinate with verified Indian
              suppliers to source your outfits, jewelry, and wedding essentials—all with secure payment processing and
              quality guarantees.
            </p>
            <Link
              href="/services"
              className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-semibold text-sm"
            >
              Learn About Virtual Shopping
            </Link>
          </div>

          {/* Expert Outfit Sourcing Services */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
            <h4 className="font-semibold text-charcoal mb-3">Expert Outfit Sourcing Services</h4>
            <p className="text-charcoal/80 mb-4">
              This is the ideal time to explore our{" "}
              <Link href="/services/outfit-concierge" className="text-primary hover:underline font-medium">
                Outfit Sourcing & Styling Concierge
              </Link>
              . We coordinate with verified Indian suppliers to source your lehenga, sherwani, jewelry, and bridal party
              outfits—all with quality guarantees and secure delivery. Also check out our{" "}
              <Link href="/services/ceremony-essentials" className="text-primary hover:underline font-medium">
                Ceremony Essentials service
              </Link>{" "}
              for all traditional items you'll need.
            </p>
          </div>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Months 8-7: Logistics & Legalities</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Finalize guest list</strong> and collect addresses
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Mail invitations</strong> (8-10 weeks before wedding for local, 12 weeks for destination)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Apply for marriage license</strong> (requirements vary by state)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book transportation</strong> (baraat horse/car, guest shuttles, couple's exit vehicle)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Order wedding bands</strong> (allow 6-8 weeks for sizing and engraving)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Plan rehearsal dinner</strong> and book venue
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Create registry</strong> or plan alternative (honeymoon fund, charity donations)
                </div>
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">Months 6-4: Refinement & Personalization</h2>

          <h3 className="font-serif text-2xl text-charcoal mt-8 mb-4">Month 6: Cultural Details</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Finalize ceremony details</strong> with officiant (vows, readings, rituals)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Order ceremony essentials</strong> (mangalsutra, sindoor, coconut, sacred fire materials)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Plan Sangeet performances</strong> and coordinate with family members
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Attend catering tasting</strong> and finalize menu
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Order welcome bags</strong> for out-of-town guests
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book spa services</strong> for pre-wedding pampering
                </div>
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Months 5-4: Guest Experience</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Create detailed timeline</strong> for each event (share with vendors and wedding party)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Order favors and gifts</strong> (guest favors, bridal party gifts, parent gifts)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Finalize seating chart</strong> (consider cultural dynamics and family relationships)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Order signage and programs</strong> (especially important for guests unfamiliar with Indian
                  traditions)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Schedule outfit fittings</strong> (first fitting for alterations)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Book honeymoon</strong> travel and accommodations
                </div>
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">Months 3-1: Final Preparations</h2>

          <h3 className="font-serif text-2xl text-charcoal mt-8 mb-4">Month 3: Confirmations</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Confirm final guest count</strong> with venue and caterer
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Final outfit fitting</strong> and alterations
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Hair and makeup trial</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Finalize music playlists</strong> with DJ (ceremony, cocktail hour, reception, Sangeet)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Order cake</strong> or Indian sweets for dessert
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Confirm all vendor contracts</strong> and make final payments
                </div>
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Month 2: Details & Delegation</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Break in your shoes</strong> (you'll be wearing them for hours)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Assemble welcome bags</strong> with itinerary, snacks, and cultural explanations
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Create day-of emergency kit</strong> (safety pins, stain remover, bobby pins, phone chargers)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Delegate responsibilities</strong> to wedding party and family members
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Write thank you notes</strong> for early gifts
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Confirm honeymoon plans</strong> and pack
                </div>
              </li>
            </ul>
          </div>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Month 1: Final Countdown</h3>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Key Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Final venue walkthrough</strong> with planner and key vendors
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Rehearsal and rehearsal dinner</strong> (typically 1-2 days before)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Confirm final headcount</strong> with all vendors
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Pack for wedding and honeymoon</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Prepare vendor tips</strong> in labeled envelopes
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Get plenty of rest</strong> and stay hydrated
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-sage/10 border-l-4 border-sage p-6 my-8 rounded-r-lg">
            <p className="text-charcoal font-semibold mb-2">Final Week Wisdom:</p>
            <p className="text-charcoal/80">
              Something will go wrong. A vendor will be late, the weather won't cooperate, or a family member will have
              drama. That's okay. Your wedding planner will handle it, and you won't even know it happened. Focus on
              being present and enjoying every moment with your partner and loved ones.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">The Day Of: Your Celebration</h2>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            After 12 months of planning, your wedding weekend has arrived. Here's how to make the most of it:
          </p>

          <ul className="space-y-3 text-charcoal/80 mb-8">
            <li>
              <strong>Eat breakfast</strong> even if you're nervous—you'll need the energy
            </li>
            <li>
              <strong>Stay hydrated</strong> throughout all events
            </li>
            <li>
              <strong>Build in buffer time</strong> between events for photos and transitions
            </li>
            <li>
              <strong>Designate a point person</strong> to handle vendor questions (not you!)
            </li>
            <li>
              <strong>Put your phone away</strong> and be fully present
            </li>
            <li>
              <strong>Take mental snapshots</strong> of special moments—they go by quickly
            </li>
            <li>
              <strong>Enjoy the food</strong> you spent months planning
            </li>
            <li>
              <strong>Dance, laugh, and celebrate</strong> with everyone who came to support you
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">After the Wedding</h2>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Post-Wedding Tasks:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Within 1 week:</strong> Return rental items, preserve wedding outfit, change name on documents
                  (if applicable)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Within 2 weeks:</strong> Review and select photos/video highlights
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Within 3 months:</strong> Send thank you notes to all guests and vendors
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">□</span>
                <div>
                  <strong>Within 6 months:</strong> Receive final photos and video, create wedding album
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-sage/10 rounded-xl p-8 my-12">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Let Us Handle the Timeline</h3>
            <p className="text-charcoal/80 mb-6">
              This timeline is comprehensive, but it's also overwhelming. That's exactly why CeremonyVerse exists. Our
              Heritage & Harmony Plan includes a dedicated wedding coordinator who manages every deadline, vendor, and
              detail—so you can focus on enjoying your engagement and celebrating your love story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/heritage-harmony"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold text-center"
              >
                Explore Heritage & Harmony Plan
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-charcoal border-2 border-charcoal px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors font-semibold text-center"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>

          <p className="text-charcoal/80 leading-relaxed text-center mt-12 text-lg">
            Your fusion wedding will be a beautiful celebration of two cultures, two families, and one extraordinary
            love story. Enjoy every moment of the journey.
          </p>

          <div className="mt-12 pt-8 border-t border-charcoal/10">
            <SocialShare
              url="https://ceremonyverse.com/blog/fusion-wedding-timeline"
              title="12-Month Fusion Wedding Planning Timeline"
            />
          </div>
        </div>
      </article>

      {/* Layout handles Footer */}
    </div>
  )
}
