export type TExperiences = {
  year: string;
  role: string;
  company: string;
  location?: string;
  stack?: unknown[];
  description: string[];
};
export type TWork = {
  id: number;
  name: string;
  thumbnailDescription?: string;
  description?: string;
  thumbnail: string;
  images: string[];
  links?: {
    github?: string;
    live_link?: string;
    other?: string;
    twitter?: string;
    linkedin?: string;
  };
};
