import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './redux/store'
import './styles/polaris-tokens.css'
import './styles/main.css'
import './components/layout/layout.css'
import './components/products/products.css'
import './components/cart/cart.css'
import './components/ui/ui.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
