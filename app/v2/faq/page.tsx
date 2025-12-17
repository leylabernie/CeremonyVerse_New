import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you handle both Hindu and Christian ceremonies?",
      answer:
        "Yes! We specialize in fusion weddings and have extensive experience coordinating both Hindu and Christian ceremonies, often on the same day or same weekend. We understand the specific rituals and requirements of both.",
    },
    {
      question: "How does your payment protection work?",
      answer:
        "We use secure payment processing via Stripe, PayPal, and Zelle for all transactions. Payments are made according to agreed-upon milestones tied to deliverables, and all transactions are protected by professional contracts. This ensures both parties are protected throughout the process.",
    },
    {
      question: "Can you help us find a venue that allows outside catering?",
      answer:
        "Absolutely. This is one of our top priorities for Indian weddings. We have a curated list of venues in major cities that allow outside catering or have experience with Indian cuisine.",
    },
    {
      question: "Do you travel for weddings?",
      answer:
        "Yes, we are based in the US but travel nationwide. We have planned weddings in Austin, San Francisco, New York, and beyond.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "For full planning, we recommend 12-18 months in advance. For partial or month-of coordination, 6-9 months is ideal. However, we can work with shorter timelines depending on availability.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our packages start at $3,500 for month-of coordination. We offer transparent flat-fee pricing based on the complexity and guest count of your event. See our Pricing page for more details.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Answers to common questions about planning your fusion wedding.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-serif text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
