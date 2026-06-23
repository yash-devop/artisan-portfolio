"use client";
import { TWork } from "@/app/common/types";
import { IconArrowUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
export const WorkRow = ({
  id,
  idx,
  name,
  thumbnail,
}: TWork & {
  idx: number;
}) => {
  return (
    <Link
      href={`/work/${id}`}
      className="flex items-center justify-between cursor-pointer"
    >
      <motion.div
        layout="position"
        layoutId={`work-images-${id}-${idx}`}
        className="flex gap-2 "
      >
        <Image
          width={14}
          height={10}
          alt="work-image"
          unoptimized
          src={thumbnail}
          className="w-14 h-10 object-cover rounded-md shrink-0"
        />
        <div className="flex flex-col text-sm">
          <motion.span layout="position" layoutId={`work-title-${id}`}>
            {name}
          </motion.span>
          <p>A monitoring tool for your websites and enterprises.</p>
        </div>
      </motion.div>
      <IconArrowUp className="rotate-45 stroke-1 text-neutral-500" size={18} />
    </Link>
  );
};
