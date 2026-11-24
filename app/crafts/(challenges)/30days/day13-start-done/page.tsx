"use client";

import ShimmerComponent from "@/app/crafts/(components)/shimmer/shimmer";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { Button } from "@base-ui/react";
import {
  IconArrowBackUp,
  IconCircleCheckFilled,
  IconCircleDotted,
  IconCircleOpenArrowRight,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Day13StartDone() {
  const [isQueued, setIsQueued] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!isQueued) return;
    const timeout = setTimeout(() => setAnimationComplete(true), 2000);
    return () => clearTimeout(timeout);
  }, [isQueued]);

  const handleQueueToggle = () => {
    if (isQueued) {
      setIsQueued(false);
      setAnimationComplete(false);
      return;
    }
    setIsQueued(true);
  };

  return (
    <BlockWrapper className="items-center justify-center p-6">
      <div className="max-w-xs w-full border border-border/40 rounded-3xl bg-neutral-800/40 p-3 flex flex-col gap-4 relative overflow-hidden">
        <div className="flex flex-col gap-2">
          <AnimatePresence mode="wait">
            {isQueued ? (
              <motion.div
                key="queued"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="h-fit leading-0 flex items-center gap-x-1"
              >
                {animationComplete ? (
                  <div className="flex items-center gap-x-1">
                    <IconCircleCheckFilled size={16} />
                    <motion.h1
                      key="added"
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      className="text-sm font-medium"
                    >
                      Added to queue
                    </motion.h1>
                  </div>
                ) : (
                  <div className="flex items-center gap-x-1">
                    <IconCircleDotted
                      size={16}
                      className="animate-spin [animation-duration:900ms]"
                    />
                    <ShimmerComponent
                      text="Adding to queue"
                      className="font-medium [--shimmer-muted:var(--color-neutral-600)] [animation-duration:900ms]"
                    />
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="flex items-center gap-x-1"
              >
                <IconCircleOpenArrowRight size={16} />
                <h1 className="text-sm font-medium">Add dark mode</h1>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.span
              key={animationComplete ? "done" : "pending"}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              className="text-neutral-400 text-sm"
            >
              {animationComplete
                ? "Dark mode starts after Moved to neutral palette"
                : "You adjusted spacing and colors. Dark mode is the natural next step."}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="bg-green-300 opacity-50 absolute -top-3/5 rounded-full size-20 blur-2xl"></div>
        <div className="bg-indigo-800 opacity-50 absolute -top-3/5 left-16 rounded-full size-20 blur-2xl"></div>
        <div className="bg-pink-600 opacity-50 absolute -top-3/5 left-32 rounded-full size-16 blur-2xl"></div>
        <div className="bg-orange-500 opacity-50 absolute -top-3/5 left-56 rounded-full size-14 blur-2xl"></div>
        <div className="bg-amber-500 opacity-50 absolute -top-3/5 left-56 rounded-full size-12 blur-2xl"></div>
        <div className="bg-green-300 opacity-50 absolute -top-3/5 left-72 rounded-full size-20 blur-2xl"></div>
        <AnimatePresence>
          {animationComplete && (
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[-100px] left-1/2 -translate-x-1/2 pointer-events-none"
              initial={{ scale: 0.2, opacity: 1, filter: "blur(2px)" }}
              animate={{
                scale: [0.2, 1, 2.7, 3, 4, 6],
                opacity: [1, 0.3, 0],
                filter: [
                  "blur(2px)",
                  "blur(8px)",
                  "blur(12px)",
                  "blur(20px)",
                  "blur(30px)",
                  "blur(48px)",
                ],
              }}
              exit={{
                scale: 1.8,
                opacity: 0,
                filter: "blur(12px)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
              />
            </motion.svg>
          )}
        </AnimatePresence>
        <Button
          className="py-2 w-full bg-neutral-700/80 text-neutral-300 rounded-[calc(var(--radius)*2.2-var(--spacing)*3)] text-sm flex items-center justify-center overflow-hidden"
          onClick={handleQueueToggle}
        >
          <AnimatePresence mode="wait" initial={false}>
            {animationComplete ? (
              <motion.div
                key="undo"
                initial={{ opacity: 0, y: 3, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -3, filter: "blur(4px)" }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="flex items-center gap-x-1"
              >
                <IconArrowBackUp size={16} />
                <span>Undo</span>
              </motion.div>
            ) : (
              <motion.span
                key="queue"
                initial={{ opacity: 0, y: 3, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -3, filter: "blur(4px)" }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                Add to queue
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </BlockWrapper>
  );
}
