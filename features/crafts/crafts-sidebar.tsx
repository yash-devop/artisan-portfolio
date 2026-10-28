"use client";

import { NAV_ROUTES } from "@/common/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  IconBriefcase,
  IconHome,
  IconSchool,
  IconSparkles,
  type Icon,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTE_ICONS: Record<string, Icon> = {
  Home: IconHome,
  Crafts: IconSparkles,
  Work: IconBriefcase,
  Experience: IconSchool,
};

const isRouteActive = (pathname: string, href: string) =>
  pathname === "/"
    ? href === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export const CraftsSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <SidebarProvider className="dark min-h-svh bg-neutral-900 text-foreground">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" render={<Link href="/" />}>
                <div className="size-8 shrink-0 rounded-md border border-neutral-200 bg-linear-to-tr from-white to-indigo-500" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Yash Kamble</span>
                  <span className="text-xs text-sidebar-foreground/60">
                    Engineer / Freelancer
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Explore</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_ROUTES.map((route) => {
                  const RouteIcon = ROUTE_ICONS[route.name] ?? IconSparkles;
                  return (
                    <SidebarMenuItem key={route.id}>
                      <SidebarMenuButton
                        render={<Link href={route.href} />}
                        isActive={isRouteActive(pathname, route.href)}
                        tooltip={route.name}
                      >
                        <RouteIcon />
                        <span>{route.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-sidebar-foreground/60 group-data-[collapsible=icon]:hidden">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Available for work
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset className={cn("bg-neutral-900")}>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-white/10 px-4">
          <SidebarTrigger />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            /crafts
          </span>
        </header>
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
