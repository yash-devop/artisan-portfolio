"use client";
import { WORK } from "@/app/common/constants";
import { WorkRow } from "@/app/components/work-section/work-row";
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
      {WORK.map((workUnit, idx) => {
        return <WorkRow key={workUnit.id} {...workUnit} idx={idx} />;
      })}
    </motion.div>
  );
}
