import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EstiloGlobal from './assets/EstiloGlobal/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <App />
  </StrictMode>,
)
