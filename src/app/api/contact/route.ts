import { NextResponse } from "next/server"
import useMailer from "@/libs/composables/useMailer"

export async function POST(req: Request) {
   try {
      const { name, email, subject, message } = await req.json()

      const transporter = useMailer()
      await transporter.sendMail({
         from: name,
         to: process.env.EMAIL_TARGET,
         subject: subject,
         text: `${message}\n\Sent from Riva Almero Personal Portfolio`,
         replyTo: email
      })

      return NextResponse.json({ ok: true })
   } catch (e) {
      console.error(e)
      return NextResponse.json({ ok: false })
   }
}
