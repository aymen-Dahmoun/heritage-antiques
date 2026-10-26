import { ShoppingBag, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeCart,
  selectIsCartOpen,
  showToast,
} from '../../redux/slices/uiSlice'
import {
  selectCartCount,
  selectCartItems,
  selectCartSubtotal,
} from '../../redux/slices/cartSlice'
import { formatObjectCount } from '../../utils/currency'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

function CartDrawer() {
  const dispatch = useDispatch()
  const dialogRef = useRef(null)
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)
  const cartSubtotal = useSelector(selectCartSubtotal)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    if (isCartOpen && !dialog.open) {
      dialog.showModal()
    }

    if (!isCartOpen && dialog.open) {
      dialog.close()
    }
  }, [isCartOpen])

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      dialogRef.current.close()
    }
  }

  function handleCheckout() {
    dispatch(closeCart())
    dispatch(
      showToast(
        'Checkout is disabled in this academic demonstration. No payment was taken.',
        'info',
      ),
    )
  }

  return (
    <dialog
      ref={dialogRef}
      className="cart-drawer"
      aria-labelledby="cart-drawer-title"
      onClose={() => dispatch(closeCart())}
      onClick={handleBackdropClick}
    >
      <div className="cart-drawer__panel">
        <div className="cart-drawer__header">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2 id="cart-drawer-title">Your collection</h2>
            <p className="cart-drawer__count">
              {formatObjectCount(cartCount)}
            </p>
          </div>
          <button
            className="icon-button"
            type="button"
            onClick={() => dispatch(closeCart())}
            aria-label="Close cart"
            autoFocus
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-drawer__empty">
            <span className="cart-drawer__empty-icon" aria-hidden="true">
              <ShoppingBag size={26} />
            </span>
            <h3>Your collection is empty</h3>
            <p>
              Browse the cabinet and add an object to begin your private
              selection.
            </p>
            <button
              className="p-btn p-btn--primary"
              type="button"
              onClick={() => dispatch(closeCart())}
            >
              Browse the collection
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__items">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>

            <CartSummary
              itemCount={cartCount}
              subtotal={cartSubtotal}
              onCheckout={handleCheckout}
            />
          </>
        )}
      </div>
    </dialog>
  )
}

export default CartDrawer
