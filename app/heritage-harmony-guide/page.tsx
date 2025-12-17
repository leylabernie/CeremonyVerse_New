import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Phone, Calendar, Users, Video, Shield, Star } from "lucide-react"
import Footer from "@/components/footer"

export const metadata = {
  title: "Heritage & Harmony Plan - Indian & Multicultural Fusion Wedding Planning | CeremonyVerse",
  description:
    "Complete Indian and multicultural fusion wedding planning for US-based couples. From Gujarati to Tamil Christian ceremonies, we handle every detail with cultural expertise and verified suppliers.",
}

export default function HeritageHarmonyGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 px-6 py-2 rounded-full text-sm font-medium text-primary mb-6">
              Complete Service Guide
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Heritage & Harmony Plan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Indian & Multicultural Fusion Wedding Planning for US-Based Couples
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/book-consultation">Schedule Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+12153419990">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1-215-341-9990
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">Who This Is For</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              You're planning an Indian or Indian fusion wedding with multiple events, families in different time zones,
              and a lot of opinions to balance.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-4">Heritage & Harmony is for couples who:</h3>
                <ul className="space-y-3">
                  {[
                    "Are based in the USA (or Canada) with Indian roots",
                    "Are planning Gujarati, Tamil Christian, or Indian fusion celebrations",
                    "Want someone who understands both the cultural details and US venues, vendors, and logistics",
                    "Need help coordinating multiple events: mehndi, garba/sangeet, pithi/haldi, Hindu ceremony, church ceremony, reception, and more",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-lg text-foreground mb-4">Perfect if you need:</h3>
                <ul className="space-y-3">
                  {[
                    "A planner who speaks your family's language (literally and culturally)",
                    "Help navigating US wedding venues while honoring Indian traditions",
                    "Coordination for destination weddings in Mexico with Indian elements",
                    "Access to authentic outfits and ceremony items from India without traveling",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">What's Included</h2>

            <div className="space-y-8">
              {/* Planning & Coordination */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">Planning & Coordination</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Overall planning for all wedding events (US + Mexico where applicable)</li>
                      <li>• Vendor recommendations from our 3-tier verified list</li>
                      <li>• Timeline creation for each event (ceremony, reception, etc.)</li>
                      <li>• Weekly or bi-weekly planning check-ins (depending on timeline)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ceremony & Ritual Design */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-accent/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">Ceremony & Ritual Design</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Gujarati Hindu rituals (grah shanti, pithi/haldi, garba, mandap ceremony, vidaai)</li>
                      <li>• Tamil Christian weddings (church structure, manthrakodi, thali, Bible reading, music)</li>
                      <li>
                        • Fusion weddings where two cultures come together (Indian + American, Indian + Chinese, Indian
                        Hindu + South Indian Christian, etc.)
                      </li>
                      <li>• Guidance on how to explain rituals to non-Indian guests</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vendor Curation & Communication */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">Vendor Curation & Communication</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Shortlist of vetted vendors based on your style and budget</li>
                      <li>• Intro emails and group chats to make sure everyone has the same information</li>
                      <li>• Review of vendor proposals and timelines so there are no surprises</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Virtual Shopping & Sourcing from India */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-accent/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Video className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">Virtual Shopping & Sourcing from India</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Shopping wishlist and style consult for outfits, jewelry, and ceremony items</li>
                      <li>• Curated options from verified suppliers in India (photos, videos, prices)</li>
                      <li>
                        • You approve every item before it's ordered and fund purchases directly; we coordinate
                        measurements, production, and shipping
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Wedding Weekend Management */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">Wedding Weekend Management</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Detailed run-of-show for each day and event</li>
                      <li>• Coordination of vendors, family, and wedding party on the day</li>
                      <li>• On-site presence or trusted coordination team (depending on your package and location)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">How It Works</h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  description:
                    "We learn about your story, families, rituals, locations, and priorities in a free consultation.",
                },
                {
                  step: "2",
                  title: "Custom Proposal",
                  description: "You receive a tailored proposal based on your events, locations, and support level.",
                },
                {
                  step: "3",
                  title: "Booking & Onboarding",
                  description:
                    "Once you sign and pay the retainer, we set up your planning portal, shared timeline, and first planning session.",
                },
                {
                  step: "4",
                  title: "Design & Vendor Phase",
                  description:
                    "We clarify your event vision and lock in key vendors (venue, photographer, decor, catering, music).",
                },
                {
                  step: "5",
                  title: "Shopping & Ceremony Details",
                  description: "We help with outfits, jewelry, ceremony items, and detailed ritual planning.",
                },
                {
                  step: "6",
                  title: "Final Timeline & Logistics",
                  description:
                    "We confirm all details with vendors, venue, and family, and share final versions of timelines and contact sheets.",
                },
                {
                  step: "7",
                  title: "Wedding Week/Weekend",
                  description:
                    "We oversee timelines, manage vendors, and support your families so you can actually enjoy your events.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">Investment</h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-primary/20">
              <p className="text-lg text-muted-foreground mb-6">
                Heritage & Harmony is a premium multi-day planning service.
              </p>
              <p className="text-xl text-foreground mb-8">
                Most Heritage & Harmony couples invest from <strong className="text-primary">$15,000 and up</strong>,
                depending on:
              </p>
              <ul className="space-y-3 mb-8">
                {["Guest count", "Number of events", "Locations (single city vs. multi-city or Mexico)"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <p className="text-muted-foreground mb-8">
                During your consultation, we'll walk through your needs and then send a detailed proposal so you know
                exactly what's included.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/book-consultation">Get Your Custom Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CeremonyVerse */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Why CeremonyVerse</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-3">Indian & Fusion Focus</h3>
                <p className="text-muted-foreground">
                  We specialize in Gujarati, Tamil Christian, and multicultural fusion weddings, not generic "South
                  Asian" events.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-lg text-foreground mb-3">India Without the Flight</h3>
                <p className="text-muted-foreground">
                  We help you source outfits, jewelry, and ceremony items from India in a structured way, without you
                  taking long, risky trips.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-lg text-foreground mb-3">Mexico Resort Experience</h3>
                <p className="text-muted-foreground">
                  For destination weddings in Mexico, we partner with a trusted on-the-ground coordinator and travel
                  advisors to design Indian and fusion celebrations that work with resort rules and timelines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-lg text-foreground mb-3">Family & Culture Aware</h3>
                <p className="text-muted-foreground">
                  We understand how important elders, language, and traditions are—and how to balance that with your
                  modern style and busy lives in the US.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Schedule your free consultation today and let's create your perfect fusion celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
              <Link href="/book-consultation">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <a href="tel:+12153419990">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
