import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, MapPin, Users, DollarSign, Check, AlertCircle, Star, Building2, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Choose the Perfect Wedding Venue for Your Indian-American Fusion Wedding | CeremonyVerse",
  description:
    "Complete guide to selecting the ideal wedding venue for your Indian-American fusion wedding. Multi-day event considerations, capacity planning, budget tips, and questions to ask before booking.",
  keywords:
    "wedding venue selection, Indian wedding venues, multi-day wedding venues, fusion wedding location, venue booking guide, wedding venue checklist, Indian wedding venues",
}

export default function ChoosingWeddingVenuePage() {
  return (
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
            <span className="text-sm text-foreground/60">16 min read</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            How to Choose Your Perfect Wedding Venue
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-6">
            Your venue sets the tone for your entire celebration. Here's everything you need to know to find the perfect
            location for your Indian-American fusion wedding—from multi-day logistics to hidden costs.
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
            Choosing your wedding venue is one of the first—and most important—decisions you'll make in your planning
            journey. Your venue doesn't just provide a physical space; it shapes your guest experience, influences your
            budget, and affects every other vendor decision from catering to decor.
          </p>

          <p className="text-lg leading-relaxed text-foreground/80 mb-6">
            For Indian-American fusion weddings, the venue decision becomes even more complex. You may need space for
            multiple events (Mehendi, Sangeet, ceremony, reception), accommodation for out-of-town guests, and
            facilities that can handle both traditional Indian ceremonies and Western-style receptions.
          </p>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-8">
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Start Early</h3>
                <p className="text-sm text-foreground/70">
                  Popular venues book 12-18 months in advance, especially for peak season (May-October). Start your
                  venue search as soon as you've set your approximate date and guest count.
                </p>
              </div>
            </div>
          </div>

          {/* Key Factors */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Key Factors to Consider</h2>

            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  1. Capacity & Layout
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Guest Count</h4>
                    <p className="text-foreground/70 mb-3">
                      Indian weddings typically have larger guest lists than American weddings. Make sure your venue can
                      comfortably accommodate your numbers with room for:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Seated dinner capacity (not just standing cocktail capacity)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Dance floor space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Mandap/ceremony setup without feeling cramped
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Cocktail/mingling areas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Layout Flexibility</h4>
                    <p className="text-sm text-foreground/70">
                      For fusion weddings, you may need to transform the space between events. Ask about:
                    </p>
                    <ul className="space-y-2 ml-4 mt-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          Separate ceremony and reception spaces (or time for flip)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Getting-ready rooms for bride and groom</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Outdoor ceremony backup plan (weather)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  2. Location & Accessibility
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Travel Convenience</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Airport proximity:</strong> Most guests traveling? Choose location within 30-45
                          minutes of major airport
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Hotel options:</strong> Multiple hotels at different price points nearby
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Parking:</strong> Adequate free or affordable parking for all guests
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>GPS/directions:</strong> Easy to find, not confusing side streets
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Multi-Day Event Considerations</h4>
                    <p className="text-sm text-foreground/70 mb-2">
                      If having multiple events over several days, consider:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          One venue for all events vs. multiple locations
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Travel time between venues if using multiple</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          On-site hotel (huge plus for multi-day celebrations)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  3. Budget & Costs
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    Venue costs typically represent 30-40% of your wedding budget. Understanding all costs upfront is
                    crucial:
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What's Included</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Rental fee for ceremony + reception space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Tables, chairs, linens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Sound system and microphones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">On-site coordinator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">Setup and cleanup</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Hidden Costs to Ask About</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Service charges/gratuity:</strong> Often 18-22% on top of food/beverage
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Overtime fees:</strong> What happens if you go past contracted time
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Vendor fees:</strong> Some venues charge for outside vendors
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Parking fees:</strong> Valet or self-park charges
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Cake cutting/corkage fees:</strong> If bringing outside dessert or alcohol
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">
                          <strong>Liability insurance:</strong> Required event insurance policy
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  4. Venue Type & Style
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground/70 mb-4">
                    Different venue types work better for different wedding styles:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Hotel/Resort</h4>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Best for:</strong> Multi-day celebrations, out-of-town guests
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> All-in-one convenience, room blocks, multiple event spaces,
                          professional staff, flexible with cultural ceremonies
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Cons:</strong> Can feel generic, limited decor flexibility, potentially pricey
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Banquet Hall</h4>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Best for:</strong> Large guest counts (200+), traditional celebrations
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> High capacity, experienced with Indian weddings, flexible timing,
                          usually allows outside catering
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Cons:</strong> May need extensive decoration, less unique atmosphere
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Garden/Outdoor Venue</h4>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Best for:</strong> Spring/summer weddings, natural beauty lovers
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> Stunning photos, natural ambiance, less decor needed
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Cons:</strong> Weather dependent, need tent backup, restroom facilities, generator for
                          sound/lights
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Historic Estate/Museum</h4>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Best for:</strong> Elegant, sophisticated celebrations, smaller guest counts
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> Unique character, stunning architecture, built-in elegance
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Cons:</strong> Strict rules (volume, timing, decor), limited capacity, expensive
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Blank Canvas (Warehouse/Loft)</h4>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Best for:</strong> Creative couples, DIY enthusiasts, unique visions
                        </p>
                        <p className="text-sm text-foreground/70 mb-2">
                          <strong>Pros:</strong> Complete creative freedom, modern industrial aesthetic
                        </p>
                        <p className="text-sm text-foreground/70">
                          <strong>Cons:</strong> You bring EVERYTHING (chairs, tables, kitchen, restrooms), more
                          planning required, potentially higher cost
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Questions to Ask */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Essential Questions to Ask</h2>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 mb-6">
              <h3 className="text-lg font-semibold mb-4">Copy this checklist for venue tours:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Availability & Timing</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm text-foreground/70">☐ Is our date available? Any other events that day?</li>
                    <li className="text-sm text-foreground/70">
                      ☐ How many hours are included in the rental? What's the overtime cost?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ When can vendors arrive for setup? When must we be out?
                    </li>
                    <li className="text-sm text-foreground/70">☐ Are there noise restrictions or curfews?</li>
                    <li className="text-sm text-foreground/70">
                      ☐ Can we do a rehearsal the day before? (Additional cost?)
                    </li>
                  </ul>
                </div>

                <div className="border-t border-accent/20 pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Capacity & Layout</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm text-foreground/70">
                      ☐ Maximum seated capacity? Maximum standing capacity?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Can you show us floor plans with our estimated guest count?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Are there getting-ready rooms? How many people fit comfortably?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Where would the Mandap/ceremony setup go? Dance floor?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Do you have floor plan software to visualize layouts?
                    </li>
                  </ul>
                </div>

                <div className="border-t border-accent/20 pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Vendors & Services</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm text-foreground/70">
                      ☐ Do we have to use your preferred vendor list or can we bring anyone?
                    </li>
                    <li className="text-sm text-foreground/70">☐ Are there fees for outside vendors? How much?</li>
                    <li className="text-sm text-foreground/70">
                      ☐ Is catering in-house or can we bring our own? (Important for authentic Indian food)
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ What about alcohol—can we bring our own? Corkage fees?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Do you provide a day-of coordinator? What do they handle?
                    </li>
                  </ul>
                </div>

                <div className="border-t border-accent/20 pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Amenities & Logistics</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm text-foreground/70">
                      ☐ What's included: tables, chairs, linens, china, glassware?
                    </li>
                    <li className="text-sm text-foreground/70">☐ Is there a sound system? DJ booth? Dance floor?</li>
                    <li className="text-sm text-foreground/70">
                      ☐ How's the parking? Valet available? What does it cost?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Are bathrooms adequate for our guest count? Modern/clean?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Is there climate control (heat/AC)? Who controls it?
                    </li>
                  </ul>
                </div>

                <div className="border-t border-accent/20 pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Contract & Payment</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm text-foreground/70">
                      ☐ What's the total cost including all fees and service charges?
                    </li>
                    <li className="text-sm text-foreground/70">☐ What's the deposit? When are payments due?</li>
                    <li className="text-sm text-foreground/70">☐ What's your cancellation/postponement policy?</li>
                    <li className="text-sm text-foreground/70">☐ Do you require event insurance? How much coverage?</li>
                    <li className="text-sm text-foreground/70">
                      ☐ When is the final guest count due? Can we adjust after?
                    </li>
                  </ul>
                </div>

                <div className="border-t border-accent/20 pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Special Considerations for Indian Weddings</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="text-sm text-foreground/70">☐ Have you hosted Indian weddings before?</li>
                    <li className="text-sm text-foreground/70">
                      ☐ Are you flexible with ceremony length? (Hindu ceremonies can be 2+ hours)
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Can we use decorative fire (diyas, candles) safely?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Is there space for Baraat entrance/horse if desired?
                    </li>
                    <li className="text-sm text-foreground/70">
                      ☐ Can kitchen accommodate extensive Indian catering needs?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Red Flags */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Red Flags to Watch For</h2>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">
                      Vague pricing or unwillingness to provide written quotes
                    </strong>
                    <p className="text-sm text-foreground/70 mt-1">
                      Everything should be documented. If they won't give you detailed pricing, walk away.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">
                      Pressure to book immediately without time to review contract
                    </strong>
                    <p className="text-sm text-foreground/70 mt-1">
                      Legitimate venues understand you need time. High-pressure sales tactics are a bad sign.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Poor communication or slow responses</strong>
                    <p className="text-sm text-foreground/70 mt-1">
                      If they're hard to reach during planning, imagine day-of. Communication is everything.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">
                      Facilities in poor condition (bathrooms, kitchen, decor)
                    </strong>
                    <p className="text-sm text-foreground/70 mt-1">
                      If they don't maintain the space, what else are they neglecting? Your guests will notice.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">
                      No flexibility or unwillingness to work with cultural needs
                    </strong>
                    <p className="text-sm text-foreground/70 mt-1">
                      If they're rigid about ceremony format or timing for Indian traditions, find someone more
                      experienced with fusion weddings.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Missing required permits/licenses/insurance</strong>
                    <p className="text-sm text-foreground/70 mt-1">
                      Verify they have proper business licenses, liability insurance, liquor licenses if applicable. You
                      don't want legal issues.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Making the Decision */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Making Your Final Decision</h2>

            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">After touring 3-5 venues, evaluate using this framework:</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    The "Gut Feel" Test
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Can you envision your wedding there? Does it feel right? Trust your instincts—if something feels
                    off, it probably is.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    The Guest Experience Test
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Walk through as a guest would. Are bathrooms nice? Is parking easy? Can elderly/disabled guests
                    navigate comfortably? Will your guests enjoy themselves here?
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    The Total Cost Test
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Add up ALL costs (venue, required vendors, extras, service charges). Does it fit your budget with
                    room for other priorities like photo/video? Sometimes "cheaper" venues end up more expensive once
                    you add rentals.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    The Logistics Test
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Does the timeline work? Can you realistically flip the space if needed? Will your vendors have what
                    they need (power, wifi, kitchen access)? Are there any deal-breaking restrictions?
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">Before Signing the Contract:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">
                      Have a lawyer review the contract (or at minimum, read every word yourself)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">
                      Understand cancellation/postponement policies given unpredictable circumstances
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">
                      Get all verbal promises in writing as contract addendums
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">
                      Check Better Business Bureau and online reviews one more time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">
                      Visit the venue on a day/time similar to your wedding to see it in action
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 my-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Final Thoughts on Venue Selection</h2>
            <div className="space-y-4 text-white/90">
              <p className="leading-relaxed">
                Your venue is one of the few wedding decisions that affects literally everything else—your budget, your
                guest experience, your vendor choices, your timeline, and your overall wedding vibe. Take your time with
                this decision.
              </p>
              <p className="leading-relaxed">
                Don't let pressure from family, friends, or venue coordinators rush you. Tour multiple options, sleep on
                it, and choose the place that feels right for YOUR vision—not what someone else thinks you should do.
              </p>
              <p className="leading-relaxed">
                Remember: the "perfect" venue doesn't exist. Every space has pros and cons. Choose the one where the
                pros align with what matters most to you as a couple, and where the cons are things you can work around
                or don't care about.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-cream rounded-2xl p-12 text-center mt-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need Help Finding Your Perfect Venue?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our team has relationships with the best venues for Indian-American fusion weddings. We can help you find
            and negotiate the perfect space for your celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/start-planning">Schedule Free Consultation</Link>
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
  )
}
