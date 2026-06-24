import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, X, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TopBar() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden bg-white border-b border-[#0f1a0b]/5"
        >
          <div className="container-waha flex items-center justify-between gap-4 py-2 text-[11px]">
            {/* Left: contact info */}
            <div className="hidden sm:flex items-center gap-5 text-[#1a2e14]/70 font-inter">
              <a
                href="tel:+971567850662"
                className="flex items-center gap-1.5 hover:text-[#1a2e14] transition-colors"
              >
                <Phone size={11} strokeWidth={1.8} />
                <span>+971 567 850 662 (Dubai)</span>
              </a>
              <span className="text-[#1a2e14]/20">|</span>
              <a
                href="tel:+919995587428"
                className="flex items-center gap-1.5 hover:text-[#1a2e14] transition-colors"
              >
                <Phone size={11} strokeWidth={1.8} />
                <span>+91 99955 87428 (Kerala)</span>
              </a>
            </div>

            {/* Center: announcement */}
            <div className="flex items-center gap-2 text-[#1a2e14]/80 font-inter mx-auto sm:mx-0">
              <Clock size={11} strokeWidth={1.8} className="shrink-0" />
              <span className="tracking-wide">
                Free Design Consultation — Book yours today ·{' '}
                <Link to="/contact" className="text-[#556B2F] font-semibold hover:text-[#3D4F22] transition-colors underline-offset-2 hover:underline">
                  Get Started
                </Link>
              </span>
            </div>

            {/* Right: location + close */}
            <div className="hidden lg:flex items-center gap-4 text-[#1a2e14]/70 font-inter">
              <span className="flex items-center gap-1.5">
                <MapPin size={11} strokeWidth={1.8} />
                Kerala &amp; Dubai
              </span>
              <button
                onClick={() => setVisible(false)}
                className="text-[#1a2e14]/30 hover:text-[#1a2e14] transition-colors ml-2"
                aria-label="Dismiss announcement"
              >
                <X size={13} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
