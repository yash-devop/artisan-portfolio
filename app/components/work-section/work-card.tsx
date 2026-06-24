"use client";
import { TWork } from "@/app/common/types";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const workCardVariants: Variants = {
  initial: ({ idx, imagesLength }: { idx: number; imagesLength: number }) => {
    console.log("Idx", idx, imagesLength);
    return {
      rotate: idx === 0 ? "-8deg" : idx === imagesLength ? "8deg" : "0deg",
      x: idx === 1 ? "-40px" : idx === imagesLength ? "-64px" : "0px",
    };
  },
  hover: ({ idx, imagesLength }: { idx: number; imagesLength: number }) => ({
    rotate: "0deg",
    x: idx === 1 ? "-25px" : idx === imagesLength ? "-44px" : "0px",
  }),
};
export const WorkCard = ({
  description,
  images,
  name,
  id,
  thumbnailDescription,
}: Omit<TWork, "images"> & {
  images: [string, string, string];
}) => {
  return (
    <Link href={"/work/" + id} className="outline-none">
      <motion.div
        initial="initial"
        whileHover="hover"
        className="flex flex-col w-fit gap-8 md:gap-3 cursor-pointer"
      >
        <div className="flex flex-col text-sm">
          <motion.span layout="position" layoutId={`work-title-${id}`}>
            {name}
          </motion.span>

          <p className="text-neutral-500">{thumbnailDescription}</p>
        </div>

        <div className="flex items-center">
          {images.map((image, idx) => (
            <motion.div
              key={image + idx}
              variants={workCardVariants}
              custom={{
                idx,
                imagesLength: images.length - 1,
              }}
            >
              <motion.div
                layout="position"
                layoutId={`work-images-${id}-${idx}`}
              >
                <Image
                  src={image}
                  alt=""
                  width={20}
                  height={10}
                  unoptimized
                  className="w-40 md:w-20 h-10 shadow-lg rounded-md p-px border border-neutral-300 bg-white"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};
