import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import AuthConextProvider from './context/AutContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthConextProvider>
      <RouterProvider router={router} />
    </AuthConextProvider>
  </StrictMode>,
)
