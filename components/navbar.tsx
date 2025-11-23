"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40"
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          SP<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/experience"
            className={`hover:text-primary transition-colors ${isActive("/experience") ? "text-primary" : "text-foreground/80"}`}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className={`hover:text-primary transition-colors ${isActive("/projects") ? "text-primary" : "text-foreground/80"}`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`hover:text-primary transition-colors ${isActive("/contact") ? "text-primary" : "text-foreground/80"}`}
          >
            Contact
          </Link>
          <ModeToggle />
          <Button variant="outline" size="sm" asChild>
            <a href="/Shrijal_Paudel_CV.pdf" download>
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
