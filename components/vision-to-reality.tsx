"use client"

import Image from "next/image"
import { Sparkles, Users, Palette } from "lucide-react"

const showcases = [
  {
    id: 1,
    category: "Coordinated Couple Outfits",
    title: "Coral & Teal Fusion",
    challenge: "Couple wanted vibrant colors that honored both Indian and modern aesthetics",
    solution: "Warm coral lehenga with intricate embroidery paired with cool teal Nehru jacket - perfect color balance",
    detail: "Hand-embroidered details with tassel accents and bespoke tailoring",
    behindImage: "/images/twisted-threads-1764795147843.png",
    afterImage: "/images/generated-image-december-04-2025-10-51am.png",
    event: "Mehndi Ceremony",
    colorPalette: ["#ea580c", "#0d9488", "#ca8a04"],
    icon: Palette,
    hasBeforeAfter: true,
  },
  {
    id: 2,
    category: "Bridal Party Coordination",
    title: "Royal Purple & Sapphire Blue",
    challenge: "Coordinating 6 bridesmaids and 4 groomsmen with different body types and style preferences",
    solution: "Matching purple lehengas with gold accents for bridesmaids, sapphire blue Nehru jackets for groomsmen",
    detail: "Custom tailoring for each member ensuring perfect fit and consistent color story",
    behindImage: "/images/twisted-threads-1764795802614.png",
    event: "Sangeet Night",
    colorPalette: ["#7e22ce", "#1e40af", "#ca8a04"],
    icon: Users,
    hasBeforeAfter: false,
  },
]

export function VisionToReality() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Real Weddings, Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Vision to Reality
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we transform your dreams into stunning celebrations. Every detail coordinated, every moment
            perfected.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="space-y-24">
          {showcases.map((showcase, index) => (
            <div key={showcase.id} className="group">
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <showcase.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{showcase.category}</span>
              </div>

              {/* Conditional Layout */}
              {showcase.hasBeforeAfter ? (
                // Two-column layout for before/after
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Images Side */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    {/* Challenge Card */}
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                      <h3 className="text-2xl font-serif mb-3">{showcase.title}</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Challenge
                          </span>
                          <p className="text-foreground mt-1">{showcase.challenge}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Our Solution
                          </span>
                          <p className="text-foreground mt-1">{showcase.solution}</p>
                        </div>
                      </div>

                      {/* Color Palette */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Color Palette
                        </span>
                        <div className="flex gap-2 mt-2">
                          {showcase.colorPalette.map((color, i) => (
                            <div
                              key={i}
                              className="w-10 h-10 rounded-lg border-2 border-background shadow-sm"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Detail Shot */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={showcase.behindImage || "/placeholder.svg"}
                        alt={`${showcase.title} - Outfit Details`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                        <p className="text-sm font-medium">Outfit Details</p>
                        <p className="text-xs text-muted-foreground">{showcase.detail}</p>
                      </div>
                    </div>
                  </div>

                  {/* Final Result Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={showcase.afterImage || "/placeholder.svg"}
                        alt={`${showcase.title} - Final Result`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
                          <Sparkles className="w-3 h-3" />
                          {showcase.event}
                        </div>
                        <h4 className="text-2xl font-serif text-white mb-2">The Final Look</h4>
                        <p className="text-white/90 text-sm">
                          Coordinated bridal party with perfectly harmonized colors and styles
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Single-column layout for outfit-only showcases
                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-5 gap-8 items-start">
                    {/* Main Image */}
                    <div className="md:col-span-3">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={showcase.behindImage || "/placeholder.svg"}
                          alt={`${showcase.title} - Coordinated Outfits`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                          {showcase.event}
                        </div>
                      </div>
                    </div>

                    {/* Details Card */}
                    <div className="md:col-span-2 space-y-6">
                      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                        <h3 className="text-2xl font-serif mb-4">{showcase.title}</h3>
                        <div className="space-y-4">
                          <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              Challenge
                            </span>
                            <p className="text-foreground mt-1 text-sm">{showcase.challenge}</p>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              Our Solution
                            </span>
                            <p className="text-foreground mt-1 text-sm">{showcase.solution}</p>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              Details
                            </span>
                            <p className="text-foreground mt-1 text-sm">{showcase.detail}</p>
                          </div>
                        </div>

                        {/* Color Palette */}
                        <div className="mt-6 pt-6 border-t border-border">
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Color Palette
                          </span>
                          <div className="flex gap-2 mt-3">
                            {showcase.colorPalette.map((color, i) => (
                              <div
                                key={i}
                                className="w-10 h-10 rounded-lg border-2 border-background shadow-sm"
                                style={{ backgroundColor: color }}
                                title={color}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
                <div className="text-center p-4 rounded-xl bg-primary/5">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Outfits Coordinated</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/5">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Color Matched</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-accent/5">
                  <div className="text-2xl font-bold text-accent">1</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Stress-Free Couple</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Ready to See Your Vision Come to Life?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              From outfit coordination to complete event design, we handle every detail so you can enjoy your
              celebration.
            </p>
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Journey
              <Sparkles className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
