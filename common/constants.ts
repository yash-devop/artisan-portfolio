import { MotionDevIcon } from "@/components/icons/motion-dev";
import { AmazonAwsIcon } from "../components/icons/aws";
import { FigmaIcon } from "../components/icons/figma";
import { MongodbWordmarkIcon } from "../components/icons/mongo";
import { NextjsIcon } from "../components/icons/next";
import { NodejsIcon } from "../components/icons/node";
import { RazorpayIcon } from "../components/icons/razorpay";
import { ReactIcon } from "../components/icons/react";
import { ReactQueryIcon } from "../components/icons/react-query";
import { ReduxIcon } from "../components/icons/redux";
import { TailwindIcon } from "../components/icons/tailwind";
import { TurborepoIcon } from "../components/icons/turbo-repo";
import { VercelIcon } from "../components/icons/vercel";
import { TExperiences, TWork } from "./types";
import { DockerIcon } from "@/components/icons/docker";
import { ChatgptIcon } from "@/components/icons/chatgpt";
import { ClaudeIcon } from "@/components/icons/claude";
import { GithubIcon } from "@/components/icons/github";

export const NAV_ROUTES = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },

  {
    id: 2,
    name: "Crafts",
    href: "/crafts",
  },
  {
    id: 3,
    name: "Work",
    href: "/work",
  },
  {
    id: 4,
    name: "Experience",
    href: "/experience",
  },
];

export const EXPERIENCES: TExperiences[] = [
  {
    year: "2025 — NOW",
    role: "Frontend Engineer",
    company: "Fyntune Solutions",
    location: "Turbhe , Navi Mumbai",
    stack: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Turborepo", icon: "turborepo" },
      { name: "React Query", icon: "reactQuery" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "Vercel", icon: "vercel" },
    ],

    description: [
      "Building financial products and onboarding experiences used across 10+ broker platforms.",
      "Designed scalable UI systems and reusable components focused on better developer experience.",
      "Improved application performance by migrating legacy React codebases to Vite, reducing build times by 50%.",
      "Worked closely with product teams to turn ideas into polished, production-ready experiences.",
    ],
  },
  {
    year: "July 2026 — September 2026",
    role: "Frontend Engineer",
    company: "Transket.ai",
    location: "Ontario , Canada",
    stack: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Turborepo", icon: "turborepo" },
      { name: "React Redux", icon: "redux" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "AWS", icon: "aws" },
    ],

    description: [
      "Building financial products and onboarding experiences used across 10+ broker platforms.",
      "Designed scalable UI systems and reusable components focused on better developer experience.",
      "Improved application performance by migrating legacy React codebases to Vite, reducing build times by 50%.",
      "Worked closely with product teams to turn ideas into polished, production-ready experiences.",
    ],
  },

  {
    year: "CONTRACT",
    role: "Fullstack Developer",
    company: "TrufflePig.ai",
    location: "San-fransisco , Remote",
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vercel", icon: "vercel" },
      { name: "AWS", icon: "aws" },
    ],
    description: [
      "Built an AI-powered PDF experience that helps users understand and interact with documents.",
      "Developed smooth AI workflows with responsive interfaces and real-time interactions.",
      "Worked end-to-end from UI development to API integrations and product improvements.",
      "Focused on creating a simple experience around complex AI functionality.",
    ],
  },

  {
    year: "CONTRACT",
    role: "Frontend / UI UX Developer",
    location: "Mumbai, Remote",
    company: "iVOOMi",
    stack: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Figma", icon: "figma" },
    ],

    description: [
      "Built a customer-facing digital experience for an electric vehicle brand.",
      "Translated designs into a fast, responsive, and conversion-focused website.",
      "Collaborated with stakeholders to refine user experience and improve engagement by 30%.",
      "Handled the complete frontend development process from implementation to delivery.",
    ],
  },
  {
    year: "2023 — 2024",
    role: "Fullstack Developer Intern",
    company: "IIT Bombay",
    location: "Powai, Hybrid",
    stack: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "Vercel", icon: "vercel" },
    ],
    description: [
      "Built and shipped full-stack applications while working across frontend, backend, and databases.",
      "Delivered 2 production projects through rapid 1-week development cycles.",
      "Focused on writing maintainable code, improving architecture, and creating scalable solutions.",
      "Helped teammates adopt better React patterns and frontend engineering practices.",
    ],
  },

  {
    year: "2023 — 2024",
    role: "Frontend Developer",
    company: "Hackathon Projects",

    description: [
      "Built experimental AI-powered products while exploring new technologies and solving real-world problems.",
      "Created a healthcare chatbot using React and Django with NLP-based interactions and image-based inputs.",
      "Developed an AI meeting assistant with real-time transcription and automated summaries.",
      "Focused on rapid prototyping, product thinking, and turning ideas into working applications.",
    ],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "WhatsApp Assistant",

    description: [
      "Built an AI-powered WhatsApp assistant that understands conversations and generates automated responses.",
      "Developed the frontend experience using React and integrated WhatsApp APIs with custom AI workflows.",
      "Explored conversational interfaces and automation to improve user interactions.",
    ],
  },
  {
    year: "2023 - 2023",
    role: "Frontend Developer",
    company: "Healthcare AI Chatbot · Hackathon",

    description: [
      "Built an AI healthcare chatbot from scratch with a team of four.",
      "Developed a user-friendly React interface and integrated backend services for chatbot interactions.",
      "Implemented image submission workflows to improve AI-based recommendations.",
    ],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "AI Meeting Summarizer · Hackathon",

    description: [
      "Built an AI meeting assistant for real-time transcription and automated summaries.",
      "Created interfaces for processing conversations across different languages.",
      "Focused on improving productivity through AI-powered workflows.",
    ],
  },
  {
    year: "2024 — NOW",
    role: "Independent Developer",
    company: "Personal Projects",

    description: [
      "Building SaaS products and developer tools from idea validation to production.",
      "Experimenting with products around developer productivity, monitoring, and collaboration.",
      "Working across frontend, backend, infrastructure, databases, and cloud deployments.",
      "Learning through shipping real products, improving UX, and solving practical problems.",
    ],
  },
];

