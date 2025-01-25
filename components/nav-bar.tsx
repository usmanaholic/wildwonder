import Link from "next/link"
import { ChevronDown, User, ShoppingCart } from "lucide-react"


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

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2" style={{ color: "white" }}>
  <span className="text-2xl font-bold text-center">wildwonder</span>
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

