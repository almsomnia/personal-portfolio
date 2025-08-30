import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google"
import "../assets/css/globals.css"
import AppHeader from "@/components/app/AppHeader"

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
})

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
})

export const metadata: Metadata = {
   title: "Riva Almero | Web Developer",
   description: "Riva Almero web developer digital portfolio",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <AppHeader className="fixed top-0 inset-x-0 z-15 bg-white" />
            <main className="font-sans">{children}</main>
            <Analytics />
         </body>
      </html>
   )
}
