"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram } from "@/components/icons"

export default function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: "/mehndi-ceremony-bride-green-lehenga.jpg",
      alt: "Beautiful mehndi ceremony with intricate henna designs on bride's hands",
    },
    {
      id: 2,
      image: "/bride-pastel-mint-pink-lehenga.jpg",
      alt: "Stunning bride in pastel mint and pink lehenga for Indian wedding",
    },
    {
      id: 3,
      image: "/sangeet-dance-couple-celebration.jpg",
      alt: "Couple dancing at sangeet night celebration with family",
    },
    {
      id: 4,
      image: "/garden-couple-traditional-attire.jpg",
      alt: "Indian-American couple in traditional wedding attire at garden ceremony",
    },
    { id: 5, image: "/beach-sunset-wedding-couple.jpg", alt: "Romantic beach sunset wedding photo of Indian couple" },
    {
      id: 6,
      image: "/rose-garden-pastel-couple.jpg",
      alt: "Couple portrait in rose garden wearing pastel wedding outfits",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="font-sans text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="font-sans h-8 w-8 text-primary" />
            <h2 className="font-sans font-serif text-3xl sm:text-4xl font-light text-foreground">Follow Our Journey</h2>
          </div>
          <p className="font-sans text-muted-foreground text-lg mb-4">
            See the latest celebrations and behind-the-scenes moments
          </p>
          <Link
            href="https://instagram.com/ceremonyverse"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            @ceremonyverse
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com/ceremonyverse"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="font-sans h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
