"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

/**
 * Order matches a 2-column grid: row1 (L,R), row2 (L,R)…
 * Left column Q1–Q4, right column Q5–Q8 from the design brief.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "How is Enterprise GPT priced for enterprises?",
    answer:
      "Pricing is typically seat- and usage-based with enterprise SLAs, dedicated support, and optional private deployment. Contact sales for a tailored quote based on your team size, data volume, and compliance needs.",
  },
  {
    question: "How does the THINK → ACT → OBSERVE agent loop work?",
    answer:
      "Agents plan actions (THINK), execute tools and workflows (ACT), then validate outcomes and telemetry (OBSERVE) before iterating—so every step stays auditable and aligned with your policies.",
  },
  {
    question: "How does Enterprise GPT enforce data residency and PII redaction?",
    answer:
      "You can pin workloads to approved regions, apply redaction and tokenization policies before content hits models, and keep sensitive fields out of logs—so data stays where your security team expects it.",
  },
  {
    question: "What enterprise systems does Enterprise GPT connect to via MCP?",
    answer:
      "Connectors span email, chat, ticketing, CRM, storage, and internal APIs via MCP-compatible integrations—so agents pull context from the same systems your teams already use.",
  },
  {
    question: "How does Semantic RAG work across PDFs, images, audio, and databases?",
    answer:
      "Content is chunked, embedded, and indexed with rich metadata so retrieval blends text, tables, visuals, and transcripts—then answers cite the right sources across modalities.",
  },
  {
    question: "Can Enterprise GPT be deployed on-premise or air-gapped?",
    answer:
      "Yes. Enterprise deployments support VPC, dedicated tenancy, and disconnected environments with offline model runtimes and controlled update channels when your policy requires it.",
  },
  {
    question:
      "What makes Enterprise GPT different from Microsoft Copilot or ChatGPT Enterprise?",
    answer:
      "Enterprise GPT is built around your stack: deeper workflow automation, multi-system RAG, governed agent loops, and deployment options that map to strict enterprise security—not just chat on top of M365.",
  },
  {
    question: "Which LLMs does the Multi-LLM Model Hub support?",
    answer:
      "The hub routes requests across approved providers and model families—so you can mix fast frontier models with smaller private models and enforce routing, fallback, and cost policies centrally.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-[#ffffff] px-6 py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          
          <h2
            id="faq-heading"
            className="mt-3 font-eighty text-4xl leading-tight tracking-tight text-[#394050] md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-gray-500 md:text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[1.75rem] border border-gray-200/70 bg-[#f7f7f7] shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#ededed] md:px-6 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium leading-snug text-[#394050] md:text-base">
                    {item.question}
                  </span>
                  <span
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-gray-200/60"
                    aria-hidden
                  >
                    <Plus
                      className={`h-4 w-4 text-gray-500 transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200/60 px-5 pb-5 pt-0 md:px-6 md:pb-6">
                        <p className="pt-4 text-sm leading-relaxed text-gray-600 md:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
