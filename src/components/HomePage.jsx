"use client"

import { motion } from "framer-motion"

export function HomePage({ onNext }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-8 md:p-16 shadow-xl border border-white/60">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <svg
                viewBox="0 0 200 240"
                className="w-56 h-64 md:w-64 md:h-72 mx-auto drop-shadow-2xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ice cream cone */}
                <path d="M70 140L100 220L130 140Z" fill="#E8C4A0" stroke="#D4A574" strokeWidth="2" />
                <path d="M75 145L100 215L125 145" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M85 160L100 200L115 160" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" />

                {/* Sad ice cream scoop */}
                <ellipse cx="100" cy="120" rx="50" ry="48" fill="#FFB4D6" />
                <ellipse cx="100" cy="115" rx="48" ry="45" fill="#FFC9E0" />

                {/* Sad face */}
                <circle cx="85" cy="110" r="5" fill="#6B5D6E" />
                <circle cx="115" cy="110" r="5" fill="#6B5D6E" />

                {/* Tears */}
                <motion.ellipse
                  cx="82"
                  cy="125"
                  rx="3"
                  ry="8"
                  fill="#A5D8FF"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.ellipse
                  cx="118"
                  cy="125"
                  rx="3"
                  ry="8"
                  fill="#A5D8FF"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                />

                {/* Sad mouth */}
                <path d="M85 135 Q100 130 115 135" stroke="#6B5D6E" strokeWidth="3" strokeLinecap="round" fill="none" />

                {/* Sparkles */}
                <motion.path
                  d="M30 60L32 65L37 63L32 68L30 73L28 68L23 63L28 65Z"
                  fill="#FFE5A0"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.path
                  d="M160 80L162 85L167 83L162 88L160 93L158 88L153 83L158 85Z"
                  fill="#FFE5A0"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </svg>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            A Sweet Apology for You, Sanguu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-3xl opacity-70 mb-16 text-balance leading-relaxed"
          >
            I'm really sorry... please give me a chance to explain.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-12 py-5 text-xl rounded-full shadow-lg hover:shadow-2xl transition-all font-semibold"
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                Continue
              </motion.span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
