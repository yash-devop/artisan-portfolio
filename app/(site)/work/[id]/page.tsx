import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WORK } from "@/common/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { WorkDetail } from "@/features/work";
import { breadcrumbSchema, creativeWorkSchema } from "@/lib/structured-data";

type TWorkPageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return WORK.map((work) => ({ id: String(work.id) }));
}

export async function generateMetadata({
  params,
}: TWorkPageProps): Promise<Metadata> {
  const { id } = await params;
  const work = WORK.find((item) => item.id === Number(id));

  if (!work) return {};

  const description =
    work.description ??
    work.thumbnailDescription ??
    `${work.name} by Yash Kamble`;

  return {
    title: work.name,
    description,
    alternates: { canonical: `/work/${work.id}` },
    openGraph: {
      type: "article",
      title: work.name,
      description,
      url: `/work/${work.id}`,
      publishedTime: work.createdAt,
      modifiedTime: work.updatedAt,
      images: [
        {
          url: work.thumbnail,
          alt: `${work.name} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.name,
      description,
      images: [work.thumbnail],
      creator: "@yash_devop",
      site: "@yash_devop",
    },
  };
}

export default async function SpecificWorkPage({ params }: TWorkPageProps) {
  const { id } = await params;
  const work = WORK.find((item) => item.id === Number(id));

  if (!work) notFound();

  return (
    <>
      <JsonLd
        data={[
          creativeWorkSchema(work),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: work.name, path: `/work/${work.id}` },
          ]),
        ]}
      />
      <WorkDetail work={work} />
    </>
  );
}
