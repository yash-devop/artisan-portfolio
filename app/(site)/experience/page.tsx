import { JsonLd } from "@/components/seo/json-ld";
import { ExperienceSection } from "@/features/experience";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Frontend engineering experience of Yash Kamble across product teams, startups, and contract work.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ])}
      />
      <div className="py-10">
        <ExperienceSection />
      </div>
    </>
  );
}
