import { AmazonAwsIcon } from "../components/logos/aws";
import { FigmaIcon } from "../components/logos/figma";
import { MongodbWordmarkIcon } from "../components/logos/mongo";
import { NextjsIcon } from "../components/logos/next";
import { NodejsIcon } from "../components/logos/node";
import { RazorpayIcon } from "../components/logos/razorpay";
import { ReactIcon } from "../components/logos/react";
import { ReactQueryIcon } from "../components/logos/react-query";
import { TailwindIcon } from "../components/logos/tailwind";
import { TurborepoIcon } from "../components/logos/turbo-repo";
import { VercelIcon } from "../components/logos/vercel";
import { TExperiences, TWork } from "./types";

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
      ReactIcon,
      TailwindIcon,
      TurborepoIcon,
      ReactQueryIcon,
      RazorpayIcon,
      VercelIcon,
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
    stack: [NextjsIcon, TailwindIcon, VercelIcon, AmazonAwsIcon],
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
    stack: [ReactIcon, TailwindIcon, FigmaIcon],

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
      ReactIcon,
      NodejsIcon,
      MongodbWordmarkIcon,
      RazorpayIcon,
      VercelIcon,
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

export const WORK: TWork[] = [
  {
    id: 1,
    name: "Website Uptime Monitoring",
    thumbnailDescription: "A Monitoring tool",
    description: "A monitoring tool for your websites & enterprises.",
    thumbnail:
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    images: [
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    ],
  },
  {
    id: 2,
    name: "Website Uptime Monitoring",
    thumbnailDescription: "A Monitoring tool",
    description: "A monitoring tool for your websites & enterprises.",
    thumbnail:
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    images: [
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    ],
  },
  {
    id: 3,
    name: "Website Uptime Monitoring",
    thumbnailDescription: "A Monitoring tool",
    description: "A monitoring tool for your websites & enterprises.",
    thumbnail:
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    images: [
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1781461565715-887bd369f481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    ],
  },
];
