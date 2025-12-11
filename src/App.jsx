"use client"

import { useState } from "react"
import { HomePage } from "./components/HomePage"
import { MessagePage } from "./components/MessagePage"
import { IceCreamPage } from "./components/IceCreamPage"
import { FinalPage } from "./components/FinalPage"
import { FloatingMascot } from "./components/FloatingMascot"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    <HomePage key="home" onNext={() => setCurrentPage(1)} />,
    <MessagePage key="message" onNext={() => setCurrentPage(2)} />,
    <IceCreamPage key="icecream" onNext={() => setCurrentPage(3)} />,
    <FinalPage key="final" />,
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingMascot mood={currentPage === 3 ? "happy" : "sad"} />
      {pages[currentPage]}
    </main>
  )
}

export default App
