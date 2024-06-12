"use client";
import "react-toastify/dist/ReactToastify.css";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        className={"z-50"}
      />
      {children}
    </NextUIProvider>
  );
};

export default Providers;
