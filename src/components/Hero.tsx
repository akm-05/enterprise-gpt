import Image from "next/image";

import { HeroCtas } from "@/components/HeroCtas";
import { TextAnimate } from "@/registry/magicui/text-animate";

export function Hero() {
  return (
    <section
      className="relative h-screen min-h-[36rem] w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 scale-105">
          <div className="relative h-full w-full">
            <Image
              src="/bg1.png"
              alt=""
              fill
              className="object-cover"
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

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <h1
          id="hero-heading"
          className="font-heading max-w-5xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <TextAnimate
            as="span"
            animation="slideLeft"
            by="character"
            once
            accessible={false}
            className="block"
          >
            Work, Without the Friction.
          </TextAnimate>
          <TextAnimate
            as="span"
            animation="slideLeft"
            by="character"
            once
            accessible={false}
            delay={0.45}
            className="mt-1 block whitespace-nowrap sm:mt-2"
          >
            Designed to Flow.
          </TextAnimate>
        </h1>

        <TextAnimate
          as="p"
          animation="slideLeft"
          by="character"
          once
          delay={1}
          className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:mt-8 sm:max-w-xl sm:text-lg"
        >
          Enterprise-grade AI that fits how your team already works—secure, fast, and quietly powerful.
        </TextAnimate>

        <HeroCtas />
      </div>
    </section>
  );
}
