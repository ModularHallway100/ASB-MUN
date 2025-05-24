"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getDirectionVariants()}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
