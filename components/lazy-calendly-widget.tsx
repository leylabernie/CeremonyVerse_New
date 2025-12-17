"use client"

import dynamic from "next/dynamic"

const CalendlyWidget = dynamic(
  () => import("@/components/calendly-widget").then((mod) => ({ default: mod.CalendlyWidget })),
  {
    ssr: false,
    loading: () => null,
  },
)

export function LazyCalendlyWidget() {
  return <CalendlyWidget />
}
