"use client";

import { motion } from "motion/react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full"
    >
      {children}
    </motion.div>
  );
}
