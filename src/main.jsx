import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { themeCofig } from './theme.jsx'
 
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={themeCofig}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
