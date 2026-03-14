import Link from "next/link"

export function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 leading-tight">

          {/* decorative leaf */}
          <span className="text-xl text-[#7A2E8E]">❦</span>

          <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#7A2E8E]">
              CeremonyVerse
            </span>

            <span className="text-sm md:text-base tracking-wide text-[#374151] flex items-center gap-1">
              ❁ Outfit Sourcing + Cultural Guidance ❁
            </span>
          </div>

          {/* decorative flower */}
          <span className="text-xl text-[#7A2E8E]">✿</span>

        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-lg font-medium text-[#374151]">

          <Link
            href="/shop-from-india"
            className="transition hover:text-[#7A2E8E]"
          >
            Shop From India
          </Link>

          <Link
            href="/resources"
            className="transition hover:text-[#7A2E8E]"
          >
            Resources
          </Link>

          <Link
            href="/blog"
            className="transition hover:text-[#7A2E8E]"
          >
            Blog
          </Link>

          <Link
            href="/services"
            className="transition hover:text-[#7A2E8E]"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="transition hover:text-[#7A2E8E]"
          >
            About
          </Link>

        </nav>
      </div>
    </header>
  )
}
