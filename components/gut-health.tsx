import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BenefitProps {
  label: string
  color: string
}

function BenefitIcon({ label, color }: BenefitProps) {
  return (
    <div
      className={`relative w-24 h-24 rounded-full ${color} flex items-center justify-center group transition-transform hover:scale-105`}
    >
      {/* Use the provided image URL */}
      <Image src="https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/Component-1-_-1_df82cfec-c240-4940-a55d-7fb2606d0cf1_600x2-HlRtazpZp6Rc9VAzttlcasFftCZXLW.png" alt={label} width={60} height={60} className="object-contain" />
      <span className="absolute -bottom-6 text-center w-full text-sm font-bold text-navy uppercase">{label}</span>
    </div>
  )
}

export default function GutHealth() {
  const benefits = [
    { label: "Digestion", color: "bg-[#FFA500]" },
    { label: "Immunity", color: "bg-[#C8E05C]" },
    { label: "Mood", color: "bg-[#FFB6C1]" },
    { label: "Calmness", color: "bg-[#98D8D8]" },
    { label: "Brain Health", color: "bg-[#FF9B76]" },
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-navy text-4xl md:text-5xl font-bold">DELICIOUS GUT HEALTH</h2>
            <p className="text-navy text-lg">
              wildwonder is the world's first sparkling prebiotic + probiotic beverage. Our flavors are inspired by
              heritage and taste like a California produce stand.
            </p>
            <Button className="bg-[#FF3CD5] hover:bg-[#FF3CD5]/90 text-white px-12 py-6 text-xl rounded-full">
              SHOP NOW
            </Button>
            <div className="flex flex-wrap gap-8 mt-8">
              {benefits.map((benefit) => (
                <BenefitIcon key={benefit.label} label={benefit.label} color={benefit.color} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square">
              <Image src="https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/image2-removebg-preview-iujO55GcKb6YLCd0IGkFsTJvZrKbFA.png" alt="Product pour" fill className="object-contain" />
              <div className="absolute left-0 top-1/4 transform -translate-x-1/2">
                <div className="bg-navy text-white px-4 py-2 rounded-full whitespace-nowrap"></div>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2">
                <div className="bg-navy text-white px-4 py-2 rounded-full whitespace-nowrap">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-navy"
        style={{
          clipPath: "url(#wave)",
        }}
      >
        <svg width="0" height="0">
          <defs>
            <clipPath id="wave" clipPathUnits="objectBoundingBox">
              <path d="M0,0.2 C0.3,0.1 0.7,0.3 1,0.2 L1,1 L0,1 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="h-full overflow-hidden relative">
          <div className="whitespace-nowrap text-white/10 text-7xl font-bold absolute bottom-0 animate-scroll">
            HAPPY GUT HAPPY LIFE HAPPY GUT HAPPY LIFE HAPPY GUT HAPPY LIFE
          </div>
        </div>
      </div>
    </section>
  )
}
