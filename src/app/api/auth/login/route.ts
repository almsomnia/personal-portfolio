import { createClient } from "@/libs/helpers/supabase/server"
import { NextResponse } from "next/server"
import { response } from "@/libs/helpers/api/response"

export async function POST(request: Request) {
   const { email, password } = await request.json()
   const supabase = await createClient()

   const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
   })

   if (error) {
      return NextResponse.json(response(null, { error: "Login failed" }), {
         status: 401,
      })
   }

   return NextResponse.json(
      response(data.session, { message: "Login success" }),
   )
}
