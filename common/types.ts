import { SVGProps } from "react";
import { ICONS } from "./constants";

export type TExperiences = {
  year: string;
  role: string;
  company: string;
  location?: string;
  stack?: TStack[];
  description: string[];
};
export type TWork = {
  id: number;
  name: string;
  thumbnailDescription?: string;
  description?: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  links?: {
    github?: string;
    live_link?: string;
    other?: string;
    twitter?: string;
    linkedin?: string;
  };
};

export type IconKey = keyof typeof ICONS;

export type TStack = {
  name: string;
  icon: IconKey;
};
