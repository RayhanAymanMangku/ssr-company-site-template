"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { ArrowUpToLine } from 'lucide-react'

const ScrollButton = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <Button
      variant="default"
      size="icon"
      className="fixed bottom-6 right-6 rounded-full bg-black text-white z-50 p-6 shadow-lg hover:bg-gray-800 transition-colors duration-300"
      onClick={scrollToTop}
      id="scroll-button"
    >
      <ArrowUpToLine />
    </Button>
  )
}

export default ScrollButton