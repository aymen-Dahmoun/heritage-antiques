import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import logoImage from '../../assets/logo.png'
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
  const navigate = useNavigate()
  const location = useLocation()
  const searchTerm = useSelector(selectSearchTerm)
  const category = useSelector(selectCategory)
  const categories = useSelector(selectCategories)
  const cartCount = useSelector(selectCartCount)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearchChange = (event) => {
    const value = event.target.value
    dispatch(setSearchTerm(value))
    if (value && location.pathname !== '/catalog') {
      navigate('/catalog')
    }
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    if (location.pathname !== '/catalog') {
      navigate('/catalog')
    }
  }

  const isCatalog = location.pathname === '/catalog'

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <NavLink to="/" className="brand" aria-label="Heritage & Co. home">
          <img
            src={logoImage}
            alt="Heritage & Co."
            className="brand__logo-img"
          />
        </NavLink>

        <nav aria-label="Primary navigation">
          <ul className="site-nav__links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? 'active' : ''}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? 'active' : ''}`
                }
              >
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? 'active' : ''}`
                }
              >
                Philosophy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inquire"
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? 'active' : ''}`
                }
              >
                Concierge
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <form className="search" onSubmit={handleSearchSubmit} role="search">
            <Search className="search__icon" size={17} aria-hidden="true" />
            <label className="sr-only" htmlFor="collection-search">
              Search the collection
            </label>
            <input
              id="collection-search"
              className="search__input"
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search antiquities..."
            />
            {searchTerm && (
              <button
                className="search__clear"
                type="button"
                onClick={() => dispatch(setSearchTerm(''))}
                aria-label="Clear search"
              >
                <X size={15} aria-hidden="true" />
              </button>
            )}
          </form>

          <button
            className="cart-button"
            type="button"
            onClick={() => dispatch(openCart())}
            aria-label={`Open cart, ${cartCount} ${cartCount === 1 ? 'object' : 'objects'}`}
          >
            <ShoppingBag size={18} aria-hidden="true" />
            <span className="cart-button__label">Cabinet</span>
            <span className="cart-button__count" aria-hidden="true">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {isCatalog && (
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
      )}
    </header>
  )
}

export default Navbar
