import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata(
  "/crafts/30days/day8-slothsidebar",
);

export default function Day8SlothSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
