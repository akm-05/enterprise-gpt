"use client";

import { motion, type Variants } from "framer-motion";
import { clsx } from "clsx";
import { memo } from "react";

const viewport = {
  once: true,
  margin: "-100px",
} as const;

const transition = {
  duration: 0.65,
  ease: "easeOut" as const,
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: (index: number) => {
    if (index === 0) {
      return { opacity: 0, x: 36, y: 0 };
    }
    if (index === 2) {
      return { opacity: 0, x: -36, y: 0 };
    }
    return { opacity: 0, x: 0, y: 12 };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition,
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const CARDS = [
  {
    title: "Automated Knowledge Processing",
    description:
      "Continuously processes emails, documents, and inputs into structured, actionable intelligence across your organization.",
    gradient:
      "bg-gradient-to-br from-sky-400/90 via-blue-500/85 to-indigo-700/90",
  },
  {
    title: "Workflow Intelligence Engine",
    description:
      "Understands context across teams and systems to recommend, trigger, and optimize next steps automatically.",
    gradient:
      "bg-gradient-to-br from-violet-400/90 via-purple-500/80 to-fuchsia-700/85",
  },
  {
    title: "Unified System of Record",
    description:
      "Centralizes conversations, files, and workflows into one connected layer—fully searchable, traceable, and auditable.",
    gradient:
      "bg-gradient-to-br from-amber-200/90 via-violet-300/80 to-purple-600/75",
  },
] as const;

function FeaturesIntroInner() {
  return (
    <section
      className="w-full bg-[#ffffff] py-24 sm:py-28"
      aria-labelledby="features-intro-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={headerVariants}
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-sky-700/80 sm:text-xs">
            Everything your work needs.
          </p>
          <div
            id="features-intro-heading"
            className="mx-auto mt-6 max-w-3xl space-y-5 text-center font-serif text-lg leading-[1.65] text-gray-600 sm:text-xl md:text-2xl md:leading-relaxed"
          >
            <p>
              Enterprise work doesn&apos;t live in one tool. It spans systems,
              teams, and data silos.
            </p>
            <p>
              Enterprise GPT brings everything into a single, auditable
              workspace—where agents, workflows, and knowledge operate as one
              system.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={cardsContainerVariants}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-center md:gap-0">
            {CARDS.map((card, index) => (
              <motion.article
                key={card.title}
                custom={index}
                variants={cardVariants}
                className={clsx(
                  "will-change-[transform,opacity]",
                  "relative flex w-full flex-col overflow-hidden rounded-xl bg-[#f7f7f7] shadow-[0_22px_60px_-18px_rgba(15,23,42,0.14)] ring-1 ring-black/[0.05]",
                  "md:max-w-[min(100%,22rem)] md:flex-1",
                  index === 0 && "md:z-10",
                  index === 1 && "md:z-20 md:-mx-8",
                  index === 2 && "md:z-30 md:-mx-8",
                )}
              >
                <div
                  className={clsx(
                    "relative h-40 shrink-0 overflow-hidden sm:h-44",
                    card.gradient,
                  )}
                  aria-hidden
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-gray-600 will-change-transform sm:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={footerVariants}
        >
         Enterprise GPT unifies workflows, decisions, and data into a single system—so teams operate faster, with full context and control.
        </motion.p>
      </div>
    </section>
  );
}

export const FeaturesIntro = memo(FeaturesIntroInner);
