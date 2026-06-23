"use client";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { motion } from "motion/react";
import { IconCheck } from "@tabler/icons-react";

export const CopyEmail = ({
  email = "yashkamble.dev@gmail.com",
}: {
  email?: string;
}) => {
  const { copyClipboard, isCopied } = useCopyToClipboard(2000);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "e") {
        copyClipboard(email);
      }
    });
  }, [copyClipboard, email]);

  return (
    <AnimatePresence>
      {isCopied ? (
        <motion.div
          key={"check-icon-email"}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          className="space-x-2"
        >
          <span className="space-x-1 text-sm text-neutral-500">
            Email copied
          </span>
          <IconCheck className="inline-block text-emerald-500" size={19} />
        </motion.div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          className="space-x-1.5 text-sm text-neutral-500 cursor-pointer w-fit"
          onClick={() => copyClipboard(email)}
        >
          <span>Press</span>

          <code className="inline-block bg-neutral-200 px-1.5 py-0.5 text-neutral-700 font-medium ring ring-neutral-400 rounded-sm text-xs">
            E
          </code>
          <span>to copy email</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
