import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Wedding in Mexico Cost Guide | CeremonyVerse",
  description:
    "A budget-first breakdown of what an Indian wedding in Mexico actually costs. Compare venue categories, guest counts, and vendor mixes to plan your celebration with clarity.",
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
          <p className="text-lg text-gray-700 mb-4">
            Planning an Indian wedding abroad comes with one burning question: what will this really cost? 
            Unlike domestic celebrations where vendors quote in familiar terms, destination weddings in Mexico 
            require a different kind of budget thinking.
          </p>
          <p className="text-lg text-gray-700">
            This guide breaks down real numbers, compares Mexico to US pricing, and helps you understand 
            where your money goesâso you can plan with confidence, not anxiety.
          </p>
        </div>
      </section>

      {/* Budget Ranges Table Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-4">
            Budget Ranges: Mexico vs US
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            These ranges reflect all-in costs including venue, catering, dÃ©cor, entertainment, 
            photography, and coordination. Travel and accommodation are separate.
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
                    80â120 guests
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $150,000 â $250,000
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $200,000 â $350,000
                  </td>
                </tr>
                <tr className="bg-amber-50/50 hover:bg-amber-50 transition-colors">
                  <td className="border border-amber-200 px-6 py-4 font-medium text-gray-900">
                    Classic
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    120â220 guests
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $250,000 â $450,000
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $350,000 â $600,000
                  </td>
                </tr>
                <tr className="bg-white hover:bg-amber-50 transition-colors">
                  <td className="border border-amber-200 px-6 py-4 font-medium text-gray-900">
                    Large
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    220â350+ guests
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $450,000 â $800,000+
                  </td>
                  <td className="border border-amber-200 px-6 py-4 text-gray-700">
                    $600,000 â $1,200,000+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Ranges based on 3-day celebrations with standard Indian wedding events (Sangeet, ceremony, reception)
          </p>
        </div>
      </section>

      {/* What Drives the Cost Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-4">
            What Drives the Cost
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Understanding these six factors helps you make informed trade-offs and prioritize what matters most to your celebration.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guest Count */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guest Count</h3>
              <p className="text-gray-600">
                The single biggest variable. Each guest adds F&B costs, seating, and often hotel room blocks. 
                A 50-guest difference can mean $50,000â$100,000 in total budget impact.
              </p>
            </div>

            {/* Number of Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Number of Events</h3>
              <p className="text-gray-600">
                Mehendi, Sangeet, Haldi, ceremony, receptionâeach event requires venue setup, catering, 
                and often unique dÃ©cor. A 2-day wedding costs significantly less than a 4-day celebration.
              </p>
            </div>

            {/* Resort Category */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resort Category</h3>
              <p className="text-gray-600">
                Luxury resorts (St. Regis, Four Seasons) vs. premium all-inclusives (Hyatt Ziva, Secrets) 
                can mean 2â3x difference in venue fees, F&B minimums, and service charges.
              </p>
            </div>

            {/* DÃ©cor & Production */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">DÃ©cor & Production</h3>
              <p className="text-gray-600">
                From elegant simplicity to over-the-top mandaps, floral installations, and lighting. 
                DÃ©cor alone can range from $30,000 to $200,000+ depending on your vision.
              </p>
            </div>

            {/* Vendor Mix */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor Mix</h3>
              <p className="text-gray-600">
                Flying in US-based photographers, DJs, or decorators adds travel costs and day rates. 
                Local Mexican vendors with Indian wedding experience offer quality at lower rates.
              </p>
            </div>

            {/* Season & Dates */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Season & Dates</h3>
              <p className="text-gray-600">
                Peak season (DecemberâApril) commands premium pricing. Summer and early fall offer 
                20â30% savings, though humidity and occasional rain require backup planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Budget Structure Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-4">
            Sample Budget Structure
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            For a classic 150-guest Indian wedding in Mexico ($350,000 total budget), 
            here&apos;s how costs typically distribute across categories.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Venues & Site Fees */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">15-20%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Venues & Site Fees</h3>
              <p className="text-sm text-gray-600">
                $52,500â$70,000. Includes ceremony site, reception space, Sangeet venue, and any buyout fees.
              </p>
            </div>

            {/* Food & Beverage */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">25-35%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Food & Beverage</h3>
              <p className="text-sm text-gray-600">
                $87,500â$122,500. All meals, welcome dinner, late-night snacks, bar service, and Indian catering.
              </p>
            </div>

            {/* DÃ©cor & Florals */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">12-18%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DÃ©cor & Florals</h3>
              <p className="text-sm text-gray-600">
                $42,000â$63,000. Mandap, stage design, centerpieces, lighting, and event-specific setups.
              </p>
            </div>

            {/* Entertainment */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">8-12%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entertainment</h3>
              <p className="text-sm text-gray-600">
                $28,000â$42,000. DJ, dhol players, live band, dancers, and any special performances.
              </p>
            </div>

            {/* Photo & Video */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">6-10%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo & Video</h3>
              <p className="text-sm text-gray-600">
                $21,000â$35,000. Lead photographers, second shooters, cinematography team, and drone coverage.
              </p>
            </div>

            {/* Travel & Logistics */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">5-8%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel & Logistics</h3>
              <p className="text-sm text-gray-600">
                $17,500â$28,000. Vendor flights and hotels, equipment shipping, guest transportation, and welcome bags.
              </p>
            </div>

            {/* Planning & Design */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">8-12%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning & Design</h3>
              <p className="text-sm text-gray-600">
                $28,000â$42,000. Destination wedding planner, design services, and on-site coordination.
              </p>
            </div>

            {/* Contingency */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">5-10%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contingency</h3>
              <p className="text-sm text-gray-600">
                $17,500â$35,000. Buffer for unexpected costs, last-minute additions, and currency fluctuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mexico Can Feel Cheaper Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-6">
            Why Mexico Can Feel Cheaper
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              On paper, a Mexico wedding might cost similar to a US celebration. But your money behaves 
              differently hereâand that&apos;s where the value emerges.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Built-in guest experience</h3>
                  <p className="text-gray-600">
                    Unlike US weddings where you rent empty venues, Mexico resorts include pools, beaches, 
                    spas, and restaurants. Your guests are entertained without extra entertainment costs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Natural beauty reduces dÃ©cor needs</h3>
                  <p className="text-gray-600">
                    Ocean backdrops, tropical gardens, and colonial architecture mean you&apos;re enhancing 
                    existing beauty rather than creating ambiance from scratch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Favorable labor economics</h3>
                  <p className="text-gray-600">
                    Skilled local vendorsâflorists, lighting technicians, serversâcost significantly less 
                    than US equivalents without sacrificing quality. Your dÃ©cor budget stretches further.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-semibold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Consolidated multi-day celebrations</h3>
                  <p className="text-gray-600">
                    Instead of renting three separate venues in the US, one resort hosts your entire 
                    wedding weekend. Setup efficiency translates to cost efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Ready to Build Your Budget?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every wedding is unique, and these numbers are starting points. Let&apos;s talk through your 
            specific vision and build a realistic budget that works for your celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
            >
              Start with a Budget Consult
            </a>
            <a
              href="/indian-destination-wedding-planner-mexico"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Learn More About Mexico Planning
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
