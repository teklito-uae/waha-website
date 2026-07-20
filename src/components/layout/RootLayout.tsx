import { Outlet } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ServiceAreas } from "@/sections/ServiceAreas"

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  )
}
