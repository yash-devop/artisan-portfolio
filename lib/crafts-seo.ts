import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

type TCraftSeo = {
  title: string;
  description: string;
  index: boolean;
};

export const CRAFT_SEO = {
  "/crafts": {
    title: "Crafts by Yash Kamble — UI Components and Experiments",
    description:
      "Handcrafted UI components, interaction studies, and daily frontend experiments by Yash Kamble.",
    index: true,
  },
  "/crafts/shimmer": {
    title: "Shimmer Text Effect — Crafts by Yash",
    description:
      "A lightweight shimmer text effect built with CSS and React for loading states and product highlights.",
    index: true,
  },
  "/crafts/button": {
    title: "Button Component — Crafts by Yash",
    description:
      "A reusable button component with variants, sizes, and accessible interaction states.",
    index: false,
  },
  "/crafts/code-block": {
    title: "Code Block Component — Crafts by Yash",
    description:
      "A clean code block component for displaying syntax-highlighted snippets in documentation and product UI.",
    index: false,
  },
  "/crafts/package-installer": {
    title: "Package Installer — Crafts by Yash",
    description:
      "A compact package installer component for copyable install commands in developer-facing interfaces.",
    index: false,
  },
  "/crafts/popover": {
    title: "Popover Component — Crafts by Yash",
    description:
      "An accessible popover component for contextual actions, menus, and lightweight overlays.",
    index: false,
  },
  "/crafts/modal": {
    title: "Modal Component — Crafts by Yash",
    description:
      "An accessible modal component for focused tasks, confirmations, and multi-step flows.",
    index: false,
  },
  "/crafts/navigation-menu": {
    title: "Navigation Menu — Crafts by Yash",
    description:
      "A responsive navigation menu component for product shells and documentation layouts.",
    index: false,
  },
  "/crafts/30days/day1-login": {
    title: "Day 1 Login — Crafts by Yash",
    description:
      "A polished login screen with social providers, animated grid background, and accessible form states.",
    index: true,
  },
  "/crafts/30days/day2-switch": {
    title: "Day 2 Switch — Crafts by Yash",
    description:
      "An animated settings switch built with React and Motion for clear, tactile preference controls.",
    index: true,
  },
  "/crafts/30days/day3-iconstack": {
    title: "Day 3 Icon Stack — Crafts by Yash",
    description:
      "An isometric icon stack component for workspace empty states and onboarding screens.",
    index: true,
  },
  "/crafts/30days/day4-shimmer": {
    title: "Day 4 Shimmer — Crafts by Yash",
    description:
      "A shimmer-based loading treatment for changelog cards, product updates, and content placeholders.",
    index: true,
  },
  "/crafts/30days/day5-tasklist": {
    title: "Day 5 Task List — Crafts by Yash",
    description:
      "A sequential task list with animated progress timers for onboarding and setup flows.",
    index: true,
  },
  "/crafts/30days/day6-statcounter": {
    title: "Day 6 Stat Counter — Crafts by Yash",
    description:
      "An animated stat counter with staggered count-up motion for dashboards, metrics, and product highlights.",
    index: true,
  },
  "/crafts/30days/day7-tabs": {
    title: "Day 7 Tabs — Crafts by Yash",
    description:
      "Accessible tab components with sliding indicators in pill and underline variants, built with React and Base UI.",
    index: true,
  },
  "/crafts/30days/day8-slothsidebar": {
    title: "Day 8 Sloth Sidebar — Crafts by Yash",
    description:
      "A warm, mail-client style sidebar with searchable workspaces, account switching, and a collapsible icon rail.",
    index: true,
  },
  "/crafts/30days/day9-labels": {
    title: "Day 9 Labels — Crafts by Yash",
    description:
      "Compact status labels with tone variants, icons, and reusable priority indicators built with React and Tailwind.",
    index: true,
  },
} as const satisfies Record<string, TCraftSeo>;

export const craftMetadata = (
  path: keyof typeof CRAFT_SEO,
): Metadata => {
  const page = CRAFT_SEO[path];

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      url: path,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE.url],
      creator: "@yash_devop",
      site: "@yash_devop",
    },
    ...(page.index === false
      ? { robots: { index: false, follow: true } }
      : {}),
  };
};
