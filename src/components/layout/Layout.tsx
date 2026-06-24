import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import TopBar from './TopBar'
import Footer from './Footer'
import { Toaster } from 'sonner'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <div className="relative flex-1 flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      </div>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#556B2F',
            color: '#F5F5DC',
            border: '1px solid #3D4F22',
            fontFamily: 'Host Grotesk, sans-serif',
          },
        }}
      />
    </div>
  )
}
