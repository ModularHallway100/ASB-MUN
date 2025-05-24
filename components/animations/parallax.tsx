"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  // Fix: Add fallback rendering in case of issues
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
      initial={{ opacity: 1 }} // Ensure initial visibility
    >
      {children}
    </motion.div>
  )
}
