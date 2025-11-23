"use client"

import { motion } from "framer-motion"

const technologies = [
  "Business Strategy",
  "Operations Management",
  "Market Research",
  "Financial Analysis",
  "Project Management",
  "Leadership",
  "Negotiation",
  "Public Speaking",
  "Digital Marketing",
  "Jira",
  "Asana",
  "Trello",
  "Google Workspace",
  "Microsoft Office 365",
  "Slack",
  "Zoom",
  "Canva",
  "CRM Software",
  "Data Analysis",
  "Startup Ecosystem",
]

export function TechStack() {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Tools</h2>
        <p className="text-muted-foreground">The arsenal I use to drive business growth.</p>
      </div>

      <div className="relative flex w-full overflow-hidden mask-gradient-x">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap gap-8"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full border border-border bg-card/50 text-foreground/80 font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
