import { createSelector, createSlice } from '@reduxjs/toolkit'
import { antiquesData } from '../../data/antiquesData'
import { normalizeText } from '../../utils/search'

const initialState = {
  items: antiquesData,
  searchTerm: '',
  category: 'All',
  sortOrder: 'featured',
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload
    },
    resetFilters(state) {
      state.searchTerm = initialState.searchTerm
      state.category = initialState.category
      state.sortOrder = initialState.sortOrder
    },
  },
})

export const { setSearchTerm, setCategory, setSortOrder, resetFilters } =
  productSlice.actions

export const selectCatalog = (state) => state.products.items
export const selectSearchTerm = (state) => state.products.searchTerm
export const selectCategory = (state) => state.products.category
export const selectSortOrder = (state) => state.products.sortOrder
export const selectCatalogSize = (state) => state.products.items.length

export const selectCategories = createSelector([selectCatalog], (items) => [
  'All',
  ...new Set(items.map((item) => item.category)),
])

export const selectVisibleProducts = createSelector(
  [selectCatalog, selectSearchTerm, selectCategory, selectSortOrder],
  (items, searchTerm, category, sortOrder) => {
    const query = normalizeText(searchTerm)

    const filtered = items.filter((item) => {
      const matchesCategory =
        category === 'All' || item.category === category
      const searchableValues = [
        item.name,
        item.category,
        item.epoch,
        item.origin,
        item.maker,
        item.summary,
      ]

      return (
        matchesCategory &&
        (!query ||
          searchableValues.some((value) =>
            normalizeText(value).includes(query),
          ))
      )
    })

    const sorted = [...filtered]

    if (sortOrder === 'price-asc') {
      sorted.sort((first, second) => first.price - second.price)
    }

    if (sortOrder === 'price-desc') {
      sorted.sort((first, second) => second.price - first.price)
    }

    if (sortOrder === 'oldest') {
      sorted.sort((first, second) => first.yearCreated - second.yearCreated)
    }

    if (sortOrder === 'newest') {
      sorted.sort((first, second) => second.yearCreated - first.yearCreated)
    }

    return sorted
  },
)

export const selectHasActiveFilters = createSelector(
  [selectSearchTerm, selectCategory, selectSortOrder],
  (searchTerm, category, sortOrder) =>
    searchTerm.trim() !== '' ||
    category !== initialState.category ||
    sortOrder !== initialState.sortOrder,
)

export default productSlice.reducer
