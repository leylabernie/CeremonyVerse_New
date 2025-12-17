import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Heart, Shield, Sparkles } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Wedding Planner USA | Expert Fusion Wedding Planning Services 2025",
  description:
    "Find the best Indian wedding planner in USA for your fusion celebration. Expert coordination for Hindu, Gujarati, South Indian Christian weddings. Serving all major US cities. Secure payment processing.",
  keywords:
    "indian wedding planner USA, Indian wedding planner, fusion wedding coordinator, hindu wedding planner, gujarati wedding planner, south indian christian wedding, indian wedding services USA, desi wedding planner",
  openGraph: {
    title: "Indian Wedding Planner USA | Expert Fusion Wedding Planning",
    description:
      "Professional Indian wedding planning services across USA. Cultural expertise, verified vendors, and secure payment processing for your perfect fusion celebration.",
    type: "article",
  },
}

export default function IndianWeddingPlannerUSAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Finding the Perfect Indian Wedding Planner in USA: Complete Guide 2025
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about hiring an Indian wedding planner for your fusion celebration in America
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <time dateTime="2025-01-18">January 18, 2025</time>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </header>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
            <Image
              src="/indian-wedding-planner-coordinating-beautiful-mand.jpg"
              alt="Professional Indian wedding planner coordinating a beautiful mandap ceremony"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Planning an Indian wedding in the USA comes with unique challenges: balancing traditional ceremonies with
              American venues, coordinating multi-day celebrations, and managing expectations from both families. A
              specialized Indian wedding planner can be the difference between a stressful experience and the wedding of
              your dreams.
            </p>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Why You Need a Specialized Indian Wedding Planner
            </h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Cultural Expertise Matters</h3>
            <p>
              General wedding planners may excel at American weddings, but Indian celebrations require specific cultural
              knowledge:
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                Understanding of Hindu, Gujarati, and South Indian Christian wedding rituals and their significance
              </li>
              <li>Knowledge of regional variations (Gujarati, South Indian, Tamil, Telugu traditions)</li>
              <li>Ability to coordinate with priests, pandits, or religious officiants</li>
              <li>Experience with traditional elements like mandaps, baraat processions, and mehndi ceremonies</li>
              <li>Multilingual communication with family members and vendors</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-primary mb-2">💡 Real Example:</p>
              <p className="text-foreground">
                A couple hired a general planner who scheduled the ceremony during an inauspicious time according to the
                Hindu calendar. They had to reschedule everything at the last minute, costing thousands in fees. A
                specialized Indian wedding planner would have consulted the muhurat (auspicious timing) from the start.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Multi-Day Event Coordination</h3>
            <p>Indian weddings typically span 3-5 days with multiple events. Your planner needs experience managing:</p>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Mehndi Night:</strong> Coordinating mehndi artists, decor, entertainment, and catering
              </li>
              <li>
                <strong>Sangeet:</strong> Managing performances, sound systems, choreography, and timing
              </li>
              <li>
                <strong>Haldi Ceremony:</strong> Setting up outdoor/indoor spaces, managing traditional elements
              </li>
              <li>
                <strong>Wedding Ceremony:</strong> Coordinating with priests, managing mandap setup, timing rituals
              </li>
              <li>
                <strong>Reception:</strong> Managing grand entrances, speeches, entertainment, and dining
              </li>
            </ul>

            <div className="aspect-video relative rounded-xl overflow-hidden my-8">
              <Image
                src="/indian-wedding-sangeet-night-with-dancing-and-perf.jpg"
                alt="Vibrant Indian wedding Sangeet night with dancing and performances"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              What to Look for in an Indian Wedding Planner
            </h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              1. Proven Experience with Indian Weddings
            </h3>
            <p>Ask potential planners:</p>
            <ul className="space-y-2 mb-6">
              <li>How many Indian weddings have you planned?</li>
              <li>What regional traditions are you most familiar with?</li>
              <li>Can you show me portfolios of similar weddings?</li>
              <li>Do you have references from Indian couples?</li>
              <li>Have you worked with our specific cultural background before?</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              2. Vendor Network & Relationships
            </h3>
            <p>A great Indian wedding planner should have established relationships with:</p>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>Caterers:</strong> Specializing in authentic Indian cuisine (North Indian, South Indian,
                Gujarati, etc.)
              </li>
              <li>
                <strong>Decorators:</strong> Experienced with mandap design, floral arrangements, and traditional decor
              </li>
              <li>
                <strong>Mehndi Artists:</strong> Skilled in various regional styles
              </li>
              <li>
                <strong>DJs/Bands:</strong> Familiar with Bollywood, bhangra, and regional music
              </li>
              <li>
                <strong>Photographers:</strong> Experienced capturing Indian wedding moments and rituals
              </li>
              <li>
                <strong>Makeup Artists:</strong> Skilled in bridal makeup for Indian skin tones
              </li>
              <li>
                <strong>Venues:</strong> Accommodating of multi-day events and cultural requirements
              </li>
            </ul>

            <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-secondary mb-2">✨ Pro Tip:</p>
              <p className="text-foreground">
                Ask if the planner has preferred vendor lists but also allows you to bring your own vendors. The best
                planners are flexible and work well with any professional team.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              3. Communication & Language Skills
            </h3>
            <p>Your planner should be able to:</p>
            <ul className="space-y-2 mb-6">
              <li>Communicate effectively with both families (potentially in multiple languages)</li>
              <li>Navigate cultural sensitivities and family dynamics</li>
              <li>Mediate between traditional expectations and modern preferences</li>
              <li>Explain American venue requirements to traditional family members</li>
              <li>Translate cultural elements to non-Indian guests</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              4. Budget Management & Transparency
            </h3>
            <p>Look for planners who:</p>
            <ul className="space-y-2 mb-6">
              <li>Provide detailed cost breakdowns upfront</li>
              <li>Offer transparent pricing (flat fee vs. percentage of budget)</li>
              <li>Help you prioritize spending based on your values</li>
              <li>Have experience working within various budget ranges</li>
              <li>Can suggest cost-saving alternatives without compromising quality</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              5. Problem-Solving & Flexibility
            </h3>
            <p>Indian weddings often require creative solutions:</p>
            <ul className="space-y-2 mb-6">
              <li>Adapting traditional ceremonies to American venue restrictions</li>
              <li>Managing last-minute guest count changes (common in Indian weddings)</li>
              <li>Coordinating with international vendors for attire and jewelry</li>
              <li>Handling weather contingencies for outdoor events</li>
              <li>Managing family dynamics and expectations</li>
            </ul>

            <div className="aspect-video relative rounded-xl overflow-hidden my-8">
              <Image
                src="/indian-wedding-mandap-ceremony-with-priest-and-cou.jpg"
                alt="Traditional Indian wedding mandap ceremony with priest and couple"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Types of Indian Wedding Planning Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-medium mb-3">Full Planning</h3>
                <p className="text-sm text-muted-foreground mb-4">12-18 months of comprehensive support</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Venue selection</li>
                  <li>✓ Vendor sourcing & contracts</li>
                  <li>✓ Budget management</li>
                  <li>✓ Design & decor planning</li>
                  <li>✓ Timeline creation</li>
                  <li>✓ Day-of coordination</li>
                </ul>
                <p className="text-sm font-semibold mt-4">$8,000 - $15,000+</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-medium mb-3">Partial Planning</h3>
                <p className="text-sm text-muted-foreground mb-4">3-6 months of targeted support</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Vendor recommendations</li>
                  <li>✓ Contract review</li>
                  <li>✓ Timeline assistance</li>
                  <li>✓ Design consultation</li>
                  <li>✓ Month-of coordination</li>
                </ul>
                <p className="text-sm font-semibold mt-4">$3,500 - $8,000</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-medium mb-3">Day-Of Coordination</h3>
                <p className="text-sm text-muted-foreground mb-4">Final month + event day management</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Vendor coordination</li>
                  <li>✓ Timeline management</li>
                  <li>✓ Setup oversight</li>
                  <li>✓ Problem solving</li>
                  <li>✓ Family coordination</li>
                </ul>
                <p className="text-sm font-semibold mt-4">$1,500 - $3,500</p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Questions to Ask Potential Planners
            </h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Experience & Expertise</h3>
            <ul className="space-y-2 mb-6">
              <li>How many Indian weddings have you planned in the past year?</li>
              <li>Are you familiar with [your specific cultural tradition]?</li>
              <li>Have you worked with venues in our area before?</li>
              <li>Can you provide references from couples with similar backgrounds?</li>
              <li>What's the largest Indian wedding you've coordinated?</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Services & Logistics</h3>
            <ul className="space-y-2 mb-6">
              <li>What's included in your planning package?</li>
              <li>How many meetings/check-ins do you provide?</li>
              <li>Will you be present at all events, or will you send an assistant?</li>
              <li>How many weddings do you take on per month?</li>
              <li>What's your cancellation/postponement policy?</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Pricing & Contracts</h3>
            <ul className="space-y-2 mb-6">
              <li>What's your fee structure? (flat fee, percentage, hourly)</li>
              <li>What's not included in your fee?</li>
              <li>Do you charge for travel to vendor meetings?</li>
              <li>What's your payment schedule?</li>
              <li>Do you offer payment plans?</li>
            </ul>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">Vendor Relationships</h3>
            <ul className="space-y-2 mb-6">
              <li>Do you have preferred vendors, or can we choose our own?</li>
              <li>Do you receive commissions from vendors?</li>
              <li>Can you help us source items from India?</li>
              <li>Do you have relationships with priests/officiants?</li>
              <li>How do you handle vendor conflicts or issues?</li>
            </ul>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-accent mb-2">🚩 Red Flags to Watch For:</p>
              <ul className="text-foreground space-y-2">
                <li>• Planner has never worked with your cultural tradition</li>
                <li>• Unwilling to provide references or portfolio</li>
                <li>• Pushes specific vendors without explaining why</li>
                <li>• Vague about pricing or contract terms</li>
                <li>• Poor communication or slow response times</li>
                <li>• Takes on too many weddings simultaneously</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Indian Wedding Planning by Region
            </h2>

            <h3 className="font-serif text-2xl font-medium text-foreground mt-8 mb-4">
              Top Cities for Indian Weddings in USA
            </h3>

            <div className="space-y-4 mb-8">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  New York / New Jersey
                </h4>
                <p className="text-sm text-muted-foreground">
                  Large Indian community, numerous venues experienced with Indian weddings, extensive vendor network.
                  Average cost: $60K-$120K
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  San Francisco Bay Area
                </h4>
                <p className="text-sm text-muted-foreground">
                  Tech-savvy couples, modern fusion weddings, high-end venues. Average cost: $70K-$150K
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Chicago
                </h4>
                <p className="text-sm text-muted-foreground">
                  Beautiful venues, four-season options, strong vendor community. Average cost: $50K-$100K
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Texas (Houston, Dallas, Austin)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Growing Indian population, spacious venues, competitive pricing. Average cost: $40K-$80K
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Southern California
                </h4>
                <p className="text-sm text-muted-foreground">
                  Year-round outdoor options, diverse vendor pool, destination wedding appeal. Average cost: $60K-$130K
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Virtual vs. In-Person Planning
            </h2>

            <p>Post-pandemic, many planners offer hybrid services. Consider your needs:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-medium mb-4">Virtual Planning Works Well For:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Couples living far from wedding location</li>
                  <li>✓ Initial consultations and vendor research</li>
                  <li>✓ Budget planning and timeline creation</li>
                  <li>✓ Design mood boards and inspiration</li>
                  <li>✓ Contract reviews and vendor communication</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl font-medium mb-4">In-Person is Essential For:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Venue tours and selection</li>
                  <li>✓ Vendor tastings (catering, cake)</li>
                  <li>✓ Final month coordination</li>
                  <li>✓ Rehearsal and ceremony coordination</li>
                  <li>✓ Day-of event management</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Timeline: When to Hire Your Planner
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-primary">12-18 Months</div>
                <div>
                  <p className="font-medium mb-1">Ideal for Full Planning</p>
                  <p className="text-sm text-muted-foreground">
                    Gives planner time to secure best venues and vendors, especially for peak season weddings
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-primary">6-12 Months</div>
                <div>
                  <p className="font-medium mb-1">Good for Partial Planning</p>
                  <p className="text-sm text-muted-foreground">
                    Enough time to book quality vendors and plan details, though some popular options may be taken
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-primary">3-6 Months</div>
                <div>
                  <p className="font-medium mb-1">Minimum for Partial Planning</p>
                  <p className="text-sm text-muted-foreground">
                    Limited vendor availability, may need to be flexible on choices
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-primary">1-3 Months</div>
                <div>
                  <p className="font-medium mb-1">Day-Of Coordination Only</p>
                  <p className="text-sm text-muted-foreground">
                    Assumes you've already booked all vendors and made major decisions
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">
              Special Considerations for Fusion Weddings
            </h2>

            <p>If you're planning a fusion wedding (Indian + another culture), your planner should be able to:</p>
            <ul className="space-y-2 mb-6">
              <li>Seamlessly blend two cultural traditions without one overshadowing the other</li>
              <li>Educate guests from both sides about unfamiliar customs</li>
              <li>Coordinate with multiple religious officiants if needed</li>
              <li>Create a cohesive design aesthetic that honors both cultures</li>
              <li>Manage timing for ceremonies from different traditions</li>
              <li>Navigate family expectations from both cultural backgrounds</li>
            </ul>

            <div className="aspect-video relative rounded-xl overflow-hidden my-8">
              <Image
                src="/fusion-wedding-ceremony-blending-indian-and-wester.jpg"
                alt="Beautiful fusion wedding ceremony blending Indian and Western traditions"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Why Choose CeremonyVerse</h2>

            <p>
              At CeremonyVerse, we specialize exclusively in Indian-American fusion weddings. Our unique advantages:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Secure Payment Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Clear milestone-based contracts with secure payment terms for all international purchases
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Cultural Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Team experienced with all major Indian wedding traditions and regional variations
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Verified Vendor Network</h4>
                  <p className="text-sm text-muted-foreground">
                    Curated network of quality-assured vendors across USA and India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Virtual Shopping Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Shop authentic items from India with live video consultations and secure shipping
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-light text-foreground mt-12 mb-6">Final Thoughts</h2>

            <p>
              Hiring the right Indian wedding planner is one of the most important decisions you'll make. Take time to
              interview multiple planners, check references, and trust your instincts. The right planner will not only
              execute your vision flawlessly but also reduce stress and help you actually enjoy your wedding journey.
            </p>

            <p>
              Remember: your wedding planner is your advocate, problem-solver, and cultural bridge. Choose someone who
              understands your unique needs as an Indian-American couple and can bring your vision to life with
              authenticity and elegance.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ready to start planning your dream fusion wedding? Explore our{" "}
              <Link href="/services/outfit-concierge" className="text-primary hover:underline">
                Outfit Sourcing & Styling Concierge
              </Link>
              ,{" "}
              <Link href="/services/ceremony-essentials" className="text-primary hover:underline">
                Ceremony Essentials
              </Link>
              , and{" "}
              <Link href="/services/invitation-suite" className="text-primary hover:underline">
                Invitation Preview Suite
              </Link>{" "}
              to bring your vision to life.
            </p>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <h3 className="font-serif text-2xl font-medium mb-4">Ready to Start Planning?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a complimentary consultation with our Indian wedding planning experts. We'll discuss your
                vision, answer your questions, and create a customized plan for your perfect fusion celebration.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
