import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "1",
      username: "admin",
      password: "1234",
      isAuthenticated: false,
    },
    {
      id: "2",
      username: "admin2",
      password: "1234",
      isAuthenticated: false,
    },
  ],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        user.isAuthenticated = true;
        state.currentUser = user;
      }
    },
    logout: (state, action) => {
      if (state.currentUser) {
        state.currentUser.isAuthenticated = false;
        state.currentUser = null;
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
