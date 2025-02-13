"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Dumbbell } from "lucide-react"

const partnerLogos = [
  "/placeholder.svg?height=80&width=160",
  "/placeholder.svg?height=80&width=160",
  "/placeholder.svg?height=80&width=160",
  "/placeholder.svg?height=80&width=160",
  "/placeholder.svg?height=80&width=160",
]

export default function InfiniteScroll() {
  const [logos, setLogos] = useState(partnerLogos)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const intervalId = setInterval(scroll, 50)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setLogos([...partnerLogos, ...partnerLogos])
  }, [])

  return (
    <div ref={scrollRef} className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-8 py-4">
        {logos.map((logo, index) => (
          <div key={index} className="w-40 h-20 text-white text-2xl font-bold rounded-lg flex items-center justify-center">
            <Dumbbell className="size-12 mr-2"/>
            Partner
          </div>
        ))}
      </div>
    </div>
  )
}

