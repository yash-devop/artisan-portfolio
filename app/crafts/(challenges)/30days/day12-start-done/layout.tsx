import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata(
  "/crafts/30days/day12-start-done",
);

export default function Day12StartDoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
