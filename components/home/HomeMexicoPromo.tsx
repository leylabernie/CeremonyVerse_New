"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomeMexicoPromo() {
  return (
    <section className="py-16 md:py-20 bg-cvBg">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left column - Text content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-cvInk mb-6">
              Also planning Indian destination weddings in Mexico
            </h2>
            <p className="text-cvMuted mb-4">
              Mexico has become one of the most sought-after destinations for Indian couples seeking a destination wedding that combines stunning natural beauty with warm hospitality. From the turquoise waters of Cancun to the historic charm of San Miguel de Allende, Mexico offers diverse venues that can accommodate traditional Indian ceremonies with all their grandeur.
            </p>
            <p className="text-cvMuted mb-8">
              Our team specializes in navigating the unique logistics of planning an Indian wedding in Mexico, from coordinating with local vendors who understand South Asian traditions to arranging seamless travel for your guests. We handle everything from finding venues that can host a proper mandap setup to sourcing authentic Indian cuisine and decor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-cvAccent hover:bg-cvAccent/90 text-white">
                <Link href="/indian-destination-wedding-planner-mexico">
                  Explore Mexico destination weddings
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cvBorder text-cvInk hover:bg-cvBg">
                <Link href="/indian-destination-wedding-planner-mexico#cost-guide">
                  See Mexico cost guide
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Quick snapshot box */}
          <div className="bg-cvCard border border-cvBorder rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-xl text-cvInk mb-4">Quick Snapshot</h3>
            <ul className="space-y-3 text-cvMuted">
              <li className="flex items-start gap-2">
                <span className="text-cvAccent mt-1">â¢</span>
                <span><strong className="text-cvInk">Popular regions:</strong> Cancun, Riviera Maya, Los Cabos, Puerto Vallarta, San Miguel de Allende</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cvAccent mt-1">â¢</span>
                <span><strong className="text-cvInk">Ceremony types:</strong> Hindu, Sikh, Muslim, Christian, fusion, and interfaith ceremonies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cvAccent mt-1">â¢</span>
                <span><strong className="text-cvInk">Budget-first approach:</strong> Transparent pricing with no hidden fees or vendor kickbacks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cvAccent mt-1">â¢</span>
                <span><strong className="text-cvInk">US-based planner:</strong> Coordination from the US with trusted local partners on the ground</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
