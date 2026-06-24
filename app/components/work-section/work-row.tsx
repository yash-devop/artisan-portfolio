"use client";
import { TWork } from "@/app/common/types";
import { IconArrowUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const WorkRow = ({
  id,
  idx,
  name,
  thumbnail,
  description,
}: TWork & {
  idx: number;
}) => {
  return (
    <Link
      href={`/work/${id}`}
      className="flex items-center justify-between cursor-pointer"
    >
      <motion.div key={id} variants={item} className="flex gap-4">
        <Image
          width={14}
          height={10}
          alt="work-image"
          unoptimized
          src={thumbnail}
          className="w-14 h-10 object-cover rounded-md shrink-0"
        />
        <div className="flex flex-col text-sm">
          <motion.span className="font-medium">{name}</motion.span>
          <p className="text-neutral-500">{description}</p>
        </div>
      </motion.div>
      <IconArrowUp className="rotate-45 stroke-1 text-neutral-500" size={18} />
    </Link>
  );
};
