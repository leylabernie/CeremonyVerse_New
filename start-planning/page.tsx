"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"

type FormState = {
  name: string
  email: string
  phone: string
  location: string
  weddingDate: string
  weddingLocation: string
  weddingType: string[]
  events: string[]
  guestCount: string
  support: string
  planningBudget: string
  timeline: string
  challenge: string
  notes: string
  consent: boolean
}

const weddingTypes = ["Gujarati", "South Indian", "Punjabi", "Jain", "Fusion", "Other"]
const eventsList = ["Mehendi", "Haldi", "Sangeet", "Wedding Ceremony", "Reception", "Other"]

const INPUT_CLASS =
  "w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-foreground " +
  "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"

const SELECT_CLASS =
  "mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-foreground " +
  "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"

export default function StartPlanningPage() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState<{ recommendation: string; nextHref: string } | null>(null)

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    location: "",
    weddingDate: "",
    weddingLocation: "",
    weddingType: [],
    events: [],
    guestCount: "100–200",
    support: "Full Planning",
    planningBudget: "$3,500–$8,000",
    timeline: "6–12 months",
    challenge: "Timelines & logistics",
    notes: "",
    consent: false,
  })

  const recommendation = useMemo(() => {
    // Routing logic (edit ranges later if you want)
    if (form.planningBudget === "Under $1,500") {
      return { recommendation: "Planning Intensive (best for tight budgets)", nextHref: "/contact" }
    }
    if (form.planningBudget === "$1,500–$3,500") {
      return { recommendation: "Planning Intensive + Follow-up support", nextHref: "/contact" }
    }
    if (form.planningBudget === "$3,500–$8,000") {
      return { recommendation: "Coordination / Partial Planning", nextHref: "/contact" }
    }
    return { recommendation: "Partial or Full Planning (best fit)", nextHref: "/contact" }
  }, [form.planningBudget])

  function toggleMulti(field: "weddingType" | "events", value: string) {
    setForm((p) => {
      const set = new Set(p[field])
      if (set.has(value)) set.delete(value)
      else set.add(value)
      return { ...p, [field]: Array.from(set) }
    })
  }

  async function onSubmit() {
    if (!form.name || !form.email || !form.consent) {
      alert("Please complete required fields (name, email, consent).")
      return
    }

    setSubmitting(true)
    try {
      // OPTION 1 (recommended): send to a simple API route
      const res = await fetch("/api/start-planning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recommendation: recommendation.recommendation }),
      })
      if (!res.ok) throw new Error("Submit failed")

      setDone(recommendation)
    } catch {
      alert("Something went wrong. Please try again or book a consultation.")
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <Section>
        <Card className="md:p-10 border border-gray-200 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Thank you!</h1>
          <p className="mt-3 text-muted-foreground">
            Based on what you shared, we recommend: <b>{done.recommendation}</b>.
          </p>
          <p className="mt-2 text-muted-foreground">
            Next step: schedule a consultation so we can confirm scope, timeline, and what's realistic within your
            budget.
          </p>
          <div className="mt-6 flex gap-3">
            <Button href={done.nextHref}>Book Consultation</Button>
            <Button href="/services" variant="secondary">
              Compare Services
            </Button>
          </div>
        </Card>
      </Section>
    )
  }

  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Start Planning</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Share your budget, events, and location. We'll recommend the right level of support—so you get help without
          overpaying or underplanning.
        </p>
      </Section>

      <Section variant="warm">
        <Card className="md:p-10 border border-gray-200 shadow-sm">
          <div className="text-xs text-muted-foreground">Step {step} of 4</div>

          {step === 1 && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Full name *">
                <input
                  className={INPUT_CLASS}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Field>
              <Field label="Email *">
                <input
                  className={INPUT_CLASS}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  className={INPUT_CLASS}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </Field>
              <Field label="Your location (city/state)">
                <input
                  className={INPUT_CLASS}
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </Field>
            </div>
          )}

          {step === 2 && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Wedding date (or approximate)">
                <input
                  className={INPUT_CLASS}
                  value={form.weddingDate}
                  onChange={(e) => setForm({ ...form, weddingDate: e.target.value })}
                />
              </Field>
              <Field label="Wedding location (city/state/country)">
                <input
                  className={INPUT_CLASS}
                  value={form.weddingLocation}
                  onChange={(e) => setForm({ ...form, weddingLocation: e.target.value })}
                />
              </Field>

              <div className="md:col-span-2">
                <div className="text-sm font-medium">Wedding type (select all)</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {weddingTypes.map((t) => (
                    <Tag key={t} active={form.weddingType.includes(t)} onClick={() => toggleMulti("weddingType", t)}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="text-sm font-medium">Events planned (select all)</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {eventsList.map((t) => (
                    <Tag key={t} active={form.events.includes(t)} onClick={() => toggleMulti("events", t)}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <SelectField
                label="Guest count"
                value={form.guestCount}
                onChange={(v) => setForm({ ...form, guestCount: v })}
                options={["Under 100", "100–200", "200–300", "300+"]}
              />
              <SelectField
                label="Support needed"
                value={form.support}
                onChange={(v) => setForm({ ...form, support: v })}
                options={["Full Planning", "Partial Planning", "Virtual Planning", "Destination Planning"]}
              />

              <SelectField
                label="Planning support budget range"
                value={form.planningBudget}
                onChange={(v) => setForm({ ...form, planningBudget: v })}
                options={["Under $1,500", "$1,500–$3,500", "$3,500–$8,000", "$8,000+"]}
              />

              <SelectField
                label="Planning timeline"
                value={form.timeline}
                onChange={(v) => setForm({ ...form, timeline: v })}
                options={["Need help now", "3–6 months", "6–12 months", "12+ months"]}
              />

              <SelectField
                label="Biggest challenge"
                value={form.challenge}
                onChange={(v) => setForm({ ...form, challenge: v })}
                options={[
                  "Timelines & logistics",
                  "Cultural coordination",
                  "Vendor sourcing",
                  "Destination planning",
                  "Family expectations",
                ]}
              />

              <div className="md:col-span-2 rounded-2xl border border-border bg-sand p-4 text-sm text-muted-foreground">
                Recommended path (based on budget): <b>{recommendation.recommendation}</b>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="mt-4 grid gap-4">
              <Field label="Notes (optional)">
                <textarea
                  className={INPUT_CLASS + " min-h-[140px]"}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </Field>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
                <span>I agree to be contacted about my inquiry.</span>
              </label>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="secondary"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1 || submitting}
            >
              Back
            </Button>

            {step < 4 ? (
              <Button onClick={() => setStep((s) => Math.min(4, s + 1))} disabled={submitting}>
                Continue
              </Button>
            ) : (
              <Button onClick={onSubmit} disabled={submitting}>
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>
        </Card>
      </Section>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-medium">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <div>
      <div className="text-sm font-medium">{label}</div>
      <select className={SELECT_CLASS} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function Tag({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-xs transition",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-gray-300 bg-white text-foreground hover:bg-secondary",
      ].join(" ")}
    >
      {children}
    </button>
  )
}
