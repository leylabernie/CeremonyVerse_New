"use client"

import { useState } from "react"
import { MessageCircle } from "@/components/icons"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "+12153419990"
  const defaultMessage = "Hi! I'm planning my wedding and need help with..."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* WhatsApp Floating Button - Clean without distracting pulse */}
      <button
        onClick={handleClick}
        className="font-sans fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Tooltip */}
      <div className="font-sans fixed bottom-24 right-6 z-40 bg-white text-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
    </>
  )
}
