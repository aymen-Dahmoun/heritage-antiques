import { Minus, Plus, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice'
import { cartItemShape } from '../../types/productShape'
import { formatCurrency } from '../../utils/currency'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const isAtInventoryLimit = item.quantity >= item.inventory

  return (
    <li className="cart-item">
      <div className="cart-item__media">
        <img src={item.image} alt={item.imageAlt} />
      </div>

      <div className="cart-item__content">
        <p className="cart-item__category">{item.category}</p>
        <h3 className="cart-item__title">{item.name}</h3>
        <p className="cart-item__price">
          {formatCurrency(item.price * item.quantity)}
        </p>

        <div className="cart-item__footer">
          <div className="quantity-stepper" aria-label={`Quantity for ${item.name}`}>
            <button
              type="button"
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1,
                  }),
                )
              }
              disabled={item.quantity <= 1}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus size={14} aria-hidden="true" />
            </button>
            <span aria-live="polite">{item.quantity}</span>
            <button
              type="button"
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1,
                  }),
                )
              }
              disabled={isAtInventoryLimit}
              aria-label={`Increase quantity of ${item.name}`}
              title={
                isAtInventoryLimit ? 'Only one available' : undefined
              }
            >
              <Plus size={14} aria-hidden="true" />
            </button>
          </div>

          <button
            className="cart-item__remove"
            type="button"
            onClick={() => dispatch(removeFromCart(item.id))}
            aria-label={`Remove ${item.name} from cart`}
          >
            <Trash2 size={15} aria-hidden="true" />
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

CartItem.propTypes = {
  item: cartItemShape.isRequired,
}

export default CartItem
