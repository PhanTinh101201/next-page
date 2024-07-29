"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  title: string;
  author: string;
  content: string;
}

const HomePage = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch(`https://demo-fake-json.onrender.com/blogs`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" placeholder="Title" />
        <br />
        <input {...register("author")} type="text" placeholder="Author" />
        <br />
        <input {...register("content")} type="text" placeholder="Content" />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default HomePage;
