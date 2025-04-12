"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

