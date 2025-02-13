"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

const inspirationalQuotes = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "The hardest lift of all is lifting your butt off the couch.",
  "You don't have to be extreme, just consistent.",
  "Strive for progress, not perfection.",
]

export default function CallToAction() {
  const [quote, setQuote] = useState(inspirationalQuotes[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuote(inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)])
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-white mb-8 italic">&quot;{quote}&quot;</p>
          <Link
            href="#join-now"
            className="inline-flex items-center justify-center bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg transition-all hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Zap className="w-64 h-64 text-white opacity-5" />
      </div>
    </div>
  )
}

