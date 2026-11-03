import { IconStack2 } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const stackCardVariants = cva(
  "absolute border rounded-xl size-20 flex items-center justify-center",
  {
    variants: {
      tone: {
        neutral: "border-neutral-500 bg-neutral-900",
        emerald: "border-emerald-500 bg-emerald-900",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

const stackInnerVariants = cva(
  "border rounded-xl size-20 flex items-center justify-center",
  {
    variants: {
      tone: {
        neutral: "border-neutral-500 bg-neutral-900/90",
        emerald: "border-emerald-500 bg-emerald-900/90",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

export type TStackTone = NonNullable<
  VariantProps<typeof stackCardVariants>["tone"]
>;

export const IsometricIconStack = ({
  tone,
  className,
}: {
  tone?: TStackTone;
  className?: string;
}) => {
  const ICONS_CARDS = Array.from({ length: 3 });
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full h-48",
        className,
      )}
    >
      {ICONS_CARDS.map((_, idx) => {
        const isFront = idx === ICONS_CARDS.length - 1;
        const depth = ICONS_CARDS.length - 1 - idx;
        const opacity = Math.max(0.16, 1 - depth * 0.55);
        return (
          <div
            key={idx}
            style={{
              transform: `translate(calc(${idx * 37.5}% - 37.5%), calc(${idx * 8.75}% + 7.5%)) skewY(-18deg)`,
              opacity,
            }}
            className={stackCardVariants({ tone })}
          >
            <div
              style={{
                transform: `translate(5%, 3.75%)`,
              }}
              className={stackInnerVariants({ tone })}
            >
              {isFront ? <IconStack2 size={24} /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};
