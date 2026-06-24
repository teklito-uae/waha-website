import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 48,
  duration = 0.75,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const hiddenState = {
    opacity: 0,
    y: direction === 'up' ? distance : 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    filter: 'blur(4px)',
  }

  const visibleState = {
    opacity: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration,
      ease: [0.22, 1, 0.36, 1] as const, // expo-out — the luxury real-estate easing
      delay,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
