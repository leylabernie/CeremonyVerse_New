import Image from "next/image"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="CeremonyVerse - Indian Wedding Planning & Styling"
        width={192}
        height={192}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
