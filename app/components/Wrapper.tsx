import React from "react";
import { Navbar } from "./navbar/navbar";
import { Designation } from "./designation";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-1 relative w-full h-full">
      <div className="border border-neutral-400 rounded-lg w-full h-full shadow-2xl">
        <div className="max-w-[750px] mx-auto w-full h-full ">
          <div className="space-y-4 pt-20">
            <Designation />
            <Navbar />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
