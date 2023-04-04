import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registration(state, { payload }) {
      state.user = payload;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    login(state, { payload }) {
      state.user = payload;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = {};
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export const { registration, login, logout } = usersSlice.actions;
export default usersSlice.reducer;
