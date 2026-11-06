import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/code-block");

export default function CodeBlockComponent() {
  return <div>Code Block component</div>;
}
