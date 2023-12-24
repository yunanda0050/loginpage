// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    registerUser: (state, action) => {
      // Handle user registration logic and update state
    },
    loginUser: (state, action) => {
      // Handle user login logic and update state
      state.isAuthenticated = true;
      state.user = action.payload.user; // Assuming you store user data in the action payload
    },
  },
});

export const { registerUser, loginUser } = authSlice.actions;
export default authSlice.reducer;