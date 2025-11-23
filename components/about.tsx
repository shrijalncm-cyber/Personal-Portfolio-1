"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I am a strategic leader with a focus on Business Model Innovation and Logistics. Currently leading
              operations at Nepal Can Buy, a subsidiary of Nepal Can Group.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey involves scaling platforms, optimizing workflows, and building integrated ecosystems. I
              specialize in bridging the gap between operational strategy and technological execution.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] bg-muted rounded-2xl overflow-hidden flex items-center justify-center border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <span className="text-muted-foreground/50 font-mono text-sm">[Portrait / Abstract Visual]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
