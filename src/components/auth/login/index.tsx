"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LoginService } from "./service";
import Cookies from "js-cookie";
import styles from "../../../styles/login.module.css";
import LoadingLogin from "@/components/loading/loadingLogin";
import { useDispatch } from "react-redux";
import { loginSusses } from "../../../store/loginSlice";
import { AppDispatch } from "../../../store";

interface FormValues {
  userName: string;
  passWord: string;
}

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await LoginService(data.userName);
    setLoading(false);

    if (response?.data?.passWord === data.passWord) {
      router.push("/admin");
      dispatch(loginSusses());
      toast.success("Đăng Nhập Thành Công");
      Cookies.set("loginSusses", "true");
      localStorage.setItem("userId", data.userName);
    } else {
      toast.warning("Đăng Nhập Thất Bại");
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-2.5rem)] ">
      <div className={styles.card}>
        <div className={styles.card2}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <p id={styles.heading}>Login</p>
            <div className={styles.field}>
              <svg
                className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"
                />
              </svg>

              <input
                type="text"
                className={styles["input-field"]}
                placeholder="Username"
                autoComplete="off"
                {...register("userName")}
              />
            </div>
            <div className={styles.field}>
              <svg
                className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="password"
                className={styles["input-field"]}
                placeholder="Password"
                {...register("passWord")}
              />
            </div>
            <div className="flex justify-center items-center">
              {loading && <LoadingLogin />}
            </div>
            <div className={styles.btn}>
              <button className={styles.button1}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button className={styles.button2}>Sign Up</button>
            </div>
            <button className={styles.button3}>Forgot Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
