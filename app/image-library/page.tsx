"use client"

import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

export default function ImageLibraryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { path: "/beach-sunset-wedding-couple.jpg", title: "Beach Sunset Wedding" },
    { path: "/beach-wedding-couple-mandap.jpg", title: "Beach Wedding Mandap" },
    { path: "/bride-pastel-mint-pink-lehenga.jpg", title: "Pastel Bridal Lehenga" },
    { path: "/mehndi-ceremony-bride-green-lehenga.jpg", title: "Mehndi Ceremony" },
    { path: "/sangeet-dance-couple-celebration.jpg", title: "Sangeet Dance" },
    { path: "/garden-couple-traditional-attire.jpg", title: "Garden Wedding" },
    { path: "/rose-garden-pastel-couple.jpg", title: "Rose Garden Portrait" },
    { path: "/groom-traditional-sherwani-portrait.jpg", title: "Groom Sherwani" },
    { path: "/indian-bride-and-groom-portrait.jpg", title: "Bride & Groom" },
    { path: "/south-asian-couple-wedding-photo.jpg", title: "Indian Wedding" },
    { path: "/elegant-wedding-couple-portrait.jpg", title: "Elegant Portrait" },
    { path: "/haldi-ceremony-yellow-outfit.jpg", title: "Haldi Ceremony" },
    { path: "/luxury-yellow-designer-mehendi-lehenga.jpg", title: "Yellow Designer Lehenga" },
    { path: "/pastel-yellow-indian-mehendi-ceremony-outfit.jpg", title: "Pastel Yellow Mehendi" },
    { path: "/blue-lehenga-mehendi-ceremony.jpg", title: "Blue Lehenga" },
    { path: "/red-bridal-lehenga-palace-portrait.jpg", title: "Red Bridal Lehenga" },
    { path: "/luxury-designer-bride-red-gold-lehenga.jpg", title: "Designer Red & Gold" },
    { path: "/romantic-couple-sunset-portrait.jpg", title: "Sunset Romance" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Image Library
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Browse our collection of wedding photography assets
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image.path)}>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-muted">
                  <Image
                    src={image.path || "/placeholder.svg"}
                    alt={image.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{image.title}</p>
                      <p className="text-white/70 text-xs mt-1">{image.path}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected image"
              width={1200}
              height={1600}
              className="max-h-[90vh] w-auto object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
