"use client"

import { motion } from "framer-motion"

export function FloatingMascot({ mood }) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 120 140"
          className="w-24 h-28 md:w-32 md:h-36 drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ice cream cone */}
          <path d="M40 80L60 130L80 80Z" fill="#E8C4A0" stroke="#D4A574" strokeWidth="2" />
          <path d="M45 85L60 120L75 85" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" />

          {/* Ice cream scoop */}
          <ellipse cx="60" cy="70" rx="30" ry="28" fill="#FFE5A0" />
          <ellipse cx="60" cy="67" rx="28" ry="26" fill="#FFF5C0" />

          {/* Face based on mood */}
          {mood === "sad" ? (
            <>
              <circle cx="50" cy="65" r="3" fill="#6B5D6E" />
              <circle cx="70" cy="65" r="3" fill="#6B5D6E" />
              <path d="M50 80 Q60 77 70 80" stroke="#6B5D6E" strokeWidth="2" strokeLinecap="round" fill="none" />
            </>
          ) : (
            <>
              <circle cx="50" cy="65" r="3" fill="#6B5D6E" />
              <circle cx="70" cy="65" r="3" fill="#6B5D6E" />
              <path d="M50 78 Q60 83 70 78" stroke="#6B5D6E" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Blush */}
              <ellipse cx="45" cy="72" rx="4" ry="2" fill="#FFB4D6" opacity="0.6" />
              <ellipse cx="75" cy="72" rx="4" ry="2" fill="#FFB4D6" opacity="0.6" />
            </>
          )}

          {/* Sparkle */}
          <motion.g
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <path d="M95 30L96 35L101 33L96 38L95 43L94 38L89 33L94 35Z" fill="#FFD700" />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  )
}
