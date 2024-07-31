"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/button.module.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { logout } from "@/store/loginSlice";
import { getStorage, removeStorage } from "@/utils/storage";

const Header = () => {
  const router = useRouter();
  const isLogin = getStorage("userId") === "admin";
  const auth = useSelector((state: RootState) => state.login.value);
  const dispatch: AppDispatch = useDispatch();

  const handelLogout = () => {
    router.push("/");
    Cookies.remove("loginSusses");
    removeStorage("userId");
    dispatch(logout());
  };
  return (
    <div className="h-10 flex justify-between items-center">
      <div className="gap-3 flex">
        <Link className="font-bold" href="/home">
          Home
        </Link>
        <Link className="font-bold" href="/product">
          Products
        </Link>
      </div>
      <button
        onClick={() => {
          if (!isLogin) router.push("/login");
          if (isLogin) handelLogout();
        }}
        className={styles["header__button"]}
      >
        {auth}
      </button>
    </div>
  );
};

export default Header;
