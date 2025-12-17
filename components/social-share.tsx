"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "@/components/icons"
import { useState } from "react"

interface SocialShareProps {
  url: string
  title: string
  description?: string
}

export function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== "undefined" ? window.location.origin + url : url
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || "")

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-sm font-medium text-muted-foreground">Share:</span>
      <div className="flex gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#9CAF88]/10 hover:bg-[#9CAF88]/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="font-sans h-4 w-4 text-[#9CAF88]" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#E8B4B8]/10 hover:bg-[#E8B4B8]/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="font-sans h-4 w-4 text-[#E8B4B8]" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#36454F]/10 hover:bg-[#36454F]/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="font-sans h-4 w-4 text-[#36454F]" />
        </a>
        <button
          onClick={handleCopyLink}
          className="w-9 h-9 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
          aria-label="Copy link"
        >
          <LinkIcon className="font-sans h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      {copied && <span className="font-sans text-xs text-[#9CAF88] font-medium">Copied!</span>}
    </div>
  )
}

export default SocialShare
