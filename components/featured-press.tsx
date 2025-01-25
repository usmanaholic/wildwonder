import Image from "next/image"

export default function FeaturedPress() {
  const pressLogos = [
    { name: "Shark Tank", src: "/placeholder.svg" },
    { name: "Forbes", src: "/placeholder.svg" },
    { name: "Today", src: "/placeholder.svg" },
    { name: "PopSugar", src: "/placeholder.svg" },
    { name: "Well+Good", src: "/placeholder.svg" },
  ]

  return (
    <section className="bg-[#B4EBF7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-navy text-2xl font-bold mb-12">FEATURED IN</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {pressLogos.map((logo) => (
            <div key={logo.name} className="w-32 h-12 relative">
              <Image src={logo.src || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

