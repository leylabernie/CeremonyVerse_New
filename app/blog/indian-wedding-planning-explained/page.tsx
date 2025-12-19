import type React from "react"
import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "why-different", title: "Why Indian weddings are different" },
  { id: "ceremonies", title: "Common ceremonies and what happens" },
  { id: "timeline", title: "A practical planning timeline" },
  { id: "fusion", title: "Fusion wedding planning" },
  { id: "budget", title: "Budget reality (what drives cost)" },
  { id: "vendors", title: "Vendor checklist" },
  { id: "logistics", title: "Guest experience & logistics" },
  { id: "destination", title: "Destination Indian weddings" },
]

export default function PillarPost() {
  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Indian Wedding Planning Explained</h1>
        <p className="mt-4 text-muted max-w-3xl">
          A complete, practical guide to planning Indian and fusion weddings: events, timelines, budgeting, vendors,
          logistics, and what to do first.
        </p>
        <div className="mt-6 flex gap-3">
          <Button href="/start-planning">Start Planning</Button>
          <Button href="/wedding-journeys" variant="secondary">
            Wedding Journeys →
          </Button>
        </div>
      </Section>

      <Section variant="warm">
        <div className="grid gap-6 md:grid-cols-[320px_1fr]">
          <Card className="h-fit md:sticky md:top-24">
            <div className="font-medium">Table of contents</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {sections.map((s) => (
                <li key={s.id}>
                  <a className="hover:text-ink" href={`#${s.id}`}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Button href="/start-planning" className="w-full">
                Start Planning
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <ArticleSection id="why-different" title="Why Indian weddings are different">
              Multi-day ceremonies, cultural precision, and family expectations make Indian weddings uniquely complex. A
              clear process and timeline protects your budget and reduces stress.
            </ArticleSection>

            <ArticleSection id="ceremonies" title="Common ceremonies and what happens">
              Most celebrations include Mehendi, Haldi, Sangeet, the wedding ceremony, and reception. Each event has its
              own timeline, vendor needs, and guest-flow considerations.
            </ArticleSection>

            <Callout />

            <ArticleSection id="timeline" title="A practical planning timeline">
              Start 9–14 months ahead when possible. Lock venue(s), confirm ceremony structure, then build vendor plans
              around the number of events and guest count.
            </ArticleSection>

            <ArticleSection id="fusion" title="Fusion wedding planning">
              Fusion planning works best when you decide what must stay traditional and where you'll blend. Ceremony
              sequencing and family alignment are the keys.
            </ArticleSection>

            <ArticleSection id="budget" title="Budget reality (what drives cost)">
              Guest count, number of events, food & beverage, décor, venue fees, and production complexity drive the
              real budget. Planning helps you choose where to invest for maximum impact.
            </ArticleSection>

            <ArticleSection id="vendors" title="Vendor checklist">
              Officiant/priest, venue(s), catering, décor, photo/video, MUA, DJ/entertainment, transportation, timeline
              management.
            </ArticleSection>

            <ArticleSection id="logistics" title="Guest experience & logistics">
              Clear schedules, transport buffers, and ceremony start times create a calm experience for guests and
              families—especially across multiple events.
            </ArticleSection>

            <ArticleSection id="destination" title="Destination Indian weddings">
              Prioritize vendor coordination, ceremony-ready venues, local regulations, and logistics planning. Strong
              timelines and documentation matter even more.
            </ArticleSection>

            <Card className="md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">Want help matching your vision to your budget?</h2>
              <p className="mt-3 text-muted">
                Start with a high-intent intake so we can recommend the right level of planning support.
              </p>
              <div className="mt-6 flex gap-3">
                <Button href="/start-planning">Start Planning</Button>
                <Button href="/services" variant="secondary">
                  Compare Services
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}

function ArticleSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <h2 id={id} className="text-xl md:text-2xl font-semibold tracking-tight scroll-mt-24">
        {title}
      </h2>
      <p className="mt-3 text-muted">{children}</p>
    </Card>
  )
}

function Callout() {
  return (
    <div className="rounded-2xl border border-border bg-sand p-6">
      <div className="text-sm font-medium">Timeline tip</div>
      <p className="mt-2 text-sm text-muted">
        The biggest budget saver for multi-day weddings is a clear event sequence and timeline. It prevents last-minute
        vendor changes and duplicated costs.
      </p>
    </div>
  )
}
