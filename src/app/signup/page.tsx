import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FileText, Image as ImageIcon, LayoutGrid, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Access | Enterprise-GPT",
  description: "Sign in to Enterprise-GPT with Google or Outlook.",
};

function GoogleIcon() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5 shrink-0 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.5 21H4V3h3.5v18zm2.5-9.5V3H21v8.5h-11zm0 2.5H21V21H10v-7z" />
    </svg>
  );
}

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 lg:flex-row">
      {/* Left: form */}
      <div className="flex w-full flex-col px-6 py-10 sm:px-10 lg:w-1/2 lg:px-14 lg:py-14">
        <Link
          href="/"
          className="font-eighty text-2xl tracking-tight text-[#394050] transition-opacity hover:opacity-80"
        >
          Enterprise-GPT
        </Link>

        <div className="flex flex-1 flex-col justify-center pb-10 pt-12 lg:py-0">
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <h1 className="font-eighty text-4xl leading-tight tracking-tight text-[#394050] md:text-5xl">
              Access Enterprise-GPT
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Sign in with your work account to continue.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f0f2f5] px-5 py-4 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-[#e6e9ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/50"
              >
                <GoogleIcon />
                Sign In using Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#6b7c99] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5f6f8a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <OutlookIcon />
                Sign In using Outlook
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: hero-matching blur + illustration */}
      <div className="relative min-h-[240px] w-full lg:min-h-screen lg:w-1/2">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 scale-105">
            <div className="relative h-full min-h-[280px] w-full lg:min-h-full">
              <Image
                src="/bg1.png"
                alt=""
                fill
                className="object-cover object-center"
                style={{ filter: "blur(18px)" }}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-black/40"
          aria-hidden
        />

        <div className="relative z-10 flex h-full min-h-[280px] items-center justify-center p-8 lg:min-h-screen">
          <div className="relative w-full max-w-md">
            {/* Floating icons */}
            <div className="absolute -left-2 top-4 z-20 rounded-xl bg-white/90 p-2.5 shadow-md backdrop-blur-sm sm:-left-4">
              <ImageIcon className="h-6 w-6 text-red-500" aria-hidden />
            </div>
            <div className="absolute -right-1 top-1/3 z-20 rounded-xl bg-white/90 p-2.5 shadow-md backdrop-blur-sm sm:-right-3">
              <Video className="h-6 w-6 text-red-500" aria-hidden />
            </div>
            <div className="absolute -bottom-2 left-6 z-20 rounded-xl bg-white/90 p-2.5 shadow-md backdrop-blur-sm sm:bottom-0">
              <LayoutGrid className="h-6 w-6 text-emerald-600" aria-hidden />
            </div>

            {/* Mock app card */}
            <div className="relative z-10 rounded-3xl bg-white/95 p-6 shadow-xl ring-1 ring-white/40 backdrop-blur-sm sm:p-8">
              <div className="flex gap-4">
                <div className="hidden w-16 shrink-0 flex-col gap-2 rounded-2xl bg-gray-100 p-2 sm:flex">
                  <div className="h-8 rounded-lg bg-gray-200/80" />
                  <div className="h-8 rounded-lg bg-gray-200/60" />
                  <div className="h-8 rounded-lg bg-gray-200/40" />
                </div>
                <div className="min-w-0 flex-1 space-y-4">
                  <div className="h-3 w-3/4 rounded-full bg-gray-200" />
                  <div className="h-3 w-1/2 rounded-full bg-gray-100" />
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex aspect-square items-center justify-center rounded-2xl bg-gray-100">
                      <FileText className="h-8 w-8 text-blue-500/80" aria-hidden />
                    </div>
                    <div className="aspect-square rounded-2xl bg-gray-100" />
                    <div className="aspect-square rounded-2xl bg-gray-100" />
                    <div className="aspect-square rounded-2xl bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
