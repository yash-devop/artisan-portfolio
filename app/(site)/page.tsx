import { Home } from "@/features/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
export default function HomePage() {
  return <Home />;
}
