import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-[#5CD4F0] to-[#B4EBF7] px-4 py-12">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white block">NEW YEAR,</span>
            <span className="text-[#FFE145] block">NEW GUT</span>
          </h1>
          <p className="text-white text-2xl md:text-3xl mb-8 max-w-xl">
            Reset your gut, refresh your vibe, recharge your year
          </p>
          <Button className="bg-[#FF3CD5] hover:bg-[#FF3CD5]/90 text-white px-12 py-6 text-xl rounded-full">
            SHOP NOW
          </Button>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
          {/* Product images would go here - using placeholder for demo */}
          <div className="relative h-full">
            <Image src="https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/image1-removebg-preview-k5wCczpu6PEwPYyO5J9atfSKxZG9tf.png" alt="Product showcase" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

