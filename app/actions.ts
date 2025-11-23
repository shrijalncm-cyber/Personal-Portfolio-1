"use server"

import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    const validatedData = contactSchema.parse(rawData)
    const supabase = await createClient()

    const { error } = await supabase.from("contact_messages").insert({
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      message: `[${validatedData.subject}] ${validatedData.message}`,
    })

    if (error) throw new Error(error.message)

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send message",
    }
  }
}
