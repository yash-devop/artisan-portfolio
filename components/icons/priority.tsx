import type { SVGProps } from "react";

export type TPriorityLevel = "high" | "medium" | "low";

const BARS = [
  { x: 1.85, y: 9.7, width: 2.1, height: 3.4 },
  { x: 6.95, y: 6.3, width: 2.1, height: 6.8 },
  { x: 12.05, y: 2.9, width: 2.1, height: 10.2 },
] as const;

const ACTIVE_BARS: Record<TPriorityLevel, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export const PriorityIcon = ({
  level = "high",
  ...props
}: { level?: TPriorityLevel } & SVGProps<SVGSVGElement>) => {
  const activeBars = ACTIVE_BARS[level];

  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {BARS.map((bar, index) => (
        <rect
          key={bar.x}
          {...bar}
          rx={0.425}
          fill="currentColor"
          opacity={index < activeBars ? 1 : 0.3}
        />
      ))}
    </svg>
  );
};

export const PriorityHighIcon = (props: SVGProps<SVGSVGElement>) => (
  <PriorityIcon level="high" {...props} />
);

export const PriorityMediumIcon = (props: SVGProps<SVGSVGElement>) => (
  <PriorityIcon level="medium" {...props} />
);

export const PriorityLowIcon = (props: SVGProps<SVGSVGElement>) => (
  <PriorityIcon level="low" {...props} />
);
