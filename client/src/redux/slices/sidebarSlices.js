import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
  mydata: false,
}
const sidebarSlices = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    closeMenu: (state) => {
      state.menu = false
      state.mydata = false
    },
    closeSubMenu: (state) => {
      state.mydata = false
    },
    openMenu: (state, { payload }) => {
      switch (payload) {
        case 'menu':
          state.menu = true
          break;
        case 'mydata':
          state.mydata = true
          break;
        default:
          state = initialState
          break;
      }

    }
  },
});

export const { closeMenu, openMenu, closeSubMenu } = sidebarSlices.actions;
export default sidebarSlices.reducer;