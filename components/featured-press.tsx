import Image from "next/image"

export default function FeaturedPress() {
  const pressLogos = [
    { name: "Shark Tank", src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/Shark_Tank_Logo_180x-c7AdYBPWIamuM4J6d3kbMghe3yhWQr.avif" },
    { name: "Forbes", src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/TodayShow_Logo_180x-73AZIytRjXOcJhyuTU7RnOlHKPV3i9.avif" },
    { name: "Today", src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/OprahDaily_Logo_ab4a467c-8f8b-4f59-ba3d-7472d448ef00_180x-eNGhjJWylSaSAdRp0Q10LyxIiJTEx2.avif" },
    { name: "PopSugar", src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/Screen-Shot-2022-07-02-at-8.14.41-PM_360x-QRcnnBm3fjOQQK6x1mbDl9pOhGSq79.avif" },
    { name: "Well+Good", src: "https://tqu0ji92zyq2wxex.public.blob.vercel-storage.com/Screen-Shot-2022-07-02-at-8.14.41-PM_360x-QRcnnBm3fjOQQK6x1mbDl9pOhGSq79.avif" },
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

