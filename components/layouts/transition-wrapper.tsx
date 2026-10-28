"use client";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
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
        filter: "blur(4px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        filter: "blur(4px)",
      }}
      className={cn(
        `p-1 relative w-full min-h-dvh overflow-auto`,
        pathname === "/crafts" && "bg-neutral-800",
      )}
    >
      {children}
    </motion.div>
  );
};
