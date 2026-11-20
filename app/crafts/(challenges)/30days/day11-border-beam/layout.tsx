import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata(
  "/crafts/30days/day11-border-beam",
);

export default function Day11BorderBeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
