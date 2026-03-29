import { cva } from "class-variance-authority";
import { ComponentProps } from "react";

type TLineVariants = "y" | "x" | "x-y" | "r" | "b";
// type TLineVariants = "t" | "b" | "l" | "r" | "y" | "x" | "x-y";
const lineVariants = cva("flex items-center justify-center w-full", {
  variants: {
    fullBorder: {
      //   t: "w-full border-border flex items-center justify-center relative after:bg-border before:bg-border border-t",
      b: "relative w-full border-border flex items-center justify-center before:bg-border before:w-screen before:h-px before:content-[''] before:absolute before:bottom-0",
      l: "relative before:content-[''] before:absolute before:w-px before:left-0 before:h-full before:bg-border",
      r: "relative after:content-[''] after:absolute after:w-px after:right-0 after:h-full after:bg-border",
      y: "relative w-full before:bg-border before:w-screen before:h-px before:content-[''] before:absolute before:top-0  after:content-[''] after:absolute after:w-screen after:h-px after:bottom-0 after:bg-border",
      x: "relative border-border before:bg-border before:h-full before:w-px before:content-[''] before:absolute before:left-0 after:content-[''] after:absolute after:w-px after:right-0 after:h-full after:bg-border",
      "x-y": "border border-border items-center justify-center",
    },
    border: {
      t: "border-t",
      b: "border-b",
      l: "border-l",
      r: "border-r",
      x: "border-x",
      y: "border-y",
      "x-y": "border",
    },
  },
  defaultVariants: {
    fullBorder: "y",
    // border: "x-y",
  },
});
export const LinesWrapper = ({
  className,
  fullBorder = "y",
  ...props
}: ComponentProps<"div"> & {
  fullBorder?: TLineVariants;
  border?: TLineVariants;
}) => {
  return (
    <div className={lineVariants({ className, fullBorder })} {...props}></div>
  );
};
