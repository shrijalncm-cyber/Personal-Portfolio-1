"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: "/", label: "Profile" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Close mobile menu when pathname changes (navigation)
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

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
            href="/"
            className={`hover:text-primary transition-colors ${isActive("/") ? "text-primary" : "text-foreground/80"}`}
          >
            Profile
          </Link>
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="relative"
          >
            <span className="sr-only">Toggle menu</span>
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.svg
                  key="close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="m18 6-12 12" />
                  <path d="m6 6 12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </motion.svg>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - positioned below header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-16 left-0 right-0 bottom-0 bg-background/30 backdrop-blur-md z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Navigation - Positioned below navbar with proper backdrop blur */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-full left-0 right-0 z-[60] md:hidden bg-background/98 backdrop-blur-mdborder-b border-border/40 shadow-xl"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`block py-3 px-2 text-lg font-medium transition-colors hover:text-primary hover:bg-accent/50 rounded-md ${
                        isActive(link.href) ? "text-primary bg-accent/30" : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navLinks.length * 0.1 + 0.3 }}
                  className="pt-4"
                >
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href="/Shrijal_Paudel_CV.pdf" download onClick={closeMobileMenu}>
                      Download CV
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
