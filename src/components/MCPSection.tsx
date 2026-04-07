"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

const MCPSectionGrid = dynamic(() => import("./MCPSectionGrid"), {
  ssr: false,
  loading: () => <MCPSectionGridSkeleton />,
});

function MCPSectionGridSkeleton() {
  return (
    <div
      className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8"
      aria-hidden
    >
      <div className="min-h-[24rem] animate-pulse rounded-2xl bg-[#ececec] lg:col-span-7" />
      <div className="min-h-[24rem] animate-pulse rounded-2xl bg-[#ececec] lg:col-span-5" />
      <div className="min-h-[24rem] animate-pulse rounded-2xl bg-[#ececec] lg:col-span-5" />
      <div className="min-h-[24rem] animate-pulse rounded-2xl bg-[#ececec] lg:col-span-7" />
    </div>
  );
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function MCPSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const loadGrid = useInView(sectionRef, {
    once: true,
    amount: 0.08,
    margin: "0px 0px 180px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="border-b border-gray-200/50 bg-white py-20 md:py-28"
      aria-labelledby="mcp-section-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12"
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          <motion.h2
            id="mcp-section-heading"
            variants={headerVariants}
            className="max-w-3xl text-left font-eighty text-3xl leading-[1.12] tracking-tight text-[#394050] md:text-4xl lg:text-[2.35rem]"
          >
            Agents orchestrate across 113+ tools via MCP.
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="max-w-md text-left text-base leading-relaxed text-gray-500 lg:max-w-sm lg:pt-1 lg:text-right"
          >
            Keep Workflows, Tool Outputs, <br></br>And Agent Decisions Together.<br></br> One
            Enterprise Brain.
          </motion.p>
        </motion.div>

        {loadGrid ? (
          <MCPSectionGrid />
        ) : (
          <MCPSectionGridSkeleton />
        )}
      </div>
    </section>
  );
}
