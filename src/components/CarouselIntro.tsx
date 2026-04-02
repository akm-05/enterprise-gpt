"use client";

import { motion } from "framer-motion";

export default function CarouselIntro() {
  return (
    <section className="bg-transparent py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <h2 className="font-eighty mb-6 text-5xl leading-tight tracking-tight text-[#394050] md:text-6xl">
          Everything your work needs
          <br />
          Why open 72 tabs to work?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-500">
          Enterprise GPT connects everything so your workflow stays seamless.
        </p>
      </motion.div>
    </section>
  );
}
