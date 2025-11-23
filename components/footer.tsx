"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to collaborate?</h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for opportunities or just to say hello.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:shrijalp2016@gmail.com">
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </Button>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="pt-12 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Shrijal Paudel. Built with Next.js & Tailwind.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
