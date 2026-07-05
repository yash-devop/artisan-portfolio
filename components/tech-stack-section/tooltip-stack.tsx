"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import { ICONS } from "@/common/constants";
import { TStack } from "@/common/types";
import { motion, Variants } from "motion/react";

const iconVariant: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.11,
    y: -2,
  },
};
export const TooltipStack = ({ name, icon }: TStack) => {
  const Icon = ICONS[icon];

  return (
    <Tooltip key={name}>
      <TooltipTrigger>
        <motion.div
          className="h-8 w-8 cursor-pointer transform-gpu"
          variants={iconVariant}
          initial="initial"
          whileHover="hover"
        >
          <Icon />
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  );
};
