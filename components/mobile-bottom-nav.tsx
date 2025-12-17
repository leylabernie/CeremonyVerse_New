"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Users, Phone, Menu } from "@/components/icons"

export function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/services", icon: Calendar, label: "Services" },
    { href: "/portfolio", icon: Users, label: "Portfolio" },
    { href: "tel:+12153419990", icon: Phone, label: "Call", isExternal: true },
    { href: "/quiz", icon: Menu, label: "Quiz" },
  ]

  if (!isVisible) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-charcoal/10 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          if (item.isExternal) {
            return (
              <a
                key={item.href}
                href={item.href}
                rel="noopener"
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? "text-primary" : "text-charcoal/60 hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? "text-primary" : "text-charcoal/60 hover:text-primary"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
