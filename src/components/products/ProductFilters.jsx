import { RotateCcw } from 'lucide-react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { SORT_OPTIONS } from '../../constants/catalog'
import {
  resetFilters,
  selectHasActiveFilters,
  selectSortOrder,
  setSortOrder,
} from '../../redux/slices/productSlice'
import { formatObjectCount } from '../../utils/currency'

function ProductFilters({ resultCount, totalCount }) {
  const dispatch = useDispatch()
  const sortOrder = useSelector(selectSortOrder)
  const hasActiveFilters = useSelector(selectHasActiveFilters)

  return (
    <div className="product-filters">
      <p className="product-filters__count" aria-live="polite">
        {resultCount} of {formatObjectCount(totalCount)}
      </p>

      <div className="product-filters__sort">
        <label className="product-filters__label" htmlFor="catalog-sort">
          Sort by
        </label>
        <select
          id="catalog-sort"
          className="p-select"
          value={sortOrder}
          onChange={(event) => dispatch(setSortOrder(event.target.value))}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {hasActiveFilters && (
        <button
          className="p-btn p-btn--tertiary"
          type="button"
          onClick={() => dispatch(resetFilters())}
        >
          <RotateCcw size={15} aria-hidden="true" />
          Reset filters
        </button>
      )}
    </div>
  )
}

ProductFilters.propTypes = {
  resultCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
}

export default ProductFilters
