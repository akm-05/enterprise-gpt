"use client";

import Image from "next/image";

function PermissionShieldIllustration() {
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-28 w-28 md:h-32 md:w-32"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0" y1="0" x2="240" y2="240">
          <stop offset="0%" stopColor="#cfd8ff" />
          <stop offset="100%" stopColor="#8fa8ff" />
        </linearGradient>

        <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" result="blur" />
        </filter>

        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#aebfff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="120" r="90" fill="url(#glow)" />

      <circle
        cx="120"
        cy="120"
        r="80"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        filter="url(#glassBlur)"
      />

      <path
        d="M120 60 L160 80 V115 C160 145 140 165 120 180 C100 165 80 145 80 115 V80 Z"
        fill="url(#shieldGradient)"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.5"
      />

      <rect x="115" y="90" width="10" height="35" rx="5" fill="white" opacity="0.9" />
      <circle cx="120" cy="140" r="5" fill="white" opacity="0.9" />

      <circle cx="60" cy="110" r="10" fill="rgba(255,255,255,0.25)" />
      <circle cx="180" cy="100" r="12" fill="rgba(255,255,255,0.25)" />
      <circle cx="170" cy="160" r="8" fill="rgba(255,255,255,0.2)" />

      <ellipse cx="120" cy="200" rx="30" ry="8" fill="#8fa8ff" opacity="0.2" />
    </svg>
  );
}

function BinaryCodeIllustration() {
  return (
    <svg
      width="900"
      height="200"
      viewBox="0 0 900 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[16rem] md:max-w-[18rem]"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="binaryTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="50%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <filter id="binaryShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="2"
            dy="3"
            stdDeviation="3"
            floodColor="#000000"
            floodOpacity="0.25"
          />
        </filter>
      </defs>
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="90"
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="url(#binaryTextGradient)"
        filter="url(#binaryShadow)"
        letterSpacing="6"
      >
        0101010110101
      </text>
    </svg>
  );
}

export default function SecuritySection() {
  return (
    <section className="w-full bg-[#ffffff] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-xl font-eighty text-4xl leading-[1.05] tracking-tight text-gray-800 md:text-5xl">
            Private by default.
            <br />
            Secure by design.
          </h2>
          <p className="max-w-xs text-left text-sm leading-relaxed text-gray-400 md:pt-2 md:text-right">
            100% Data Residency. Agents Only<br></br> Operate Within Permitted Scopes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <article className="flex min-h-[26rem] flex-col items-center justify-between rounded-3xl border border-gray-200/70 bg-[#f7f7f7] p-10 text-center shadow-[0_1px_2px_rgba(15,23,42,0.06)] md:p-12">
            <div className="flex min-h-[8.5rem] w-full items-center justify-center pt-2">
              <BinaryCodeIllustration />
            </div>
            <div className="mx-auto w-full max-w-[18rem] pb-1">
              <h3 className="text-lg font-medium text-gray-800">
                AES-256 + PII Redaction
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                AES-256 encryption + 100% PII redaction at rest and in transit.
              </p>
            </div>
          </article>

          <article className="flex min-h-[26rem] flex-col items-center justify-between rounded-3xl border border-gray-200/70 bg-[#f7f7f7] p-10 text-center shadow-[0_1px_2px_rgba(15,23,42,0.06)] md:p-12">
            <div className="flex min-h-[8.5rem] w-full items-center justify-center pt-1">
              <PermissionShieldIllustration />
            </div>
            <div className="mx-auto w-full max-w-[18rem] pb-1">
              <h3 className="text-lg font-medium text-gray-800">
                Permission-aware agents
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                JWT RBAC enforced across every agent, workflow, and knowledge
                base.
              </p>
            </div>
          </article>

          <article className="flex min-h-[26rem] flex-col items-center justify-between rounded-3xl border border-gray-200/70 bg-[#f7f7f7] p-10 text-center shadow-[0_1px_2px_rgba(15,23,42,0.06)] md:p-12">
            <div className="flex min-h-[8.5rem] w-full items-center justify-center pt-1">
              <Image
                src="/gavel image.png"
                alt=""
                width={240}
                height={240}
                className="h-28 w-28 select-none object-contain md:h-32 md:w-32"
                priority={false}
              />
            </div>
            <div className="mx-auto w-full max-w-[18rem] pb-1">
              <h3 className="text-lg font-medium text-gray-800">
                Full audit trail
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Every agent step logged. Chain-of-thought auditable and
                exportable.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

