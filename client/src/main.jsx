// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { AuthProvider } from './store/auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
    
      <App />
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition: Bounce />
    
    </AuthProvider>
  </React.StrictMode>
  
)