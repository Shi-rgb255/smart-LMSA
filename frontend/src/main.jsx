import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'   // <-- Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
 // <-- Optional: JS for components like modals, dropdowns

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App /></BrowserRouter>
  </StrictMode>,
)
