"use client";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import React from "react";
export const TransitionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="p-1 relative w-full min-h-dvh overflow-auto"
    >
      {children}
    </motion.div>
  );
};
