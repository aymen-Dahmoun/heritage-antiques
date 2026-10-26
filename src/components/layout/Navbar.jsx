import { Search, ShoppingBag, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount } from '../../redux/slices/cartSlice'
import {
  selectCategories,
  selectCategory,
  selectSearchTerm,
  setCategory,
  setSearchTerm,
} from '../../redux/slices/productSlice'
import { openCart } from '../../redux/slices/uiSlice'

function Navbar() {
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)
  const category = useSelector(selectCategory)
  const categories = useSelector(selectCategories)
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Heritage and Co. home">
          <span className="brand__mark" aria-hidden="true">
            H
          </span>
          <span className="brand__text">
            <span className="brand__name">Heritage &amp; Co.</span>
            <span className="brand__caption">Antiquités &amp; Objets d’Art</span>
          </span>
        </a>

        <div className="search">
          <Search className="search__icon" size={18} aria-hidden="true" />
          <label className="sr-only" htmlFor="collection-search">
            Search the collection
          </label>
          <input
            id="collection-search"
            className="search__input"
            type="search"
            value={searchTerm}
            onChange={(event) => dispatch(setSearchTerm(event.target.value))}
            placeholder="Search by object, era, or origin"
          />
          {searchTerm && (
            <button
              className="search__clear"
              type="button"
              onClick={() => dispatch(setSearchTerm(''))}
              aria-label="Clear search"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>

        <button
          className="cart-button"
          type="button"
          onClick={() => dispatch(openCart())}
          aria-label={`Open cart, ${cartCount} ${cartCount === 1 ? 'object' : 'objects'}`}
        >
          <ShoppingBag size={19} aria-hidden="true" />
          <span className="cart-button__label">Cart</span>
          <span className="cart-button__count" aria-hidden="true">
            {cartCount}
          </span>
        </button>
      </div>

      <nav className="category-nav" aria-label="Filter by category">
        <div className="category-nav__inner">
          {categories.map((entry) => (
            <button
              key={entry}
              type="button"
              className="category-tab"
              aria-pressed={category === entry}
              onClick={() => dispatch(setCategory(entry))}
            >
              {entry}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
