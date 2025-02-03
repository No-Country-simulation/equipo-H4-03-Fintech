import { createSlice } from '@reduxjs/toolkit';
import { assetsInitialState } from './data'

const assetsSlices = createSlice({
  name: 'assets',
  initialState: {
    assets: [...assetsInitialState]
  },
  reducers: {
    setAssets: (state, { payload }) => {
      state.assets = [...payload]
    }
  }
})

export const { setAssets } = assetsSlices.actions
export default assetsSlices.reducer