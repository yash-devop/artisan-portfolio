import type { Metadata } from "next";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { craftMetadata } from "@/lib/crafts-seo";
import ShimmerComponent from "./shimmer";

export const metadata: Metadata = craftMetadata("/crafts/shimmer");

export default function ShimmerPage() {
  return (
    <BlockWrapper className="items-center justify-center p-6">
      <ShimmerComponent
        text="Rollout-based policies are here"
        className="text-base font-medium [--shimmer-speed:1.2s]"
      />
    </BlockWrapper>
  );
}
