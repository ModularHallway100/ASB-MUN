"use client"

import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion"
import PageTransition from "@/components/animations/page-transition"
import CursorFollower from "@/components/animations/cursor-follower"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <ErrorBoundary>
            <AnimatePresence mode="wait">
              <PageTransition>{children}</PageTransition>
            </AnimatePresence>
          </ErrorBoundary>
          <Footer />
          <CursorFollower />
        </ThemeProvider>
      </body>
    </html>
  )
}
