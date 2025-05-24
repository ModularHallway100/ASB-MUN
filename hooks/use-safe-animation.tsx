"use client"

import { useState, useEffect } from "react"

export function useSafeAnimation(delay = 500) {
  const [canAnimate, setCanAnimate] = useState(false)

  useEffect(() => {
    // Only enable animations after content is definitely visible
    const timer = setTimeout(() => {
      setCanAnimate(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return canAnimate
}
