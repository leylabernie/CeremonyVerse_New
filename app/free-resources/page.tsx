import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Calculator, FileText, Download, Check, Star, BookOpen } from "@/components/icons"
import FadeInSection from "@/components/fade-in-section"
import type { Metadata } from "next"
import LeadMagnetForm from "@/components/lead-magnet-form"

export const metadata: Metadata = {
  title: "Free Wedding Planning Resources | CeremonyVerse",
  description:
    "Access free wedding planning tools including our Indian Wedding Planning Timeline PDF, budget calculator, auspicious dates calendar, and wedding glossary.",
}

// Auspicious dates for 2025-2026
const auspiciousDates2025 = [
  { month: "January 2025", dates: ["Jan 15", "Jan 22", "Jan 26", "Jan 29"] },
  { month: "February 2025", dates: ["Feb 3", "Feb 9", "Feb 12", "Feb 16", "Feb 20"] },
  { month: "March 2025", dates: ["Mar 2", "Mar 6", "Mar 9", "Mar 13"] },
  { month: "April 2025", dates: ["Apr 14", "Apr 17", "Apr 20", "Apr 24", "Apr 27"] },
  { month: "May 2025", dates: ["May 4", "May 8", "May 11", "May 15", "May 18"] },
  { month: "June 2025", dates: ["Jun 1", "Jun 5", "Jun 8", "Jun 12", "Jun 15"] },
  { month: "November 2025", dates: ["Nov 16", "Nov 20", "Nov 23", "Nov 27", "Nov 30"] },
  { month: "December 2025", dates: ["Dec 4", "Dec 7", "Dec 11", "Dec 14"] },
]

const checklistItems = [
  {
    month: "12 Months Before",
    tasks: ["Set budget", "Create guest list draft", "Book venue", "Choose wedding date", "Start vendor research"],
  },
  {
    month: "9 Months Before",
    tasks: [
      "Book photographer/videographer",
      "Book caterer",
      "Shop for bridal attire",
      "Book officiant/pandit",
      "Send save-the-dates",
    ],
  },
  {
    month: "6 Months Before",
    tasks: ["Book florist & decorator", "Book DJ/band", "Order invitations", "Plan honeymoon", "Book hotel blocks"],
  },
  {
    month: "3 Months Before",
    tasks: [
      "Final dress fittings",
      "Finalize menu",
      "Create seating chart",
      "Confirm all vendors",
      "Apply for marriage license",
    ],
  },
  {
    month: "1 Month Before",
    tasks: [
      "Final headcount",
      "Confirm timeline with vendors",
      "Break in wedding shoes",
      "Prepare tips/payments",
      "Final venue walkthrough",
    ],
  },
  {
    month: "Week Of",
    tasks: [
      "Confirm arrival times",
      "Pack for honeymoon",
      "Prepare emergency kit",
      "Delegate responsibilities",
      "Relax and celebrate!",
    ],
  },
]

