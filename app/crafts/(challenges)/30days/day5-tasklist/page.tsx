"use client";
import ShimmerComponent from "@/app/crafts/(components)/shimmer/shimmer";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconChevronDown,
  IconCircleDotted,
  IconCircleFilled,
  IconCircleOpenArrowRight,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const TOTAL_TASKS = [
  { taskName: "Scaffold the project structure" },
  { taskName: "Build the component registry" },
  { taskName: "Implement entitlement gating" },
  { taskName: "Wire up Stripe checkout" },
  { taskName: "Polish the landing page" },
];
const TASK_DURATION_MS = 1000;
const TIMER_TICK_MS = 300;
const PROGRESS_PER_TICK = (100 * TIMER_TICK_MS) / TASK_DURATION_MS;

export default function Day5Tasklist() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [taskProgress, setTaskProgress] = useState<number[]>(() =>
    TOTAL_TASKS.map(() => 0),
  );

  const activeIndex = taskProgress.findIndex((progress) => progress < 100);
  const isComplete = activeIndex === -1;
  const activeTask = isComplete ? null : TOTAL_TASKS[activeIndex];
  const activeProgress = isComplete ? 100 : taskProgress[activeIndex];

  useEffect(() => {
    if (isComplete) return;

    const timer = setInterval(() => {
      setTaskProgress((prev) => {
        const current = prev.findIndex((progress) => progress < 100);
        if (current === -1) return prev;

        const next = [...prev];
        next[current] = Math.min(next[current] + PROGRESS_PER_TICK, 100);
        return next;
      });
    }, TIMER_TICK_MS);

    return () => clearInterval(timer);
  }, [isComplete]);

  useEffect(() => {
    if (!isComplete) return;

    const restart = setTimeout(() => {
      setTaskProgress(TOTAL_TASKS.map(() => 0));
    }, 2000);

    return () => clearTimeout(restart);
  }, [isComplete]);

  return (
    <BlockWrapper className="flex items-center justify-center">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 48 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex w-full max-w-sm flex-col overflow-hidden rounded-xl border text-sm",
          isExpanded ? "items-start" : "items-center",
        )}
      >
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex items-center justify-between w-full p-3 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            {isComplete ? (
              <CompletedIcon
                size={18}
                circleClassName="text-blue-500"
                checkClassName="text-neutral-100"
              />
            ) : (
              <IconCircleDotted
                size={18}
                className="animate-spin ease-in text-neutral-300"
              />
            )}

            <motion.div>
              <AnimatePresence mode="wait">
                {isComplete ? (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                  >
                    <span>Task complete</span>
                  </motion.div>
                ) : isExpanded ? (
                  <motion.div
                    key={String(isExpanded)}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    <span>Tasks</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeTask?.taskName}
                    initial={{
                      opacity: 0,
                      y: 2,
                      filter: "blur(2px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -2,
                      filter: "blur(2px)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <ShimmerComponent
                      text={activeTask?.taskName ?? "All tasks complete"}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <div className="flex items-center gap-x-1 text-neutral-500">
            {!isComplete && (
              <p className="tabular-nums text-sm">
                {Math.round(activeProgress)} %
              </p>
            )}
            <motion.div
              initial={false}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <IconChevronDown size={16} />
            </motion.div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col gap-2 p-3">
          {TOTAL_TASKS.map((task, idx) => {
            const progress = taskProgress[idx];
            const isDone = progress >= 100;
            const isActive = idx === activeIndex;

            return (
              <div
                key={task.taskName}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5 text-neutral-500">
                  {isDone ? (
                    <CompletedIcon size={16} />
                  ) : (
                    <IconCircleOpenArrowRight size={16} />
                  )}

                  {isActive ? (
                    <ShimmerComponent
                      text={task.taskName}
                      className="text-sm"
                    />
                  ) : (
                    <span
                      className={cn(
                        "text-sm",
                        isDone && "text-neutral-400 line-through",
                      )}
                    >
                      {task.taskName}
                    </span>
                  )}
                </div>

                <span className="tabular-nums text-xs text-neutral-500">
                  {Math.round(progress)}%
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </BlockWrapper>
  );
}

const CompletedIcon = ({
  size = 16,
  circleClassName = "text-neutral-500",
  checkClassName = "text-black",
}: {
  size?: number;
  circleClassName?: string;
  checkClassName?: string;
}) => {
  return (
    <span className="relative inline-flex shrink-0 items-center justify-center">
      <IconCircleFilled size={size} className={circleClassName} />
      <IconCheck
        size={size * 0.55}
        stroke={3}
        className={cn("absolute", checkClassName)}
      />
    </span>
  );
};
