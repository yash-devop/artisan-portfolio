import { ExperienceSection } from "@/features/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Frontend engineering experience of Yash Kamble across product teams, startups, and contract work.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="py-10">
      <ExperienceSection />
    </div>
  );
}
