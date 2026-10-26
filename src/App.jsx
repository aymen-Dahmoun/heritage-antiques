import { useState } from 'react'
import CartDrawer from './components/cart/CartDrawer'
import Banner from './components/layout/Banner'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ProductCatalog from './components/products/ProductCatalog'
import ProductModal from './components/products/ProductModal'
import Toast from './components/ui/Toast'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="app-shell" id="top">
      <a className="skip-link" href="#collection">
        Skip to the collection
      </a>

      <Navbar />

      <main className="site-main">
        <Banner />
        <ProductCatalog onSelectProduct={setSelectedProduct} />
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
