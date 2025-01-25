import Image from "next/image"

interface InfoCardProps {
  image: string
  text: string
  label: string
  bgColor: string
}

function InfoCard({ image, text, label, bgColor }: InfoCardProps) {
  return (
    <div className={`rounded-2xl overflow-hidden ${bgColor}`}>
      <div className="relative aspect-square">
        <Image src={image || "/placeholder.svg"} alt={label} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-white text-center text-sm mb-4">{text}</p>
        <div className="border border-white text-white text-center py-2 rounded-full text-sm">{label}</div>
      </div>
    </div>
  )
}

export default function InfoCards() {
  const cards = [
    {
      image: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a1-GxrSrBe462Y2WPRiYXPCW0Sbwf0sQF.webp",
      text: "Our products have been developed by microbiome experts to support gut health and immunity.",
      label: "LEADERSHIP",
      bgColor: "bg-[#FF4B7D]",
    },
    {
      image: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a2-bO81FdYdUFpXdM1Co0qcPv4qJRK9ox.webp",
      text: "wildwonder is founded by the loving taste of Chinese herbs my Chinese mom made for me.",
      label: "OUR STORY",
      bgColor: "bg-[#FFB800]",
    },
    {
      image: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/a3-oSFdr4CYvkbs9SYdsq9hwSXVdCWwBq.webp",
      text: "5% of profits goes towards empowering women and marginalized communities.",
      label: "SOCIAL IMPACT",
      bgColor: "bg-[#4CD790]",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

