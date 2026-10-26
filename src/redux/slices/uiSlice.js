import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  isCartOpen: false,
  toast: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCart(state) {
      state.isCartOpen = true
    },
    closeCart(state) {
      state.isCartOpen = false
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen
    },
    showToast: {
      reducer(state, action) {
        state.toast = action.payload
      },
      prepare(message, tone = 'success') {
        return {
          payload: {
            id: nanoid(),
            message,
            tone,
          },
        }
      },
    },
    dismissToast(state) {
      state.toast = null
    },
  },
})

export const { openCart, closeCart, toggleCart, showToast, dismissToast } =
  uiSlice.actions

export const selectIsCartOpen = (state) => state.ui.isCartOpen
export const selectToast = (state) => state.ui.toast

export default uiSlice.reducer
