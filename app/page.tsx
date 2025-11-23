import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { TechStack } from "@/components/tech-stack"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      <Navbar />
      <PageTransition>
        <Hero />
        <TechStack />
        <Testimonials />
      </PageTransition>
      <Footer />
    </main>
  )
}
