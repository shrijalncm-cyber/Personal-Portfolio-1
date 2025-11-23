"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useFormState, useFormStatus } from "react-dom"
import { submitContactForm } from "@/app/actions"
import { useEffect, useRef } from "react"
import { Toaster } from "@/components/ui/toaster"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
    </Button>
  )
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss business opportunities? I&apos;d love to hear from you.
            </motion.p>
          </div>

          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold">Contact Information</h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:shrijalp2016@gmail.com"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          shrijalp2016@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+9779861611934" className="font-medium hover:text-primary transition-colors">
                          +977 986 1611934
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Lalitpur, Bagmati, Nepal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/20 border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">Availability</h3>
                  <p className="text-muted-foreground mb-4">
                    I am currently open to new opportunities in Business Operations, Strategy, and Development roles.
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-full border border-transparent bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Open to Work
                    </span>
                    <span className="inline-flex items-center rounded-full border border-transparent bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Full Time
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input name="firstName" id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input name="lastName" id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input name="subject" id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      name="message"
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  {state?.message && (
                    <p className={`text-sm ${state.success ? "text-green-500" : "text-red-500"}`}>{state.message}</p>
                  )}

                  <SubmitButton />
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </PageTransition>
      <Footer />
      {/* Toaster just in case we use it later, though using inline state for now */}
      <Toaster />
    </main>
  )
}
