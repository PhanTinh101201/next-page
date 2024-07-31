"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/button.module.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { getStorage, removeStorage } from "@/utils/storage";

const Header = () => {
  const router = useRouter();
  const isLogin = getStorage("userId") == `"admin"`;
  const auth = useSelector((state: RootState) => state.login.value);

  console.log('isLogin', isLogin, getStorage("userId"))

  const handelLogout = () => {
    Cookies.remove("loginSusses");
    removeStorage("userId");
    window.location.reload()
  };
  return (
    <div className="h-[70px] flex justify-between items-center bg-[#212121] rounded-[5px]">
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
        className={`${styles["header__button"]} m-4 mb-5`}
      >
        <div className="mt-1">{auth}</div>
      </button>
    </div>
  );
};

export default Header;
