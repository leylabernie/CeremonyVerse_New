import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Destination Wedding Planner in Mexico | CeremonyVerse",
  description:
    "Planning-focused support for Indian and South Asian destination weddings in Mexico. Budget-first strategy, realistic cost guidance, and culturally fluent coordination.",
};

export default function MexicoDestinationWeddingPlannerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-amber-700 mb-3 uppercase">
            INDIAN & SOUTH ASIAN DESTINATION WEDDINGS
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Indian destination wedding planning in Mexico
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Mexico offers the perfect blend of stunning venues, warm
            hospitality, and better budget efficiency than many US metro
            markets—without asking you to compromise on rituals or guest
            experience.
          </p>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
            My role is to help you translate your guest count, wish list, and
            family expectations into a realistic Mexico plan—events, venues,
            vendors, and logistics that actually fit your numbers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Start with a planning consult
            </a>
            <a
              href="/indian-wedding-mexico-cost-guide"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 bg-white border-2 border-amber-600 hover:bg-amber-50 transition-colors"
            >
              See the Mexico cost guide
            </a>
          </div>
        </div>
      </section>

      {/* Popular Regions & Focus Section */}
      <section className="py-16 px-4 bg-white border-t border-b border-amber-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Where I help couples plan in Mexico
          </h2>
          <p className="text-gray-600 mb-8">
            I focus on resort areas that are already set up for multi-day Indian
            and South Asian weddings—with reliable venues, experienced vendors,
            and accessible travel for US-based families.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Popular regions
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Cancun & Riviera Maya</li>
                <li>Playa del Carmen & Puerto Morelos</li>
                <li>Tulum (resort zones)</li>
                <li>Los Cabos</li>
                <li>Puerto Vallarta & Nuevo Vallarta</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ceremony types
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Hindu, Sikh, Jain, and Muslim ceremonies</li>
                <li>Fusion and interfaith weddings</li>
                <li>Multiple-ceremony weekends (e.g., Hindu + Christian)</li>
                <li>Smaller legal or civil ceremonies when needed</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            If you&apos;re still deciding between multiple regions—or between
            Mexico and a US city—our first step is a budget and feasibility
            comparison so you&apos;re not guessing.
          </p>
        </div>
      </section>

      {/* Planning Approach Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            A planning process built around your numbers
          </h2>
          <p className="text-gray-600 mb-8">
            I don&apos;t start with moodboards; I start with structure. Once we
            know what&apos;s realistic, the creative decisions become much less
            stressful—for you and for your families.
          </p>

          <ol className="space-y-6 text-gray-700">
            <li className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">
                1. Budget-first intake
              </h3>
              <p>
                We map your guest list, ideal dates, and non-negotiable
                traditions, then outline a Mexico budget range that reflects
                real F&amp;B, room block, and vendor costs—not generic averages.
              </p>
            </li>
            <li className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">
                2. Region &amp; resort shortlisting
              </h3>
              <p>
                Based on your budget and priorities, we narrow down destination
                zones and specific properties that make sense for your group
                size, events, and travel patterns.
              </p>
            </li>
            <li className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">
                3. Event &amp; vendor architecture
              </h3>
              <p>
                We design the weekend structure—how many events, where they
                live, and which vendors are local vs traveling—so you have a
                clear framework before you approve any big line items.
              </p>
            </li>
            <li className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">
                4. Detailed design &amp; guest experience
              </h3>
              <p>
                Once the foundation is solid, we design decor, timelines, and
                guest touchpoints that feel personal, culturally fluent, and
                logistically calm.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Not sure if Mexico fits your budget yet?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            You don&apos;t need a venue picked out to start planning. You just
            need honest numbers and a clear comparison to your other options.
            That&apos;s what we build together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Book a Mexico planning consult
            </a>
            <a
              href="/indian-wedding-mexico-cost-guide"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 border border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Read the full cost guide
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
