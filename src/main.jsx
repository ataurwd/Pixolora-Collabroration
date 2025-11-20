import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './routes/Route.jsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import AuthContext from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthContext>
        <Route />
      </AuthContext>
      </ThemeProvider>
  </StrictMode>,
)
