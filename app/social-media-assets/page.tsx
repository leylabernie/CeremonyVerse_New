import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Social Media Assets | CeremonyVerse",
  description: "Download social media graphics for CeremonyVerse launch announcement",
}

export default function SocialMediaAssetsPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">Social Media Assets</h1>
        <p className="text-center text-muted-foreground mb-12 font-sans">
          Right-click and save these images for your launch announcement
        </p>

        {/* Facebook Post - 1200x630 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-4">Facebook Post (1200x630)</h2>
          <div
            className="relative overflow-hidden bg-[#FAF8F5]"
            style={{ width: "100%", maxWidth: "1200px", aspectRatio: "1200/630" }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(139, 21, 56, 0.1) 0%, transparent 40%),
                linear-gradient(135deg, #FAF8F5 0%, #E8DFD6 100%)
              `,
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-between px-16 py-12">
              {/* Left Content */}
              <div className="flex-1 max-w-[55%]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#8B1538] rounded-full flex items-center justify-center">
                    <span className="text-white font-serif text-xl">CV</span>
                  </div>
                  <span className="font-serif text-2xl text-[#8B1538]">CeremonyVerse</span>
                </div>

                <h2 className="font-serif text-5xl md:text-6xl text-[#2D2926] mb-4 leading-tight">
                  We Are <span className="text-[#8B1538]">Live!</span>
                </h2>

                <p className="font-sans text-xl text-[#5A5550] mb-6">Your Heritage. Your Harmony.</p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#8B1538]/10 text-[#8B1538] font-sans text-sm rounded-full">
                    Indian-American Weddings
                  </span>
                  <span className="px-4 py-2 bg-[#134E4A]/10 text-[#134E4A] font-sans text-sm rounded-full">
                    Free Planning Tools
                  </span>
                </div>
              </div>

              {/* Right Decorative Element */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-full opacity-30" />
                  <div className="absolute inset-4 border-2 border-[#8B1538] rounded-full opacity-40" />
                  <div className="absolute inset-8 border-2 border-[#D4AF37] rounded-full opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl text-[#D4AF37]">✦</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B1538] via-[#D4AF37] to-[#134E4A]" />
          </div>
        </section>

        {/* Instagram Post - 1080x1080 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-4">Instagram Post (1080x1080)</h2>
          <div
            className="relative overflow-hidden bg-[#FAF8F5]"
            style={{ width: "100%", maxWidth: "540px", aspectRatio: "1/1" }}
          >
            {/* Background */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, #FAF8F5 0%, #E8DFD6 100%)`,
              }}
            />

            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4AF37]/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#8B1538]/10 translate-y-1/2 -translate-x-1/2" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              {/* Logo */}
              <div className="w-20 h-20 bg-[#8B1538] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white font-serif text-3xl">CV</span>
              </div>

              <p className="font-sans text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Now Live</p>

              <h2 className="font-serif text-5xl text-[#2D2926] mb-2">CeremonyVerse</h2>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />

              <p className="font-serif text-2xl text-[#8B1538] italic mb-6">Your Heritage. Your Harmony.</p>

              <p className="font-sans text-[#5A5550] mb-8 max-w-xs">
                Indian-American Fusion Wedding Planning with Secure Payment Processing
              </p>

              {/* Features */}
              <div className="flex flex-col gap-2 text-sm font-sans text-[#5A5550]">
                <span>✦ Cultural Expertise</span>
                <span>✦ Virtual Shopping from India</span>
                <span>✦ Free Planning Tools</span>
              </div>

              {/* Website */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="font-sans text-[#8B1538] font-medium">ceremonyverse.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Story - 1080x1920 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-4">Instagram Story (1080x1920)</h2>
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "270px",
              aspectRatio: "9/16",
              background: "linear-gradient(180deg, #8B1538 0%, #6B1F3D 50%, #134E4A 100%)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 border border-[#D4AF37]/30 rounded-full" />
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 border border-[#D4AF37]/20 rounded-full" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Logo */}
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-8 border border-[#D4AF37]/50">
                <span className="text-white font-serif text-2xl">CV</span>
              </div>

              <p className="font-sans text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">Announcing</p>

              <h2 className="font-serif text-4xl text-white mb-2">We're</h2>
              <h2 className="font-serif text-5xl text-[#D4AF37] mb-6">Live!</h2>

              <div className="w-16 h-0.5 bg-[#D4AF37]/50 mb-6" />

              <p className="font-serif text-xl text-white/90 italic mb-8">
                Your Heritage.
                <br />
                Your Harmony.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-3 text-sm font-sans text-white/80 mb-8">
                <span>Indian-American Weddings</span>
                <span>Secure Payment Processing</span>
                <span>Free Planning Tools</span>
              </div>

              {/* CTA */}
              <div className="mt-auto mb-8">
                <div className="px-6 py-3 bg-white/10 backdrop-blur border border-[#D4AF37]/50 rounded-full">
                  <span className="font-sans text-white text-sm">Swipe Up to Plan</span>
                </div>
              </div>

              <span className="font-sans text-[#D4AF37] text-sm">ceremonyverse.com</span>
            </div>
          </div>
        </section>

        {/* Twitter/X Post - 1200x675 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-4">Twitter/X Post (1200x675)</h2>
          <div
            className="relative overflow-hidden bg-[#2D2926]"
            style={{ width: "100%", maxWidth: "1200px", aspectRatio: "1200/675" }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                radial-gradient(circle at 20% 50%, rgba(139, 21, 56, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 50%),
                linear-gradient(135deg, #2D2926 0%, #1A1816 100%)
              `,
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-16">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <span className="text-[#2D2926] font-serif text-lg font-bold">CV</span>
                  </div>
                  <span className="font-sans text-white/60 text-sm">@ceremonyverse</span>
                </div>

                <h2 className="font-serif text-5xl text-white mb-3">
                  We're <span className="text-[#D4AF37]">Live!</span>
                </h2>

                <p className="font-sans text-xl text-white/80 mb-6">
                  Indian-American fusion wedding planning.
                  <br />
                  Your heritage. Your harmony.
                </p>

                <div className="flex gap-4 text-sm font-sans">
                  <span className="text-[#D4AF37]">✓ Cultural Expertise</span>
                  <span className="text-[#D4AF37]">✓ Secure Payment Processing</span>
                  <span className="text-[#D4AF37]">✓ Free Tools</span>
                </div>
              </div>

              {/* Right side decorative */}
              <div className="flex-shrink-0 opacity-30">
                <div className="text-[200px] font-serif text-[#D4AF37] leading-none">✦</div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1538] via-[#D4AF37] to-[#8B1538]" />
          </div>
        </section>

        {/* LinkedIn Post - 1200x627 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-4">LinkedIn Post (1200x627)</h2>
          <div
            className="relative overflow-hidden bg-white"
            style={{ width: "100%", maxWidth: "1200px", aspectRatio: "1200/627" }}
          >
            {/* Left colored section */}
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#8B1538]" />

            {/* Content */}
            <div className="relative z-10 h-full flex">
              {/* Left */}
              <div className="w-1/3 flex flex-col items-center justify-center p-8 text-white">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 border-2 border-[#D4AF37]">
                  <span className="font-serif text-3xl">CV</span>
                </div>
                <h3 className="font-serif text-2xl text-center">CeremonyVerse</h3>
                <p className="font-sans text-sm text-white/70 mt-2">Est. 2025</p>
              </div>

              {/* Right */}
              <div className="w-2/3 flex flex-col justify-center p-12 bg-[#FAF8F5]">
                <p className="font-sans text-sm uppercase tracking-wider text-[#D4AF37] mb-2">Announcing Our Launch</p>

                <h2 className="font-serif text-4xl text-[#2D2926] mb-4">
                  Indian-American Fusion
                  <br />
                  Wedding Planning
                </h2>

                <p className="font-sans text-[#5A5550] mb-6 max-w-lg">
                  We help couples blend cultural traditions with modern celebrations. Secure payment processing, virtual
                  shopping from India, and expert guidance.
                </p>

                <div className="flex gap-6 text-sm font-sans text-[#5A5550]">
                  <div>
                    <span className="text-[#8B1538] font-semibold">✓</span> Secure Processing
                  </div>
                  <div>
                    <span className="text-[#8B1538] font-semibold">✓</span> Cultural Expertise
                  </div>
                  <div>
                    <span className="text-[#8B1538] font-semibold">✓</span> Free Planning Tools
                  </div>
                </div>

                <div className="mt-8">
                  <span className="font-sans text-[#8B1538] font-medium">ceremonyverse.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copy Section */}
        <section className="mt-20 p-8 bg-muted rounded-lg">
          <h2 className="font-serif text-2xl mb-6">Ready-to-Use Captions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Facebook Launch Post</h3>
              <div className="bg-white p-4 rounded text-sm font-sans whitespace-pre-wrap">
                {`We're LIVE!

Introducing CeremonyVerse — Your Heritage, Your Harmony.

Planning an Indian-American fusion wedding? We're here to make your journey stress-free and beautiful.

What we offer:
→ Expert cultural fusion planning (Gujarati, Tamil, North & South Indian traditions)
→ Virtual shopping from India (no travel required!)
→ Secure payment processing with milestone-based schedules
→ Free planning tools: checklist, budget calculator, auspicious dates
→ Comprehensive wedding glossary (40+ terms explained!)

We serve couples across the USA — New Jersey, Texas, California, and beyond!

Book your FREE consultation today!
www.ceremonyverse.com

#IndianWedding #FusionWedding #IndianWeddingPlanner #WeddingPlanning #IndianAmericanWedding #DestinationWedding #WeddingPlannerUSA #GujaratiWedding #TamilWedding #MulticulturalWedding #CeremonyVerse`}
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Instagram Launch Post</h3>
              <div className="bg-white p-4 rounded text-sm font-sans whitespace-pre-wrap">
                {`Your dream wedding starts here.

CeremonyVerse is officially LIVE!

We specialize in Indian-American fusion weddings — blending rich traditions with modern elegance.

What makes us different:
✦ Secure payment processing & clear contracts
✦ Virtual shopping from India
✦ Free planning tools & resources
✦ Personalized cultural expertise
✦ Gujarati, Tamil, North & South Indian traditions

From the baraat to the reception, from the sangeet to the vidaai — we've got you covered.

Link in bio to start planning!

.
.
.
#IndianWedding #FusionWedding #WeddingPlanner #IndianBride #WeddingInspiration #BridalInspiration #WeddingPlanningTips #IndianWeddingPlanner #MulticulturalWedding #GujaratiWedding #TamilChristianWedding #IndianAmericanWedding #WeddingPlannerUSA #NJWeddingPlanner #TexasWeddingPlanner #CeremonyVerse`}
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Instagram Story Text (Slide 1)</h3>
              <div className="bg-white p-4 rounded text-sm font-sans whitespace-pre-wrap">
                {`BIG NEWS!

We just launched!

CeremonyVerse is here to help you plan your dream Indian-American fusion wedding.

Swipe to learn more →`}
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Instagram Story Text (Slide 2)</h3>
              <div className="bg-white p-4 rounded text-sm font-sans whitespace-pre-wrap">
                {`What we do:

✦ Gujarati Wedding Planning
✦ Tamil Christian Weddings
✦ Indian-American Fusion
✦ Virtual Shopping from India
✦ Mexico Destination Weddings

All with secure payments & clear contracts!`}
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Instagram Story Text (Slide 3)</h3>
              <div className="bg-white p-4 rounded text-sm font-sans whitespace-pre-wrap">
                {`FREE Resources:

📋 Wedding Planning Checklist
💰 Budget Calculator
📅 Auspicious Dates Calendar
📖 40+ Term Glossary

All available NOW at ceremonyverse.com

Tap link in bio!`}
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Twitter/X Launch Post</h3>
              <div className="bg-white p-4 rounded text-sm font-sans whitespace-pre-wrap">
                {`We're live!

CeremonyVerse — stress-free Indian-American fusion wedding planning.

✓ Cultural expertise (Gujarati, Tamil, fusion)
✓ Secure payment processing
✓ Virtual shopping from India
✓ Free planning tools

Your heritage. Your harmony.

→ ceremonyverse.com

#IndianWedding #WeddingPlanning #FusionWedding #MulticulturalWedding`}
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">LinkedIn Launch Post</h3>
              <div className="bg-white p-4 rounded text-sm font-sans whitespace-pre-wrap">
                {`Excited to announce the launch of CeremonyVerse!

We're a wedding planning service specializing in Indian-American fusion weddings, helping couples blend cultural traditions with modern celebrations.

Our services include:
• Gujarati, Tamil Christian, and multicultural fusion wedding coordination
• Secure payment processing with milestone-based payment schedules
• Virtual shopping coordination from India
• Comprehensive free planning tools
• Expert guidance on cultural traditions and ceremonies

We serve couples across the USA — from New Jersey to Texas to California — and coordinate destination weddings in Mexico.

This has been a labor of love, born from understanding the unique challenges Indian-American couples face when planning weddings that honor both their heritage and their modern lives.

Visit us at ceremonyverse.com

#WeddingIndustry #Entrepreneurship #SmallBusiness #IndianWedding #WeddingPlanner`}
              </div>
            </div>
          </div>
        </section>

        {/* Hashtag Strategy */}
        <section className="mt-12 p-8 bg-muted rounded-lg">
          <h2 className="font-serif text-2xl mb-6">Recommended Hashtags</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-sans font-semibold text-lg mb-3">Primary Hashtags (Always Use)</h3>
              <div className="bg-white p-4 rounded text-sm font-sans">
                <p className="mb-2">
                  #IndianWedding #IndianWeddingPlanner #FusionWedding #MulticulturalWedding #IndianAmericanWedding
                  #CeremonyVerse
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-3">Cultural Specific</h3>
              <div className="bg-white p-4 rounded text-sm font-sans">
                <p className="mb-2">
                  #GujaratiWedding #TamilWedding #TamilChristianWedding #NorthIndianWedding #SouthIndianWedding
                  #HinduWedding
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-3">Location Based</h3>
              <div className="bg-white p-4 rounded text-sm font-sans">
                <p className="mb-2">
                  #NJWeddingPlanner #TexasWeddingPlanner #CaliforniaWedding #NYCWedding #HoustonWedding #DallasWedding
                  #LAWedding
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg mb-3">General Wedding</h3>
              <div className="bg-white p-4 rounded text-sm font-sans">
                <p className="mb-2">
                  #WeddingPlanner #WeddingPlanning #BridalInspiration #WeddingInspiration #DestinationWedding
                  #WeddingPlannerUSA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Posting Tips */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-light text-charcoal mb-8 text-center">Posting Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-sm border border-charcoal/10">
                <h3 className="font-serif text-xl text-charcoal mb-4">Best Times to Post</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li>Instagram: 11am-1pm, 7pm-9pm EST</li>
                  <li>Facebook: 1pm-4pm on weekdays</li>
                  <li>Pinterest: 8pm-11pm, weekends</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-sm border border-charcoal/10">
                <h3 className="font-serif text-xl text-charcoal mb-4">Engagement Tips</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li>Use location tags for local reach</li>
                  <li>Tag relevant wedding vendors</li>
                  <li>Share to Stories when you post</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
