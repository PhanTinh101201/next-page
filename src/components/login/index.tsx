"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LoginService } from "./service";

interface FormValues {
  userName: string;
  passWord: string;
}

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await LoginService(data.userName);

    if (response?.data?.passWord === data.passWord) {
      router.push("/orders");
      toast.success("Đăng Nhập Thành Công");
    } else {
      toast.warning("Đăng Nhập Thất Bại");
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              {...register("userName")}
              autoComplete="off"
              className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              placeholder="userName"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("passWord")}
              autoComplete="off"
              className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-center gap-8">
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
