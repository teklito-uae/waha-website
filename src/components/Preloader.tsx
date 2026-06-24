import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in')

  useEffect(() => {
    // After text animates in, hold briefly then exit
    const holdTimer = setTimeout(() => setPhase('hold'), 800)
    const outTimer = setTimeout(() => setPhase('out'), 1800)
    const doneTimer = setTimeout(() => onComplete(), 2600)
    return () => {
      clearTimeout(holdTimer)
      clearTimeout(outTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'out' ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a2e14 0%, #2A3717 30%, #3D4F22 60%, #556B2F 85%, #6B8A3A 100%)',
          }}
        >
          {/* Animated noise/grain overlay for texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Top thin line accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute top-0 left-0 right-0 h-px origin-left"
            style={{ background: 'linear-gradient(90deg, transparent, #F5F5DC40, #C9A22780, #F5F5DC40, transparent)' }}
          />

          {/* Brand name */}
          <div className="relative flex flex-col items-center gap-5">
            {/* WAHA — large display */}
            <div className="relative overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="font-sora font-light text-[5rem] sm:text-[7rem] md:text-[9rem] leading-none tracking-[0.15em] text-[#F5F5DC]/90 select-none"
              >
                WAHA
              </motion.h1>
              {/* Shimmer sweep over WAHA */}
              <motion.div
                initial={{ x: '-110%' }}
                animate={{ x: '110%' }}
                transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1], delay: 0.55 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 30%, rgba(245,245,220,0.55) 50%, rgba(201,162,39,0.45) 55%, rgba(245,245,220,0.55) 60%, transparent 70%)',
                }}
              />
            </div>

            {/* INTERIORS — small subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 12, letterSpacing: '0.6em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.45em' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="font-inter text-xs sm:text-sm text-[#F5F5DC]/50 uppercase tracking-[0.45em]"
            >
              Interiors
            </motion.div>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="w-24 h-px origin-center"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A227, transparent)' }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="font-inter text-[10px] tracking-[0.25em] text-[#F5F5DC]/30 uppercase"
            >
              Design · Craft · Sanctuary
            </motion.p>
          </div>

          {/* Bottom loader bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-px bg-[#F5F5DC]/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="w-full h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #6B8A3A, #C9A227, #F5F5DC)' }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
