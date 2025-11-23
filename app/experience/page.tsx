"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { motion, useScroll, useSpring } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    role: "Deputy Manager",
    company: "Nepal Can Group",
    period: "Nov 2025 - Present",
    location: "Kathmandu District, Nepal",
    type: "Business Operations",
    description: [
      "Promoted to Deputy Manager of Nepal Can Buy, a subsidiary of Nepal Can Group.",
      "Leading Business Model Innovation and Leadership initiatives.",
      "Developing foundational operational and business frameworks for scaling.",
    ],
  },
  {
    role: "Executive Assistant",
    company: "Nepal Can Buy",
    period: "Aug 2025 - Nov 2025",
    location: "Kathmandu District, Nepal",
    type: "Marketplace Operations",
    description: [
      "Played a key role in the operational launch and initiation of Nepal Can Buy.",
      "Assisted in developing frameworks, policies, and system workflows.",
      "Coordinated with sister companies (Nepal Can Move, Nepal Can Logistics) to build an integrated ecosystem.",
      "Oversaw go-to-market strategy for vendor acquisition and onboarding.",
      "Designed and documented end-to-end business workflows and technological wireframes.",
    ],
  },
  {
    role: "Business Advisor",
    company: "Flagforge",
    period: "May 2025 - Present",
    location: "Remote / Self-employed",
    type: "Business Consulting",
    description: [
      "Advising on business strategy and operations.",
      "Identifying potential growth opportunities through market research.",
    ],
  },
  {
    role: "Executive Assistant - BD",
    company: "Nepal Can Move",
    period: "May 2025 - Aug 2025",
    location: "Kathmandu District, Nepal",
    type: "Logistics & Business Development",
    description: [
      "Contributed to business development activities and market research.",
      "Assisted in building relationships with partners, vendors, and stakeholders.",
      "Identified areas for process improvement and implemented efficient systems.",
    ],
  },
  {
    role: "Program Intern",
    company: "Presidential Graduate School",
    period: "Jun 2024 - Aug 2024",
    location: "Kathmandu, Nepal",
    type: "Center for Entrepreneurship and Incubation",
    description: [
      "Assisted in planning and managing events like PGS Ideation.",
      "Conducted market research and competitor analysis.",
      "Helped develop business plans and financial projections.",
      "Collaborated in creating startup programs and learning materials.",
    ],
  },
  {
    role: "Associate",
    company: "Clock b Business Innovations",
    period: "Nov 2022 - Jul 2023",
    location: "Bishalnagar, Kathmandu",
    type: "Business Consulting & Investment",
    description: [
      "Worked across 5 sister institutions including Investment Circle and Marketive.",
      "Hosted events like 'Pitch Date With Angels'.",
      "Collaborated with 200+ SMEs on the USAID 'BGyan' project.",
      "Handled social media, digital marketing strategies, and startup funding negotiations.",
    ],
  },
]

function ExperienceTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className="relative container mx-auto px-4 md:px-6 max-w-4xl">
      {/* Vertical Line */}
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute top-0 left-0 w-full h-full bg-primary origin-top"
        />
      </div>

      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[28px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10" />

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-right"}`}>
              <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? "items-start" : "md:items-end"}`}>
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                <div className="text-lg font-medium text-foreground/80 flex items-center gap-2">
                  {index % 2 !== 0 && <Briefcase className="w-4 h-4 hidden md:block" />}
                  {exp.company}
                  {index % 2 === 0 && <Briefcase className="w-4 h-4 hidden md:block" />}
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  {index % 2 !== 0 && <MapPin className="w-3 h-3 hidden md:block" />}
                  {exp.location}
                  {index % 2 === 0 && <MapPin className="w-3 h-3 hidden md:block" />}
                </div>
              </div>

              <div
                className={`p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors shadow-sm ${index % 2 !== 0 ? "md:text-right" : "text-left"}`}
              >
                <ul
                  className={`space-y-2 text-muted-foreground text-sm list-disc ${index % 2 === 0 ? "ml-4" : "md:mr-4 md:ml-0 ml-4 rtl:list-outside"}`}
                >
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Empty space for the other side */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      <Navbar />
      <PageTransition>
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Professional Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              My professional journey through business operations, incubation, and consulting environments.
            </motion.p>
          </div>

          <ExperienceTimeline />
        </div>
      </PageTransition>
      <Footer />
    </main>
  )
}
