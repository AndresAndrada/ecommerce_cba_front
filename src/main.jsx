import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios';

axios.defaults.baseURL = 'https://backend-ecommerce-cba.onrender.com';
// axios.defaults.baseURL = 'https://backend-ecommerce-cba.onrender.comhttp://localhost:3001'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
