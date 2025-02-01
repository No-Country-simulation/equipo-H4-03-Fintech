import { createSlice } from '@reduxjs/toolkit';

const switcherSlice = createSlice({
  name: "switcher",
  initialState: {
    isCapital: true
  },
  reducers: {
    toggleSwitcher: (state, { payload }) => {
      state.isCapital = payload === 'capital'
    }
  }
})

export const { toggleSwitcher } = switcherSlice.actions
export default switcherSlice.reducer;