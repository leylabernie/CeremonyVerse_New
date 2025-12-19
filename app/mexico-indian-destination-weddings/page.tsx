import { Button } from "@/components/ui/button"
import { Check, MapPin, Users, Calendar, Heart, Sparkles, Palmtree } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Destination Wedding Planner Mexico | Cancún, Cabo & Riviera Maya – CeremonyVerse",
  description:
    "Expert Indian destination wedding planning for Mexico beach resorts. Cancún, Riviera Maya, Los Cabos, Puerto Vallarta. Hindu ceremonies, Gujarati weddings, and fusion celebrations with cultural authenticity. We coordinate ceremonies while travel advisors handle resort contracts.",
  keywords:
    "Indian destination wedding Mexico, Indian wedding planner Cancún, Hindu wedding resort Mexico, Gujarati wedding Riviera Maya, destination wedding planner Mexico beach, Indian wedding Los Cabos, fusion wedding Mexico resort, Tamil Christian destination wedding Mexico",
  openGraph: {
    title: "Indian Destination Wedding Planner Mexico | CeremonyVerse",
    description:
      "Plan your dream Indian destination wedding at Mexico beach resorts with expert cultural ceremony coordination",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/mexico-indian-destination-weddings",
  },
}

export default function MexicoDestinationWeddingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Palmtree className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Destination Wedding Experts</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                Indian Destination Weddings in <span className="text-primary">Mexico</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Celebrate your Indian or fusion wedding at a stunning Mexico resort with authentic cultural ceremonies,
                guest coordination, and professional event planning—while licensed travel advisors handle resort
                contracts and room bookings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/forms/mexico-pre-consult">Start Mexico Pre-Consult</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/book-consultation">Schedule Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/luxury-mexico-beach-resort-wedding-setup-ocean-vie.jpg"
                alt="Indian destination wedding at luxury Mexico beach resort in Cancún with ocean views and mandap setup"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Who Is This For?</h2>
            <p className="text-xl text-foreground/70">
              Indian and fusion couples looking for a resort destination wedding
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Indian & Fusion Couples",
                description:
                  "Hindu, Gujarati, Tamil Christian, or multicultural fusion couples who want authentic ceremonies at a resort",
              },
              {
                icon: Users,
                title: "US/Canada Based Families",
                description:
                  "Families who prefer Mexico over India for travel convenience, shorter flights, and resort amenities",
              },
              {
                icon: MapPin,
                title: "50-150 Guest Weddings",
                description: "Mid-size celebrations that need both cultural authenticity and professional coordination",
              },
              {
                icon: Sparkles,
                title: "Multi-Day Celebrations",
                description: "Mehndi, sangeet, baraat, ceremony, and reception over 3-4 days at one resort location",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">How CeremonyVerse Helps</h2>
            <p className="text-lg text-foreground/70 mb-6">
              We handle the cultural, ceremonial, and coordination aspects of your Mexico wedding
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 mb-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              CeremonyVerse's Responsibilities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Cultural ceremony planning (Hindu, fusion, Tamil Christian)",
                "Vendor coordination (pandit, decorator, DJ, photographer)",
                "Event timeline and day-of coordination",
                "Guest communication and logistics support",
                "Mehndi, sangeet, and pre-wedding event planning",
                "Decor, music, and entertainment that reflects your culture",
                "Family and cultural consultation throughout",
                "Liaison between you, vendors, and resort staff",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              Travel Advisor's Responsibilities
            </h3>
            <p className="text-center text-foreground/70 mb-6">
              We partner with licensed travel advisors who handle the resort and travel logistics
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Resort selection and site visits",
                "Room block management and pricing",
                "Free-room credits and resort perks negotiation",
                "Guest room bookings and travel arrangements",
                "Resort contract review and legal compliance",
                "Group air travel coordination (if needed)",
                "Resort amenity coordination (spa, excursions, etc.)",
                "Payment collection for rooms and resort services",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Popular Mexico Destinations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Cancún & Riviera Maya",
                description:
                  "Most popular for Indian weddings. All-inclusive resorts, easy flights, beautiful beaches, proven Indian wedding venues.",
              },
              {
                name: "Los Cabos",
                description:
                  "Luxury resort options with stunning desert-meets-ocean views. Great for smaller, upscale celebrations.",
              },
              {
                name: "Puerto Vallarta",
                description:
                  "Charming coastal town with boutique resorts and cultural authenticity. Perfect for intimate gatherings.",
              },
              {
                name: "Playa del Carmen",
                description:
                  "Trendy beach destination with boutique hotels and easy access to Mayan ruins and cenotes.",
              },
            ].map((destination, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{destination.name}</h3>
                <p className="text-foreground/70">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Sample 3-Night Wedding Timeline</h2>
          </div>
          <div className="space-y-6">
            {[
              { day: "Thursday Evening", events: "Guest arrival, welcome dinner (optional)" },
              { day: "Friday", events: "Mehndi ceremony (afternoon) + Sangeet (evening)" },
              { day: "Saturday", events: "Wedding ceremony (morning/afternoon) + Reception (evening)" },
              { day: "Sunday Morning", events: "Farewell brunch, guest checkout" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 flex gap-6 items-center">
                <Calendar className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{item.day}</h3>
                  <p className="text-foreground/70">{item.events}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Ceremony Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">
              Legal vs. Symbolic Ceremonies in Mexico
            </h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                <strong className="text-foreground">Legal Marriage:</strong> You can legally marry in Mexico, but it
                requires specific documents (birth certificates, passports, blood tests) and a civil ceremony with a
                local judge. Many couples find this process complex.
              </p>
              <p>
                <strong className="text-foreground">Symbolic Ceremony:</strong> Most couples choose to legally marry in
                the US (courthouse or small ceremony) before or after the Mexico celebration, then have a symbolic
                Hindu/fusion ceremony at the resort with a pandit or officiant.
              </p>
              <p className="text-center font-semibold text-foreground pt-4">
                We'll help you decide which option works best for your situation and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your Mexico Destination Wedding?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Start with our Mexico Pre-Consult Form to share your vision, timeline, and questions. We'll connect you with
            our trusted travel partners and begin planning your perfect celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/forms/mexico-pre-consult">Complete Pre-Consult Form</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/book-consultation">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
