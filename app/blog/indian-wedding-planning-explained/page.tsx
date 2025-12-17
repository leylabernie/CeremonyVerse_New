import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, DollarSign, CheckCircle, ArrowRight, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Indian Wedding Planning Explained (Timeline, Events, Costs, Traditions) | CeremonyVerse",
  description:
    "A complete guide to planning an Indian or fusion wedding—ceremony timeline, event flow, vendor planning, budget tips, and what to expect.",
  openGraph: {
    title: "Indian Wedding Planning Explained - Complete Guide",
    description:
      "Master the art of planning an Indian wedding with our comprehensive guide covering timelines, events, budgets, and cultural traditions.",
    type: "article",
  },
}

export default function IndianWeddingPlanningExplainedPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Complete Planning Guide
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Indian Wedding Planning Explained
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                A complete guide to planning an Indian or fusion wedding—ceremony timeline, event flow, vendor planning,
                budget tips, and what to expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/start-planning">Start Planning Your Wedding</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/book-consultation">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl text-foreground mb-6">In This Guide</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "What Makes Indian Weddings Different", href: "#what-makes-different" },
                  { title: "Common Ceremonies & Events", href: "#ceremonies" },
                  { title: "Timeline Planning by Month", href: "#timeline" },
                  { title: "Fusion Wedding Planning", href: "#fusion" },
                  { title: "Budget Reality & Cost Drivers", href: "#budget" },
                  { title: "Vendor Planning Checklist", href: "#vendors" },
                  { title: "Guest Experience & Logistics", href: "#guests" },
                  { title: "Destination Indian Weddings", href: "#destination" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:border-primary transition-all group"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              {/* Section 1: What Makes Indian Weddings Different */}
              <section id="what-makes-different" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  What Makes Indian Weddings Different
                </h2>
                <p className="text-muted-foreground mb-6">
                  Indian weddings are renowned for their grandeur, multi-day celebrations, and deep cultural
                  significance. Unlike traditional Western weddings that typically span a single day, Indian weddings
                  are immersive experiences that can last anywhere from three days to a week or more.
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <Calendar className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Multi-Day Celebrations</h3>
                      <p className="text-sm text-muted-foreground">
                        Events span 3-7 days with multiple ceremonies, each holding unique significance and requiring
                        separate planning.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <Users className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Family-Centered</h3>
                      <p className="text-sm text-muted-foreground">
                        Extended families play active roles in rituals and decisions, making coordination a key planning
                        element.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <Heart className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Rich Rituals</h3>
                      <p className="text-sm text-muted-foreground">
                        Each ceremony carries deep cultural and spiritual meaning, from henna application to sacred fire
                        rituals.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground mb-4">
                  The complexity comes not just from the duration but from coordinating multiple events, each with its
                  own guest list, venue requirements, catering needs, and cultural protocols. This is where professional
                  planning becomes invaluable.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <p className="text-foreground font-medium mb-2">Ready to start planning?</p>
                  <p className="text-muted-foreground mb-4">
                    We specialize in Indian and fusion weddings that honor tradition while embracing modern
                    sensibilities.
                  </p>
                  <Button asChild>
                    <Link href="/start-planning">
                      Start Planning Your Wedding <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Section 2: Common Ceremonies */}
              <section id="ceremonies" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Common Ceremonies & What Happens
                </h2>
                <p className="text-muted-foreground mb-8">
                  While ceremonies vary by region, religion, and family tradition, here are the most common events
                  you'll encounter in Indian weddings:
                </p>

                <div className="space-y-8">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-3">Mehendi (Henna Ceremony)</h3>
                    <p className="text-muted-foreground mb-4">
                      The bride and female guests have intricate henna designs applied to their hands and feet. This
                      festive event often includes music, dancing, and light refreshments. The deeper the henna color,
                      the stronger the love, according to tradition.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Timing: Usually 1-2 days before the wedding | Duration: 3-5 hours
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-3">Haldi (Turmeric Ceremony)</h3>
                    <p className="text-muted-foreground mb-4">
                      Family members apply a paste of turmeric, sandalwood, and rose water to the bride and groom (in
                      separate ceremonies) for purification and blessing. This intimate, often playful ceremony is
                      filled with laughter as guests join in the tradition.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Timing: Day before wedding | Duration: 1-2 hours
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-3">Sangeet (Music Night)</h3>
                    <p className="text-muted-foreground mb-4">
                      A high-energy celebration where both families come together for music, choreographed dances, and
                      performances. Modern sangeets often feature professional choreographers, live bands or DJs, and
                      elaborate stage setups.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Timing: 1-2 days before wedding | Duration: 4-6 hours
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-3">Baraat (Groom's Procession)</h3>
                    <p className="text-muted-foreground mb-4">
                      The groom arrives at the wedding venue in a grand procession, often on a decorated horse or in a
                      luxury car, accompanied by dancing family members and friends. The bride's family welcomes him
                      with a ceremonial reception.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Timing: Wedding day morning/afternoon | Duration: 1-2 hours
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-3">Wedding Ceremony</h3>
                    <p className="text-muted-foreground mb-4">
                      The main ceremony varies significantly by religion and region. Hindu ceremonies typically involve
                      the sacred fire (Agni), seven steps (Saptapadi), and various blessings. Sikh ceremonies take place
                      in a Gurdwara around the Guru Granth Sahib. Christian Indian weddings follow church traditions
                      with cultural elements woven in.
                    </p>
                    <p className="text-sm text-muted-foreground italic">Timing: Wedding day | Duration: 2-4 hours</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-3">Reception</h3>
                    <p className="text-muted-foreground mb-4">
                      The grand finale where the newlyweds are officially introduced as a married couple. Expect formal
                      dinner service, speeches, cake cutting, first dance, and open dancing. Indian receptions often
                      feature multiple outfit changes for the couple.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Timing: Wedding evening or next day | Duration: 4-6 hours
                    </p>
                  </div>
                </div>

                <div className="bg-accent/30 p-6 rounded-lg mt-8">
                  <p className="text-foreground font-medium mb-2">Not sure which ceremonies to include?</p>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss your cultural background and create a celebration that honors your traditions.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/book-consultation">Book a Consultation</Link>
                  </Button>
                </div>
              </section>

              {/* Section 3: Timeline Planning */}
              <section id="timeline" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Timeline Planning by Month</h2>
                <p className="text-muted-foreground mb-8">
                  Planning an Indian wedding requires more lead time than traditional weddings due to the complexity and
                  vendor coordination. Here's a realistic timeline:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="font-semibold text-xl text-foreground mb-2">12-14 Months Before</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Set your budget and determine who's contributing</li>
                      <li>Choose your wedding date (consider auspicious dates/muhurat if important)</li>
                      <li>Create your guest list (be realistic about numbers)</li>
                      <li>Hire a wedding planner who specializes in Indian weddings</li>
                      <li>Book your main ceremony and reception venues</li>
                      <li>Reserve hotel blocks for out-of-town guests</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary/70 pl-6 py-2">
                    <h3 className="font-semibold text-xl text-foreground mb-2">9-11 Months Before</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Book your photographer and videographer</li>
                      <li>Secure catering (ensuring vegetarian/vegan options)</li>
                      <li>Reserve venues for pre-wedding events (mehendi, sangeet, haldi)</li>
                      <li>Hire your priest/officiant</li>
                      <li>Book entertainment (DJ/band for sangeet and reception)</li>
                      <li>Start shopping for bridal lengha and groom's sherwani</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary/50 pl-6 py-2">
                    <h3 className="font-semibold text-xl text-foreground mb-2">6-8 Months Before</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Finalize your wedding invitation design and order printing</li>
                      <li>Book your makeup artist and hairstylist</li>
                      <li>Reserve your florist and decorators</li>
                      <li>Arrange transportation (baraat procession, guest shuttles)</li>
                      <li>Order wedding favors and welcome bags</li>
                      <li>Start wedding website with event details and travel info</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary/40 pl-6 py-2">
                    <h3 className="font-semibold text-xl text-foreground mb-2">3-5 Months Before</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Send save-the-dates (especially for destination weddings)</li>
                      <li>Finalize menu tastings with caterer</li>
                      <li>Order additional outfits for each ceremony</li>
                      <li>Book mehendi artist</li>
                      <li>Arrange rental items (chairs, linens, mandap)</li>
                      <li>Confirm ceremony logistics with priest</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-destructive pl-6 py-2">
                    <h3 className="font-semibold text-xl text-foreground mb-2">Final Month</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Send formal invitations (6-8 weeks before)</li>
                      <li>Finalize all vendor details and create day-of timelines</li>
                      <li>Confirm final guest count with all vendors</li>
                      <li>Schedule final fittings for all outfits</li>
                      <li>Create seating charts</li>
                      <li>Prepare welcome bags and emergency kits</li>
                      <li>Have final rehearsal with family and bridal party</li>
                      <li>Delegate day-of responsibilities to trusted friends/family</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <p className="text-foreground font-medium mb-2">Feeling overwhelmed by the timeline?</p>
                  <p className="text-muted-foreground mb-4">
                    Our planners handle every detail so you can focus on enjoying your engagement.
                  </p>
                  <Button asChild>
                    <Link href="/services">
                      Explore Our Planning Services <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Section 4: Fusion Weddings */}
              <section id="fusion" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Fusion Wedding Planning: Blending Ceremonies Respectfully
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fusion weddings beautifully honor multiple cultural backgrounds, creating celebrations that are deeply
                  personal and inclusive. The key is thoughtful integration rather than simply stacking ceremonies.
                </p>

                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-xl text-foreground mb-4">Keys to a Successful Fusion Wedding</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Educate Your Guests</p>
                        <p className="text-sm text-muted-foreground">
                          Provide program booklets explaining each ritual's significance in both cultures
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Consult Cultural Experts</p>
                        <p className="text-sm text-muted-foreground">
                          Work with officiants from both backgrounds to ensure respectful representation
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Choose Meaningful Elements</p>
                        <p className="text-sm text-muted-foreground">
                          Select rituals that resonate with both families rather than including everything
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Consider Timing</p>
                        <p className="text-sm text-muted-foreground">
                          Balance ceremony length—guests appreciate meaningful but concise celebrations
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Blend, Don't Layer</p>
                        <p className="text-sm text-muted-foreground">
                          Weave traditions together rather than having separate back-to-back ceremonies
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground mb-4">
                  Popular fusion elements include incorporating both Western vows and Hindu saptapadi (seven steps),
                  combining church and temple ceremonies, or blending Irish and Indian music during the reception. The
                  possibilities are endless when approached with cultural sensitivity.
                </p>

                <div className="bg-accent/30 p-6 rounded-lg">
                  <p className="text-foreground font-medium mb-2">Planning a fusion celebration?</p>
                  <p className="text-muted-foreground mb-4">
                    We specialize in creating seamless blends that honor both backgrounds with grace.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/fusion-wedding-planner">Learn About Fusion Planning</Link>
                  </Button>
                </div>
              </section>

              {/* Section 5: Budget Reality */}
              <section id="budget" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Budget Reality: What Drives Indian Wedding Costs
                </h2>
                <p className="text-muted-foreground mb-8">
                  Indian weddings are significant financial investments. Understanding what drives costs helps you make
                  informed decisions and allocate your budget effectively.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <DollarSign className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-3">Average Budget Ranges</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          <strong>150-200 guests:</strong> $50k-$80k
                        </li>
                        <li>
                          <strong>200-300 guests:</strong> $80k-$120k
                        </li>
                        <li>
                          <strong>300-500 guests:</strong> $120k-$200k+
                        </li>
                        <li className="text-xs italic">Note: Destination weddings add 20-40%</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Users className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-3">Biggest Cost Drivers</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          <strong>1. Catering</strong> (25-30% of budget)
                        </li>
                        <li>
                          <strong>2. Venue rental</strong> (15-20%)
                        </li>
                        <li>
                          <strong>3. Photography/Video</strong> (10-15%)
                        </li>
                        <li>
                          <strong>4. Décor & florals</strong> (10-15%)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="font-semibold text-xl text-foreground mb-4">
                  Where Couples Overspend (And How to Avoid It)
                </h3>
                <div className="space-y-4 text-muted-foreground mb-6">
                  <p>
                    <strong className="text-foreground">Guest List Creep:</strong> Indian weddings notoriously expand
                    beyond initial plans. Set a firm number early and stick to it. Every additional 50 guests adds
                    $8k-$15k to your total.
                  </p>
                  <p>
                    <strong className="text-foreground">Décor Overload:</strong> With multiple events, décor costs
                    compound quickly. Prioritize investment in the main ceremony and reception, opt for simpler setups
                    for pre-events.
                  </p>
                  <p>
                    <strong className="text-foreground">Outfit Excess:</strong> While outfit changes are traditional,
                    couples can spend $15k-$30k+ on attire alone. Choose your "investment pieces" wisely and consider
                    renting for some events.
                  </p>
                  <p>
                    <strong className="text-foreground">Vendor Stacking:</strong> Hiring separate vendors for each event
                    multiplies costs. Look for vendors who can service multiple events at bundled rates.
                  </p>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-foreground font-medium mb-2">Need help creating a realistic budget?</p>
                  <p className="text-muted-foreground mb-4">
                    We provide detailed budget planning and vendor negotiation to maximize your investment.
                  </p>
                  <Button asChild>
                    <Link href="/start-planning">
                      Start Your Budget Planning <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Section 6: Vendor Planning */}
              <section id="vendors" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Vendor Planning Checklist</h2>
                <p className="text-muted-foreground mb-8">
                  Indian weddings require specialized vendors who understand cultural nuances, timing complexities, and
                  the unique requirements of multi-day events.
                </p>

                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Essential Vendors
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-foreground text-sm">Religious Services</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          Priest/Officiant familiar with your traditions
                        </p>

                        <p className="font-medium text-foreground text-sm">Venue(s)</p>
                        <p className="text-xs text-muted-foreground mb-3">For ceremony, reception, and pre-events</p>

                        <p className="font-medium text-foreground text-sm">Catering</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          With strong vegetarian/vegan options, regional specialties
                        </p>

                        <p className="font-medium text-foreground text-sm">Photography & Videography</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          Team experienced in Indian wedding coverage
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Décor & Florals</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          Mandap design, stage setup, floral arrangements
                        </p>

                        <p className="font-medium text-foreground text-sm">Entertainment</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          DJ/band for sangeet and reception, dhol player for baraat
                        </p>

                        <p className="font-medium text-foreground text-sm">Makeup & Hair</p>
                        <p className="text-sm text-muted-foreground mb-3">Artists experienced with bridal makeup</p>

                        <p className="font-medium text-foreground text-sm">Transportation</p>
                        <p className="text-xs text-muted-foreground">Baraat vehicle, guest shuttles</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-4">Questions to Ask Every Vendor</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Have you worked Indian weddings before? Can you show me examples?</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Do you offer packages for multiple events?</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>How do you handle the longer timeline and schedule changes?</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>What's your backup plan if something goes wrong?</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Are there additional fees for extended hours or setup requirements?</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/30 p-6 rounded-lg mt-8">
                  <p className="text-foreground font-medium mb-2">Need help vetting vendors?</p>
                  <p className="text-muted-foreground mb-4">
                    We have a network of trusted, culturally-competent vendors across the USA and internationally.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/wedding-journeys">See Our Vendor Network</Link>
                  </Button>
                </div>
              </section>

              {/* Section 7: Guest Experience */}
              <section id="guests" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Guest Experience & Logistics</h2>
                <p className="text-muted-foreground mb-8">
                  Indian weddings require thoughtful guest management due to multi-day schedules, cultural education
                  needs, and often significant travel requirements.
                </p>

                <h3 className="font-semibold text-xl text-foreground mb-4">Essential Guest Communication</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Complete Event Schedule</p>
                      <p className="text-sm text-muted-foreground">
                        Provide detailed timing, dress codes, and venue addresses for each event well in advance
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Cultural Context</p>
                      <p className="text-sm text-muted-foreground">
                        Create a wedding website or program explaining traditions, expected attire, and ceremony
                        significance
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Travel & Accommodation</p>
                      <p className="text-sm text-muted-foreground">
                        Secure hotel blocks with group rates, provide shuttle schedules, and share local recommendations
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Dietary Information</p>
                      <p className="text-sm text-muted-foreground">
                        Clearly communicate menu options, especially important for guests unfamiliar with Indian cuisine
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-xl text-foreground mb-4">Common Guest Questions to Address</h3>
                <div className="bg-card border border-border rounded-xl p-6">
                  <ul className="space-y-3 text-sm">
                    <li>
                      <p className="font-medium text-foreground mb-1">What should I wear?</p>
                      <p className="text-muted-foreground">
                        Provide specific dress code guidance for each event (e.g., "Colorful Indian attire or formal
                        Western wear welcome")
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-foreground mb-1">Can I bring a plus-one?</p>
                      <p className="text-muted-foreground">
                        Be clear about who's invited to which events to avoid confusion
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-foreground mb-1">Do I need to attend every event?</p>
                      <p className="text-muted-foreground">
                        While attendance at all events is appreciated, clearly indicate which are must-attend (ceremony,
                        reception) vs. optional
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-foreground mb-1">What about gifts?</p>
                      <p className="text-muted-foreground">
                        Communicate your registry or preference (cash gifts are traditional in many Indian cultures)
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Destination Weddings */}
              <section id="destination" className="mb-16 scroll-mt-20">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Destination Indian Weddings (Mexico & Beyond)
                </h2>
                <p className="text-muted-foreground mb-8">
                  Destination Indian weddings offer a contained, resort-based experience that simplifies logistics while
                  creating an unforgettable vacation atmosphere for your guests.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-foreground mb-3">Advantages</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>All venues in one location</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Accommodations included</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Often better value per guest</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Natural guest list filter</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Extended celebration time</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-foreground mb-3">Considerations</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Resort restrictions on rituals (fire, late-night music)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Limited vegetarian/vegan options at some resorts</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Additional costs for bringing in outside vendors</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Travel logistics for elderly or international guests</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Need for experienced destination planner</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="font-semibold text-xl text-foreground mb-4">Popular Destination Wedding Locations</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground mb-2">Mexico</p>
                    <p className="text-sm text-muted-foreground">Cancún, Riviera Maya, Los Cabos, Puerto Vallarta</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground mb-2">Caribbean</p>
                    <p className="text-sm text-muted-foreground">Jamaica, Dominican Republic, Bahamas</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-medium text-foreground mb-2">International</p>
                    <p className="text-sm text-muted-foreground">India, Dubai, Bali, Thailand</p>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-foreground font-medium mb-2">Planning a destination wedding?</p>
                  <p className="text-muted-foreground mb-4">
                    We specialize in Mexico Indian weddings and have partnerships with Indian-wedding-friendly resorts.
                  </p>
                  <Button asChild>
                    <Link href="/mexico-indian-destination-weddings">
                      Explore Destination Planning <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
                <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Start Planning?</h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Let's create a celebration that honors your heritage, reflects your love story, and brings your
                  families together in joy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/start-planning">Start Planning Your Wedding</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Link href="/book-consultation">Book a Free Consultation</Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  )
}
