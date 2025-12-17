"use client"

import dynamic from "next/dynamic"

const WhatsAppWidget = dynamic(
  () => import("@/components/whatsapp-widget").then((mod) => ({ default: mod.WhatsAppWidget })),
  {
    ssr: false,
    loading: () => null,
  },
)

export function LazyWhatsAppWidget() {
  return <WhatsAppWidget />
}
