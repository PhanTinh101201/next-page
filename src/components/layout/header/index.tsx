"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/button.module.css";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-10 flex justify-between items-center">
      <div className="gap-3 flex">
        <Link className="font-bold" href="/home">
          Home
        </Link>
        <Link className="font-bold" href="/product">
          Product
        </Link>
      </div>
      <button
        onClick={() => {
          router.push("/login");
        }}
        className={styles["header__button"]}
      >
       Login
      </button>
    </div>
  );
};

export default Header;
