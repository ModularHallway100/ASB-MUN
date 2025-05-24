import type { Metadata } from "next"
import type React from "react"
import RootLayout from "./page"

export const metadata: Metadata = {
  title: "Global Model United Nations 2025",
  description: "Join delegates from around the world for the Global Model United Nations Conference 2025",
    generator: 'v0.dev'
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayout children={children} />
}


import './globals.css'
