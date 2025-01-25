import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestimonialProps {
  quote: string
  author: string
  image: string
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "I love that wildwonder promotes gut health, has clean ingredients, and the flavors are absolutely delicious. Customer for life!!!",
    author: "HILL",
    image: "/placeholder.svg",
  },
  // Add more testimonials as needed
]

export default function SharkTankSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#B4EBF7] to-navy">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        {/* Shark Tank Feature */}
        <div className="relative p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-navy text-5xl md:text-6xl font-bold mb-8">
            AS SEEN ON
            <br />
            <span className="text-[#4169E1]">SHARK</span>
            <br />
            <span className="text-[#4169E1]">TANK</span>
          </h2>
          <div className="relative aspect-video w-full">
            <Image src="/placeholder.svg" alt="Wildwonder on Shark Tank" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-navy p-8 md:p-16 flex flex-col justify-center relative">
          <div className="relative min-h-[200px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-16 h-16 relative">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <blockquote className="text-white text-lg md:text-xl max-w-lg">"{testimonial.quote}"</blockquote>
                <cite className="text-white font-bold">{testimonial.author}</cite>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 border-none">
              <ChevronLeft className="h-4 w-4 text-white" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 border-none">
              <ChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

