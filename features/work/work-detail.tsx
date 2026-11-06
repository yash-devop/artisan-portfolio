"use client";

import type { TWork } from "@/common/types";
import { formatMonthYear } from "@/lib/work-date";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const WorkDetail = ({ work }: { work: TWork }) => {
  return (
    <motion.article className="py-10">
      <nav
        aria-label="Breadcrumb"
        className="pb-4 text-xs font-mono text-neutral-400"
      >
        <Link href="/work" className="hover:text-neutral-600">
          Work
        </Link>
        <span className="px-2">/</span>
        <span aria-current="page">{work.name}</span>
      </nav>
      <motion.div
        layout="position"
        layoutId={`work-title-${work.id}`}
        transition={{
          layout: {
            type: "spring",
            stiffness: 250,
            damping: 30,
            duration: 1,
          },
          duration: 1,
        }}
        className="flex flex-col gap-0.5 pb-4"
      >
        <motion.h1 className="font-medium">{work.name}</motion.h1>
        <p className="text-neutral-500">{work.description}</p>
      </motion.div>
      <div className="flex items-center gap-2 pb-1 text-xs font-mono text-neutral-400">
        <time dateTime={work.createdAt}>
          Built {formatMonthYear(work.createdAt)}
        </time>
        <span className="text-neutral-300">·</span>
        <time dateTime={work.updatedAt}>
          Updated {formatMonthYear(work.updatedAt)}
        </time>
      </div>
      <nav
        aria-label="Project links"
        className="text-sm underline underline-offset-2 space-x-4 py-5 px-0.5"
      >
        {work.links?.github && (
          <Link href={work.links?.github} target="_blank">
            <span>GitHub</span>
          </Link>
        )}
        {work.links?.live_link && (
          <Link
            href={work.links?.live_link}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>Live site</span>
          </Link>
        )}
        {work.links?.other && (
          <Link
            href={work.links?.other}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>View package</span>
          </Link>
        )}
        {work.links?.twitter && (
          <Link
            href={work.links?.twitter}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>Twitter thread</span>
          </Link>
        )}
        {work.links?.linkedin && (
          <Link
            href={work.links?.linkedin}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>LinkedIn</span>
          </Link>
        )}
      </nav>
      <div className="space-y-5">
        {work.images.map((image, idx) => (
          <motion.div
            key={image + idx}
            layout
            layoutId={`work-images-${work.id}-${idx}`}
          >
            <Image
              src={image}
              alt={`${work.name} project screenshot ${idx + 1}`}
              width={20}
              height={10}
              sizes="(min-width: 768px) 672px, calc(100vw - 2rem)"
              priority={idx === 0}
              className="w-full shadow-lg rounded-md p-px border border-neutral-300 bg-white"
            />
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
};
