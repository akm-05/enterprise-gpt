"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const linkClassName =
  "block text-gray-500 text-sm hover:text-black transition-colors";

export default function Footer() {
  return (
    <footer aria-label="Enterprise GPT footer">
      {/* SECTION 1: blurred background strip */}
      <section className="relative h-[260px] w-full overflow-hidden sm:h-[300px]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 scale-110">
            <div className="relative h-full w-full">
              <Image
                src="/bg1.png"
                alt=""
                fill
                className="object-cover object-center"
                style={{ filter: "blur(18px)" }}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/40"
          aria-hidden
        />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/signup"
              className="inline-flex rounded-full bg-[rgba(255,255,255,0.15)] px-8 py-3 text-white backdrop-blur-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Sign up for Enterprise-GPT"
            >
              <span className="font-eighty text-lg font-semibold">
                Enterprise-GPT
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: main footer */}
      <section className="bg-[#f7f7f7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
              {/* Brand column */}
              <div className="lg:col-span-1">
                <h3 className="font-eighty text-4xl text-[#394050]">
                  Enterprise-GPT
                </h3>
                <p className="mt-4 max-w-sm text-gray-500 text-sm leading-relaxed">
                  A unified workspace powered by Enterprise GPT bringing
                  projects, conversations, files, and AI into one intelligent
                  flow.
                </p>
                <Link
                  href="/signup"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#1c2333] px-6 py-3 text-white text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Get Started →
                </Link>
              </div>

              {/* Links columns */}
              <div className="lg:col-span-1">
                <h4 className="font-semibold text-[#394050] text-sm">
                  Product
                </h4>
                <div className="mt-3 space-y-3">
                  <a href="#" className={linkClassName}>
                    Enterprise GPT
                  </a>
                  <a href="#" className={linkClassName}>
                    Students
                  </a>
                  <a href="#" className={linkClassName}>
                    Smart Inbox
                  </a>
                  <a href="#" className={linkClassName}>
                    File Storage
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <h4 className="font-semibold text-[#394050] text-sm">
                  Company
                </h4>
                <div className="mt-3 space-y-3">
                  <a href="#" className={linkClassName}>
                    About
                  </a>
                  <a href="#" className={linkClassName}>
                    Careers
                  </a>
                  <a href="#" className={linkClassName}>
                    Blog
                  </a>
                  <a href="#" className={linkClassName}>
                    Contact
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <h4 className="font-semibold text-[#394050] text-sm">
                  Resources
                </h4>
                <div className="mt-3 space-y-3">
                  <a href="#" className={linkClassName}>
                    Help Center
                  </a>
                  <a href="#" className={linkClassName}>
                    Documentation
                  </a>
                  <a href="#" className={linkClassName}>
                    Legal
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <h4 className="font-semibold text-[#394050] text-sm">
                  Social
                </h4>
                <div className="mt-3 space-y-3">
                  <a href="#" className={linkClassName}>
                    GitHub
                  </a>
                  <a href="#" className={linkClassName}>
                    LinkedIn
                  </a>
                  <a href="#" className={linkClassName}>
                    Twitter / X
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-center text-center md:justify-end">
              <p className="text-sm text-gray-400">
                © 2026 Enterprise-GPT. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </footer>
  );
}

