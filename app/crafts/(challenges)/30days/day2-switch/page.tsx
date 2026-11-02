"use client";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { useState } from "react";
import { Switch } from "./switch";

type TSetting = {
  id: string;
  title: string;
  description: string;
  defaultChecked: boolean;
};

const SETTINGS: TSetting[] = [
  {
    id: "notifications",
    title: "Notifications",
    description: "Product updates and activity alerts.",
    defaultChecked: true,
  },
  {
    id: "digest",
    title: "Weekly digest",
    description: "A summary of your activity every Monday.",
    defaultChecked: false,
  },
  {
    id: "two-factor",
    title: "Two-factor auth",
    description: "Require a code when signing in.",
    defaultChecked: true,
  },
];

const INITIAL_STATE = Object.fromEntries(
  SETTINGS.map((setting) => [setting.id, setting.defaultChecked]),
);

export default function Day2Switch() {
  const [enabled, setEnabled] =
    useState<Record<string, boolean>>(INITIAL_STATE);

  return (
    <BlockWrapper className="items-center justify-center p-6">
      <div className="p-1 border border-neutral-800 rounded-[18px]">
        <div className="md:w-[400px] max-w-sm md:max-w-full overflow-hidden rounded-xl border  bg-neutral-800/40">
          <div className="border-b border-neutral-700/60 px-5 py-4">
            <h1 className="text-sm font-medium">Settings</h1>
            <p className="mt-0.5 text-xs text-neutral-400">
              Manage how Sloth behaves for you.
            </p>
          </div>

          <div className="divide-y divide-neutral-700/60">
            {SETTINGS.map((setting) => {
              return (
                <div
                  key={setting.id}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">{setting.title}</p>
                      <p className="text-xs leading-relaxed text-neutral-400">
                        {setting.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={enabled[setting.id]}
                    onChange={(checked) =>
                      setEnabled((prev) => ({ ...prev, [setting.id]: checked }))
                    }
                    label={setting.title}
                  />
                </div>
              );
            })}
          </div>

          <div className="border-t border-neutral-700/60 px-5 py-3 font-mono text-[11px] text-center uppercase tracking-wider text-neutral-500">
            *Changes save automatically
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
}
