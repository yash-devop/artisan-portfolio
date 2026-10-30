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

  const hasCraftsInRoute = pathname.includes("/crafts");
  return (
    <div
      className={cn(
        "p-1 relative w-full min-h-dvh overflow-auto",
        hasCraftsInRoute && "bg-neutral-800",
      )}
    >
      {hasCraftsInRoute ? (
        <div className="w-full">{children}</div>
      ) : (
        <motion.div
          key={pathname}
          initial={{
            opacity: 0,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            filter: "blur(5px)",
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
