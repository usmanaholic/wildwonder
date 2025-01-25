import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Shop Column */}
          <div className="lg:col-span-2">
            <h2 className="font-bold text-xl mb-4">SHOP</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/variety-packs" className="hover:text-[#FF3CD5] transition-colors">
                  Variety Packs
                </Link>
              </li>
              <li>
                <Link href="/flavors" className="hover:text-[#FF3CD5] transition-colors">
                  Our Flavors
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="hover:text-[#FF3CD5] transition-colors">
                  Subscribe & Save
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-xl mb-4">SUPPORT</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/find-us" className="hover:text-[#FF3CD5] transition-colors">
                  Find Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#FF3CD5] transition-colors">
                  Shipping & Return Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FF3CD5] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FF3CD5] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-[#FF3CD5] transition-colors">
                  Accessibility Options
                </Link>
              </li>
              <li>
                <Link href="/statement" className="hover:text-[#FF3CD5] transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Questions Column */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-xl mb-4">QUESTIONS</h2>
            <a href="mailto:hello@drinkwildwonder.com" className="hover:text-[#FF3CD5] transition-colors">
              hello@drinkwildwonder.com
            </a>
          </div>

          {/* Wholesale Column */}
          <div className="lg:col-span-4 lg:justify-self-end">
            <h2 className="font-bold text-xl mb-4">WHOLESALE</h2>
            <a href="mailto:sales@drinkwildwonder.com" className="hover:text-[#FF3CD5] transition-colors block mb-4">
              sales@drinkwildwonder.com
            </a>
            <Button className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white flex items-center gap-2 px-6">
              Shop wholesale prices on Faire
              <span className="text-xl">→</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web1.PNG-mU2JkXkXXB19IzV8mGpNGSUPmLvuYD.png"
              alt="wildwonder"
              width={180}
              height={40}
              className="h-8 w-auto mb-4 md:mb-0"
            />
          </Link>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/drinkwildwonder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF3CD5] transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://tiktok.com/@drinkwildwonder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF3CD5] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

