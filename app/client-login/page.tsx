import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Client Login | CeremonyVerse",
  description: "Access your CeremonyVerse planning portal.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ClientLoginPage() {
  return (
    <main className="py-20 px-4 min-h-[60vh] flex items-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-light text-stone-900 mb-6">Client Portal</h1>

        <p className="text-stone-600 mb-8">
          The client portal provides access to your planning documents, timelines, and communication history.
        </p>

        <div className="bg-stone-50 p-8 mb-8">
          <p className="text-stone-600 mb-4">
            If you are an existing client, your portal login credentials were provided during onboarding.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
          >
            Access Portal
          </a>
        </div>

        <p className="text-sm text-stone-500">
          Not yet a client?{" "}
          <Link href="/contact" className="text-stone-900 hover:underline">
            Request a Planning Overview
          </Link>
        </p>
      </div>
    </main>
  )
}
