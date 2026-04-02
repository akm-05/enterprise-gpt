"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const headerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const subheadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/** Mobile-only decorative pills; positions scaled to narrow viewports */
const PILLS: { label: string; style: CSSProperties }[] = [
  { label: "Meeting Summarizer", style: { left: "0%", top: "52%", width: 148 } },
  { label: "Audit Trails", style: { left: "58%", top: "62%", width: 100 } },
  {
    label: "Easy Collaboration",
    style: { left: "12%", top: "50%", width: 142 },
  },
  { label: "AI Agents", style: { left: "42%", top: "28%", width: 88 } },
  {
    label: "Total Visibility Management",
    style: { left: "4%", top: "34%", width: 200 },
  },
  { label: "Smart inbox", style: { left: "62%", top: "36%", width: 108 } },
];

type CardSize = "large" | "medium" | "small";

type Visual =
  | {
      type: "img";
      src: string;
      alt: string;
      className?: string;
    }
  | { type: "none" };

type CardCell = {
  kind: "card";
  title: string;
  description: string;
  size: CardSize;
  visual: Visual;
};

type CenterCell = { kind: "center" };

type GridCell = CardCell | CenterCell;

const ROWS: GridCell[][] = [
  [
    {
      kind: "card",
      title: "Unified Workspace",
      description: "Manage projects, chats, and files in one place.",
      size: "large",
      visual: { type: "img", src: "/landing/workspace.svg", alt: "" },
    },
    {
      kind: "card",
      title: "AI Agents",
      description:
        "Automate tasks, summarize discussions, and get instant answers across your workspace.",
      size: "small",
      visual: {
        type: "img",
        src: "/landing/trail.svg",
        alt: "AI Agents trail",
        className: "why-card-agents-trail-img",
      },
    },
    {
      kind: "card",
      title: "Smart Inbox",
      description: "All updates and emails in one focused view.",
      size: "medium",
      visual: { type: "img", src: "/landing/inbox.svg", alt: "" },
    },
  ],
  [
    {
      kind: "card",
      title: "Workflow Automation",
      description: "Trigger actions without manual effort.",
      size: "large",
      visual: { type: "img", src: "/landing/automation.svg", alt: "" },
    },
    { kind: "center" },
    {
      kind: "card",
      title: "Knowledge Engine",
      description: "Understand documents, images, and data.",
      size: "medium",
      visual: { type: "img", src: "/landing/knowledge.svg", alt: "" },
    },
  ],
  [
    {
      kind: "card",
      title: "Meetings & Voice",
      description: "Capture, transcribe, and search every conversation.",
      size: "large",
      visual: { type: "img", src: "/landing/meetings.svg", alt: "" },
    },
    {
      kind: "card",
      title: "Real-time Collaboration",
      description: "Work with your team seamlessly.",
      size: "medium",
      visual: { type: "img", src: "/landing/collab.svg", alt: "" },
    },
    {
      kind: "card",
      title: "Total Visibility",
      description:
        "Dashboards, tags, and audit trails across your workspace.",
      size: "small",
      visual: { type: "img", src: "/landing/visibility.svg", alt: "" },
    },
  ],
];

const FLAT_CELLS = ROWS.flat();

function cardClass(size: CardSize, extra?: string): string {
  const base =
    size === "large"
      ? "why-card why-card-large"
      : size === "medium"
        ? "why-card why-card-medium"
        : "why-card why-card-small";
  return extra ? `${base} ${extra}` : base;
}

function CardVisual({
  visual,
  title,
}: {
  visual: Visual;
  title: string;
}) {
  if (visual.type === "none") return null;
  const alt = visual.alt || title;
  return (
    <div className="why-card-visual">
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVGs from /public */}
      <img
        src={visual.src}
        alt={alt}
        className={
          visual.className ??
          "why-card-image max-h-[120px] w-full object-contain object-bottom"
        }
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <section
      className="why-zerodesk py-28"
      aria-labelledby="feature-grid-heading"
    >
      <div className="why-zerodesk-container">
        <motion.div
          className="why-zerodesk-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerContainerVariants}
        >
          <div className="mx-auto max-w-full overflow-x-auto text-center sm:overflow-x-visible">
            <motion.h2
              id="feature-grid-heading"
              className="why-zerodesk-headline feature-grid-headline inline-block whitespace-nowrap"
              variants={headingVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Why open 100 tabs to get work done?
            </motion.h2>
          </div>
          <motion.p
            className="why-zerodesk-subtitle"
            variants={subheadingVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Emails in one place. Chats in another. Files somewhere else.
            Enterprise GPT connects everything so your work finally flows.
          </motion.p>
        </motion.div>

        <div className="why-zerodesk-mobile-pills md:hidden" aria-hidden>
          {PILLS.map((pill) => (
            <div
              key={pill.label}
              className="why-pill"
              style={{
                ...pill.style,
                transform: "rotate(0.48rad)",
                transformOrigin: "center center",
              }}
            >
              {pill.label}
            </div>
          ))}
        </div>

        <motion.div
          className="why-zerodesk-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={gridContainerVariants}
        >
          {FLAT_CELLS.map((cell, index) => {
            if (cell.kind === "center") {
              return (
                <motion.div
                  key="center"
                  variants={cardVariants}
                  className="why-zerodesk-center-cell will-change-[transform,opacity]"
                >
                  <p className="why-zerodesk-center-text">
                    All
                    <br />
                    WorkFlows
                    <br />
                    in One.
                  </p>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={`${cell.title}-${index}`}
                variants={cardVariants}
                className={`${cardClass(cell.size)} will-change-[transform,opacity]`}
              >
                <div className="why-card-content">
                  <h3 className="why-card-title">{cell.title}</h3>
                  <p className="why-card-description">{cell.description}</p>
                </div>
                <CardVisual visual={cell.visual} title={cell.title} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
