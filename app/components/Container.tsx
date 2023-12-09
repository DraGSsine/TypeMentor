"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

function Container({ children }: { children: React.ReactNode }) {
  return (
      <div className="container min-h-full flex flex-col">{children}</div>
  );
}

export default Container;
