"use client"

import { useState } from "react"
import { Calendar, Heart, Sparkles, Star, Check } from "@/components/icons"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Share your vision, preferences, and cultural requirements in a complimentary 30-minute consultation.",
    icon: Calendar,
    duration: "30 minutes",
    color: "primary",
  },
  {
    number: "02",
    title: "Custom Proposal",
    description: "Receive a detailed plan with timeline, budget breakdown, and curated vendor recommendations within 48 hours.",
    icon: Heart,
    duration: "2 days",
    color: "secondary",
  },
  {
    number: "03",
    title: "Planning & Coordination",
    description: "Your dedicated coordinator handles every detail while you enjoy the journey. Weekly updates included.",
    icon: Sparkles,
    duration: "6-12 months",
    color: "accent",
  },
  {
    number: "04",
    title: "Your Perfect Day",
    description: "Relax and celebrate while we orchestrate seamless execution of every ceremony and celebration.",
    icon: Star,
    duration: "Unforgettable",
    color: "primary",
  },
]

export default function InteractiveProcess() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="relative">
        <div className="h-1 bg-warm-beige rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = index === activeStep
          const isCompleted = index < activeStep

          return (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                isActive ? "scale-105" : "scale-100 hover:scale-102"
              }`}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div
                className={`card-hover bg-white/80 backdrop-blur-sm rounded-sm p-6 border-2 transition-all ${
                  isActive
                    ? "border-primary shadow-xl"
                    : isCompleted
                      ? "border-accent/30"
                      : "border-warm-beige/50"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`text-5xl font-serif font-light transition-colors ${
                      isActive ? "text-primary" : isCompleted ? "text-accent" : "text-charcoal/30"
                    }`}
                  >
                    {step.number}
                  </div>
                  {isCompleted && (
                    <div className="ml-auto">
                      <Check className="h-6 w-6 text-accent" />
                    </div>
                  )}
                </div>

                <div
                  className={`h-12 w-12 rounded-sm flex items-center justify-center mb-4 transition-all ${
                    isActive
                      ? "bg-primary/20 scale-110"
                      : isCompleted
                        ? "bg-accent/10"
                        : "bg-charcoal/5"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors ${
                      isActive ? "text-primary" : isCompleted ? "text-accent" : "text-charcoal/40"
                    }`}
                  />
                </div>

                <h3
                  className={`font-serif text-xl font-light mb-2 transition-colors ${
                    isActive ? "text-primary" : "text-charcoal"
                  }`}
                >
                  {step.title}
                </h3>

                <p className="text-sm text-charcoal/70 leading-relaxed mb-3">{step.description}</p>

                <div className="text-xs font-sans font-semibold text-accent uppercase tracking-wider">
                  {step.duration}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
