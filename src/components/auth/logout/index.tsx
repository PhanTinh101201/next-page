"use client";
import Cookies from "js-cookie";
import React from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handelLogout = () => {
    router.push("/");
    Cookies.remove("loginSusses");
    localStorage.removeItem("userId")
  };
  return (
    <div>
      <button
        onClick={() => {
          handelLogout();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Logout;
