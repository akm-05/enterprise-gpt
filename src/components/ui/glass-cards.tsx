"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    number: "01",
    title: "AI Task Summarization",
    description:
      "Automatically summarize emails, documents, and client requests.",
    image: "/images/feature1.png",
  },
  {
    number: "02",
    title: "Smart Workflow Suggestions",
    description: "Get AI-powered recommendations on what to do next.",
    image: "/images/feature2.png",
  },
  {
    number: "03",
    title: "Unified Workspace",
    description: "Manage projects, chats, and files in one place.",
    image: "/images/feature3.png",
  },
  {
    number: "04",
    title: "Context-Aware Intelligence",
    description: "Enterprise GPT understands your workflows deeply.",
    image: "/images/feature4.png",
  },
] as const;

interface CardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  index: number;
  totalCards: number;
}

const Card: React.FC<CardProps> = ({
  number,
  title,
  description,
  image,
  index,
  totalCards,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    gsap.set(card, {
      scale: 1,
      transformOrigin: "center top",
    });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);

        gsap.set(card, {
          scale: Math.max(scale, targetScale),
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex min-h-[120vh] items-center justify-center"
    >
      <div ref={cardRef} className="w-full flex justify-center">

        {/* CARD */}
        <div
          className="overflow-hidden rounded-3xl border border-gray-200 bg-[#ffffff] shadow-sm"
          style={{
            width: "825px",
            height: "616.52px",
            maxWidth: "95vw",
          }}
        >
          <div className="flex h-full flex-col justify-between px-8 py-8">

            {/* TOP */}
            <div className="relative">

              {/* NUMBER */}
              <span className="absolute right-0 top-0 text-sm text-gray-400">
                {number}
              </span>

              {/* TITLE */}
              <h3 className="font-eighty text-[38px] leading-[1.2] text-[#394050] max-w-[520px]">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-500 max-w-[480px] text-[15px] leading-relaxed">
                {description}
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center mt-6">
              <div
                className="overflow-hidden rounded-xl"
                style={{
                  width: "777px",
                  height: "391.54px",
                }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export const StackedCards: React.FC = () => {
  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="w-full bg-[#ffffff]">
      <div className="mx-auto w-full max-w-6xl">
        {cardData.map((card, index) => (
          <Card
            key={card.title}
            number={card.number}
            title={card.title}
            description={card.description}
            image={card.image}
            index={index}
            totalCards={cardData.length}
          />
        ))}
      </div>
    </section>
  );
};