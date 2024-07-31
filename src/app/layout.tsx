"use client"
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "../styles/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/layout/header";
import { Provider } from "react-redux";
import { store } from "../store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-11">
          <Provider store={store}>
            <Header />
            {children}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Provider>
        </div>
      </body>
    </html>
  );
}
