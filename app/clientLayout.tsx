"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion"
import PageTransition from "@/components/animations/page-transition"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <AnimatePresence mode="wait">
            <PageTransition>{children}</PageTransition>
          </AnimatePresence>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
