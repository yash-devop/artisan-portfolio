"use client";
import ShimmerComponent from "@/app/crafts/(components)/shimmer/shimmer";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconLoader } from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Day3Tasklist() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <BlockWrapper className="flex items-center justify-center">
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className={cn(
          "max-w-sm border w-full h-14 flex items-center justify-between px-3 text-sm overflow-hidden transition-[height] duration-300 ease-in-out cursor-pointer",
          isExpanded && "h-56",
        )}
      >
        <div className="flex items-center gap-2">
          <IconLoader
            size={18}
            className="animate-spin ease-in text-neutral-300"
          />
          <motion.div>
            <ShimmerComponent text="Scaffolding the whole project" />
          </motion.div>
        </div>
        <div className="flex items-center text-neutral-500">
          <p className="tabular-nums">10/50</p>
          <IconChevronDown size={18} />
        </div>
      </div>
    </BlockWrapper>
  );
}
