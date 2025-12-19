import type React from "react"
import { cx } from "@/lib/cx"

export function Section({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "surface" | "surface2" | "warm" | "warm2"
}) {
  const bgClass =
    variant === "surface"
      ? "bg-surface"
      : variant === "surface2"
        ? "bg-surface-2"
        : variant === "warm"
          ? "bg-warm"
          : variant === "warm2"
            ? "bg-warm-2"
            : "bg-bg"

  return (
    <section className={cx(bgClass, "py-18 md:py-24 lg:py-28", className)}>
      <div className="mx-auto w-full max-w-page px-5 md:px-8">{children}</div>
    </section>
  )
}
