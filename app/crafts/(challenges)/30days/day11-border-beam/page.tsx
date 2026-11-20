import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { IconArrowUp, IconChevronDown } from "@tabler/icons-react";

export default function Day11BorderBeam() {
  return (
    <BlockWrapper className="items-center justify-center p-6">
      <div className="group relative w-full max-w-lg overflow-hidden rounded-2xl p-[2px]">
        <div
          className="pointer-events-none absolute -inset-[300%] animate-spin opacity-60 blur-3xl [animation-duration:4s] [animation-timing-function:linear]
  bg-[conic-gradient(from_0deg,transparent_0deg,#22c55e_20deg,#0cbaf9_60deg,#cd0957_100deg,#cc7606_130deg,#ddf103_150deg,transparent_200deg,transparent_360deg)]"
        />

        {/* inner panel */}
        <div className="relative flex h-32 flex-col justify-between rounded-[15px] bg-neutral-800/90 p-2.5 backdrop-blur">
          <div>
            <button className="flex size-6 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-neutral-500">
              @
            </button>
            <input
              placeholder="Build anything..."
              className="mt-3 w-full bg-transparent px-0.5 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {["Agent", "Auto"].map((label) => (
                <button
                  key={label}
                  className="flex items-center gap-1 rounded-full bg-neutral-700/40 px-2.5 py-1 text-xs text-neutral-200 hover:bg-white/10"
                >
                  {label}
                  <IconChevronDown size={12} className="text-neutral-400" />
                </button>
              ))}
            </div>
            <button className="flex size-7 items-center justify-center rounded-full bg-white/10 text-neutral-400 transition hover:bg-white/20 hover:text-white">
              <IconArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
}
