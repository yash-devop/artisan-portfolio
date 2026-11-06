import type { Metadata } from "next";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/package-installer");

export default function PackageInstallerComponent() {
  return <div>PackageInstaller component</div>;
}
