import { AnimatePresence } from "motion/react";
import React from "react";
import { Designation } from "./designation";
import { Navbar } from "./navbar/navbar";
import { TransitionWrapper } from "./transition-wrapper";
export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <TransitionWrapper>
        <div className="md:border border-neutral-400 rounded-lg w-full h-full shadow-2xl overflow-auto">
          <main className="max-w-2xl mx-auto h-screen pt-8 w-full px-4">
            <Navbar />
            <Designation />

            <section className="">{children}</section>
          </main>
        </div>
      </TransitionWrapper>
    </AnimatePresence>
  );
};
