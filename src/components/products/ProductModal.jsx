import { Check, ShieldCheck, ShoppingBag, X } from 'lucide-react'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartQuantityById } from '../../redux/slices/cartSlice'
import { showToast } from '../../redux/slices/uiSlice'
import { productShape } from '../../types/productShape'
import { formatCurrency } from '../../utils/currency'

function ProductModal({ product, onClose }) {
  const dispatch = useDispatch()
  const dialogRef = useRef(null)
  const quantityInCart = useSelector((state) =>
    product ? selectCartQuantityById(state, product.id) : 0,
  )

  useEffect(() => {
    const dialog = dialogRef.current

    if (!product || !dialog || dialog.open) {
      return
    }

    dialog.showModal()
  }, [product])

  if (!product) {
    return null
  }

  const isInCart = quantityInCart > 0

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      dialogRef.current.close()
    }
  }

  function handleAddToCart() {
    dispatch(addToCart(product))
    dispatch(showToast(`${product.name} added to your collection.`))
    dialogRef.current.close()
  }

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      aria-labelledby="product-modal-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <button
        className="product-modal__close"
        type="button"
        onClick={() => dialogRef.current.close()}
        aria-label="Close object details"
        autoFocus
      >
        <X size={20} aria-hidden="true" />
      </button>

      <div className="product-modal__layout">
        <div className="product-modal__media">
          <img src={product.image} alt={product.imageAlt} />
        </div>

        <div className="product-modal__details">
          <div className="product-modal__badges">
            <span className="p-badge p-badge--success">
              <ShieldCheck size={13} aria-hidden="true" />
              Museum verified
            </span>
            <span className="p-badge">1 of 1</span>
          </div>

          <p className="eyebrow">
            {product.category} · {product.epoch}
          </p>
          <h2 id="product-modal-title">{product.name}</h2>
          <p className="product-modal__origin">
            {product.origin} · {product.maker}
          </p>
          <p className="product-modal__price">{formatCurrency(product.price)}</p>

          <p className="product-modal__description">{product.description}</p>

          <div className="provenance">
            <p className="provenance__label">Provenance</p>
            <p>{product.provenance}</p>
          </div>

          <dl className="product-modal__meta">
            <div>
              <dt>Materials</dt>
              <dd>{product.materials}</dd>
            </div>
            <div>
              <dt>Dimensions</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div>
              <dt>Condition</dt>
              <dd>{product.condition}</dd>
            </div>
            <div>
              <dt>Reference</dt>
              <dd>{product.reference}</dd>
            </div>
          </dl>

          <div className="product-modal__actions">
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
            <button
              className="p-btn p-btn--secondary"
              type="button"
              onClick={() => dialogRef.current.close()}
            >
              Continue browsing
            </button>
          </div>

          <p className="product-modal__certificate">
            <ShieldCheck size={15} aria-hidden="true" />
            {product.certificate}
          </p>
        </div>
      </div>
    </dialog>
  )
}

ProductModal.propTypes = {
  product: productShape,
  onClose: PropTypes.func.isRequired,
}

export default ProductModal
