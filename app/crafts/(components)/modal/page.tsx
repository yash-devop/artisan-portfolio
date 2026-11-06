import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/modal");

export default function ModalComponent() {
  return <div>Modal component</div>;
}
