"use client";
import { WORK_NEWEST_FIRST } from "@/common/constants";
import { motion } from "motion/react";
import { WorkRow } from "./work-row";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const WorkList = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-14 flex flex-col gap-y-6 max-w-2xl mx-auto "
    >
      {WORK_NEWEST_FIRST.map((workUnit) => {
        return <WorkRow key={workUnit.id} {...workUnit} />;
      })}
    </motion.div>
  );
};
