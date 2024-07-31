"use client";
import { getStorage } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  value: string;
}

const isLogin = getStorage("userId") == `"admin"`;

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
  },
});

export const { loginSusses } = loginSlice.actions;

export default loginSlice.reducer;
