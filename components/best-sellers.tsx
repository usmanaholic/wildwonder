import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star } from "lucide-react"

interface ProductCardProps {
  title: string
  image: string
  price: number
  originalPrice?: number
  isBundle?: boolean
  subscriptionText?: string
}

function ProductCard({ title, image, price, originalPrice, isBundle, subscriptionText }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
      {isBundle && <div className="bg-[#98FB98] text-navy p-2 text-center font-bold">SHARK TANK BUNDLE</div>}
      <div className="relative aspect-square">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-navy font-bold text-lg">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-navy font-bold">${price.toFixed(2)}</span>
          {originalPrice && <span className="text-gray-500 line-through text-sm">${originalPrice.toFixed(2)}</span>}
        </div>
        {subscriptionText && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span>{subscriptionText}</span>
          </div>
        )}
        <div className="space-y-2">
          <Button className="w-full bg-[#FF3CD5] hover:bg-[#FF3CD5]/90 text-white">ADD TO CART</Button>
          <Button variant="link" className="w-full text-navy underline">
            SEE DETAILS
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function BestSellers() {
  const products = [
    {
      title: "SHARK TANK BUNDLE",
      image: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/p1-qLR5QM5cTXWNDA7kvV1PjAzHArxovL.webp",
      price: 74.4,
      originalPrice: 85.12,
      isBundle: true,
    },
    {
      title: "SAMPLER VARIETY PACK",
      image: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/p2-MoqxIHTJLHGWDpKAgQWAxvzab1aFbT.webp",
      price: 42.5,
      subscriptionText: "ONE-TIME PURCHASE",
    },
    {
      title: "BOTANICAL BOUQUET",
      image: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/p3-bZE3QLoWduPwlUP37MW16QgFjFTCR7.webp",
      price: 42.5,
      subscriptionText: "ONE-TIME PURCHASE",
    },
    {
      title: "RASPBERRY LYCHEE",
      image: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/p4-349Veou1bFRNBuKavLPpvI95vVnPGd.webp",
      price: 45.45,
      subscriptionText: "ONE-TIME PURCHASE",
    },
  ]

  return (
    <section className="bg-[#FFF5EB] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-navy text-4xl font-bold mb-12">BEST SELLERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

