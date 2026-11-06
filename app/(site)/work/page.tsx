import { JsonLd } from "@/components/seo/json-ld";
import { WorkList } from "@/features/work";
import { breadcrumbSchema, workItemListSchema } from "@/lib/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Yash Kamble — developer tools, SaaS products, and frontend systems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          workItemListSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />
      <WorkList />
    </>
  );
}
