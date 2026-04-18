import React from "react";
import { Navbar } from "./navbar/navbar";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[800px] mx-auto w-full h-full">
      <Navbar />
      {children}
    </div>
  );
};
