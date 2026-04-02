"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroCtas() {
  return (
    <motion.div
      className="mt-8 flex w-full max-w-md flex-col items-stretch gap-4 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.65,
        delay: 1.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href="/signup"
        className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-center text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:text-base"
      >
        Get started
      </Link>
      <Link
        href="#learn-more"
        className="text-center text-sm font-medium text-zinc-300 underline decoration-zinc-500 underline-offset-[5px] transition-colors hover:text-white hover:decoration-white sm:text-base"
      >
        See how it works
      </Link>
    </motion.div>
  );
}
