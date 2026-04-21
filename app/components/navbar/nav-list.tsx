"use client";
import { NAV_ROUTES } from "@/app/common/constants";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavList = () => {
  const pathname = usePathname();
  return NAV_ROUTES.map((routeUnit) => {
    const isActive = pathname === routeUnit.href;

    return (
      <Link
        href={routeUnit.href}
        key={routeUnit.id}
        className={cn(
          `cursor-pointer hover:text-neutral-600 hover:underline hover:underline-offset-8 transition-all text-sm`,
          isActive
            ? "text-neutral-500 font-medium underline underline-offset-8"
            : "text-neutral-500",
        )}
      >
        {routeUnit.name}
      </Link>
    );
  });
};
