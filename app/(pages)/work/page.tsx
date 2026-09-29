"use client";
import { WORK_NEWEST_FIRST } from "@/common/constants";
import { WorkRow } from "@/features/work/work-row";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export default function WorkPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-14 flex flex-col gap-y-6"
    >
      {WORK_NEWEST_FIRST.map((workUnit, idx) => {
        return <WorkRow key={workUnit.id} {...workUnit} idx={idx} />;
      })}
    </motion.div>
  );
}
