import React from "react";
import { Navbar } from "./navbar/navbar";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto w-full h-full border-x border-border">
      <Navbar />
      {children}
    </div>
  );
};
