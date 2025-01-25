import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star } from "lucide-react"

interface ProductCardProps {
  title: string
  image: string
  price: number
  canCount: number
}

function ProductCard({ title, image, price, canCount }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg group">
      <div className="relative aspect-[3/4] bg-gradient-to-b from-transparent to-pink-100">
        <div className="absolute top-4 right-4 bg-navy text-white text-sm font-bold px-3 py-1 rounded-full">
          <Star className="w-4 h-4 inline-block mr-1 fill-white" />
          Best Seller
        </div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-navy font-bold text-lg">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-navy/10 px-2 py-1 rounded-full text-sm">{canCount} CT CANS</span>
            <span className="text-navy font-bold">${price.toFixed(2)}</span>
          </div>
        </div>
        <div className="space-y-2">
          <Button className="w-full bg-[#FF3CD5] hover:bg-[#FF3CD5]/90 text-white">ADD TO CART</Button>
          <Button variant="link" className="w-full text-navy underline">
            SEE DETAILS
          </Button>
          <div className="text-sm text-gray-600 text-center">Delivery every 4 weeks</div>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const products = [
    {
      title: "BANANA QUEEN",
      image: "/placeholder.svg",
      price: 45.45,
      canCount: 12,
    },
    {
      title: "RASPBERRY LYCHEE",
      image: "/placeholder.svg",
      price: 45.45,
      canCount: 12,
    },
    {
      title: "STRAWBERRY PASSION",
      image: "/placeholder.svg",
      price: 45.45,
      canCount: 12,
    },
    {
      title: "GUAVA ROSE",
      image: "/placeholder.svg",
      price: 45.45,
      canCount: 12,
    },
  ]

  return (
    <section className="bg-[#FFF5EB] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-navy text-4xl font-bold mb-12">SIP IN THE POSSIBILITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

