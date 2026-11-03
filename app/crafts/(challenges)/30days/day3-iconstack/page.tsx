import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { Button } from "@/components/ui/button";
import { IsometricIconStack } from "./isometric-icon-stack";

export default function Day3IconStack() {
  return (
    <BlockWrapper>
      <div className="w-full h-full flex flex-1 flex-col items-center justify-center gap-4">
        <IsometricIconStack />
        <div className="flex flex-col gap-2 items-center justify-center">
          <span>Workspace is ready</span>
          <span className="max-w-[260px] text-center text-neutral-500">
            Invite teammates or connect a data source to start filling this
            view.
          </span>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Button size="lg">Invite teammates</Button>
          <Button variant="outline" size="lg">
            Connect source
          </Button>
        </div>
      </div>
    </BlockWrapper>
  );
}
