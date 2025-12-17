"use client"

import { useEffect, useState, useRef } from "react"
import { Shield, Heart, Users, Clock } from "@/components/icons"

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 500, label: "Weddings Planned", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 25, label: "Countries Served", suffix: "+" },
  { value: 1000, label: "Verified Vendors", suffix: "+" },
]

const features = [
  {
    icon: Heart,
    title: "Personalized Planning",
    description: "Every wedding is unique - we tailor our approach to your vision",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Milestone-based payments with delivery confirmation",
  },
  {
    icon: Users,
    title: "Cultural Expertise",
    description: "Deep understanding of Indian, South Asian & fusion traditions",
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    description: "Responsive communication throughout your planning journey",
  },
]

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const frameRate = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameRate)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      setCounts(
        stats.map((stat) => {
          const easeOutQuad = 1 - Math.pow(1 - progress, 3)
          return Math.floor(stat.value * easeOutQuad)
        }),
      )

      if (frame === totalFrames) {
        clearInterval(counter)
        setCounts(stats.map((stat) => stat.value))
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [isVisible])

  return (
    <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-serif font-medium text-charcoal mb-2">{feature.title}</h3>
            <p className="text-sm text-charcoal/70 font-sans leading-relaxed">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
