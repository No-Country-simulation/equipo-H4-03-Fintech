import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './redux/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={App} />
    </Provider>
  </StrictMode>,
)
