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
    register(state, { payload }) {
      state.user = payload;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
    },
    login(state, { payload }) {
      console.log("payload", payload);
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
export const { register, login, logout } = usersSlice.actions;
export default usersSlice.reducer;
