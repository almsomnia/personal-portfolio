"use client"

import { FormEvent, useState } from "react"
import Input from "../base/Input"
import Button from "../base/Button"

type Prop = {
   onSubmit: (data: { email: string; password: string }) => Promise<void>
}

export default function (props: Prop) {
   const [loading, setLoading] = useState(false)

   async function onFormSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      setLoading(true)
      const formData = new FormData(event.currentTarget)
      await props
         .onSubmit({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
         })
         .finally(() => {
            setLoading(false)
         })
   }

   return (
      <form
         className="flex flex-col gap-4"
         onSubmit={onFormSubmit}
      >
         <Input
            type="email"
            name="email"
            placeholder="Email"
            required
         />
         <Input
            type="password"
            name="password"
            placeholder="Password"
            required
         />
         <Button
            label="Login"
            loading={loading}
         />
      </form>
   )
}
