import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Categories from './pages/Categories.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { useCart } from './context/CartContext.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
        <Route path="/categories" element={<PageWrapper><Categories /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetails /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function ToastHost() {
  const { toast } = useCart()
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 30, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 30, x: '-50%' }}
          className="fixed bottom-6 left-1/2 z-[100] rounded-full bg-navy px-5 py-3 text-sm font-bold text-cream shadow-toy"
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1600)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full overflow-x-hidden bg-cream">
      <Loader show={loading} />
      <ScrollToTop />
      <Navbar />
      <main className="w-full">
        <AnimatedRoutes />
      </main>
      <Footer />
      <BackToTop />
      <ToastHost />
    </div>
  )
}
