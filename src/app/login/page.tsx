import React from "react";
import Login from "@/components/auth/login";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Login',
  description: '...',
}

const LoginPage = () => {
  return (
    <>
     <Login/>
    </>
  );
};

export default LoginPage;