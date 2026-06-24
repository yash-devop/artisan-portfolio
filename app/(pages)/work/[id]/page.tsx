"use client";
import { WORK } from "@/app/common/constants";
import { useParams } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
export default function SpecificWorkPage() {
  const { id } = useParams<{ id: string }>();

  const work = WORK.filter((workUnit) => workUnit.id === Number(id))[0];

  return (
    <motion.div className="py-10">
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
        <span className="font-medium">{work.name}</span>
        <span className="text-neutral-500">{work.description}</span>
      </motion.div>
      <div className="text-sm underline underline-offset-2 space-x-4 py-5 px-0.5">
        {work.links?.github && (
          <Link href={work.links?.github} className="" target="_blank">
            <span>Github</span>
          </Link>
        )}
        {work.links?.live_link && (
          <Link
            href={work.links?.live_link}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>Live Link</span>
          </Link>
        )}
        {work.links?.other && (
          <Link
            href={work.links?.other}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>Visit</span>
          </Link>
        )}
        {work.links?.twitter && (
          <Link
            href={work.links?.twitter}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>Twitter ( Highly active )</span>
          </Link>
        )}
        {work.links?.linkedin && (
          <Link
            href={work.links?.linkedin}
            className="hover:brightness-125"
            target="_blank"
          >
            <span>Linkedin</span>
          </Link>
        )}
      </div>
      <div className="space-y-5">
        {work.images.map((image, idx) => (
          <motion.div
            key={image + idx}
            layout
            layoutId={`work-images-${id}-${idx}`}
          >
            <Image
              src={image}
              alt=""
              width={20}
              height={10}
              unoptimized
              className="w-full shadow-lg rounded-md p-px border border-neutral-300 bg-white"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
