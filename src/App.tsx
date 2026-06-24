import { useState, useCallback, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Preloader from '@/components/Preloader'
import ScrollToTop from '@/components/ScrollToTop'
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import ServicesPage from '@/pages/Services'
import ProjectsPage from '@/pages/Projects'
import ProjectDetailPage from '@/pages/ProjectDetail'
import BlogPage from '@/pages/Blog'
import BlogPostPage from '@/pages/BlogPost'
import ContactPage from '@/pages/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)
  const handlePreloaderDone = useCallback(() => setLoading(false), [])

  // Prevent browser from restoring scroll position on reload
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop />
      {loading && <Preloader onComplete={handlePreloaderDone} />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}
