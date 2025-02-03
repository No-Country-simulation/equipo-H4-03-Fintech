import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlices'
import sidebarReducer from './slices/sidebarSlices'
import switcherReducer from './slices/switcherSlices'
import assetsReducer from './slices/assetsSlices'

const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    switcher: switcherReducer,
    assets: assetsReducer,
  }
})

export default store