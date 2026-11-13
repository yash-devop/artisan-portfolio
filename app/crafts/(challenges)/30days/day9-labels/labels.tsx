import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import type { ComponentType } from "react";

const labelVariants = cva(
  "flex items-center justify-center rounded-md h-7 has-[svg]:gap-1  cursor-default select-none",
  {
    variants: {
      variant: {
        neutral: "bg-neutral-800/80 shadow-[inset_0px_0px_1px_1px_#ffffff34]",
        error:
          "bg-red-800/10 text-red-600 shadow-[inset_0px_0px_1px_1px_color-mix(in_srgb,var(--color-red-900)_50%,transparent)]",
        warn: "bg-yellow-800/10 text-yellow-600 shadow-[inset_0px_0px_1px_1px_color-mix(in_srgb,var(--color-yellow-900)_50%,transparent)]",
        success:
          "bg-green-800/10 text-green-600 shadow-[inset_0px_0px_1px_1px_color-mix(in_srgb,var(--color-green-900)_50%,transparent)]",
        info: "bg-purple-800/10 text-purple-600 shadow-[inset_0px_0px_1px_1px_color-mix(in_srgb,var(--color-purple-900)_50%,transparent)]",
      },
      size: {
        sm: "px-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm",
    },
  },
);

export const Labels = ({
  name,
  className,
  variant,
  size,
  icon: Icon,
}: {
  name: string;
  className?: string;
  icon?: ComponentType<{ className?: string }>;
} & VariantProps<typeof labelVariants>) => (
  <div className={cn(labelVariants({ size, variant, className }))}>
    {Icon && <Icon className="size-3.5" />}
    <h2>{name}</h2>
  </div>
);
