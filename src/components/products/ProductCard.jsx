import { Check, ShieldCheck, ShoppingBag } from 'lucide-react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartQuantityById } from '../../redux/slices/cartSlice'
import { showToast } from '../../redux/slices/uiSlice'
import { productShape } from '../../types/productShape'
import { formatCurrency } from '../../utils/currency'

function ProductCard({ product, onSelect }) {
  const dispatch = useDispatch()
  const quantityInCart = useSelector((state) =>
    selectCartQuantityById(state, product.id),
  )
  const isInCart = quantityInCart > 0

  function handleAddToCart() {
    dispatch(addToCart(product))
    dispatch(showToast(`${product.name} added to your collection.`))
  }

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.imageAlt}
          decoding="async"
        />
        <span className="p-badge p-badge--success product-card__verified">
          <ShieldCheck size={13} aria-hidden="true" />
          Museum verified
        </span>
        <span className="product-card__edition">1 of 1</span>
      </div>

      <div className="product-card__body">
        <p className="product-card__meta">
          <span>{product.category}</span>
          <span aria-hidden="true">·</span>
          <span>{product.epoch}</span>
        </p>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__origin">{product.origin}</p>

        <div className="product-card__price-row">
          <p className="product-card__price">{formatCurrency(product.price)}</p>
          {isInCart && (
            <span className="product-card__cart-note">
              <Check size={13} aria-hidden="true" />
              In cart
            </span>
          )}
        </div>
      </div>

      <div className="product-card__actions">
        <button
          className="p-btn p-btn--secondary"
          type="button"
          onClick={() => onSelect(product)}
        >
          Details
        </button>
        <button
          className="p-btn p-btn--primary"
          type="button"
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? (
            <>
              <Check size={16} aria-hidden="true" />
              In cart
            </>
          ) : (
            <>
              <ShoppingBag size={16} aria-hidden="true" />
              Add to cart
            </>
          )}
        </button>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  product: productShape.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default ProductCard
