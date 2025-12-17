"use client"

import dynamic from "next/dynamic"

const AIPlanningAssistant = dynamic(() => import("@/components/ai-planning-assistant"), {
  ssr: false,
  loading: () => null,
})

export function LazyAIPlanningAssistant() {
  return <AIPlanningAssistant />
}
