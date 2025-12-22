import { Section } from "@/components/site/section"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/schema/JsonLd"
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema"

export const metadata = {
  title: "Virtual Indian Wedding Planning: How It Works | Remote Coordination Nationwide | CeremonyVerse",
  description:
    "Complete guide to virtual Indian wedding planning. How remote coordination works, benefits vs in-person planning, technology requirements, and what to expect when working with a virtual wedding planner nationwide.",
  keywords:
    "virtual wedding planner, virtual indian wedding planning, online wedding planning services, remote wedding planning, virtual wedding coordination",
}

export default function VirtualWeddingPlanningGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Virtual Indian Wedding Planning: How It Works",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    author: {
      "@type": "Person",
      name: "CeremonyVerse Team",
    },
    publisher: {
      "@type": "Organization",
      name: "CeremonyVerse",
    },
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ceremonyverse.com" },
          { name: "Blog", url: "https://ceremonyverse.com/blog" },
          {
            name: "Virtual Wedding Planning Guide",
            url: "https://ceremonyverse.com/blog/virtual-wedding-planning-guide",
          },
        ]}
      />

      <Section>
        <article className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Virtual Indian Wedding Planning: How It Works
          </h1>

          <p className="text-cvMuted mb-8">
            Virtual wedding planning allows you to work with a professional Indian wedding planner from anywhere in the
            country. Through video calls, shared planning tools, and digital coordination, you get expert cultural
            guidance and vendor management without geographic limitations. Here's exactly how it works and what to
            expect.
          </p>

          <div className="bg-cvWarm p-6 rounded-lg mb-10">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is-virtual-planning" className="text-cvAccent hover:underline">
                  What is Virtual Wedding Planning?
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-cvAccent hover:underline">
                  How Virtual Planning Works
                </a>
              </li>
              <li>
                <a href="#virtual-vs-in-person" className="text-cvAccent hover:underline">
                  Virtual vs In-Person: Pros & Cons
                </a>
              </li>
              <li>
                <a href="#technology-requirements" className="text-cvAccent hover:underline">
                  Technology & Tools Required
                </a>
              </li>
              <li>
                <a href="#services-included" className="text-cvAccent hover:underline">
                  What Services Are Included
                </a>
              </li>
              <li>
                <a href="#vendor-coordination" className="text-cvAccent hover:underline">
                  How Vendor Coordination Works Remotely
                </a>
              </li>
              <li>
                <a href="#cultural-guidance" className="text-cvAccent hover:underline">
                  Cultural Expertise & Ceremony Planning
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-cvAccent hover:underline">
                  Virtual Planning Pricing
                </a>
              </li>
            </ul>
          </div>

          <h2 id="what-is-virtual-planning" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            What is Virtual Wedding Planning?
          </h2>
          <p className="text-cvMuted mb-6">
            Virtual wedding planning provides full-service wedding coordination through digital communication—video
            calls, email, shared planning documents, and project management tools. Your planner guides every aspect of
            your wedding from budget strategy to ceremony sequencing to vendor management without requiring in-person
            meetings.
          </p>
          <p className="text-cvMuted mb-6">
            For Indian and fusion weddings, virtual planning is especially valuable because it allows you to work with
            planners who have deep cultural expertise regardless of where you're located. You're not limited to planners
            in your immediate area.
          </p>

          <h2 id="how-it-works" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            How Virtual Planning Works: Step-by-Step
          </h2>

          <h3 className="text-xl font-semibold mb-3">Step 1: Initial Consultation (Video Call)</h3>
          <p className="text-cvMuted mb-6">
            Your first meeting is a 60-90 minute video consultation where you discuss your vision, budget, cultural
            traditions, and timeline. This call establishes whether you're a good fit to work together and allows the
            planner to understand your priorities.
          </p>

          <h3 className="text-xl font-semibold mb-3">Step 2: Budget & Timeline Development</h3>
          <p className="text-cvMuted mb-6">
            Your planner creates a detailed budget breakdown and planning timeline based on your wedding date, guest
            count, and priorities. You'll receive a shared document you can update as planning progresses.
          </p>

          <h3 className="text-xl font-semibold mb-3">Step 3: Vendor Sourcing & Coordination</h3>
          <p className="text-cvMuted mb-6">
            Your planner researches and recommends vendors in your wedding location, coordinates initial outreach, and
            facilitates contract reviews. All vendor communication happens via email, phone, and video calls with your
            planner managing the coordination.
          </p>

          <h3 className="text-xl font-semibold mb-3">Step 4: Regular Check-In Calls</h3>
          <p className="text-cvMuted mb-6">
            You'll have scheduled video calls (bi-weekly or monthly depending on your timeline) to review progress, make
            decisions, and address any challenges. Between calls, you communicate via email or project management tools.
          </p>

          <h3 className="text-xl font-semibold mb-3">Step 5: Ceremony Planning & Cultural Guidance</h3>
          <p className="text-cvMuted mb-6">
            Your planner provides detailed ceremony sequencing for Hindu, Sikh, Gujarati, Punjabi, South Indian, or
            fusion weddings. This includes creating ceremony timelines, coordinating with priests or officiants, and
            explaining ritual requirements.
          </p>

          <h3 className="text-xl font-semibold mb-3">Step 6: Final Month Coordination</h3>
          <p className="text-cvMuted mb-6">
            In the weeks before your wedding, your planner creates detailed timelines for all events, communicates final
            details to vendors, and coordinates logistics. They may travel to your wedding location for day-of
            coordination or work with a local day-of coordinator.
          </p>

          <h2 id="virtual-vs-in-person" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Virtual vs In-Person Planning: Pros & Cons
          </h2>

          <h3 className="text-xl font-semibold mb-3">Virtual Planning Advantages</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>Access to specialized expertise:</strong> Work with planners who understand your specific cultural
              traditions regardless of location
            </li>
            <li>
              <strong>Lower costs:</strong> Virtual planning often costs 20-30% less than in-person planning
            </li>
            <li>
              <strong>Flexible scheduling:</strong> Video calls can accommodate different time zones and busy schedules
            </li>
            <li>
              <strong>Digital organization:</strong> All planning documents, timelines, and communication are
              centralized online
            </li>
            <li>
              <strong>Nationwide reach:</strong> Perfect for destination weddings or couples planning events far from
              where they live
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Virtual Planning Limitations</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>No in-person venue visits:</strong> You'll rely on virtual tours, photos, and local vendor
              recommendations
            </li>
            <li>
              <strong>Day-of coordination requires travel or local coordinator:</strong> Your planner may need to travel
              to your location or work with a local coordinator
            </li>
            <li>
              <strong>Less spontaneous collaboration:</strong> Requires scheduled calls rather than impromptu meetings
            </li>
            <li>
              <strong>Vendor relationships:</strong> Your planner may not have existing relationships with vendors in
              your area
            </li>
          </ul>

          <h2 id="technology-requirements" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Technology & Tools You'll Need
          </h2>

          <h3 className="text-xl font-semibold mb-3">Required</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>Stable internet connection:</strong> For video calls and file sharing
            </li>
            <li>
              <strong>Video calling software:</strong> Zoom, Google Meet, or FaceTime
            </li>
            <li>
              <strong>Email:</strong> Primary communication channel between calls
            </li>
            <li>
              <strong>Shared documents:</strong> Google Docs, Sheets, or Excel for budgets and timelines
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Optional but Helpful</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>Project management tools:</strong> Asana, Trello, or Airtable for task tracking
            </li>
            <li>
              <strong>Cloud storage:</strong> Google Drive or Dropbox for contracts and design inspiration
            </li>
            <li>
              <strong>Mobile scanning app:</strong> For sharing contracts or documents quickly
            </li>
          </ul>

          <h2 id="services-included" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            What Virtual Planning Services Include
          </h2>
          <p className="text-cvMuted mb-6">Virtual planning packages typically include:</p>

          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>Budget development and tracking</li>
            <li>Timeline creation and management</li>
            <li>Vendor sourcing and recommendations</li>
            <li>Contract review and negotiation support</li>
            <li>Cultural ceremony planning and sequencing</li>
            <li>Coordination with priests/officiants</li>
            <li>Design and décor guidance</li>
            <li>Guest experience planning</li>
            <li>RSVP tracking and seating charts</li>
            <li>Communication with vendors (email/phone)</li>
            <li>Final timeline creation for all events</li>
            <li>Day-of coordination (may require travel or local coordinator)</li>
          </ul>

          <h2 id="vendor-coordination" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            How Vendor Coordination Works Remotely
          </h2>
          <p className="text-cvMuted mb-6">Your virtual planner coordinates with vendors through:</p>

          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>Email communication:</strong> Primary method for detailed requests and documentation
            </li>
            <li>
              <strong>Phone and video calls:</strong> For complex discussions or tastings/tours
            </li>
            <li>
              <strong>Virtual vendor tours:</strong> Many vendors now offer FaceTime or Zoom walkthroughs
            </li>
            <li>
              <strong>Shared calendars:</strong> Coordinating vendor timelines and deliverables
            </li>
            <li>
              <strong>Document management:</strong> Centralizing contracts, invoices, and deliverable checklists
            </li>
          </ul>

          <h2 id="cultural-guidance" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Cultural Expertise & Ceremony Planning
          </h2>
          <p className="text-cvMuted mb-6">
            One of the biggest advantages of virtual planning is access to cultural expertise. CeremonyVerse provides
            guidance on:
          </p>

          <ul className="list-disc pl-6 text-cvMuted space-y-2 mb-6">
            <li>
              <strong>Hindu wedding ceremonies:</strong> Ceremony sequencing, ritual requirements, priest coordination
            </li>
            <li>
              <strong>Sikh weddings (Anand Karaj):</strong> Gurdwara protocols, ceremony flow, pre-wedding rituals
            </li>
            <li>
              <strong>Regional traditions:</strong> Gujarati, Punjabi, South Indian, Tamil, Telugu customs
            </li>
            <li>
              <strong>Fusion weddings:</strong> Blending Hindu-Christian, Hindu-Jewish, or interfaith traditions
            </li>
            <li>
              <strong>Multi-day events:</strong> Coordinating Sangeet, Mehndi, Baraat, reception logistics
            </li>
          </ul>

          <h2 id="pricing" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">
            Virtual Wedding Planning Pricing
          </h2>
          <p className="text-cvMuted mb-6">
            Virtual planning typically costs 20-30% less than in-person planning due to eliminated travel costs and
            overhead. Here's typical pricing:
          </p>

          <div className="bg-cvWarm p-6 rounded-lg mb-6">
            <ul className="space-y-3 text-cvMuted">
              <li>
                <strong>Planning Intensives (single session):</strong> $800-$1,200
              </li>
              <li>
                <strong>Partial Planning (3-6 months):</strong> $2,500-$4,500
              </li>
              <li>
                <strong>Full Planning (9-12 months):</strong> $5,000-$8,000
              </li>
              <li>
                <strong>Month-of Coordination (virtual):</strong> $1,500-$2,500
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Note: Day-of coordination may require additional fees for travel if your planner is not local to your
              wedding location.
            </p>
          </div>

          <div className="bg-cvWarm p-8 rounded-lg mb-10 mt-10">
            <h3 className="text-xl font-semibold mb-4">Ready to Start Virtual Planning?</h3>
            <p className="text-cvMuted mb-6">
              CeremonyVerse offers virtual Indian wedding planning services nationwide with cultural expertise in Hindu,
              Sikh, Gujarati, Punjabi, South Indian, and fusion weddings. Schedule a free consultation to discuss your
              wedding vision and budget.
            </p>
            <div className="flex gap-3">
              <Button href="/start-planning">Schedule Consultation</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
          <ul className="list-disc pl-6 text-cvMuted space-y-2">
            <li>
              <a href="/blog/south-asian-wedding-budget-guide" className="text-cvAccent hover:underline">
                Indian Wedding Budget Planning Guide
              </a>
            </li>
            <li>
              <a href="/blog/fusion-wedding-planning-guide" className="text-cvAccent hover:underline">
                Fusion Wedding Planning Guide
              </a>
            </li>
            <li>
              <a href="/services/planning-intensives" className="text-cvAccent hover:underline">
                Planning Intensives Service
              </a>
            </li>
          </ul>
        </article>
      </Section>
    </>
  )
}
