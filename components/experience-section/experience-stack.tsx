"use client";
import { TStack } from "@/common/types";
import { TooltipStack } from "../tech-stack-section/tooltip-stack";

export const ExperienceStack = ({ icon, name }: TStack) => {
  return <TooltipStack key={name} name={name} icon={icon} />;
};
