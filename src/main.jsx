import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeContextProvider } from './contexts/ThemeContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)
