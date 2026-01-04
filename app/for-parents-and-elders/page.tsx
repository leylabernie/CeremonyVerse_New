import { Button } from "@/components/ui/button"
import { Heart, Shield, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "For Parents & Elders | CeremonyVerse Indian Wedding Planning",
  description:
    "Information for Indian parents and elders about planning authentic Indian weddings in the USA. Understanding customs, payments, and working with American vendors while preserving traditions.",
  keywords:
    "Indian wedding planning for parents, Gujarati wedding customs USA, Tamil wedding traditions America, Hindu wedding planning parents guide",
}

export default function ForParentsEldersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">નમસ્તે | வணக்கம் | Namaste</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">For Parents & Elders</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Planning an authentic Indian wedding in America can feel uncertain. We understand your concerns about
            preserving traditions, managing vendors, and ensuring everything is done properly. This page answers your
            questions with respect and clarity.
          </p>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Promise to Your Family</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "We Honor Your Traditions",
                description:
                  "We never change rituals or customs without your family's input and approval. Your religious and cultural practices come first.",
              },
              {
                icon: Shield,
                title: "We Explain Everything Clearly",
                description:
                  "No confusing jargon. We explain how American vendors, contracts, and payments work in simple, respectful terms.",
              },
              {
                icon: CheckCircle,
                title: "We Work With You",
                description:
                  "We coordinate with pandits, family elders, and cultural advisors to ensure ceremonies are authentic and meaningful.",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ for Parents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Common Questions from Parents & Elders
          </h2>

          <div className="space-y-8">
            {[
              {
                question: "Can we still have all our traditional rituals and customs?",
                answer:
                  "Absolutely. We specialize in authentic Gujarati, Tamil Christian, and Hindu weddings. Whether you want Grah Shanti, Pithi, Ganesh Puja, Mehndi, Sangeet, or specific regional customs, we work with you and your pandit or priest to ensure every ritual is done correctly. We never skip or modify ceremonies without your family's permission.",
              },
              {
                question: "How do payments and deposits work in America?",
                answer:
                  "American wedding vendors work with written contracts and milestone-based payment schedules. Here's how it works: You sign a clear contract with each vendor that lists exactly what services they provide, when payments are due, what is refundable, and what is not. Deposits are typically 25-50% upfront, with the balance due closer to the wedding date. Payments are processed through secure payment processors (like Stripe or PayPal) directly to vendors. CeremonyVerse coordinates the process and ensures you understand every payment before it's made, but we do not hold deposits or operate as a bank. All money goes directly to vendors through secure, professional payment systems.",
              },
              {
                question: "What if something goes wrong? Who is responsible?",
                answer:
                  "Every vendor you work with has a written contract that clearly states their responsibilities. If a vendor fails to deliver, you have legal protection through the contract. CeremonyVerse acts as your advocate and coordinator—we will work with vendors to resolve issues, request corrections, and ensure accountability. We also conduct pre-shipment inspections for India shopping items and provide detailed timelines so nothing is missed.",
              },
              {
                question: "Can we speak with you in Gujarati, Hindi, or Tamil?",
                answer:
                  "Yes. We understand basic Gujarati and Hindi for family conversations and cultural discussions. For Tamil Christian families, we work closely with community members and priests who can provide language support as needed. We're also comfortable coordinating with extended family members who may prefer to communicate in their native language.",
              },
              {
                question: "How do we know your India suppliers are trustworthy?",
                answer:
                  "We only work with suppliers we have personally verified. This includes checking their business registration, customer reviews, quality of work, and reliability with international shipments. Before any items are shipped, we conduct quality inspections with photo and video documentation that you review and approve. You are in control of every purchase decision.",
              },
              {
                question: "What if we want to involve our family pandit or priest?",
                answer:
                  "We encourage it! Many families prefer to work with their own pandit, priest, or religious advisor. We coordinate with them to ensure ceremony timings, setup, and logistics align with their requirements. If you need help finding a qualified pandit or priest in the USA, we can also provide referrals from our vetted network.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{item.question}</h3>
                <p className="text-foreground/70 leading-relaxed whitespace-pre-line">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Understanding */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8 text-center">We Understand Your Culture</h2>
          <div className="bg-card border border-border rounded-xl p-8 space-y-4 text-foreground/70">
            <p>
              We know that for many Indian families, weddings are about more than just the couple—they reflect family
              honor, cultural identity, and religious devotion.
            </p>
            <p>
              We respect the importance of elders in decision-making, the significance of auspicious dates and times,
              and the need for community and family involvement throughout the planning process.
            </p>
            <p>
              Whether your family is Gujarati, Tamil, Telugu, Punjabi, or from another Indian region, we take time to
              understand your specific customs and work closely with you to bring them to life in America.
            </p>
            <p className="font-semibold text-foreground pt-4">
              Your traditions are safe with us. We are here to serve your family with honesty, respect, and cultural
              sensitivity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Let's Talk About Your Family's Wedding</h2>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Schedule a free consultation to discuss your family's needs, cultural requirements, and any questions or
            concerns you have. We're here to listen and help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/start-planning">Schedule Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+12153419990">
                <Phone className="mr-2 h-5 w-5" />
                Call +1-215-341-9990
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
