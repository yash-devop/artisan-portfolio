"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { createContext, useContext, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TTabsVariant = "pill" | "line";

const TabsVariantContext = createContext<TTabsVariant>("pill");

function Tabs({
  className,
  variant = "pill",
  ...props
}: ComponentProps<typeof TabsPrimitive.Root> & { variant?: TTabsVariant }) {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-variant={variant}
        className={cn("flex w-full flex-col gap-2", className)}
        {...props}
      />
    </TabsVariantContext.Provider>
  );
}

function TabsList({
  className,
  children,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) {
  const variant = useContext(TabsVariantContext);

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "text-muted-foreground relative inline-flex items-center",
        variant === "pill" &&
          "mx-auto h-12 w-full max-w-xs gap-2 rounded-full border border-border bg-neutral-800/20 p-1 text-xs",
        variant === "line" && "w-full gap-4 border-b border-border",
        className,
      )}
      {...props}
    >
      {variant === "pill" && (
        <TabsPrimitive.Indicator
          className="pointer-events-none absolute z-0 rounded-full bg-neutral-800 border border-neutral-600 transition-[left,top,width,height] duration-150 ease-out"
          style={{
            left: "var(--active-tab-left)",
            top: "var(--active-tab-top)",
            width: "var(--active-tab-width)",
            height: "var(--active-tab-height)",
          }}
        />
      )}
      {children}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Tab>) {
  const variant = useContext(TabsVariantContext);

  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative z-10 inline-flex items-center justify-center gap-1.5 text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        "data-active:text-foreground",
        variant === "pill" &&
          "h-full w-full rounded-full borders border-neutral-600 px-3 data-active:border-transparent",
        variant === "line" &&
          "h-9 px-1 data-active:after:absolute data-active:after:inset-x-0 data-active:after:-bottom-px data-active:after:h-0.5 data-active:after:bg-foreground",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