export default function FreeResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-background">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight text-charcoal mb-6 tracking-tight">
              Free Wedding Resources
            </h1>
            <div className="w-24 h-px bg-accent mx-auto mb-6" />
            <p className="text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
              Plan your dream Indian or fusion wedding with our expert tools and guides - completely free.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="bg-white p-8 md:p-12 border border-accent/20 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full mb-4">
                    <Download className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Free Download</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-4">
                    Indian Wedding Planning Timeline
                  </h2>
                  <p className="text-charcoal/70 font-light mb-6">
                    A practical step-by-step guide for planning multi-day Indian and fusion weddings. Covers 12-14
                    months of planning milestones.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-charcoal/70 font-light text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      Month-by-month planning checklist
                    </li>
                    <li className="flex items-start gap-2 text-charcoal/70 font-light text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      Event sequencing (Mehendi, Sangeet, Wedding, Reception)
                    </li>
                    <li className="flex items-start gap-2 text-charcoal/70 font-light text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      India sourcing timeline
                    </li>
                    <li className="flex items-start gap-2 text-charcoal/70 font-light text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      Vendor coordination checklist
                    </li>
                  </ul>
                </div>
                <div>
                  <LeadMagnetForm />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Brochures & Forms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-extralight text-charcoal mb-4">
                Service Guides & Forms
              </h2>
              <p className="text-charcoal/60 font-light max-w-2xl mx-auto">
                Detailed guides and intake forms to help you get started with CeremonyVerse services.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-cream p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Heritage & Harmony Guide</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Comprehensive guide to our full-service Indian wedding planning package.
                </p>
                <Button asChild className="w-full">
                  <Link href="/heritage-harmony-guide">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="bg-cream p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">India Shopping Lookbook</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Everything you need to know about shopping for authentic wedding attire from India.
                </p>
                <Button asChild className="w-full">
                  <Link href="/shopping-from-india">
                    View Lookbook
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-cream p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">New Client Intake</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Start your planning journey with our comprehensive intake questionnaire.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/forms/new-client-intake">
                    Fill Form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="bg-cream p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Virtual Shopping Form</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Request authentic Indian wedding attire and jewelry sourced directly from India.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/forms/virtual-shopping">
                    Start Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="bg-cream p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Mexico Pre-Consult</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Planning a destination wedding in Mexico? Share your vision with us.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/forms/mexico-pre-consult">
                    Submit Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-extralight text-charcoal mb-4">Planning Tools</h2>
              <p className="text-charcoal/60 font-light max-w-2xl mx-auto">
                Free calculators, checklists, and calendars to organize your wedding.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            <FadeInSection>
              <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">12-Month Checklist</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Never miss a deadline with our comprehensive month-by-month wedding planning checklist.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="#checklist">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <Calculator className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Budget Calculator</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Indian wedding-specific budget tool with realistic cost breakdowns by category.
                </p>
                <Button asChild className="w-full">
                  <Link href="/budget-planner">
                    Open Calculator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Auspicious Dates</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  Hindu wedding muhurat dates for 2025-2026 based on the Panchang calendar.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="#auspicious-dates">
                    View Dates
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary/40 transition-all h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Wedding Glossary</h3>
                <p className="text-charcoal/70 font-light mb-6 flex-grow">
                  A-Z guide to Indian wedding terms, traditions, and ceremonies explained.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/wedding-glossary">
                    Explore Terms
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 12-Month Checklist Section */}
      <section id="checklist" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal mb-4">
                12-Month Wedding Checklist
              </h2>
              <p className="text-charcoal/60 font-light max-w-2xl mx-auto">
                Stay organized with our comprehensive timeline for planning your perfect day.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklistItems.map((item, i) => (
              <FadeInSection key={i} delay={i * 50}>
                <div className="bg-white p-6 border border-warm-beige/40 h-full">
                  <h3 className="font-serif text-lg font-medium text-primary mb-4">{item.month}</h3>
                  <ul className="space-y-2">
                    {item.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-charcoal/70 font-light text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Personalized Checklist
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Auspicious Dates Section */}
      <section id="auspicious-dates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal mb-4">
                Auspicious Wedding Dates 2025
              </h2>
              <p className="text-charcoal/60 font-light max-w-2xl mx-auto">
                Hindu Shubh Muhurat dates according to the Panchang calendar. Consult with your pandit for specific
                timings.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auspiciousDates2025.map((item, i) => (
              <FadeInSection key={i} delay={i * 50}>
                <div className="bg-cream p-6 border border-warm-beige/40">
                  <h3 className="font-serif text-lg font-medium text-charcoal mb-4 flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    {item.month}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.dates.map((date, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-white text-charcoal/80 text-sm font-light border border-warm-beige/40"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-center text-charcoal/70 font-light">
              <strong className="text-charcoal">Note:</strong> These dates are general guidelines based on the Hindu
              Panchang. For Sikh or other cultural traditions, please consult with your religious leader for specific
              auspicious dates.
              <Link href="/book-consultation" className="text-primary hover:text-accent ml-2 underline">
                Schedule a free consultation
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal">Need Personalized Help?</h2>
          <p className="text-xl text-charcoal/70 font-light">
            Our experts can create a custom planning timeline and budget just for you.
          </p>
          <Button size="lg" asChild>
            <Link href="/book-consultation">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
