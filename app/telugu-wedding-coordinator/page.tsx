import { Navigation, Footer } from "@/components"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Users, Calendar } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Telugu Wedding Coordinator | Traditional Pellikuthuru & Pelli Koduku Services | CeremonyVerse",
  description:
    "Expert Telugu wedding coordination for authentic South Indian ceremonies. Specializing in Pellikuthuru, Jeelakarra Bellam, and traditional Telugu wedding rituals. Serving Telugu families across USA.",
  keywords:
    "Telugu wedding coordinator, Telugu marriage ceremony, Pellikuthuru planning, Jeelakarra Bellam, Telugu wedding rituals, traditional Telugu wedding, Telugu wedding USA, Andhra wedding, Telangana wedding, South Indian wedding planner",
  openGraph: {
    title: "Telugu Wedding Coordinator | Traditional South Indian Ceremony Services",
    description:
      "Authentic Telugu wedding coordination with deep understanding of traditional rituals, customs, and cultural significance.",
    type: "website",
  },
}

export default function TeluguWeddingCoordinator() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-white via-background to-sage/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Telugu Wedding Specialists
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
                  <span className="text-[var(--primary)]">Traditional Telugu</span>
                  <br />
                  <span className="text-[var(--accent)]">Wedding Coordination</span>
                </h1>
                <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                  From Pellikuthuru to Mangala Snanam, we honor every sacred moment of your Telugu Kalyanam with
                  authentic rituals, traditional Kanjivaram silk, and cultural expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/start-planning">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-[var(--accent)] hover:bg-[var(--accent)] text-white"
                    >
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Link href="/quiz">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                      Take Wedding Style Quiz
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-charcoal/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>75+ Telugu Weddings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <span>Cultural Authenticity</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/telugu-bride-in-red-kanjivaram-silk-saree-with-tra.jpg"
                    alt="Telugu bride in traditional red Kanjivaram silk saree with elaborate gold jewelry for South Indian wedding"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Telugu Wedding Ceremonies */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Traditional Telugu Ceremonies</h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Every ritual planned with cultural precision and spiritual significance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pellikuthuru & Pelli Koduku",
                  description:
                    "Pre-wedding ceremonies where bride and groom are anointed with turmeric paste and oil, blessed by married women, and prepared for marriage.",
                  rituals: ["Turmeric and oil application", "Married women's blessings", "Traditional songs"],
                },
                {
                  title: "Mangala Snanam",
                  description:
                    "Sacred bath ceremony on the wedding morning where bride and groom bathe with holy water, turmeric, and sandalwood.",
                  rituals: ["Holy water bath", "Sandalwood paste", "Traditional attire preparation"],
                },
                {
                  title: "Ganesh Puja & Gauri Puja",
                  description:
                    "Invocation of Lord Ganesha and Goddess Gauri for blessings and removal of obstacles before the wedding ceremony.",
                  rituals: ["Ganesh idol worship", "Gauri puja by bride", "Priest-led mantras"],
                },
                {
                  title: "Kashi Yatra",
                  description:
                    "Groom pretends to renounce worldly life and go to Kashi. Bride's father convinces him to marry his daughter instead.",
                  rituals: ["Groom's mock departure", "Father's persuasion", "Symbolic umbrella and fan"],
                },
                {
                  title: "Jeelakarra Bellam & Mangalsutra",
                  description:
                    "Bride and groom place cumin-jaggery paste on each other's heads, followed by tying of the Mangalsutra (sacred thread).",
                  rituals: ["Cumin-jaggery ritual", "Mangalsutra tying", "Three knots ceremony"],
                },
                {
                  title: "Saptapadi & Talambralu",
                  description:
                    "Seven steps around the sacred fire followed by showering each other with rice mixed with turmeric.",
                  rituals: ["Seven sacred steps", "Fire ceremony", "Rice shower"],
                },
              ].map((ceremony, index) => (
                <div key={index} className="bg-background rounded-xl p-8 border border-charcoal/10">
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{ceremony.title}</h3>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">{ceremony.description}</p>
                  <ul className="space-y-2">
                    {ceremony.rituals.map((ritual, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-charcoal/60">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{ritual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us for Telugu Weddings */}
        <section className="py-20 px-6 bg-gradient-to-br from-sage/10 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Why Telugu Families Trust CeremonyVerse
              </h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Deep cultural understanding meets modern planning expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">Cultural Authenticity</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Our team includes Telugu cultural consultants who understand the nuances of traditional rituals, from
                  the correct way to drape a Kanjivaram saree to the proper sequence of Vedic mantras during the
                  ceremony.
                </p>
                <ul className="space-y-2">
                  {[
                    "Authentic Telugu priest coordination",
                    "Traditional Kanjivaram silk sourcing",
                    "Proper ritual timing and sequence",
                    "Andhra/Telangana cuisine expertise",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-charcoal/60">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">Complete Planning Support</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  From finding the perfect venue that can accommodate traditional Telugu setup to coordinating with
                  specialized vendors, we handle every detail of your multi-day celebration.
                </p>
                <ul className="space-y-2">
                  {[
                    "Muhurtham consultation for auspicious timing",
                    "Traditional mandap decoration",
                    "South Indian catering specialists",
                    "Photography capturing key moments",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-charcoal/60">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Scope Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-charcoal mb-4">
                Pricing & Scope for Telugu Wedding Coordination
              </h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                We work within your budget to honor every Telugu tradition authentically.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-charcoal/10 mb-8">
              <h3 className="text-2xl font-serif mb-4">Budget Flexibility</h3>
              <p className="text-charcoal/70 mb-6">
                Telugu weddings involve multiple pre-wedding rituals and sacred ceremonies. Your investment depends on
                the number of events, complexity of traditional rituals, and whether you're incorporating regional
                customs (Andhra vs. Telangana traditions).
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3">Minimum Included:</h4>
                  <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                    <li>Complete Pellikuthuru and wedding ceremony coordination</li>
                    <li>Priest coordination and ritual guidance</li>
                    <li>Vendor management and timeline coordination</li>
                    <li>Month-of coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">May Increase Depending On:</h4>
                  <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                    <li>Number of pre-wedding rituals (Mangala Snanam, Ganesh Puja, etc.)</li>
                    <li>Regional customization (Reddy, Kamma, Brahmin traditions)</li>
                    <li>Traditional Kanjivaram silk sourcing from India</li>
                    <li>Full mandap design and cultural decor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="bg-[var(--accent)] hover:bg-[var(--accent)] text-white">
                  View Full Pricing
                </Button>
              </Link>
              <Link href="/start-planning">
                <Button size="lg" variant="outline">
                  Start Planning
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-sage/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Ready to Plan Your Perfect Telugu Kalyanam?
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Let's create a celebration that honors your heritage and creates memories for generations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-planning">
                <Button size="lg" className="bg-[var(--accent)] hover:bg-[var(--accent)] text-white">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/vendors">
                <Button size="lg" variant="outline">
                  Browse Telugu Vendors
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
