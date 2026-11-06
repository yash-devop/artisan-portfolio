import { JsonLd } from "@/components/seo/json-ld";
import { Home } from "@/features/home";
import {
  personSchema,
  profilePageSchema,
  websiteSchema,
} from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personSchema, websiteSchema, profilePageSchema]} />
      <Home />
    </>
  );
}
