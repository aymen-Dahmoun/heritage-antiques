import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)
      const maximumQuantity = product.inventory ?? 1

      if (existingItem) {
        existingItem.quantity = Math.min(
          existingItem.quantity + 1,
          maximumQuantity,
        )
        return
      }

      state.items.push({ ...product, quantity: 1 })
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload,
      )
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((entry) => entry.id === id)

      if (!item) {
        return
      }

      const nextQuantity = Math.max(
        0,
        Math.min(quantity, item.inventory ?? 1),
      )

      if (nextQuantity === 0) {
        state.items = state.items.filter((entry) => entry.id !== id)
        return
      }

      item.quantity = nextQuantity
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0),
)

export const selectCartSubtotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0),
)

export const selectCartQuantityById = (state, productId) =>
  state.cart.items.find((item) => item.id === productId)?.quantity ?? 0

export default cartSlice.reducer
