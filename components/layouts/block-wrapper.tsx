import { cn } from "@/lib/utils";

export const BlockWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex min-h-full w-full flex-col rounded-xl border border-neutral-700/50 bg-neutral-800/20 md:h-full md:flex-row tracking-tight`,
        className,
      )}
    >
      {children}
    </div>
  );
};
