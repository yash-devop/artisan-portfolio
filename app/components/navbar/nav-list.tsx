"use client";
import { NAV_ROUTES } from "@/app/common/constants";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavList = () => {
  const pathname = usePathname();
  return (
    <div className="space-x-3">
      {NAV_ROUTES.map((routeUnit) => {
        const isActive = pathname === routeUnit.href;

        return (
          <Link
            href={routeUnit.href}
            key={routeUnit.id}
            className={cn(
              `cursor-pointer hover:text-neutral-600 transition-all text-xs font font-mono uppercase font-medium`,
              isActive
                ? "text-neutral-700 font-semibold hover:brightness-110"
                : "text-neutral-400",
            )}
          >
            /{routeUnit.name}
          </Link>
        );
      })}
    </div>
  );
};
