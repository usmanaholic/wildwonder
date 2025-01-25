"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
  }

  return (
    <section className="bg-navy py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-bold mb-4">LET'S STAY IN TOUCH!</h2>
        <p className="text-white/80 mb-8">
          Sign up now for gut health tips, exclusive offers, and new products.
          <br />
          Check your inbox for 10% off your first order!
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white"
            required
          />
          <Button type="submit" className="bg-[#FF3CD5] hover:bg-[#FF3CD5]/90 whitespace-nowrap">
            SIGN UP
          </Button>
        </form>
      </div>
    </section>
  )
}

