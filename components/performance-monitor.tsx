"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals using Performance Observer API
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        console.log("LCP:", lastEntry.startTime)
      })
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          console.log("FID:", entry.processingStart - entry.startTime)
        })
      })
      fidObserver.observe({ entryTypes: ["first-input"] })

      // Monitor Cumulative Layout Shift (CLS)
      let clsScore = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsScore += entry.value
          }
        })
        console.log("CLS:", clsScore)
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })

      // Clean up observers
      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}