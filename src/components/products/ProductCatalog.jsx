import { SearchX } from 'lucide-react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetFilters,
  selectCatalogSize,
  selectHasActiveFilters,
  selectVisibleProducts,
} from '../../redux/slices/productSlice'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'

function ProductCatalog({ onSelectProduct }) {
  const dispatch = useDispatch()
  const products = useSelector(selectVisibleProducts)
  const totalCount = useSelector(selectCatalogSize)
  const hasActiveFilters = useSelector(selectHasActiveFilters)

  return (
    <section
      className="catalog"
      id="collection"
      aria-labelledby="collection-title"
    >
      <div className="catalog__header">
        <div className="catalog__heading">
          <p className="eyebrow">The cabinet</p>
          <h2 id="collection-title">The Collection</h2>
          <p className="catalog__intro">
            Each piece is offered once, with condition notes, provenance, and a
            certificate of authenticity.
          </p>
        </div>

        <ProductFilters
          resultCount={products.length}
          totalCount={totalCount}
        />
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-state__icon" aria-hidden="true">
            <SearchX size={24} />
          </span>
          <h3>No objects match this search</h3>
          <p>
            Try a different era, category, or maker. Every object in the cabinet
            is unique.
          </p>
          {hasActiveFilters && (
            <button
              className="p-btn p-btn--secondary"
              type="button"
              onClick={() => dispatch(resetFilters())}
            >
              Clear search and filters
            </button>
          )}
        </div>
      )}
    </section>
  )
}

ProductCatalog.propTypes = {
  onSelectProduct: PropTypes.func.isRequired,
}

export default ProductCatalog
