import type { Metadata } from "next"
import TraditionExplainer from "@/components/TraditionExplainer"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Wedding Tradition Explainer | CeremonyVerse",
  description:
    "Learn about Indian and South Asian wedding traditions, rituals, and ceremonies. Get clear explanations of cultural practices for your wedding planning.",
  robots: "index, follow",
}

export default function TraditionExplainerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-serif mb-4">Wedding Tradition Explainer</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Understand the cultural significance and practical details of Indian and South Asian wedding traditions
      </p>

      <Alert className="mb-8">
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          <strong>AI-Powered Tool:</strong> This tool uses artificial intelligence to provide general information about
          wedding traditions. Explanations are for educational purposes only and should not replace consultation with
          cultural or religious advisors. CeremonyVerse is not responsible for the accuracy or completeness of
          AI-generated content.
        </AlertDescription>
      </Alert>

      <TraditionExplainer />

      <div className="mt-12 prose prose-sm max-w-none">
        <h2 className="text-2xl font-serif mb-4">How to Use This Tool</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>Enter the name of any Indian wedding tradition, ritual, or ceremony</li>
          <li>Get instant explanations of cultural significance and procedures</li>
          <li>Learn about modern variations and practical planning considerations</li>
          <li>Use this information to make informed decisions about your wedding</li>
        </ul>
      </div>
    </div>
  )
}
