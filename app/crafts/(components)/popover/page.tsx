import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/popover");

export default function PopoverComponent() {
  return <div>Popover component</div>;
}
