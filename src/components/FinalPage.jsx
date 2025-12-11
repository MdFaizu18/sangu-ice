"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

export function FinalPage() {
  const [forgiven, setForgiven] = useState(false)

  const handleForgive = () => {
    setForgiven(true)

    // Confetti animation
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#FFB4D6", "#FCE1F4", "#E2F4FF", "#FFF6D8", "#FFD700"],
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#FFB4D6", "#FCE1F4", "#E2F4FF", "#FFF6D8", "#FFD700"],
      })
    }, 250)
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="bg-white/95 backdrop-blur-lg rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-2xl border border-white/90"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            className="text-9xl mb-10"
          >
            🍦
          </motion.div>

          <div className="space-y-8 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              I am truly sorry, Sanguu.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl opacity-80 leading-relaxed"
            >
              You mean a lot to me.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-3xl md:text-4xl opacity-80 leading-relaxed"
            >
              Can we be okay again? 🫶
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl opacity-70 italic pt-8 border-t border-gray-200 mt-8"
            >
              — With love and apology,
              <br />
              <span className="font-semibold text-2xl md:text-3xl">Faizu</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            {!forgiven ? (
              <button
                onClick={handleForgive}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-14 py-6 text-2xl rounded-full shadow-lg hover:shadow-2xl transition-all font-semibold"
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Forgive Me? 💝
                </motion.span>
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="space-y-6"
              >
                <div className="text-8xl">🥰</div>
                <p className="text-3xl font-semibold leading-relaxed">Thank you for being so understanding! 💕</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
