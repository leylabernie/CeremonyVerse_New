import type React from "react"
import { cx } from "@/lib/cx"

export function Section({
  children,
  className,
  alt,
}: {
  children: React.ReactNode
  className?: string
  alt?: boolean
}) {
  return (
    <section className={cx(alt ? "bg-surface-2" : "bg-bg", "py-12 md:py-16", className)}>
      <div className="mx-auto w-full max-w-page px-5 md:px-8">{children}</div>
    </section>
  )
}
