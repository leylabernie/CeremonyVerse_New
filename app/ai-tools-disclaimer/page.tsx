import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Assisted Wedding Invitation & Outfit Design Tools Disclaimer | CeremonyVerse",
  description:
    "Learn how CeremonyVerse uses AI-assisted tools to support creative exploration for invitations and outfit design, while keeping wedding planning human-led and culturally grounded.",
};

export default function AIToolsDisclaimerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Legal Notice
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6">
          AI-Assisted Creative Tools Disclaimer
        </h1>

        <div className="space-y-5 text-base leading-relaxed">
          <p>
            CeremonyVerse offers optional creative tools to support wedding planning inspiration —
            including:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Invitation Package Generator</li>
            <li>Outfit Design Generator</li>
          </ul>

          <p>
            These tools use AI technology to help couples explore style ideas, visual themes, and
            design directions. They are intended <strong>for inspiration only</strong> and do not
            replace professional design services, cultural guidance, or legal/contracted
            deliverables.
          </p>

          <p>
            CeremonyVerse does <strong>not</strong> use AI to generate planning recommendations that
            require human judgment such as budgets, logistics, or vendor negotiations. All wedding
            planning services are performed by real people with cultural expertise.
          </p>

          <p>Any AI-generated content:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>may include inaccuracies or incomplete results</li>
            <li>should be reviewed and customized before final use</li>
            <li>remains the responsibility of the end user to approve</li>
          </ul>

          <p>
            When working with us, you are always welcome to request non-AI creative support,
            human-only review of concepts, or clarification on how your information is used.
          </p>

          <p>
            Our goal is to make planning easier — never automated, never impersonal. If you have
            questions about these tools, please contact us at{" "}
            <a
              href="mailto:hello@ceremonyverse.com"
              className="underline underline-offset-4 hover:text-primary"
            >
              hello@ceremonyverse.com
            </a>
            .
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            This disclaimer applies only to AI-assisted creative tools. It does not apply to our
            wedding planning services or to the core content of this website, which are human-led
            and culturally grounded.
          </p>
        </div>
      </section>
    </main>
  );
}
