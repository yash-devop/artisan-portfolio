import type { Metadata } from "next";
import { GithubIcon } from "@/components/icons/github";
import { GoogleIcon } from "@/components/icons/google";
import { SlackWordmarkIcon } from "@/components/icons/slack";
import { StripeIcon } from "@/components/icons/stripe";
import { SupabaseWordmarkIcon } from "@/components/icons/supabase";
import { VercelWordMarkIcon } from "@/components/icons/vercel-wordmark";
import AnimatedGrid from "./randomized-dots";
import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { craftMetadata } from "@/lib/crafts-seo";

export const metadata: Metadata = craftMetadata("/crafts/30days/day1-login");

export default function Day1LoginPage() {
  return (
    <BlockWrapper className="items-center justify-center h-full">
      <div className="flex min-h-[calc(100dvh-6rem)] w-full items-center justify-center border-b border-neutral-700/50 px-6 py-10 md:h-full md:min-h-0 md:w-1/2 md:border-r md:border-b-0 md:px-0 md:py-0">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">Signin with Sloth</h1>
            <p className="text-sm text-neutral-400">
              Welcome back. Enter your details to continue.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm px-0.5">Email</label>
            <input
              placeholder="Eg: jane@example.com"
              className="h-10 [box-shadow:inset_0_0_0_1px_var(--color-neutral-700)]  px-3 w-full text-neutral-400 rounded-md focus:outline-none placeholder:text-sm placeholder:text-neutral-600 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm px-0.5">Password</label>
            <input
              placeholder="*********"
              className="h-10 [box-shadow:inset_0_0_0_1px_var(--color-neutral-700)] px-3 w-full text-neutral-400 rounded-md focus:outline-none placeholder:text-sm placeholder:text-neutral-600 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full pt-2">
            <button className="[box-shadow:inset_0_0_0_1px_var(--color-indigo-800),inset_0_2px_3px_0_var(--color-blue-500),inset_0_-2px_2px_0_var(--color-indigo-700),inset_2px_0_2px_0_var(--color-indigo-700),inset_-2px_0_2px_0_var(--color-indigo-700)] bg-linear-to-b from-indigo-700 from-20%  to-indigo-600 px-3 py-2.5 w-full text-white rounded-md text-sm h-10 hover:brightness-105 cursor-pointer transition-all ease-in-out">
              Signup
            </button>
          </div>
          <div className="flex w-full items-center gap-3">
            <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-neutral-100 text-sm font-medium text-neutral-900 transition-colors hover:bg-white cursor-pointer">
              <GoogleIcon className="size-4 shrink-0" />
              Google
            </button>
            <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-neutral-100 text-sm font-medium text-neutral-900 transition-colors hover:bg-white cursor-pointer">
              <GithubIcon className="size-4 shrink-0" />
              GitHub
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full md:h-full md:min-h-0 md:w-1/2">
        <AnimatedGrid />
        <div className="absolute inset-0 z-10 h-full">
          <div className="h-full px-6 flex flex-col items-center justify-center gap-5">
            <span className="text-sm font-medium tracking-tight">
              Trusted by companies
            </span>
            <div className="flex flex-wrap items-start justify-start gap-x-8 gap-y-6 text-white/80">
              <SlackWordmarkIcon className="h-5 w-auto shrink-0" />
              <StripeIcon className="h-5 w-auto shrink-0" />
              <SupabaseWordmarkIcon className="h-5 w-auto shrink-0" />
              <VercelWordMarkIcon className="h-5 w-auto shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
}
