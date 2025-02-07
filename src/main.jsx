import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FavouritesProvider } from './contexts'
import { App } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </StrictMode>,
)
