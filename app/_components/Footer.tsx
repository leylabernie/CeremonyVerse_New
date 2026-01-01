// app/_components/Footer.tsx
import Link from "next/link"
import { Instagram, Facebook, Pinterest } from "@/components/icons"

export default function Footer() {
  return (
    <footer className="bg-[#FAF5EE] pt-8 pb-4 text-slate-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between space-y-6 md:space-y-0">
        <div>
          <h3 className="font-semibold text-lg">CeremonyVerse</h3>
          <p className="text-sm">Indian & multicultural fusion wedding planning</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navigate</h4>
          <ul className="text-sm space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/heritage-harmony">Heritage & Harmony</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/free-resources">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            hello@ceremonyverse.com
            <br />
            +1-215-341-9990
          </p>

          <div className="mt-2 flex space-x-4">
            <a
              href="https://instagram.com/ceremonyverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="https://www.facebook.com/839146832623298"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://pinterest.com/ceremonyverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="hover:text-red-600 transition-colors"
            >
              <Pinterest className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/ai-tools-disclaimer">AI-Assisted Tools Disclaimer</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CeremonyVerse. All rights reserved.
      </div>
    </footer>
  )
}
