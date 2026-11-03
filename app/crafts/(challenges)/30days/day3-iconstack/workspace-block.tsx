import { Button } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IsometricIconStack } from "./isometric-icon-stack";

const blockVariants = cva(
  "flex w-full flex-1 flex-col items-center justify-center gap-4",
);
const descriptionVariants = cva("max-w-[260px] text-center", {
  variants: {
    tone: {
      neutral: "text-neutral-500",
      emerald: "text-emerald-500",
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

const primaryButtonVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      emerald: "bg-emerald-500 text-emerald-950 hover:bg-emerald-400",
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

const outlineButtonVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      emerald:
        "border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300",
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

export type TWorkspaceBlockTone = NonNullable<
  VariantProps<typeof descriptionVariants>["tone"]
>;

export const WorkspaceBlock = ({
  tone,
  className,
}: {
  tone?: TWorkspaceBlockTone;
  className?: string;
}) => {
  return (
    <div className={cn(blockVariants(), className)}>
      <IsometricIconStack tone={tone} />
      <div className="flex flex-col gap-2 items-center justify-center">
        <span>Workspace is ready</span>
        <span className={descriptionVariants({ tone })}>
          Invite teammates or connect a data source to start filling this view.
        </span>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <Button size="lg" className={primaryButtonVariants({ tone })}>
          Invite teammates
        </Button>
        <Button
          variant="outline"
          size="lg"
          className={outlineButtonVariants({ tone })}
        >
          Connect source
        </Button>
      </div>
    </div>
  );
};
