"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle } from "@/components/icons"
import Link from "next/link"

export default function WeddingStyleQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 0,
      question: "How important is it to include traditional Indian ceremonies?",
      options: [
        { value: "very", label: "Very important - I want all traditional rituals" },
        { value: "moderate", label: "Moderately important - Key ceremonies only" },
        { value: "minimal", label: "Minimal - Just a few symbolic elements" },
        { value: "flexible", label: "Flexible - Open to creative interpretations" },
      ],
    },
    {
      id: 1,
      question: "What's your ideal wedding size?",
      options: [
        { value: "intimate", label: "Intimate (50-100 guests)" },
        { value: "medium", label: "Medium (100-200 guests)" },
        { value: "large", label: "Large (200-300 guests)" },
        { value: "grand", label: "Grand (300+ guests)" },
      ],
    },
    {
      id: 2,
      question: "How would you describe your style aesthetic?",
      options: [
        { value: "traditional", label: "Traditional & Ornate" },
        { value: "modern", label: "Modern & Minimalist" },
        { value: "fusion", label: "Fusion & Eclectic" },
        { value: "romantic", label: "Romantic & Elegant" },
      ],
    },
    {
      id: 3,
      question: "What's your priority for the wedding celebration?",
      options: [
        { value: "cultural", label: "Honoring cultural traditions" },
        { value: "experience", label: "Creating unique guest experiences" },
        { value: "family", label: "Bringing families together" },
        { value: "personal", label: "Expressing our personal story" },
      ],
    },
    {
      id: 4,
      question: "How many days do you envision for your wedding events?",
      options: [
        { value: "one", label: "One day - Combined ceremony and reception" },
        { value: "two", label: "Two days - Separate ceremony and reception" },
        { value: "three", label: "Three days - Including pre-wedding events" },
        { value: "weekend", label: "Full weekend - Multiple celebrations" },
      ],
    },
  ]

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const getRecommendation = () => {
    const traditionalScore = answers[0] === "very" ? 3 : answers[0] === "moderate" ? 2 : 1
    const sizeScore = answers[1] === "grand" ? 3 : answers[1] === "large" ? 2 : 1
    const styleScore = answers[2] === "traditional" ? 3 : answers[2] === "fusion" ? 2 : 1

    const totalScore = traditionalScore + sizeScore + styleScore

    if (totalScore >= 8) {
      return {
        title: "Heritage & Harmony Plan",
        description:
          "Perfect for couples who want a full traditional Indian wedding experience with modern touches. This comprehensive plan includes all ceremonies, cultural consultation, and coordination with verified Indian suppliers.",
        features: [
          "Full traditional ceremony coordination",
          "Cultural consultation and education",
          "Verified Indian supplier network",
          "Secure payment processing & contracts",
          "Multi-day event management",
        ],
        link: "/heritage-harmony",
      }
    } else if (totalScore >= 5) {
      return {
        title: "Fusion Celebration Package",
        description:
          "Ideal for couples blending cultures with a modern twist. This plan balances traditional elements with contemporary style, creating a unique celebration that honors both backgrounds.",
        features: [
          "Selective traditional ceremonies",
          "Modern venue coordination",
          "Fusion menu planning",
          "Bilingual ceremony support",
          "Flexible vendor selection",
        ],
        link: "/services",
      }
    } else {
      return {
        title: "Essential Coordination",
        description:
          "Best for couples who want key Indian elements incorporated into a primarily Western-style wedding. This streamlined plan focuses on the essentials while maintaining cultural authenticity.",
        features: [
          "Core ceremony elements",
          "Simplified vendor coordination",
          "Cultural guidance as needed",
          "Flexible timeline",
          "Budget-conscious options",
        ],
        link: "/services",
      }
    }
  }

  if (showResults) {
    const recommendation = getRecommendation()

    return (
      <div className="min-h-screen bg-background">
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4">
                Your Perfect Wedding Style
              </h1>
              <p className="text-lg text-muted-foreground">Based on your answers, we recommend:</p>
            </div>

            <Card className="p-8 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-4">{recommendation.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{recommendation.description}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">What's Included:</h3>
                <ul className="space-y-2">
                  {recommendation.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <Link href={recommendation.link}>
                    Learn More About This Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1 bg-transparent">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => {
                  setShowResults(false)
                  setCurrentQuestion(0)
                  setAnswers({})
                }}
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4">
              Find Your Perfect <span className="text-primary italic">Wedding Style</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to discover which wedding planning approach is right for you
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Card className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{questions[currentQuestion].question}</h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                      answers[currentQuestion] === option.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                          answers[currentQuestion] === option.value
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {answers[currentQuestion] === option.value && (
                          <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                        )}
                      </div>
                      <span className="text-foreground">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!answers[currentQuestion]} className="flex items-center gap-2">
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
