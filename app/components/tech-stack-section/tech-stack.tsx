"use client";
import { ChatgptIcon } from "../logos/chatgpt";
import { ClaudeIcon } from "../logos/claude";
import { DockerIcon } from "../logos/docker";
import { GithubIcon } from "../logos/github";
import { MotionDevIcon } from "../logos/motion-dev";
import { NextjsIcon } from "../logos/next";
import { ReactIcon } from "../logos/react";
import { TailwindIcon } from "../logos/tailwind";
import { VercelIcon } from "../logos/vercel";
import { motion, Variants } from "motion/react";

const iconVariant: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.11,
    y: -2,
  },
};
const techIcons = [
  { name: "React", icon: ReactIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Motion", icon: MotionDevIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Vercel", icon: VercelIcon },

  { name: "Next.js", icon: NextjsIcon },
  { name: "Github", icon: GithubIcon },
  { name: "Claude", icon: ClaudeIcon },
  { name: "Chatgpt", icon: ChatgptIcon },
];

export const TechStackSection = () => {
  return (
    <div className="flex gap-8 flex-wrap">
      {techIcons.map(({ name, icon: Icon }) => (
        <motion.div
          key={name}
          className="h-8 w-8 cursor-pointer transform-gpu"
          variants={iconVariant}
          initial="initial"
          whileHover="hover"
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};
