"use client";

import React from "react";

export function HomeHero() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase">
            Indian &amp; South Asian Destination Weddings
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Plan your dream Indian destination wedding in Mexico
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed">
            US-based planning, Mexico resort expertise, and honest budget
            guidance for Indian and South Asian weddings that honor your
            traditions while staying grounded in real numbers.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/start-planning"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] border border-current"
            >
              Start with a free budget analysis
            </a>

          <a
              href="/indian-destination-wedding-planner-mexico"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.18em]"
            >
              Explore Mexico wedding options
            </a>
          </div>

          <p className="text-xs opacity-80">
            Virtual-first planning · Mexico resort partners · Cultural-fluent
            support
          </p>
        </div>
      </div>
    </section>
  );
}
