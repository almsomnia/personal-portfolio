"use client"

import Card from "@/components/base/Card"
import Alert from "@/components/base/Alert"
import FormLogin from "@/components/forms/FormLogin"
import { Session } from "@supabase/supabase-js"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function () {
   const router = useRouter()

   const [alert, setAlert] = useState({
      message: "",
      show: false,
      severity: "",
   })

   async function onSubmit(data: { email: string; password: string }) {
      const response: API.Response<Session> = await fetch("/api/auth/login", {
         method: "POST",
         body: JSON.stringify(data),
      }).then(async (res) => await res.json())

      setAlert(() => ({
         show: true,
         message: response.meta.success
            ? response.meta.message
            : response.meta.error,
         severity: response.meta.success ? "info" : "error",
      }))

      setTimeout(() => {
         setAlert(() => ({
            message: "",
            show: false,
            severity: "",
         }))
      }, 5000)

      router.push("/admin")
   }

   return (
      <main className="h-screen">
         <div className="flex h-full flex-col items-center justify-center gap-y-4">
            <Alert
               visible={alert.show}
               message={alert.message}
               severity={alert.severity ?? "primary"}
               className="w-md"
            />
            <Card
               className="w-md"
               title="Login"
            >
               <FormLogin onSubmit={onSubmit} />
            </Card>
         </div>
      </main>
   )
}
