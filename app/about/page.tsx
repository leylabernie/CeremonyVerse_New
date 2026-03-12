import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About CeremonyVerse",
  description:
    "CeremonyVerse helps couples source authentic Indian wedding outfits from trusted boutiques in India while navigating sizing, customization, and international shipping.",
}

export default function AboutPage() {
  return (
    <section className="bg-[#efe8df] py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-serif text-[#1f2933] mb-8">
          About CeremonyVerse
        </h1>

        <p className="text-lg text-[#374151] leading-relaxed mb-6">
          CeremonyVerse was created to help couples and families source
          authentic Indian wedding outfits directly from trusted boutiques in
          India without the confusion of international shopping.
        </p>

        <p className="text-lg text-[#374151] leading-relaxed mb-6">
          Many couples planning Indian weddings in the United States struggle
          with sizing uncertainties, communication barriers with overseas
          vendors, and tight production timelines. CeremonyVerse bridges that
          gap by helping you identify reliable boutiques, coordinate bridal
          party outfits, and navigate the ordering process from start to finish.
        </p>

        <p className="text-lg text-[#374151] leading-relaxed mb-6">
          Whether you are sourcing a bridal lehenga, sherwani, bridesmaid
          outfits, or wedding guest attire, our goal is to make the process
          smoother and more transparent so you can focus on celebrating your
          wedding.
        </p>

        <h2 className="text-2xl font-serif text-[#1f2933] mt-12 mb-4">
          What We Help With
        </h2>

        <ul className="space-y-3 text-[#374151] text-lg">
          <li>• Identifying trusted boutiques in India</li>
          <li>• Coordinating bridal party outfits</li>
          <li>• Navigating sizing and custom tailoring</li>
          <li>• Planning production and shipping timelines</li>
        </ul>

      </div>
    </section>
  )
}
