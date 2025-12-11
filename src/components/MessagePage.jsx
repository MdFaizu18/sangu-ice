"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const message =
  "I know you're angry... and you have every right to be. I just want you to know I truly care and I never wanted to hurt you."

export function MessagePage({ onNext }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mood, setMood] = useState(30)

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  const getMoodEmoji = (value) => {
    if (value < 25) return "😢"
    if (value < 50) return "😔"
    if (value < 75) return "😐"
    return "🙂"
  }

  const getMoodText = (value) => {
    if (value < 25) return "Very Sad"
    if (value < 50) return "Sad"
    if (value < 75) return "Neutral"
    return "Hopeful"
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 backdrop-blur-lg rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-2xl border border-white/80"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">Dear Sanguu,</h2>

          <div className="min-h-[200px] mb-12">
            <p className="text-2xl md:text-3xl leading-relaxed text-pretty">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block w-1 h-7 bg-pink-400 ml-1 align-middle"
              />
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="text-center space-y-4">
              <p className="text-xl md:text-2xl opacity-70 mb-4">How are you feeling right now?</p>
              <div className="text-7xl mb-6">{getMoodEmoji(mood)}</div>
              <p className="text-2xl font-semibold mb-6">{getMoodText(mood)}</p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={mood}
              onChange={(e) => setMood(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-pink-400"
            />
            <div className="flex justify-between text-base md:text-lg opacity-60 px-2">
              <span>Sad</span>
              <span>Hopeful</span>
            </div>
          </div>

          {currentIndex >= message.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center pt-4"
            >
              <button
                onClick={onNext}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-12 py-5 text-xl rounded-full shadow-lg hover:shadow-2xl transition-all font-semibold"
              >
                Continue
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
