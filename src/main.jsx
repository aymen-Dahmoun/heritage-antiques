import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
