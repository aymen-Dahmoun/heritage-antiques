import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CartDrawer from './components/cart/CartDrawer'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/layout/ScrollToTop'
import ProductModal from './components/products/ProductModal'
import Toast from './components/ui/Toast'
import AboutPage from './pages/AboutPage'
import CatalogPage from './pages/CatalogPage'
import InquirePage from './pages/InquirePage'
import LandingPage from './pages/LandingPage'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const location = useLocation()

  return (
    <div className="app-shell" id="top">
      <ScrollToTop />
      <a className="skip-link" href="#content">
        Skip to main content
      </a>

      <Navbar />

      <main className="site-main" id="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<LandingPage onSelectProduct={setSelectedProduct} />}
            />
            <Route
              path="/catalog"
              element={<CatalogPage onSelectProduct={setSelectedProduct} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/inquire" element={<InquirePage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      <CartDrawer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Toast />
    </div>
  )
}

export default App
