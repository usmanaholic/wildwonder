import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SocialGallery() {
  const images = [
    { src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a3-oSFdr4CYvkbs9SYdsq9hwSXVdCWwBq.webp", alt: "Chess game with drinks" },
    { src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a1-GxrSrBe462Y2WPRiYXPCW0Sbwf0sQF.webp", alt: "Citrus cocktail preparation" },
    { src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/p2-MoqxIHTJLHGWDpKAgQWAxvzab1aFbT.webp", alt: "Food and drink styling" },
    { src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a3-oSFdr4CYvkbs9SYdsq9hwSXVdCWwBq.webp", alt: "Product pour shot" },
    { src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a3-oSFdr4CYvkbs9SYdsq9hwSXVdCWwBq.webp", alt: "Table setting with candles" },
    { src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a3-oSFdr4CYvkbs9SYdsq9hwSXVdCWwBq.webp", alt: "Cocktail closeup" },
  ]

  return (
    <section className="bg-[#B4EBF7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-navy text-3xl font-bold mb-12">
          CREATE <span className="text-[#FF3CD5]">#EVERYDAYWONDERS</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="bg-[#FF3CD5] hover:bg-[#FF3CD5]/90">FOLLOW @drinkwildwonder</Button>
        </div>
      </div>
    </section>
  )
}

