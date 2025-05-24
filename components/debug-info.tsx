"use client"

import { useState, useEffect } from "react"

export default function DebugInfo() {
  const [info, setInfo] = useState({
    windowWidth: 0,
    windowHeight: 0,
    isClient: false,
  })

  useEffect(() => {
    setInfo({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isClient: true,
    })

    const handleResize = () => {
      setInfo((prev) => ({
        ...prev,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      }))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!info.isClient) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded text-xs z-50">
      <div>
        Window: {info.windowWidth}x{info.windowHeight}
      </div>
      <div>Rendered: {new Date().toLocaleTimeString()}</div>
    </div>
  )
}
