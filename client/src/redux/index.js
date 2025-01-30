import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlices'
import sidebarReducer from './slices/sidebarSlices'

const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
  }
})

export default store