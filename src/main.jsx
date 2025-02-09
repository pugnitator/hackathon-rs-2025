import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FavouritesProvider } from './contexts'
import { App } from './app.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </BrowserRouter>
  </StrictMode>
)
