"use client"

import type React from "react"

import Link from "next/link"
import { cx } from "@/lib/cx"

type ButtonVariant = "primary" | "secondary"
type ButtonProps = {
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
  type?: "button" | "submit"
  disabled?: boolean
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition shadow-soft border"
  const styles =
    variant === "primary"
      ? "bg-accent text-white border-accent hover:bg-accent-hover"
      : "bg-transparent text-text border-border hover:bg-surface-2"

  const cls = cx(base, styles, disabled && "opacity-60 pointer-events-none", className)

  if (href)
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    )
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}
