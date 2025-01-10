import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './redux/index.js'

import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <RouterProvider router={App} />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
