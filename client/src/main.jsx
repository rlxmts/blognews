import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EstiloGlobal from './assets/EstiloGlobal/index.jsx';
import AppRotas from './Pages/Rotas.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <AppRotas />
  </StrictMode>,
)
