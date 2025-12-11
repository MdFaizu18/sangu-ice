"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const iceCreams = [
  { id: 1, name: "Chocolate", color: "#8B4513", emoji: "🍫" },
  { id: 2, name: "Vanilla", color: "#FFF5E1", emoji: "🤍" },
  { id: 3, name: "Strawberry", color: "#FFB6C1", emoji: "🍓" },
  { id: 4, name: "Butterscotch", color: "#FFD700", emoji: "🧈" },
  { id: 5, name: "Blueberry", color: "#6495ED", emoji: "🫐" },
  { id: 6, name: "Mint", color: "#98FF98", emoji: "🍃" },
  { id: 7, name: "Mango", color: "#FFA500", emoji: "🥭" },
  { id: 8, name: "Pistachio", color: "#93C572", emoji: "🌰" },
]

export function IceCreamPage({ onNext }) {
  const [liked, setLiked] = useState([])
  const [hearts, setHearts] = useState([])

  const handleLike = (id, event) => {
    if (!liked.includes(id)) {
      setLiked([...liked, id])
      const rect = event.currentTarget.getBoundingClientRect()
      const newHeart = {
        id: Date.now(),
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }
      setHearts([...hearts, newHeart])
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
      }, 1500)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full"
      >
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">Your Ice Cream Wall</h2>
          <p className="text-2xl md:text-3xl opacity-70 text-balance mb-3 leading-relaxed">
            Because you love ice creams, I made this special little wall only for you.
          </p>
          <p className="text-xl md:text-2xl opacity-60">Click on your favorites!</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {iceCreams.map((iceCream, index) => (
            <motion.button
              key={iceCream.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              onClick={(e) => handleLike(iceCream.id, e)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all border-4 relative overflow-hidden"
                style={{
                  borderColor: liked.includes(iceCream.id) ? iceCream.color : "#f3f4f6",
                }}
              >
                <div className="text-7xl md:text-8xl mb-6">{iceCream.emoji}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{iceCream.name}</h3>
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto shadow-inner"
                  style={{ backgroundColor: iceCream.color }}
                />

                <AnimatePresence>
                  {liked.includes(iceCream.id) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-4 right-4"
                    >
                      <svg className="w-8 h-8 fill-red-500 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-center">
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-12 py-5 text-xl rounded-full shadow-lg hover:shadow-2xl transition-all font-semibold"
          >
            Continue
          </button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ scale: 0, x: heart.x, y: heart.y }}
            animate={{ scale: 1.5, y: heart.y - 100, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed pointer-events-none z-50"
            style={{ left: 0, top: 0 }}
          >
            <svg className="w-8 h-8 fill-red-500 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
