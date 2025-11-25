"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Lightbulb, Plane, Award, HeartHandshake } from "lucide-react"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "BGyan (USAID Project)",
    category: "Business Development",
    role: "Project Associate",
    icon: <Users className="w-5 h-5" />,
    description:
      "Collaborated with 200+ SMEs to enhance their business methodology, operations, business model, and market reach. Facilitated workshops and consulting sessions.",
    tags: ["USAID", "SME Consulting", "Operations"],
  },
  {
    title: "Pitch Date With Angels",
    category: "Event Management",
    role: "Host & Coordinator",
    icon: <Lightbulb className="w-5 h-5" />,
    description:
      "Hosted and organized high-profile events where startups pitched ideas to angel investors and PE/VC firms. Managed communication and logistics.",
    tags: ["Public Speaking", "Event Hosting", "Startups"],
  },
  {
    title: "Nepal Robotics Project",
    category: "STEM",
    role: "Team Lead",
    icon: <Plane className="w-5 h-5" />,
    description:
      "Successfully built a drone with effective leadership and teamwork. Managed the team to ensure task completion and technical success.",
    tags: ["Robotics", "Leadership", "Teamwork"],
  },
  {
    title: "Interact Club of Little Angels'",
    category: "Volunteering",
    role: "Assistant to President",
    icon: <HeartHandshake className="w-5 h-5" />,
    description:
      "Helped with decision making, event organization, and negotiations. Developed income models for events and handled marketing initiatives.",
    tags: ["Volunteering", "Marketing", "Event Planning"],
  },
  {
    title: "STEM Club",
    category: "Leadership",
    role: "Vice-President",
    icon: <Award className="w-5 h-5" />,
    description:
      "Managed different teams and projects at Kanjirowa National School. Improved leadership and communication skills through active involvement.",
    tags: ["Leadership", "Management", "Education"],
  },
]

export default function ProjectsPage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      <Navbar />
      <PageTransition>
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Projects & Volunteering
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A collection of my initiatives in business development, community service, and technology.
            </motion.p>
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    index === 0 && isPageLoaded
                      ? { opacity: 1, y: 0 }
                      : index === 0
                      ? { opacity: 0, y: 20 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={index > 0 ? { opacity: 1, y: 0 } : undefined}
                  viewport={index > 0 ? { once: true } : undefined}
                  transition={index === 0 ? { duration: 0.5 } : { duration: 0.5, delay: (index - 1) * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:border-primary/50 transition-colors cursor-default group">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors text-primary">
                          {project.icon}
                        </div>
                        <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="font-medium text-foreground/80">{project.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-secondary/50 rounded-md text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </main>
  )
}
