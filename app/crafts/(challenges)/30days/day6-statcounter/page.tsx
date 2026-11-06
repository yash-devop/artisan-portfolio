"use client";

import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { IconRefresh } from "@tabler/icons-react";
import { useState } from "react";
import { StatCounter, type TStat } from "./stat-counter";

const STATS: TStat[] = [
  {
    id: "users",
    label: "Active users",
    value: 24.8,
    suffix: "k",
    decimals: 1,
    trend: { value: "+12.4%", direction: "up" },
  },
  {
    id: "conversion",
    label: "Conversion",
    value: 18.2,
    suffix: "%",
    decimals: 1,
    trend: { value: "+3.1%", direction: "up" },
  },
  {
    id: "response",
    label: "Avg. response",
    value: 240,
    suffix: "ms",
    trend: { value: "-8.2%", direction: "down" },
  },
];

export default function Day6StatCounter() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => setReplayKey((key) => key + 1);

  return (
    <BlockWrapper className="items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-xl border border-neutral-700/40 bg-neutral-900/50 p-5">
        <header className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              product pulse
            </span>
            <p className="mt-1 text-sm font-medium">Last 30 days</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-neutral-700/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            live
          </span>
        </header>

        <div className="mt-6">
          <StatCounter key={replayKey} stats={STATS} />
        </div>

        <footer className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-700/60 pt-4">
          <span className="text-[11px] text-neutral-500">Updated just now</span>
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-neutral-700/60 bg-neutral-800/40 px-2.5 py-1 text-[11px] font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500/50"
          >
            <IconRefresh className="size-3.5" />
            Replay
          </button>
        </footer>
      </div>
    </BlockWrapper>
  );
}
