import type React from "react"
import { cx } from "@/lib/cx"

export function Card({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={cx(
        "rounded-[22px] bg-surface border border-border p-6",
        "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_12px_40px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
