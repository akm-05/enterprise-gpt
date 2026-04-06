"use client";

import { motion } from "framer-motion";

const personas = [
  {
    number: "01",
    title: "Professionals & Teams",
    description:
      "Connects emails, conversations, documents, and AI so teams can collaborate efficiently.",
    image: "/images/p1.png",
  },
  {
    number: "02",
    title: "Independent Creators",
    description:
      "From client conversations to files, use AI to generate content, organize projects, and stay on top of deadlines.",
    image: "/images/p2.png",
  },
  {
    number: "03",
    title: "Writers",
    description:
      "Capture ideas, structure documents, and generate drafts with AI support.",
    image: "/images/p3.png",
  },
  {
    number: "04",
    title: "Students",
    description:
      "Organize class notes, manage study materials, and summarize research instantly.",
    image: "/images/p4.png",
  },
] as const;

export default function PersonasSection() {
  return (
    <section className="bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-eighty text-5xl text-[#394050] leading-tight md:text-6xl text-center">
            Built for the way modern teams work
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-500 text-lg">
            Connect your workflows end-to-end with AI that stays aligned to how
            teams actually work.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[340px] flex-col rounded-3xl bg-[#f7f7f7] p-6"
            >
              <div>
                <div className="h-[120px] overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static marketing assets */}
                  <img
                    src={persona.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mt-4 text-base font-eighty font-medium text-blue-400">
                  {persona.number}
                </div>
                <h3 className="mt-2 text-2xl font-eighty text-[#394050]">
                  {persona.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-gray-500">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

