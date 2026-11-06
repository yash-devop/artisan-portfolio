import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/navigation-menu");

export default function NavigationMenuComponent() {
  return <div>Navigation Menu component</div>;
}
