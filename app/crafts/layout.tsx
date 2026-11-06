import { SidebarProvider } from "@/components/ui/sidebar";
import { CraftsSidebar } from "@/features/crafts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crafts by Yash",
  description: "Crisp, handcrafted reusable UI components by Yash Kamble",
};
export default function CraftsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="dark relative h-[calc(100dvh-0.5rem)] min-h-0 overflow-hidden bg-neutral-900 text-foreground">
      <CraftsSidebar>{children}</CraftsSidebar>
    </SidebarProvider>
  );
}
