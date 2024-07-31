"use client";
import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  value: string;
}

const isLogin = localStorage.getItem("userId") === "admin";

const initialState: LoginState = {
  value: isLogin ? "Logout" : "Login",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSusses: (state) => {
      state.value = "Logout";
    },
    logout: (state) => {
      state.value = "Login";
    },
  },
});

export const { loginSusses, logout } = loginSlice.actions;

export default loginSlice.reducer;
