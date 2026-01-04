import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Wedding Coordinator Riviera Maya | CeremonyVerse",
  description:
    "Planning and coordination support for Indian and South Asian weddings in Riviera Maya. Budget-first, culturally fluent, and designed for multi-day destination celebrations.",
};

export default function RivieraMayaIndianWeddingCoordinatorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-amber-700 mb-3 uppercase">
            RIVIERA MAYA • PLAYA DEL CARMEN • PUERTO MORELOS
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5">
            Indian wedding coordinator in Riviera Maya, Mexico
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Riviera Maya gives you the best of both worlds: resort properties
            that understand large destination weddings, and a coastline that
            still feels relaxed and scenic for your guests.
          </p>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
            My job is to turn a complex, multi-day Indian or South Asian wedding
            into a clear plan for this region, with realistic numbers and an
            event flow that works for both families.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Start a Riviera Maya consult
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

      {/* Why Riviera Maya */}
      <section className="py-16 px-4 bg-white border-t border-b border-amber-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Why plan your Indian wedding in Riviera Maya
          </h2>
          <p className="text-gray-700 mb-6">
            Compared with a typical US metro wedding, Riviera Maya can offer
            better venue flexibility, strong all inclusive options, and spaces
            that actually work for multi event Indian weddings.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What couples like about this region
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Resorts with multiple indoor and outdoor event spaces</li>
                <li>Settings that feel calmer than hotel zone Cancun</li>
                <li>Guest experience that feels like a true getaway</li>
                <li>Easy access from Cancun airport with group transfers</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Support for Indian and South Asian rituals
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Options for Mandap, Baarat, and Sangeet friendly spaces</li>
                <li>Experience with Hindu, Sikh, Jain, and fusion timelines</li>
                <li>Flexibility for vegetarian and special dietary menus</li>
                <li>Vendors familiar with multi day wedding structures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How I help in Riviera Maya */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            What coordination support looks like in this region
          </h2>
          <p className="text-gray-700 mb-6">
            This is for couples who want a planner who understands both Indian
            wedding complexity and Riviera Maya realities, not just a generic
            on site coordinator.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Planning and design support
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Budget and guest count planning for Riviera Maya resorts</li>
                <li>Event flow: which events belong where and when</li>
                <li>
                  Vendor mix: which roles to source locally vs fly in from the
                  US
                </li>
                <li>Decor and production guidance that matches your numbers</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                On the ground coordination
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Timeline management across all events and spaces</li>
                <li>Family and wedding party communication support</li>
                <li>
                  Coordination between resort team and outside vendors each day
                </li>
                <li>
                  Quiet problem solving so you and your guests can actually
                  enjoy the weekend
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
            Not sure if Riviera Maya is the right zone yet?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            You might be comparing Cancun, Riviera Maya, and Los Cabos. Our
            first step is a calm, honest conversation about budget, guest
            locations, and what kind of weekend you actually want to host.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Book a Riviera Maya consult
            </a>
            <a
              href="/indian-destination-wedding-planner-mexico"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-amber-700 border border-amber-600 hover:bg-amber-50 transition-colors"
            >
              See Mexico wide planning overview
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
