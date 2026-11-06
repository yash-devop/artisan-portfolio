import { WorkList } from "@/features/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Yash Kamble — developer tools, SaaS products, and frontend systems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <WorkList />;
}
