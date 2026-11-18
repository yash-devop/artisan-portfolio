"use client";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "motion/react";

type PresenceElement = {
  name: string;
  isActive: boolean;
  meta: {
    width: number;
    height: number;
  };
};

const ACCENTS = {
  blue: { border: "border-blue-500", badge: "bg-blue-500" },
  emerald: { border: "border-emerald-500", badge: "bg-emerald-500" },
  violet: { border: "border-violet-500", badge: "bg-violet-500" },
  amber: { border: "border-amber-500", badge: "bg-amber-500" },
  rose: { border: "border-rose-500", badge: "bg-rose-500" },
} as const;

type TAccent = keyof typeof ACCENTS;

export default function Day10ElementSelector() {
  const [current, setCurrent] = useState<PresenceElement | null>(null);

  return (
    <BlockWrapper className="items-center justify-center p-6">
      <div className="flex items-center justify-center max-w-lg w-full leading-relaxed">
        <h1 className="font-sans text-neutral-400">
          A{" "}
          <SelectorElement
            current={current}
            name="Frontend Developer"
            accent="blue"
            setCurrent={setCurrent}
          />{" "}
          based in{" "}
          <SelectorElement
            current={current}
            name="India"
            accent="emerald"
            setCurrent={setCurrent}
          />{" "}
          , who loves to give life to his thoughts through design and code.
          I&apos;m mostly active on{" "}
          <SelectorElement
            current={current}
            name="Twitter"
            accent="violet"
            setCurrent={setCurrent}
          />
          , where I post mostly about my content and arts. Have a project in
          mind or want to connect? Reach me through{" "}
          <SelectorElement
            current={current}
            name="Email"
            accent="amber"
            setCurrent={setCurrent}
          />{" "}
          or{" "}
          <SelectorElement
            current={current}
            name="Linkedin"
            accent="rose"
            setCurrent={setCurrent}
          />
        </h1>
      </div>
    </BlockWrapper>
  );
}

export const SelectorElement = ({
  name,
  className,
  accent = "blue",
  setCurrent,
  current,
}: {
  name: string;
  className?: string;
  accent?: TAccent;
  current: PresenceElement | null;
  setCurrent?: React.Dispatch<React.SetStateAction<PresenceElement | null>>;
}) => {
  return (
    <p
      data-presence={name}
      data-active={current?.isActive}
      className={cn(`inline-block relative px-0.5`, className)}
      onMouseEnter={(e) => {
        if (!setCurrent) return;

        const { width, height } = e.currentTarget.getBoundingClientRect();
        setCurrent({
          name,
          isActive: true,
          meta: {
            width: Math.round(width),
            height: Math.round(height),
          },
        });
      }}
    >
      {name}
      {current?.name === name && current?.isActive ? (
        <motion.div
          // layout=""
          layoutId="jod"
          className={cn(
            "absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border w-full",
            ACCENTS[accent].border,
          )}
          transition={{
            ease: "easeInOut",
            // damping: 0.1,
            duration: 0.3,
          }}
        >
          <div
            className={cn(
              "absolute -top-[3px] -left-[3px] size-1 border",
              ACCENTS[accent].border,
            )}
          />
          <div
            className={cn(
              "absolute -top-[3px] -right-[3px] size-1 border",
              ACCENTS[accent].border,
            )}
          />
          <div
            className={cn(
              "absolute -bottom-[3px] -left-[3px] size-1 border",
              ACCENTS[accent].border,
            )}
          />
          <div
            className={cn(
              "absolute -bottom-[3px] -right-[3px] size-1 border",
              ACCENTS[accent].border,
            )}
          />
          <div
            className={cn(
              "text-white w-fit absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] leading-4 font-mono px-1 rounded-2xl",
              ACCENTS[accent].badge,
            )}
          >
            {current.meta.width}x{current.meta.height}
          </div>
        </motion.div>
      ) : null}
    </p>
  );
};
