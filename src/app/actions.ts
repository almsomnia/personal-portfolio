"use server"

export async function submitContact(formData: FormData) {
   const name = formData.get("name")?.toString() ?? ""
   const email = formData.get("email")?.toString() ?? ""
   const subject = formData.get("subject")?.toString() ?? ""
   const message = formData.get("message")?.toString() ?? ""

   console.log("New message:", { name, email, subject, message })
   return { success: true }
}
