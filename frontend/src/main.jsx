import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthConextProvider from './context/AuthContext'
import { router } from './router/router'
import VisitorContextProvider from './context/DataContext'
import { Bounce, ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthConextProvider>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
      <VisitorContextProvider>
        <RouterProvider router={router} />
      </VisitorContextProvider>
    </AuthConextProvider>
  </StrictMode>,
)
