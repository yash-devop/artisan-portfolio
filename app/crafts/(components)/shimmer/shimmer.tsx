import { cn } from "@/lib/utils";

export default function ShimmerComponent({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={cn(`text-shimmer tracking-tight text-sm`, className)}>
      {text}
    </span>
  );
}
