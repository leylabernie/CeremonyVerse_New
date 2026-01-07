import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian & Fusion Wedding Planning | CeremonyVerse",
  description:
    "Planning-first support for Indian and fusion weddings in the US and Mexico. Budget clarity, cultural fluency, and realistic guidance for multi-day celebrations.",
};

export default function IndianFusionWeddingPlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-amber-700 mb-3 uppercase">
            INDIAN & FUSION WEDDING PLANNING
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5">
            Indian and fusion wedding planning that starts with your real budget
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            You do not need a “luxury only” planner. You need someone who can
            translate your guest count, wish list, and family expectations into
            a clear plan and budget – whether you are celebrating close to home
            or in Mexico.
          </p>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
            CeremonyVerse focuses on Indian, South Asian, and fusion weddings
            where cultural details matter and money needs to be used carefully,
            not blindly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Start with a planning consult
            </a>
            <a
              href="/indian-destination-wedding-planner-mexico"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 border border-amber-600 bg-white hover:bg-amber-50 transition-colors"
            >
              Explore Mexico destination planning
            </a>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="py-16 px-4 bg-white border-t border-b border-amber-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            What “planning-first” actually means
          </h2>
          <p className="text-gray-700 mb-6">
            Instead of starting with decor boards or venue logos, we start with
            structure: who is coming, what traditions are important, and what
            you can realistically invest. That becomes the framework for every
            decision.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Indian & South Asian weddings
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Hindu, Sikh, Jain, Muslim, and interfaith ceremonies</li>
                <li>Multi-day event structures: Sangeet, Pithi, Mehndi, Reception</li>
                <li>Guest hospitality expectations across generations</li>
                <li>Budget impact of decor, catering, and vendor travel</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fusion and intercultural weddings
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Blending Western and Indian ceremony structures</li>
                <li>Managing two sets of family expectations calmly</li>
                <li>Creating timelines that feel natural, not rushed</li>
                <li>Respecting both cultures without overspending</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Ways we can work together
          </h2>
          <p className="text-gray-700 mb-8">
            Support is not one-size-fits-all. These tiers give you structure,
            and we customize the details based on where you are getting married
            and how much support you want.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Planning Intensive
              </h3>
              <p className="text-sm text-gray-600 mb-3">From $1,250</p>
              <p className="text-sm text-gray-700 mb-4 flex-1">
                A deep-dive strategy session to map your budget, priorities, and
                planning order before you commit to major contracts.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Budget and guest count modeling</li>
                <li>Venue and region feasibility check</li>
                <li>Recommended planning timeline</li>
                <li>Clear next steps you can follow</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-amber-400 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Partial Planning & Coordination
              </h3>
              <p className="text-sm text-gray-600 mb-3">From $3,500</p>
              <p className="text-sm text-gray-700 mb-4 flex-1">
                For couples who have some pieces in place but want structured
                help pulling everything together and managing the wedding
                weekend.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Vendor and contract review</li>
                <li>Event flow and detailed timelines</li>
                <li>Rehearsal and wedding-day coordination</li>
                <li>Calm point of contact for families</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Full Planning
              </h3>
              <p className="text-sm text-gray-600 mb-3">From $6,500</p>
              <p className="text-sm text-gray-700 mb-4 flex-1">
                End-to-end planning for multi-day Indian or fusion weddings,
                including design, vendor team, and guest experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Venue and vendor sourcing</li>
                <li>Design direction and production partners</li>
                <li>Full timeline and logistics management</li>
                <li>On-site coordination for the full weekend</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Want help deciding what is realistic for your wedding?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            You do not need all the details figured out. You just need honest
            numbers, a calm planning partner, and a clear next step. That is
            what we will build together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Book a planning consult
            </a>
            <a
              href="/indian-wedding-mexico-cost-guide"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 border border-amber-600 hover:bg-amber-50 transition-colors"
            >
              See the Mexico cost guide
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
