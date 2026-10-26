import { ShieldCheck } from 'lucide-react'
import PropTypes from 'prop-types'
import { formatCurrency, formatObjectCount } from '../../utils/currency'

function CartSummary({ itemCount, subtotal, onCheckout }) {
  return (
    <div className="cart-summary">
      <div className="cart-summary__row">
        <span>Subtotal · {formatObjectCount(itemCount)}</span>
        <strong>{formatCurrency(subtotal)}</strong>
      </div>
      <div className="cart-summary__row cart-summary__row--muted">
        <span>Insured delivery</span>
        <span>Included</span>
      </div>
      <div className="cart-summary__row cart-summary__row--total">
        <span>Total</span>
        <strong>{formatCurrency(subtotal)}</strong>
      </div>

      <button
        className="p-btn p-btn--primary cart-summary__checkout"
        type="button"
        onClick={onCheckout}
      >
        Proceed to acquisition
      </button>

      <p className="cart-summary__note">
        <ShieldCheck size={14} aria-hidden="true" />
        Academic demonstration. No payment will be taken.
      </p>
    </div>
  )
}

CartSummary.propTypes = {
  itemCount: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  onCheckout: PropTypes.func.isRequired,
}

export default CartSummary
