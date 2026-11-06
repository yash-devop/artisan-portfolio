import type { Metadata } from "next";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconSearch,
} from "@tabler/icons-react";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { craftMetadata } from "@/lib/crafts-seo";
import ShimmerComponent from "@/app/crafts/(components)/shimmer/shimmer";

export const metadata: Metadata = craftMetadata("/crafts/30days/day4-shimmer");

const EYEBROW =
  "font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500";

export default function Day4ShimmerPage() {
  return (
    <BlockWrapper className="items-center justify-center p-6">
      <div className="flex w-full max-w-md flex-col gap-3">
        <div className="rounded-xl border border-neutral-700/40 bg-neutral-900/50 p-4">
          <div className="flex items-center justify-between">
            <span className={EYEBROW}>changelog</span>
            <IconArrowUpRight className="size-3.5 text-neutral-600" />
          </div>
          <p className="mt-3">
            <ShimmerComponent
              text="Rollout-based policies are here"
              className="text-base font-medium [--shimmer-speed:1.2s]"
            />
          </p>
          <p className="mt-1 text-xs text-neutral-500">
            Review every decision with a clear audit trail.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-700/40 bg-neutral-900/50">
          <div className="flex items-center gap-3 px-4 py-3">
            <IconSearch className="size-4 shrink-0 text-neutral-500" />
            <ShimmerComponent
              text="Create a new policy"
              className="text-[13px] [--shimmer-speed:0.8s]"
            />
            <kbd className="ml-auto shrink-0 rounded border border-neutral-700/50 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500">
              ⌘ K
            </kbd>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-neutral-700/40 bg-neutral-900/50 p-5">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-amber-300/10 blur-3xl"
          />
          <div className="relative flex items-center gap-2">
            <span className={EYEBROW}>premium</span>
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-amber-300/90">
              25% off
            </span>
          </div>
          <p className="relative mt-3 font-instrument-serif text-2xl leading-snug text-neutral-200">
            Unlock Sloth’s full Agentic capabilities
          </p>
          <p className="relative mt-1.5 text-xs leading-relaxed text-neutral-500">
            Full breakdowns, source files, and early access to every new craft.
          </p>
          <button className="group relative mt-4 inline-flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-gradient-to-b from-amber-300 to-amber-400 px-4 py-2 text-[13px] font-medium text-amber-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_24px_-12px_rgba(251,191,36,0.7)] transition hover:brightness-[1.03] active:brightness-95">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-shimmer [--shimmer-speed:2.6s]"
            />
            <span className="relative z-10">Get premium access</span>
            <IconArrowRight className="relative z-10 size-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </BlockWrapper>
  );
}
