import React from "react";
import { Navbar } from "./navbar/navbar";
import { Designation } from "./designation";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-1 relative w-full min-h-screen overflow-auto">
      <div className="md:border border-neutral-400 rounded-lg w-full h-full shadow-2xl overflow-auto">
        <main className="max-w-2xl mx-auto h-screen">
          <div className="pt-8 w-full px-4">
            <Navbar />
            <Designation />

            <section className="">{children}</section>
          </div>
        </main>
      </div>
    </div>
  );
};
