"use client";
import { TStack } from "@/common/types";
import { TooltipStack } from "./tooltip-stack";

const techIcons: TStack[] = [
  { name: "React", icon: "react" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Motion", icon: "motion" },
  { name: "Docker", icon: "docker" },
  { name: "Vercel", icon: "vercel" },

  { name: "Next.js", icon: "nextjs" },
  { name: "Github", icon: "github" },
  { name: "Claude", icon: "claude" },
  { name: "Chatgpt", icon: "chatgpt" },
];

export const TechStackSection = () => {
  return (
    <div className="flex gap-8 flex-wrap">
      {techIcons.map(({ name, icon }) => (
        <TooltipStack key={name} name={name} icon={icon} />
      ))}
    </div>
  );
};
