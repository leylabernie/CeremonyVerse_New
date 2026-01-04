import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Wedding Planner Cancun | CeremonyVerse",
  description:
    "Planning-focused support for Indian and South Asian destination weddings in Cancun and the greater Riviera Maya. Budget-first, culturally fluent, and realistic for US-based families.",
};

export default function CancunIndianWeddingPlannerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-amber-700 mb-3 uppercase">
            CANCUN • RIVIERA MAYA • PLAYA DEL CARMEN
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5">
            Indian wedding planner in Cancun, Mexico
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Cancun is one of the most practical places in Mexico for Indian and
            South Asian destination weddings – easy flights, resort properties
            built for big groups, and strong vendor networks for multi-day
            celebrations.
          </p>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
            My role is to help you translate guest count, wish list, and family
            expectations into a realistic Cancun plan – venues, events, and
            vendors that fit your actual numbers, not just brochure pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Start a Cancun planning consult
            </a>
            <a
              href="/indian-wedding-mexico-cost-guide"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 border border-amber-600 bg-white hover:bg-amber-50 transition-colors"
            >
              See Mexico cost guide
            </a>
          </div>
        </div>
      </section>

      {/* Why Cancun */}
      <section className="py-16 px-4 bg-white border-t border-b border-amber-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Why so many Indian couples choose Cancun
          </h2>
          <p className="text-gray-700 mb-6">
            Compared with many US metro areas, Cancun and the surrounding
            Riviera Maya can deliver more venue flexibility, better weather
            windows, and strong value for multi-day Indian wedding weekends.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Practical advantages
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Direct flights from many major US cities</li>
                <li>Resorts designed for large wedding groups</li>
                <li>Multiple venue options within one property</li>
                <li>All-inclusive packages that simplify budgeting</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Culturally supportive resorts
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Experience with Hindu, Sikh, Jain, and fusion weddings</li>
                <li>Options for open-flame ceremonies with proper permits</li>
                <li>Flexibility for vegetarian-heavy or Jain menus</li>
                <li>Spaces that work for Baraat, Sangeet, and Mehndi events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How I help in Cancun */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            What I actually do for your Cancun wedding
          </h2>
          <p className="text-gray-700 mb-6">
            This is not a generic travel agency service. It&apos;s hands-on
            planning support for Indian and South Asian weddings, designed
            around realistic budgets and complex families.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Before you pick a resort
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Budget and guest count modeling for Cancun vs other regions</li>
                <li>Shortlist of resorts that fit your numbers &amp; rituals</li>
                <li>Questions to ask each property before you sign</li>
                <li>
                  How to structure room blocks and minimums so they don&apos;t
                  backfire
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Once we&apos;ve chosen your resort
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Event flow and venue mapping for each ceremony &amp; party</li>
                <li>
                  Vendor strategy: which roles to keep in-resort vs bring from
                  the US
                </li>
                <li>Timeline and logistics planning for multi-day events</li>
                <li>Guest communications templates and travel FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            See if Cancun is the right fit for your wedding
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            You don&apos;t have to figure out every detail before you talk to a
            planner. We&apos;ll start with your budget, guest list, and ideal
            experience, then map out whether Cancun makes sense—and exactly what
            it would look like.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Book a Cancun consult
            </a>
            <a
              href="/indian-wedding-mexico-cost-guide"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 border border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Review Mexico cost ranges
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
