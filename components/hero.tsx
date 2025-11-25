"use client"

import { motion } from "framer-motion"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const roles = ["Business Development", "Operations", "Entrepreneurship"]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col pt-32 pb-20 px-4 md:px-6 container mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-50" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none opacity-30" />

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-primary font-medium mb-4"
          >
            <span className="h-px w-8 bg-primary"></span>
            <span>Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Shrijal Paudel<span className="text-primary">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 h-12"
          >
            <span className="text-foreground font-medium">Specializing in</span> Business Operations
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed border-l-2 border-border pl-6"
          >
            Experienced Business Operations Manager based in Kathmandu, Nepal, specializing in business strategy, 
            operations management, and entrepreneurship. I bridge the gap between business strategy and 
            operational excellence, helping startups and organizations thrive in competitive Nepalese and international markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/experience">Explore My Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Bento Grid - Right Side */}
        <div className="grid grid-cols-2 gap-4 auto-rows-[160px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-card border border-border rounded-3xl p-6 flex flex-col justify-between hover:border-primary/50 transition-colors group"
          >
            <div className="p-3 bg-secondary rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Based in</p>
              <p className="font-semibold text-lg">Lalitpur, Nepal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-card border border-border rounded-3xl p-6 flex flex-col justify-between hover:border-primary/50 transition-colors group col-span-1"
          >
            <div className="p-3 bg-secondary rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Latest Role</p>
              <p className="font-semibold text-md">Deputy Manager</p>
              <p className="text-sm text-muted-foreground">Nepal Can Group</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-card border border-border rounded-3xl p-6 flex flex-col justify-between hover:border-primary/50 transition-colors group col-span-2"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-secondary rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                3.52 GPA
              </span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Education</p>
              <p className="font-semibold text-lg">BBA (Entrepreneurship)</p>
              <p className="text-sm text-muted-foreground">Presidential Graduate School</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="w-full overflow-hidden py-10 border-y border-border/50 bg-secondary/20"
      >
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
            className="flex gap-12 text-2xl font-bold text-muted-foreground/50"
          >
            {[
              "Business Development",
              "Market Research",
              "Financial Management",
              "Team Leadership",
              "Negotiation",
              "Operations",
              "Event Management",
              "Business Development",
              "Market Research",
              "Financial Management",
              "Team Leadership",
              "Negotiation",
              "Operations",
              "Event Management",
            ].map((skill, i) => (
              <span key={i} className="flex items-center gap-4">
                {skill} <span className="w-2 h-2 rounded-full bg-primary/40" />
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
