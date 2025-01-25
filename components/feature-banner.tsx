import { Leaf, Heart } from "lucide-react"

export default function FeatureBanner() {
  const features = [
    "WOMAN-OWNED",
    "USDA ORGANIC",
    "6g SUGAR PER CAN",
    "VEGAN",
    "40 CALORIES PER CAN",
    "REAL FRUIT & HERBS",
  ]

  return (
    <div className="bg-[#B4EBF7] py-3 overflow-hidden">
      <div className="flex justify-start items-center animate-slide min-w-max px-4 md:px-0 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mx-4">
            {index === 0 && <Heart className="w-5 h-5 mr-2 text-[#383B75]" />}
            {index === 1 && <Leaf className="w-5 h-5 mr-2 text-[#383B75]" />}
            <span className="text-[#383B75] font-bold text-sm whitespace-nowrap">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}



