import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.id = null;
      state.email = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;