"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useSafeAnimation } from "@/hooks/use-safe-animation"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export default function SafeScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const canAnimate = useSafeAnimation(300)

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }
      case "down":
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }
      case "left":
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
      case "right":
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
      default:
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }
    }
  }

  // If animations aren't ready yet, render children directly
  if (!canAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="visible" // Start visible to ensure content is always shown
      animate={isInView ? "visible" : "hidden"}
      variants={getDirectionVariants()}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      style={{ pointerEvents: "auto" }} // Ensure pointer events work
    >
      {children}
    </motion.div>
  )
}
