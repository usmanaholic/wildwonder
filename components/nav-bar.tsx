import Link from "next/link"
import { ChevronDown, User, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="bg-[#5CD4F0] px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <span className="text-white font-bold">SHOP</span>
            <ChevronDown className="w-4 h-4 text-white ml-1" />
          </div>
          <Link href="/bundles" className="text-white font-bold">
            BUNDLES
          </Link>
        </div>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web1.PNG-mU2JkXkXXB19IzV8mGpNGSUPmLvuYD.png"
            alt="wildwonder"
            width={180}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <span className="text-white font-bold">LEARN</span>
            <ChevronDown className="w-4 h-4 text-white ml-1" />
          </div>
          <Link href="/find" className="text-white font-bold">
            FIND WILDWONDER
          </Link>
          <div className="flex items-center space-x-4">
            <User className="w-6 h-6 text-white" />
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  )
}

