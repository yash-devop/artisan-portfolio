import Image from "next/image";
import { BlockWrapper } from "@/components/layouts/block-wrapper";

export default function Day12SlothInbox() {
  return (
    <BlockWrapper className="items-center justify-center p-3 md:p-6">
      <Image
        src="/day-12-sloth-inbox.jpg"
        alt="Sloth inbox UI concept"
        width={1792}
        height={1002}
        priority
        className="h-auto max-h-full w-[800px] max-w-full rounded-sm object-cover"
      />
    </BlockWrapper>
  );
}
