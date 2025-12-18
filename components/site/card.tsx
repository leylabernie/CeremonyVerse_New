import type React from "react"
import { cx } from "@/lib/cx"

export function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cx("rounded-2xl bg-surface border border-border shadow-soft p-6", className)}>{children}</div>
}
