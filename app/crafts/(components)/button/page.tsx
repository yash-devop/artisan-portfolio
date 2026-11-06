import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/button");

export default function ButtonComponent() {
  return <div>Button component</div>;
}
