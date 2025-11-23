"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Shrijal is a dedicated professional who always goes above and beyond. His ability to handle complex operations is impressive.",
    author: "Director",
    company: "Nepal Can Group",
  },
  {
    quote:
      "During his time at Clock b, Shrijal showed immense growth and a keen understanding of the startup ecosystem.",
    author: "Senior Consultant",
    company: "Clock b Innovations",
  },
  {
    quote: "A natural leader with excellent communication skills. He managed the PGS Ideation event seamlessly.",
    author: "Program Manager",
    company: "Presidential Graduate School",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Endorsements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/20" />
              <p className="text-lg mb-6 relative z-10 text-muted-foreground">"{item.quote}"</p>
              <div>
                <p className="font-bold">{item.author}</p>
                <p className="text-sm text-primary">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