export const ICONS = {
  react: ReactIcon,
  tailwind: TailwindIcon,
  turborepo: TurborepoIcon,
  reactQuery: ReactQueryIcon,
  redux: ReduxIcon,
  razorpay: RazorpayIcon,
  vercel: VercelIcon,
  nextjs: NextjsIcon,
  aws: AmazonAwsIcon,
  figma: FigmaIcon,
  nodejs: NodejsIcon,
  mongodb: MongodbWordmarkIcon,
  motion: MotionDevIcon,
  docker: DockerIcon,
  chatgpt: ChatgptIcon,
  claude: ClaudeIcon,
  github: GithubIcon,
  node: NodejsIcon,
} as const;

export const WORK: TWork[] = [
  {
    id: 1,
    name: "Website Uptime Monitoring",
    thumbnailDescription: "Monitor website reliability",
    description:
      "A real-time uptime monitoring platform that tracks website availability, detects downtime, and alerts teams before issues impact users.",
    thumbnail: "/work-images/uptime/uptime-1.jpg",
    createdAt: "2024-10-20",
    updatedAt: "2025-01-18",
    images: [
      "/work-images/uptime/uptime-1.jpg",
      "/work-images/uptime/uptime-2.jpg",
      "/work-images/uptime/uptime-3.jpg",
      "/work-images/uptime/uptime-4.jpg",
    ],
    links: {
      github: "https://github.com/yash-devop/website-uptime-monitor",
      twitter: "https://x.com/yash_devop/status/1889159855497265623?s=20",
    },
  },
  {
    id: 2,
    name: "Feedbackr",
    thumbnailDescription: "Collect users feedback directly",
    description:
      "A lightweight feedback collection SDK that can be embedded into any website, helping teams gather user insights and improve products faster.",
    thumbnail: "/work-images/feedbackr/feedbackr-1.jpg",
    createdAt: "2026-01-25",
    updatedAt: "2026-05-17",

    images: [
      "/work-images/feedbackr/feedbackr-1.jpg",
      "/work-images/feedbackr/feedbackr-2.jpg",
      "/work-images/feedbackr/feedbackr-3.jpg",
      "/work-images/feedbackr/feedbackr-4.jpg",
      "/work-images/feedbackr/feedbackr-5.jpg",
      "/work-images/feedbackr/feedbackr-6.jpg",
      "/work-images/feedbackr/feedbackr-7.jpg",
      "/work-images/feedbackr/feedbackr-8.jpg",
      "/work-images/feedbackr/feedbackr-9.jpg",
      "/work-images/feedbackr/feedbackr-10.jpg",
    ],
    links: {
      github: "https://github.com/yash-devop/feedbackr",
      live_link: "https://feedbackr-web.vercel.app/",
    },
  },
  {
    id: 3,
    name: "TinyLogs",
    thumbnailDescription: "Filter noise. Find important logs.",
    description:
      "A developer-focused logging platform that helps teams cut through noisy logs, identify important events, and understand system behavior faster.",
    thumbnail: "/work-images/tinylogs/tinylog-1.jpg",
    createdAt: "2026-04-03",
    updatedAt: "2026-06-07",
    images: [
      "/work-images/tinylogs/tinylog-1.jpg",
      "/work-images/tinylogs/tinylog-2.jpg",
      "/work-images/tinylogs/tinylog-3.jpg",
    ],
    links: {
      github: "https://github.com/yash-devop/tinylogs",
      other: "https://www.npmjs.com/package/@yash-devop/tinylog",
      twitter: "https://x.com/yash_devop/status/2041581870232826097",
    },
  },
  {
    id: 4,
    name: "Documently",
    thumbnailDescription: "Documents, organised",
    description:
      "A document workspace for creating, organising, and sharing content in one clean, focused place.",
    thumbnail: "/work-images/documently/1.jpg",
    createdAt: "2026-08-01",
    updatedAt: "2026-09-28",
    images: [
      "/work-images/documently/1.jpg",
      "/work-images/documently/2.jpg",
      "/work-images/documently/4.jpg",
      "/work-images/documently/5.jpg",
      "/work-images/documently/auth.jpg",
    ],
    links: {
      github: "https://github.com/yash-devop/documently",
      live_link: "https://documently.emberbuild.in",
    },
  },
];

export const WORK_NEWEST_FIRST = [...WORK].sort(
  (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
);
