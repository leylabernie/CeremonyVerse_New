import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding Outfit Coordination Tool | CeremonyVerse",
  description:
    "Coordinate outfits for your entire wedding party across multiple events. Plan colors, styles, and themes for Mehendi, Sangeet, ceremony, and reception.",
  keywords:
    "wedding outfit coordination, Indian wedding outfits, bridal party coordination, wedding color scheme, fusion wedding attire",
}

export default function OutfitCoordinator() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Wedding Outfit Coordination Tool</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Plan and coordinate outfits for your entire wedding party across multiple events
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-br from-primary/10 to-sage/10 rounded-2xl p-12 text-center mb-12 border border-primary/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Interactive Tool Coming Soon</h2>
            <p className="text-charcoal/80 leading-relaxed mb-8">
              We're building an advanced outfit coordination tool that will help you plan colors, styles, and themes for
              your entire wedding party across all events. In the meantime, schedule a consultation with our team for
              personalized outfit coordination assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white text-charcoal border-2 border-charcoal px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors font-semibold"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Preview of Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Multi-Event Planning</h3>
            <p className="text-charcoal/70 text-sm">
              Coordinate outfits across Mehendi, Sangeet, Haldi, ceremony, and reception events
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Color Palette Generator</h3>
            <p className="text-charcoal/70 text-sm">
              Create harmonious color schemes that work across all events and complement your venue
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Family Coordination</h3>
            <p className="text-charcoal/70 text-sm">
              Ensure parents, siblings, and extended family outfits complement the bridal party
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Style Recommendations</h3>
            <p className="text-charcoal/70 text-sm">
              Get suggestions for traditional vs. modern styles based on your wedding theme
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Budget Tracking</h3>
            <p className="text-charcoal/70 text-sm">
              Track outfit costs for the entire wedding party and stay within budget
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10">
            <h3 className="font-serif text-xl text-charcoal mb-3">Vendor Connections</h3>
            <p className="text-charcoal/70 text-sm">
              Connect with verified suppliers who can create coordinated outfits for your party
            </p>
          </div>
        </div>

        {/* Manual Coordination Guide */}
        <div className="bg-white rounded-2xl p-8 border border-charcoal/10">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Outfit Coordination Best Practices</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">1. Start with the Bride & Groom</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Your outfits set the tone for everyone else. Choose your colors and styles first, then build the wedding
                party coordination around them.
              </p>
              <ul className="list-disc pl-6 text-charcoal/70 space-y-2">
                <li>Bride's lehenga colors become the primary palette</li>
                <li>Groom's sherwani should complement (not match exactly)</li>
                <li>Consider how outfits photograph together</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">2. Create a Color Story</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Choose 3-5 colors that will be used across all events. This creates visual cohesion in photos.
              </p>
              <ul className="list-disc pl-6 text-charcoal/70 space-y-2">
                <li>Primary color: Featured in bride's main outfit</li>
                <li>Secondary colors: Used for bridesmaids and family</li>
                <li>Accent colors: For accessories and groomsmen</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">3. Coordinate by Event</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">Each event has its own vibe and color scheme:</p>
              <ul className="list-disc pl-6 text-charcoal/70 space-y-2">
                <li>
                  <strong>Mehendi:</strong> Bright, vibrant colors (yellows, greens, oranges)
                </li>
                <li>
                  <strong>Sangeet:</strong> Bold, festive colors (reds, purples, blues)
                </li>
                <li>
                  <strong>Haldi:</strong> Traditional yellows and whites
                </li>
                <li>
                  <strong>Ceremony:</strong> Traditional reds, maroons, or cultural colors
                </li>
                <li>
                  <strong>Reception:</strong> Elegant, sophisticated tones (pastels, jewel tones)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">4. Balance Traditional & Modern</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                For fusion weddings, mix traditional Indian outfits with modern Western styles:
              </p>
              <ul className="list-disc pl-6 text-charcoal/70 space-y-2">
                <li>Bridesmaids in coordinated lehengas or sarees</li>
                <li>Groomsmen in matching sherwanis or Indo-Western suits</li>
                <li>Parents in traditional attire that complements the color scheme</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
