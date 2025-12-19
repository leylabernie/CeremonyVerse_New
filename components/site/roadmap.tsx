const steps = [
  { number: "1", title: "Budget", desc: "Total available funds" },
  { number: "2", title: "Priorities", desc: "What matters most" },
  { number: "3", title: "Vendor Strategy", desc: "Where to spend vs. save" },
  { number: "4", title: "Cultural Plan", desc: "Ceremonies + sourcing" },
  { number: "5", title: "Timeline", desc: "Milestones + deadlines" },
]

export function Roadmap() {
  return (
    <div className="relative">
      <div className="absolute top-6 left-0 right-0 h-[2px] bg-primary/20 hidden md:block" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg mb-4 relative z-10 shadow-[0_2px_8px_rgba(63,109,91,0.2)]">
              {step.number}
            </div>
            <div className="font-serif font-semibold text-base text-text mb-2">{step.title}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
