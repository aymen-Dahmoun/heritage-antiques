import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Banner from '../components/layout/Banner'
import ProductCatalog from '../components/products/ProductCatalog'

function CatalogPage({ onSelectProduct }) {
  return (
    <motion.div
      className="catalog-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Banner />
      <div style={{ marginTop: '48px' }}>
        <ProductCatalog onSelectProduct={onSelectProduct} />
      </div>
    </motion.div>
  )
}

CatalogPage.propTypes = {
  onSelectProduct: PropTypes.func.isRequired,
}

export default CatalogPage
