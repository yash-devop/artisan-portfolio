import React from "react";
import { cn } from "../lib/utils";

export const SectionWrapper = ({
  name,
  children,
  className,
}: {
  name: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={`flex flex-col pt-4`}>
      <div className="flex items-center gap-x-4">
        <div className="h-px w-10 bg-neutral-300" />
        <span className="font-mono uppercase text-neutral-400 text-xs select-none">
          {name}
        </span>
      </div>
      <div className={cn(`flex flex-col pt-5 pb-12`, className)}>
        {children}
      </div>
    </section>
  );
};
