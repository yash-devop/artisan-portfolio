import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { WorkspaceBlock, type TWorkspaceBlockTone } from "./workspace-block";

const BLOCKS: TWorkspaceBlockTone[] = ["neutral", "emerald"];

export default function Day3IconStack() {
  return (
    <BlockWrapper className="w-full flex items-center justify-center pb-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12 p-6 md:flex-row">
        {BLOCKS.map((tone) => (
          <WorkspaceBlock key={tone} tone={tone} />
        ))}
      </div>
    </BlockWrapper>
  );
}
