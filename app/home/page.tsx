import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home | CeremonyVerse - Personalized Wedding Planning",
  description: "Your Heritage, Your Harmony - Personalized wedding planning services that honor your cultural traditions while creating a seamless celebration.",
  openGraph: {
    title: "Home | CeremonyVerse - Personalized Wedding Planning",
    description: "Your Heritage, Your Harmony - Personalized wedding planning services that honor your cultural traditions while creating a seamless celebration.",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cvInk leading-tight mb-6">
            Your Heritage, Your Harmony
          </h1>
          <p className="text-lg md:text-xl text-cvInk/80 max-w-2xl mx-auto mb-8">
            Personalized wedding planning services that honor your cultural traditions 
            while creating a seamless, unforgettable celebration.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-cvAccent text-white font-medium rounded-sm hover:bg-cvAccentHover transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6 lg:px-8 bg-warm-beige/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-cvInk text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-serif text-xl text-cvInk mb-4">Cultural Wedding Planning</h3>
              <p className="text-cvInk/70">
                We specialize in blending cultural traditions with modern elegance, 
                ensuring every detail reflects your heritage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-serif text-xl text-cvInk mb-4">Full-Service Coordination</h3>
              <p className="text-cvInk/70">
                From venue selection to day-of coordination, we handle every aspect 
                of your celebration with care and precision.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-serif text-xl text-cvInk mb-4">Vendor Management</h3>
              <p className="text-cvInk/70">
                Our curated network of trusted vendors ensures quality and reliability 
                for every element of your wedding.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-serif text-xl text-cvInk mb-4">Design & Styling</h3>
              <p className="text-cvInk/70">
                We create cohesive visual experiences that tell your unique love story 
                through thoughtful design elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Planning CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cvInk mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-lg text-cvInk/80 mb-8">
            Let us help you create a wedding that celebrates your love and honors your traditions. 
            Schedule a consultation to begin your journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-cvAccent text-white font-medium rounded-sm hover:bg-cvAccentHover transition-colors"
          >
            Start Planning Your Wedding
          </Link>
        </div>
      </section>
    </main>
  )
}
