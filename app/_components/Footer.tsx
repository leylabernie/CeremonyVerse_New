// components/footer.tsx

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-cvCardBorder bg-cvBgSoft">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">

        {/* Top row: simple footer nav / brand */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[0.18em] text-cvMutedText uppercase">
              CeremonyVerse
            </p>
            <p className="text-sm text-cvMutedText">
              Indian &amp; Fusion Wedding Planning • PA · NJ · DE · MD
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-cvMutedText">
            <Link href="/services" className="hover:text-cvAccent">
              Services
            </Link>
            <Link href="/wedding-journeys" className="hover:text-cvAccent">
              Wedding Journeys
            </Link>
            <Link href="/blog" className="hover:text-cvAccent">
              Blog
            </Link>
            <Link href="/pricing" className="hover:text-cvAccent">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-cvAccent">
              About
            </Link>
          </nav>
        </div>

        {/* Disclaimers – ALL SERIF FONT */}
        <section className="border-t border-cvCardBorder pt-6 font-serif text-[0.95rem] leading-relaxed text-cvText">
          <h3 className="mb-3 text-base font-semibold text-cvText md:text-lg">
            Important Disclaimers
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p>
                <strong>Religious &amp; Cultural Information:</strong>{" "}
                Information about wedding ceremonies, traditions, and cultural
                practices on this site is for general educational purposes
                only. Specific requirements vary by region, community, family
                tradition, and individual belief. CeremonyVerse does not
                provide religious rulings or interpretation of religious texts.
                Always confirm details with your family priest, officiant,
                religious advisor, or community elders for guidance that is
                specific to your tradition.
              </p>

              <p>
                <strong>Budget &amp; Financial Information:</strong>{" "}
                Budget estimates and cost ranges are based on typical market
                research and past experience. Actual wedding costs can vary
                significantly based on location, season, guest count, vendor
                availability, and individual choices. Nothing on this website
                should be considered financial, tax, or legal advice. Always
                review numbers with your own advisors before making
                commitments.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                <strong>AI-Powered Planning Tools:</strong>{" "}
                Some optional planning tools and style helpers (for example,
                outfit or design idea generators) may use artificial
                intelligence to suggest wording, visuals, or inspiration.
                These AI outputs are examples only and may contain errors,
                omissions, or outdated information. All AI-generated text and
                images must be carefully reviewed, edited, and independently
                verified by you and your professional advisors before use. They
                are not a substitute for professional, financial, legal, or
                religious advice.
              </p>

              <p>
                <strong>Wedding Planning Services:</strong>{" "}
                CeremonyVerse provides planning, coordination, and advisory
                services, but cannot guarantee specific outcomes or vendor
                performance. Contracts and payments with venues and vendors are
                always between you and those providers. We are not liable for
                vendor failures, venue issues, weather events, travel delays,
                or other circumstances beyond our reasonable control.
              </p>
            </div>
          </div>

          <p className="mt-4 text-[0.88rem] text-cvMutedText">
            <strong>Service Area &amp; Scope:</strong>{" "}
            CeremonyVerse is designed primarily for couples planning Indian and
            fusion weddings in Pennsylvania, New Jersey, Delaware, and
            Maryland. Information and examples are written with these regions
            in mind and may not apply to other locations or legal
            jurisdictions.
          </p>
        </section>

        {/* Bottom row: copyright */}
        <div className="flex flex-col items-start justify-between gap-2 border-t border-cvCardBorder pt-4 text-xs text-cvMutedText md:flex-row md:items-center">
          <p>
            © {year} CeremonyVerse. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/privacy-policy" className="hover:text-cvAccent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-cvAccent">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
