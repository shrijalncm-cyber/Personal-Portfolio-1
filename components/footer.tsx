"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="py-16 md:py-20 lg:py-24 border-t border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">Ready to collaborate?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
            Feel free to reach out for opportunities or just to say hello.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2 hover:scale-[1.05] hover:shadow-lg transition-all duration-300 ease-in-out" asChild>
              <a href="mailto:shrijalp2016@gmail.com">
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </Button>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 place-items-center">
              <Button variant="ghost" size="icon" className="hover:scale-[1.05] hover:shadow-md transition-all duration-300 ease-in-out" asChild>
                <a href="https://linkedin.com/in/shrijalpaudel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            {/*
             <Button variant="ghost" size="icon" className="hover:scale-[1.05] hover:shadow-md transition-all duration-300 ease-in-out" asChild>
                <a href="#" aria-label="X">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>*/}
              <Button variant="ghost" size="icon" className="hover:scale-[1.05] hover:shadow-md transition-all duration-300 ease-in-out" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="my-12 mx-auto flex justify-center">
            <div className="h-[1px] w-20 sm:w-28 lg:w-36 bg-gradient-to-r from-primary/30 via-blue-400/60 to-primary/30 rounded-full" />
          </div>
          <div className="pt-8 text-sm text-center text-muted-foreground font-medium leading-relaxed">
            <p>&copy; {new Date().getFullYear()} Shrijal Paudel. Built with Next.js & Tailwind.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
