"use client";

import { SIDEBAR_DATA } from "@/common/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const GROUP_COLOR_CLASSES: Record<string, string> = {
  pink: "text-pink-600",
  green: "text-green-600",
  cyan: "text-cyan-600",
  yellow: "text-yellow-600",
  orange: "text-orange-600",
};

const isRouteActive = (pathname: string, href: string) =>
  pathname === "/"
    ? href === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export const CraftsSidebar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { open } = useSidebar();
  return (
    <>
      <Sidebar collapsible="icon" className="absolute inset-y-0 h-full">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="hover:bg-transparent focus:bg-transparent active:bg-transparent font-serif italic"
              >
                <div
                  className={`size-6 shrink-0 rounded-sm border ${!open ? "border-neutral-800" : "border-neutral-300"}  bg-linear-to-tr from-white to-indigo-500`}
                />
                <span className="font-medium">Artisan.</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="items-center justify-center">
          {SIDEBAR_DATA?.length > 0
            ? SIDEBAR_DATA.map((data) => {
                const GroupIcon = data.group.icon;
                return (
                  <SidebarGroup key={data.id}>
                    <SidebarGroupLabel className="gap-x-1 cursor-default select-none ">
                      <GroupIcon
                        className={cn(
                          "size-3.5",
                          data.group.defaultClassName,
                          GROUP_COLOR_CLASSES[data.group.color] ??
                            "text-neutral-400",
                        )}
                      />
                      <span className="font-medium text-neutral-100">
                        {data.group.name}
                      </span>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="pl-0.5">
                      <SidebarMenu className="mt-2">
                        {data.routes.map((route) => {
                          const isActive = isRouteActive(
                            pathname,
                            route.slug + route.href,
                          );

                          return (
                            <SidebarMenuItem key={route.id}>
                              <SidebarMenuButton
                                render={<Link href={route.slug + route.href} />}
                                tooltip={route.name}
                                className={cn(
                                  `hover:bg-transparent active:bg-transparent focus:bg-transparent focus-visible:ring-neutral-800 focus-visible:ring-1 focus-visible:shadow-none text-xs text-neutral-400 rounded-none transition-[color,padding-left] duration-300 ease-out relative`,
                                  isActive && "text-neutral-100 pl-8",
                                )}
                              >
                                {isActive && (
                                  <NavigatorActiveBall
                                    backgroundColor={data.group.tailwindBgColor}
                                  />
                                )}
                                <motion.span
                                  key={String(isActive)}
                                  animate={
                                    isActive && {
                                      color: data.group.tailwindColor,
                                    }
                                  }
                                  transition={{
                                    delay: 0.18,
                                    type: "tween",
                                  }}
                                >
                                  {route.name}
                                </motion.span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                );
              })
            : null}
        </SidebarContent>
      </Sidebar>

      <SidebarInset className={cn("bg-neutral-900")}>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-white/10 px-4">
          <SidebarTrigger className={"md:hidden"} />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            /crafts
          </span>
        </header>
        <div className="flex-1 overflow-auto p-1.5 md:p-4">{children}</div>
      </SidebarInset>
    </>
  );
};

const NavigatorActiveBall = ({
  backgroundColor,
}: {
  backgroundColor: string;
}) => {
  return (
    <motion.span
      layoutId="nav-ball"
      transition={{ type: "spring", stiffness: 450, damping: 32 }}
      style={{
        background: backgroundColor,
      }}
      className={cn(
        `absolute left-4 top-[calc(50%-0.24rem)] size-2 shrink-0 rounded-full`,
        backgroundColor,
      )}
    />
  );
};
