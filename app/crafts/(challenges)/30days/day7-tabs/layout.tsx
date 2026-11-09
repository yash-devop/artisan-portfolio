import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/30days/day7-tabs");

export default function Day7TabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
