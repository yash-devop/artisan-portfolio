import Image from "next/image";
import { BlockWrapper } from "@/components/layouts/block-wrapper";

export default function Day8SlothSidebar() {
  return (
    <BlockWrapper className="items-center justify-center p-3 md:p-6">
      <Image
        src="/day8-slothsidebar.jpg"
        alt="Sloth mail sidebar UI concept"
        width={1021}
        height={1056}
        priority
        className="h-auto max-h-full w-[800px] max-w-full rounded-sm object-cover"
      />
    </BlockWrapper>
  );
}
