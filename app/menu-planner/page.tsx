"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UtensilsCrossed, Check } from "@/components/icons"

export default function MenuPlannerPage() {
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])

  const dietaryOptions = [
    { id: "vegetarian", label: "Vegetarian", description: "No meat, fish, or poultry" },
    { id: "vegan", label: "Vegan", description: "No animal products" },
    { id: "gluten-free", label: "Gluten-Free", description: "No wheat, barley, rye" },
    { id: "nut-free", label: "Nut-Free", description: "No tree nuts or peanuts" },
  ]

  const cuisineOptions = [
    { id: "south-indian", label: "South Indian", dishes: "Dosa, Idli, Sambar" },
    { id: "gujarati", label: "Gujarati", dishes: "Dhokla, Thepla, Undhiyu" },
    { id: "indo-chinese", label: "Indo-Chinese", dishes: "Manchurian, Hakka Noodles" },
    { id: "continental", label: "Continental", dishes: "Pasta, Grilled Vegetables" },
    { id: "american", label: "American", dishes: "Burgers, Mac & Cheese" },
  ]

  const toggleSelection = (id: string, type: "dietary" | "cuisine") => {
    if (type === "dietary") {
      setSelectedDietary((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    } else {
      setSelectedCuisines((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
              <UtensilsCrossed className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Menu Planner</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4">
              Create Your Perfect Wedding Menu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan a menu that honors traditions and accommodates all dietary needs
            </p>
          </div>

          {/* Dietary Restrictions */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-medium mb-6">Dietary Restrictions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dietaryOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleSelection(option.id, "dietary")}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedDietary.includes(option.id)
                      ? "border-secondary bg-secondary/10"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-semibold">{option.label}</span>
                    {selectedDietary.includes(option.id) && <Check className="h-5 w-5 text-secondary flex-shrink-0" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Cuisine Selection */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-medium mb-6">Cuisine Styles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cuisineOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleSelection(option.id, "cuisine")}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedCuisines.includes(option.id)
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-semibold">{option.label}</span>
                    {selectedCuisines.includes(option.id) && <Check className="h-5 w-5 text-primary flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{option.dishes}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          {(selectedDietary.length > 0 || selectedCuisines.length > 0) && (
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-medium mb-4">Your Menu Preferences</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {selectedDietary.length > 0 && (
                  <div>
                    <p className="font-semibold mb-2">Dietary Accommodations:</p>
                    <ul className="space-y-1">
                      {selectedDietary.map((id) => (
                        <li key={id} className="text-sm flex items-center gap-2">
                          <Check className="h-4 w-4 text-secondary" />
                          {dietaryOptions.find((opt) => opt.id === id)?.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedCuisines.length > 0 && (
                  <div>
                    <p className="font-semibold mb-2">Selected Cuisines:</p>
                    <ul className="space-y-1">
                      {selectedCuisines.map((id) => (
                        <li key={id} className="text-sm flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {cuisineOptions.find((opt) => opt.id === id)?.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Get personalized menu recommendations from our expert caterers
                </p>
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={`/contact?dietary=${selectedDietary.join(",")}&cuisines=${selectedCuisines.join(",")}`}>
                    Get Custom Menu Proposal
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
