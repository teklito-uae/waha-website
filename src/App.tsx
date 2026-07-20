import { Route, Routes } from "react-router-dom"

import { RootLayout } from "@/components/layout/RootLayout"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { Home } from "@/pages/Home"
import { PlaceholderPage } from "@/pages/PlaceholderPage"

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/services" element={<PlaceholderPage title="Services" />} />
          <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
