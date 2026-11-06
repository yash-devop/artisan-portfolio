"use client";

import { cn } from "@/lib/utils";
import {
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useMemo, useRef } from "react";

export type TStat = {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trend?: {
    value: string;
    direction: "up" | "down";
  };
};

const COUNT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const COUNT_DURATION = 1.6;
const COUNT_STAGGER = 0.1;

const StatItem = ({
  stat,
  index,
  start,
}: {
  stat: TStat;
  index: number;
  start: boolean;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const decimals = stat.decimals ?? 0;

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [decimals],
  );

  const display = useTransform(count, (latest) => formatter.format(latest));
  const finalValue = `${stat.prefix ?? ""}${formatter.format(stat.value)}${stat.suffix ?? ""}`;

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion) {
      count.set(stat.value);
      return;
    }

    count.set(0);
    const controls = animate(count, stat.value, {
      duration: COUNT_DURATION,
      delay: index * COUNT_STAGGER,
      ease: COUNT_EASE,
    });

    return () => controls.stop();
  }, [start, stat.value, count, index, prefersReducedMotion]);

  return (
    <div className="flex flex-col gap-1 px-0 py-4 first:pt-0 last:pb-0 sm:px-4 sm:py-0 sm:first:pl-0 sm:last:pr-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
        {stat.label}
      </span>
      <span className="sr-only">{finalValue}</span>
      <span
        aria-hidden
        className="flex items-baseline gap-0.5 text-2xl font-medium tracking-tight text-neutral-100 tabular-nums sm:text-3xl"
      >
        {stat.prefix ? (
          <span className="text-base text-neutral-400">{stat.prefix}</span>
        ) : null}
        <motion.span>{display}</motion.span>
        {stat.suffix ? (
          <span className="text-base text-neutral-400">{stat.suffix}</span>
        ) : null}
      </span>
      {stat.trend ? (
        <span
          className={cn(
            "mt-1 inline-flex items-center gap-1 text-[11px] font-medium",
            stat.trend.direction === "up"
              ? "text-emerald-400"
              : "text-rose-400",
          )}
        >
          {stat.trend.direction === "up" ? (
            <IconTrendingUp className="size-3.5" aria-hidden />
          ) : (
            <IconTrendingDown className="size-3.5" aria-hidden />
          )}
          {stat.trend.value}
          <span className="text-neutral-600">vs last month</span>
        </span>
      ) : null}
    </div>
  );
};

export const StatCounter = ({
  stats,
  className,
}: {
  stats: TStat[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 divide-y divide-neutral-700/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <StatItem key={stat.id} stat={stat} index={index} start={inView} />
      ))}
    </div>
  );
};
