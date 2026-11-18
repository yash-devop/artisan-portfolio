import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata(
  "/crafts/30days/day10-element-selector",
);

export default function Day10ElementSelectorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
