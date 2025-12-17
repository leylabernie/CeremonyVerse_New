"use client"

import { Star } from "@/components/icons"
import Link from "next/link"

export default function GoogleReviewsWidget() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 9.5C16.5 9.5 10.5 15.5 10.5 23C10.5 30.5 16.5 36.5 24 36.5C31.5 36.5 37.5 30.5 37.5 23C37.5 15.5 31.5 9.5 24 9.5Z"
                    fill="#4285F4"
                  />
                  <path d="M24 9.5C20.5 9.5 17.5 11 15.5 13.5L24 23V9.5Z" fill="#EA4335" />
                  <path d="M24 9.5V23L32.5 13.5C30.5 11 27.5 9.5 24 9.5Z" fill="#FBBC04" />
                  <path d="M24 36.5C27.5 36.5 30.5 35 32.5 32.5L24 23V36.5Z" fill="#34A853" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-sans text-3xl font-bold text-foreground">New</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="font-sans h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground">Leave us your first review!</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <Link
                href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Leave a Review on Google
              </Link>
              <p className="font-sans text-xs text-muted-foreground">Share your experience with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
