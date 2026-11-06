export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.emberbuild.in";

export const SITE_NAME = "Yash Kamble";
export const SITE_TITLE = "Yash Kamble - Fullstack and Design Engineer";
export const SITE_DESCRIPTION =
  "Yash Kamble — Design Engineer in India building web applications with a focus on frontend engineering, interaction, and UI design.";
export const SITE_KEYWORDS = [
  "Yash Kamble",
  "Yash Kamble portfolio",
  "frontend developer India",
  "React developer",
  "Next.js developer",
  "frontend engineer Mumbai",
  "freelance frontend developer",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/yash-devop",
  linkedin: "https://www.linkedin.com/in/yash-dev/",
  x: "https://x.com/yash_devop",
  email: "mailto:yashkamble.dev@email.com",
} as const;

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Yash Kamble — Frontend Developer",
};
export const absoluteUrl = (path = "/") => {
  return new URL(path, SITE_URL).toString();
};
