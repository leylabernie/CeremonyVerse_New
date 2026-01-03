import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Destination Wedding Planner Mexico | CeremonyVerse",
  description:
    "Plan your dream Indian destination wedding in Mexico with our budget-first approach. Expert planners for Hindu, Sikh, and multicultural ceremonies across Cancun, Riviera Maya, and Los Cabos.",
};

export default function MexicoDestinationWeddingPage() {
  return (
    <main className="py-16 sm:py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Indian destination wedding planning in Mexico
        </h1>
        <p className="mt-4 text-base leading-relaxed">
  Want real numbers before you decide?{" "}
  <a
    href="/indian-wedding-mexico-cost-guide"
    className="underline underline-offset-4"
  >
    See the Indian wedding in Mexico cost guide
  </a>{" "}
  for typical budget ranges and sample breakdowns.
</p>
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Mexico offers the perfect blend of stunning venues, warm hospitality, and
          affordability for your Indian destination wedding. From beachfront mandaps to
          luxury resort celebrations, we help you create an unforgettable multi-day
          experience within your budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Start planning
          </a>
          <a
            href="/mexico-wedding-cost-guide"
            className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
          >
            View Mexico cost guide
          </a>
        </div>
      </section>

      {/* Why Mexico Works Section */}
      <section className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Why Mexico works</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-600">
          <p>
            Mexico has emerged as one of the most popular destinations for Indian weddings
            outside of India. With direct flights from major US and Canadian cities, no visa
            requirements for many nationalities, and a favorable exchange rate, it offers
            exceptional value without compromising on luxury or experience.
          </p>
          <p>
            The country&apos;s world-class resorts are increasingly experienced in hosting
            elaborate Indian celebrations, from Sangeet nights to Baraat processions. Many
            venues offer dedicated Indian wedding packages with experienced culinary teams
            who understand the nuances of regional cuisines, vegetarian requirements, and
            multi-day event logistics.
          </p>
        </div>
      </section>

      {/* Cultural Expertise Section */}
      <section className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cultural expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Hindu ceremonies</h3>
            <p className="text-gray-600">
              Traditional Hindu wedding rituals including Haldi, Mehndi, Sangeet, and the
              main wedding ceremony with proper mandap setup and fire rituals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Sikh & Anand Karaj</h3>
            <p className="text-gray-600">
              Respectful Anand Karaj ceremonies with proper setup for the Guru Granth Sahib,
              coordination with Granthis, and traditional Sikh wedding customs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Gujarati & Punjabi</h3>
            <p className="text-gray-600">
              Vibrant celebrations honoring Gujarati and Punjabi traditions, from Garba
              nights to energetic Bhangra performances and regional customs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">South Indian</h3>
            <p className="text-gray-600">
              Elegant South Indian ceremonies including Tamil, Telugu, Kannada, and
              Malayalam traditions with authentic rituals and cultural elements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Fusion & interfaith</h3>
            <p className="text-gray-600">
              Thoughtfully blended ceremonies that honor multiple traditions, creating
              meaningful celebrations for interfaith and multicultural couples.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Guest experience</h3>
            <p className="text-gray-600">
              Comprehensive guest management including welcome bags, transportation,
              activities, and ensuring all dietary and accessibility needs are met.
            </p>
          </div>
        </div>
      </section>

      {/* Mexico Resort Regions Section */}
      <section className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Mexico resort regions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Cancun</h3>
            <p className="text-sm text-gray-600">
              World-famous beaches with excellent resort infrastructure and easy
              accessibility for international guests.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Riviera Maya</h3>
            <p className="text-sm text-gray-600">
              Stunning Caribbean coastline with luxury all-inclusive resorts perfect for
              multi-day Indian celebrations.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Los Cabos</h3>
            <p className="text-sm text-gray-600">
              Dramatic desert-meets-ocean landscapes on the Pacific side, ideal for intimate
              luxury weddings.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Tulum & Playa del Carmen</h3>
            <p className="text-sm text-gray-600">
              Bohemian charm with ancient Mayan ruins backdrop, perfect for couples seeking
              unique, Instagram-worthy venues.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Puerto Vallarta</h3>
            <p className="text-sm text-gray-600">
              Charming Pacific coast town with beautiful sunsets, colonial architecture, and
              warm Mexican hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* How Our Process Works Section */}
      <section className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">How our process works</h2>
        <div className="max-w-3xl mx-auto">
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                1
              </span>
              <div>
                <h3 className="font-semibold mb-1">Discovery consultation</h3>
                <p className="text-gray-600">
                  We learn about your vision, guest count, cultural requirements, and budget
                  to understand exactly what you&apos;re looking for.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                2
              </span>
              <div>
                <h3 className="font-semibold mb-1">Venue research & proposals</h3>
                <p className="text-gray-600">
                  We present curated venue options across Mexico that match your criteria,
                  complete with pricing breakdowns and availability.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                3
              </span>
              <div>
                <h3 className="font-semibold mb-1">Site visits & vendor selection</h3>
                <p className="text-gray-600">
                  Optional site visits to shortlisted venues, followed by connecting you
                  with trusted local vendors experienced in Indian weddings.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                4
              </span>
              <div>
                <h3 className="font-semibold mb-1">Detailed planning & coordination</h3>
                <p className="text-gray-600">
                  Comprehensive timeline creation, vendor management, guest logistics, and
                  all the details that make your celebration seamless.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                5
              </span>
              <div>
                <h3 className="font-semibold mb-1">On-site execution</h3>
                <p className="text-gray-600">
                  Our team is present throughout your wedding events to ensure every
                  ceremony, meal, and moment unfolds perfectly.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to plan your Mexico wedding?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you&apos;re just starting to explore the idea or ready to book your
            venue, we&apos;re here to help make your Indian destination wedding in Mexico
            a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Schedule a consultation
            </a>
            <a
              href="/mexico-wedding-cost-guide"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
            >
              View cost guide
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
