"use client"

import type React from "react"
import Link from "next/link"
import { cx } from "@/lib/cx"

type ButtonVariant = "primary" | "secondary" | "outline" | "default" | "ghost"
type ButtonSize = "sm" | "default" | "lg"

type ButtonProps = {
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
  type?: "button" | "submit"
  disabled?: boolean
  asChild?: boolean
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "default",
  children,
  className,
  type = "button",
  disabled,
  asChild,
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-9 px-4 py-2 text-sm",
    default: "h-11 px-6 py-3.5 text-sm",
    lg: "h-14 px-10 py-4 text-base",
  }

  const base = cx(
    "inline-flex items-center justify-center rounded-[14px] font-medium transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-cvAccent/30 focus-visible:ring-offset-2",
    sizeClasses[size],
  )

  const variantStyles = {
    primary:
      "bg-cvAccent text-white border-cvAccent hover:bg-cvAccentHover shadow-[0_2px_8px_rgba(63,109,91,0.25)] hover:shadow-[0_4px_12px_rgba(63,109,91,0.35)]",
    default:
      "bg-cvAccent text-white border-cvAccent hover:bg-cvAccentHover shadow-[0_2px_8px_rgba(63,109,91,0.25)] hover:shadow-[0_4px_12px_rgba(63,109,91,0.35)]",
    secondary: "bg-transparent text-cvInk border-cvBorder hover:bg-cvWarm shadow-sm",
    outline: "bg-transparent text-cvInk border-cvBorder hover:bg-cvWarm shadow-sm",
    ghost: "bg-transparent border-transparent text-cvInk hover:bg-cvSurface2",
  }

  const cls = cx(base, variantStyles[variant], disabled && "opacity-60 pointer-events-none", className)

  if (asChild) {
    return <>{children}</>
  }

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
