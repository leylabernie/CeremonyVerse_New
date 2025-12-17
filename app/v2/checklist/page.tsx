import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ChecklistPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-6">Fusion Wedding Checklist</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Download our comprehensive 12-month checklist designed specifically for Indian-American fusion weddings.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl mb-2">Get the Free Checklist</h3>
            <p className="text-muted-foreground text-sm">Enter your email to receive the PDF instantly.</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <Button className="w-full" size="lg">
              Send Me the Checklist
            </Button>
          </form>
          <p className="text-xs text-center text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
