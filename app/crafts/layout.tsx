import { CraftsSidebar } from "@/features/crafts/crafts-sidebar";

export default function CraftsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CraftsSidebar>{children}</CraftsSidebar>;
}
