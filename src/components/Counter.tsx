import { useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface CounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
  suffix?: string
}

export default function Counter({ from = 0, to, duration = 2, className = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  
  const springValue = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
  })

  useEffect(() => {
    if (inView) {
      springValue.set(to)
    }
  }, [inView, springValue, to])

  // Instead of useTransform passing to motion.span children, 
  // we update the textContent directly for better performance with framer-motion springs
  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString() + suffix
      }
    })
  }, [springValue, suffix])

  return (
    <motion.span ref={ref} className={className}>
      {from}{suffix}
    </motion.span>
  )
}
