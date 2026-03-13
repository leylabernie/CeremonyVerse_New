import Link from "next/link"

export function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 leading-tight">
  
  {/* decorative icon */}
  <span className="text-2xl">✦</span>

  <div className="flex flex-col">
    <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#7A2E8E]">
      CeremonyVerse
    </span>

    <span className="text-xs tracking-wide text-neutral-500">
      Outfit Sourcing + Cultural Guidance
    </span>
  </div>

</Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-base text-neutral-700">

          <Link href="/shop-from-india" className="hover:text-black">
            Shop From India
          </Link>

          <Link href="/resources" className="hover:text-black">
            Resources
          </Link>

          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>

          <Link href="/services" className="hover:text-black">
            Services
          </Link>

          <Link href="/about" className="hover:text-black">
            About
          </Link>

        </nav>
      </div>
    </header>
  )
}
