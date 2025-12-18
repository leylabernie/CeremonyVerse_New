"use client"

import type React from "react"

import { useState } from "react"
import { cx } from "@/lib/cx"

export function Accordion({
  items,
}: {
  items: Array<{ title: string; content: React.ReactNode }>
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx
        return (
          <div key={idx} className="rounded-2xl border border-cvBorder bg-cvSurface shadow-soft">
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{it.title}</span>
              <span className={cx("text-cvMuted transition", isOpen && "rotate-180")}>⌄</span>
            </button>
            {isOpen && <div className="px-6 pb-6 text-cvMuted">{it.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
