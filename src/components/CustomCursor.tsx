import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const ringX = useSpring(useMotionValue(-100), { damping: 28, stiffness: 200, mass: 0.5 })
  const ringY = useSpring(useMotionValue(-100), { damping: 28, stiffness: 200, mass: 0.5 })

  const ringXMv = useMotionValue(-100)
  const ringYMv = useMotionValue(-100)

  const [label, setLabel] = useState('')
  const [isHover, setIsHover] = useState(false)
  const [isLink, setIsLink] = useState(false)

  useEffect(() => {
    // Only show on pointer devices
    if (!window.matchMedia('(hover: hover)').matches) return

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ringXMv.set(e.clientX)
      ringYMv.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const closest = target.closest('a, button, [data-cursor]')
      if (closest) {
        setIsLink(true)
        const cursorLabel = closest.getAttribute('data-cursor') ?? ''
        setLabel(cursorLabel)
        setIsHover(true)
      } else {
        setIsLink(false)
        setLabel('')
        setIsHover(false)
      }
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [dotX, dotY, ringX, ringY, ringXMv, ringYMv])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          className={`rounded-full bg-[#556B2F] transition-all duration-200 ${
            isLink ? 'w-2 h-2 opacity-60' : 'w-1.5 h-1.5 opacity-100'
          }`}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          className={`rounded-full border transition-all duration-300 flex items-center justify-center ${
            isLink
              ? 'w-12 h-12 border-[#556B2F] bg-[#556B2F]/10'
              : 'w-8 h-8 border-[#556B2F]/40 bg-transparent'
          }`}
        >
          {label && (
            <span className="font-inter text-[8px] tracking-[0.2em] uppercase text-[#556B2F] font-medium">
              {label}
            </span>
          )}
        </div>
      </motion.div>
    </>
  )
}
