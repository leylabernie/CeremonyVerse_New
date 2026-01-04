import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Wedding in Mexico Cost Guide | CeremonyVerse",
  description:
    "A budget-first breakdown of what an Indian wedding in Mexi...unts, and vendor mixes to plan your celebration with clarity.",
};

export default function IndianWeddingMexicoCostGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero/Intro Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            How much does an Indian wedding in Mexico actually cost?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            This guide breaks down real numbers, compares Mexico to US pricing,
            and helps you understand where your money goes so you can plan with
            confidence, not anxiety.
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-amber-700 mb-3">
            INDIAN & SOUTH ASIAN DESTINATION WEDDINGS
          </p>
          <div className="inline-flex items-center gap-3 text-xs text-gray-500">
            <span>Based on multi-event celebrations: Sangeet, Ceremony, Reception</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Guest ranges: 80–350+</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Pricing in USD</span>
          </div>
        </div>
      </section>

      {/* Summary Table Section */}
      <section className="py-12 px-4 bg-white border-t border-b border-amber-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-center">
            At-a-glance: Mexico vs US cost ranges
          </h2>
          <p className="text-gray-700 text-center mb-8">
            These ranges assume a 3-day Indian or South Asian wedding with
            Sangeet, Ceremony, and Reception, including decor, entertainment,
            photography, and travel for key vendors. They are not minimums; they
            are realistic totals for well-executed celebrations.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-100">
                  <th className="border border-amber-200 px-6 py-4 text-left font-semibold text-gray-900">
                    Wedding Size
                  </th>
                  <th className="border border-amber-200 px-6 py-4 text-left font-semibold text-gray-900">
                    Guest Count
                  </th>
                  <th className="border border-amber-200 px-6 py-4 text-left font-semibold text-gray-900">
                    Mexico Cost Range
                  </th>
                  <th className="border border-amber-200 px-6 py-4 text-left font-semibold text-gray-900">
                    US Cost Range
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-amber-50 transition-colors">
                  <td className="border border-amber-200 px-6 py-4 font-medium text-gray-900">
                    Intimate
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    80-120 guests
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $150,000 - $250,000
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $200,000 - $350,000
                  </td>
                </tr>
                <tr className="bg-amber-50/50 hover:bg-amber-50 transition-colors">
                  <td className="border border-amber-200 px-6 py-4 font-medium text-gray-900">
                    Classic
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    120-220 guests
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $250,000 - $450,000
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $350,000 - $600,000
                  </td>
                </tr>
                <tr className="bg-white hover:bg-amber-50 transition-colors">
                  <td className="border border-amber-200 px-6 py-4 font-medium text-gray-900">
                    Large
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    220-350+ guests
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $450,000 - $800,000+
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $600,000 - $1,200,000+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            *Ranges based on 3-day celebrations with standard Indian wedding
            events (Sangeet, ceremony, reception) and typical guest behavior.
            Travel-heavy guest lists, high-end decor, and premium entertainment
            can push budgets above these ranges.
          </p>
        </div>
      </section>

      {/* Key Drivers Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-center">
            What actually drives the budget?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Understanding these six factors helps you make smart trade-offs and
            prioritize what matters most to your celebration.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guest Count */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5V10h-5v10zM2 20h5V10H2v10zm7 0h6V4H9v16zM16 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Guest Count
              </h3>
              <p className="text-gray-600">
                The single biggest variable. Each guest adds F&B costs, seating,
                and often hotel room blocks. A 50-guest difference can mean
                $50,000-$100,000 in total budget impact.
              </p>
            </div>

            {/* Number of Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Number of Events
              </h3>
              <p className="text-gray-600">
                Haldi, Mehndi, Sangeet, Pithi, Ceremony, Reception, After
                Party. Each event requires its own decor, entertainment, and
                food. Combining or simplifying events is a powerful way to
                control costs.
              </p>
            </div>

            {/* Resort Category */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Resort Category
              </h3>
              <p className="text-gray-600">
                All-inclusive vs EP, 4-star vs 5-star, brand reputation, and
                wedding package flexibility. Higher-end resorts can add
                $50,000-$200,000 to the total cost once you factor in room
                rates, F&B, and exclusivity requirements.
              </p>
            </div>

            {/* Decor & Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM5.5 22h13l-6.5-8-6.5 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Decor & Production
              </h3>
              <p className="text-gray-600">
                Mandap scale, florals, lighting, staging, dance floors, and
                special effects. Mexico offers efficiencies, but luxury decor
                still adds up quickly for multi-event, multi-space celebrations.
              </p>
            </div>

            {/* Catering & Bar */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 2l1.5 7.5h9L18 2H6zm0 9h12v2H6v-2zm2 3h8l-1 6H9l-1-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Catering & Bar
              </h3>
              <p className="text-gray-600">
                Indian menus, late-night snacks, premium bar packages, and
                dietary accommodations. Many resorts charge extra for authentic
                Indian catering and outside caterer access.
              </p>
            </div>

            {/* Travel & Vendor Mix */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2 4 4L19 4l2 2-12 12L3 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Travel & Vendor Mix
              </h3>
              <p className="text-gray-600">
                Are your photographer, DJ, decor team, or priest flying in from
                the US or India? Flights, hotels, per diems, and shipping all
                need to be included in the real budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Budget Breakdown Section */}
      <section className="py-16 px-4 bg-white border-t border-b border-amber-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-center">
            Sample breakdown: $350,000 Indian wedding in Mexico
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            This example assumes 200 guests, three main events (Sangeet,
            Ceremony, Reception), and a premium all-inclusive resort that is
            experienced with Indian weddings.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Resort, Rooms, and F&B */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                35-45%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Resort, Rooms, and F&B
              </h3>
              <p className="text-sm text-gray-600">
                $120,000-$160,000. Room blocks, all-inclusive packages, venue
                fees, welcome events, and base catering. Indian menu upgrades or
                outside caterers may add to this.
              </p>
            </div>

            {/* Decor & Production */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                18-24%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Decor & Production
              </h3>
              <p className="text-sm text-gray-600">
                $63,000-$84,000. Mandap, stages, florals, lighting, dance
                floors, draping, and all visual elements for multiple events.
              </p>
            </div>

            {/* Entertainment */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                8-12%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Entertainment
              </h3>
              <p className="text-sm text-gray-600">
                $28,000-$42,000. DJ, dhol players, live band, dancers, and any
                special performances.
              </p>
            </div>

            {/* Photo & Video */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                6-10%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Photo & Video
              </h3>
              <p className="text-sm text-gray-600">
                $21,000-$35,000. Lead photographers, second shooters,
                cinematography team, and drone coverage.
              </p>
            </div>

            {/* Travel & Logistics */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                5-8%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Travel & Logistics
              </h3>
              <p className="text-sm text-gray-600">
                $17,500-$28,000. Vendor flights and hotels, equipment shipping,
                guest transportation, and welcome bags.
              </p>
            </div>

            {/* Planning & Design */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                8-12%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Planning & Design
              </h3>
              <p className="text-sm text-gray-600">
                $28,000-$42,000. Destination wedding planner, design services,
                and on-site coordination.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            These percentages and numbers are illustrative, not prescribed. Your
            actual budget will depend on your priorities: room-night structure,
            length of stay, decor scale, entertainment mix, and vendor travel.
          </p>
        </div>
      </section>

      {/* Savings Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-center">
            Why Mexico can save $50,000-$200,000 vs a US wedding
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Mexico isn’t “cheap”; it is efficient. The savings come from smart
            bundling of resort, travel, and F&B—not cutting cultural traditions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                All-inclusive structure
              </h3>
              <p className="text-gray-600">
                Room rates, food, and drinks are wrapped into predictable
                packages. Instead of paying per item, you leverage volume
                pricing, especially for multi-night stays.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lower labor & vendor overhead
              </h3>
              <p className="text-gray-600">
                On-the-ground support staff, setup crews, and some vendors can
                be more cost-effective than equivalent teams in US metro areas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fewer “obligatory” events at home
              </h3>
              <p className="text-gray-600">
                Many couples consolidate pre-wedding events or host smaller
                local gatherings, shifting the main investment to Mexico rather
                than spreading budget across multiple large home-city events.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Built-in guest count filter
              </h3>
              <p className="text-gray-600">
                Destination weddings naturally limit guest count to those who
                are most invested in attending, which keeps F&B and room blocks
                to a more manageable scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Guidance Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-center">
            How to use this guide for your own budget
          </h2>
          <p className="text-gray-600 text-center mb-10">
            The goal is not to scare you with big numbers—it’s to give you a
            realistic starting point so you can make informed decisions instead
            of chasing “Pinterest weddings” with incomplete price information.
          </p>

          <div className="space-y-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                1. Start with your guest count and must-have events
              </h3>
              <p className="text-gray-700">
                Decide who truly needs to be there and which events are
                non-negotiable. This immediately frames whether you are in the
                intimate, classic, or large range—and which levers you can
                adjust.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                2. Decide your “experience level”
              </h3>
              <p className="text-gray-700">
                Are you aiming for a beautiful, well-planned wedding with smart
                choices—or an ultra-luxury, no-limits production? This alone can
                swing your budget by hundreds of thousands of dollars.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                3. Talk through non-negotiables with your families
              </h3>
              <p className="text-gray-700">
                Traditions, guest hospitality, and expectations vary by family.
                Clarify what absolutely needs to be included (for example, live
                music, baraat with horse or car, fully traditional ceremony) so
                we can budget realistically.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                4. Use ranges, not single numbers
              </h3>
              <p className="text-gray-700">
                Instead of saying “our budget is exactly $300,000,” think in
                ranges: “our comfort zone is $250,000-$325,000.” This leaves
                room to adapt as we explore venues, travel patterns, and vendor
                availability.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                5. Let a planner stress-test your numbers
              </h3>
              <p className="text-gray-700">
                A cost guide is the starting point; real planning happens once
                we match your budget to specific resorts, dates, travel
                patterns, and expectations. That’s where I come in.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-8">
            Nothing here is a quote or guarantee. All numbers are based on
            typical ranges observed across Indian and South Asian weddings in
            Mexico and the US, adjusted for multi-day celebrations with
            destination logistics.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Want a Mexico budget that reflects your actual plans?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            I build budget-first planning frameworks for Indian and South Asian
            couples who want clarity, not confusion. We’ll translate your guest
            list, wish list, and priorities into a realistic Mexico budget range
            you can trust.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Start with a Budget Consult
            </a>
            <a
              href="/indian-destination-wedding-planner-mexico"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 bg-white border-2 border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Learn More About Mexico Planning
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
