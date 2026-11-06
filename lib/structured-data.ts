import { WORK } from "@/common/constants";
import type { TWork } from "@/common/types";
import {
  absoluteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/seo";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profile`;

const PERSON_SAME_AS = [
  SOCIAL_LINKS.github,
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.x,
];

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Design Engineer",
  description: SITE_DESCRIPTION,
  email: SOCIAL_LINKS.email.replace(/^mailto:/, ""),
  sameAs: PERSON_SAME_AS,
  knowsAbout: [
    "Frontend engineering",
    "React",
    "Next.js",
    "TypeScript",
    "UI design",
    "Web performance",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": PROFILE_ID,
  url: SITE_URL,
  name: `${SITE_NAME} — Design Engineer`,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
};

export const craftsCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl("/crafts")}#collection`,
  url: absoluteUrl("/crafts"),
  name: "Crafts by Yash Kamble",
  description:
    "Handcrafted UI components, interaction studies, and daily frontend experiments by Yash Kamble.",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
};

export const workItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected work by Yash Kamble",
  itemListElement: WORK.map((work, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(`/work/${work.id}`),
    name: work.name,
  })),
};

export const creativeWorkSchema = (work: TWork) => {
  const links = Object.values(work.links ?? {}).filter(
    (link): link is string => Boolean(link),
  );

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/work/${work.id}`)}#creative-work`,
    name: work.name,
    description: work.description ?? work.thumbnailDescription,
    url: absoluteUrl(`/work/${work.id}`),
    image: work.images.map((image) => absoluteUrl(image)),
    dateCreated: work.createdAt,
    dateModified: work.updatedAt,
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    sameAs: links,
  };
};

export const breadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
