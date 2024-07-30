"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/button.module.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Header = () => {
  const router = useRouter();
  const isLogin = localStorage.getItem("userId") === "admin";

  const handelLogout = () => {
    router.push("/");
    Cookies.remove("loginSusses");
    localStorage.removeItem("userId");
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
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;
