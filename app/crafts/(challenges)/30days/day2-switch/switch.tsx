"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const KNOB_WIDTH = 18;
const KNOB_WIDTH_HOVER = 24;

export const Switch = ({
  checked,
  onChange,
  label,
  className,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      animate={{
        background: checked ? "var(--color-white)" : "var(--color-neutral-700)",
      }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      className={cn(
        "w-12 h-6 shrink-0 border rounded-full relative p-0.5 flex items-center cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900",
        checked ? "justify-end" : "justify-start",
        className,
      )}
    >
      <motion.span
        layout="position"
        initial={false}
        animate={{
          width: isHovered ? KNOB_WIDTH_HOVER : KNOB_WIDTH,
          background: checked ? "var(--color-black)" : "var(--color-white)",
        }}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
        className="block h-4.5 rounded-full"
      />
    </motion.button>
  );
};
