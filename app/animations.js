"use client"

import { useEffect } from "react"

export function initAnimations() {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal")

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

    revealElements.forEach((el) => observer.observe(el))

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

