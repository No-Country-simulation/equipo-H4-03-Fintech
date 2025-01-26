import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: "",
  lastName: "",
  userId: "",
  username: "",
  isAuthenticated: false,
  progress: 0
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, {payload}) => {
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.userId = payload.userId
      state.username = payload.username
      state.isAuthenticated = true
      state.progress = payload.progress
    },
    logoutUser: (state) => {
      state.firstName = ""
      state.lastName = ""
      state.userId = ""
      state.username = ""
      state.isAuthenticated = false
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;