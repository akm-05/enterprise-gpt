import type { ReactNode } from "react";
import { Music, Search, Sparkles } from "lucide-react";

function CardShell({
  children,
  title,
  description,
  className,
}: {
  children: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-gray-200/90 bg-[#f7f7f7] p-6 shadow-sm transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-8 ${className ?? ""}`}
    >
      <div className="mb-6 min-h-[11rem] flex-1 md:min-h-[12rem]">{children}</div>
      <h3 className="font-eighty text-xl leading-snug text-[#394050] md:text-[1.35rem]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-500 md:text-[15px]">
        {description}
      </p>
    </article>
  );
}

function FakeWindowVisual() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200/90 bg-white p-3 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset]">
      <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-gray-400">
        <span>• Projects</span>
        <span>Attachments</span>
        <span>Duplicate</span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 py-6">
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-4 w-4 rounded-full border border-gray-200 bg-gray-100"
            />
          ))}
        </div>
        <span className="text-sm font-semibold tracking-tight text-gray-800">
          Workspace
        </span>
      </div>
    </div>
  );
}

function SplitMediaVisual() {
  return (
    <div className="flex h-full min-h-[10rem] gap-3 rounded-xl border border-gray-200/80 bg-white p-3 shadow-sm">
      <div className="relative min-h-[7rem] flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 via-slate-600 to-amber-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,180,100,0.35),transparent_55%)]" />
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1 rounded bg-black/30 px-2 py-1 backdrop-blur-sm">
          <div className="h-1 flex-1 rounded-full bg-white/40" />
          <div className="h-3 w-3 rounded-full border border-white/50 bg-white/20" />
        </div>
      </div>
      <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-lg border border-sky-100 bg-sky-50/80">
        <Music className="h-8 w-8 text-sky-500" aria-hidden />
      </div>
    </div>
  );
}

function StackedLayersVisual() {
  return (
    <div className="relative flex h-full min-h-[10rem] items-center justify-center py-2">
      <div
        className="absolute h-24 w-[70%] rounded-xl border border-gray-200/80 bg-white shadow-md"
        style={{ transform: "rotate(-4deg) translateY(8px)" }}
      />
      <div
        className="absolute h-24 w-[76%] rounded-xl border border-gray-200/80 bg-white/95 shadow-md"
        style={{ transform: "rotate(2deg)" }}
      />
      <div className="relative z-10 flex h-28 w-[82%] items-center justify-between rounded-xl border border-gray-200 bg-white px-4 shadow-lg">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-sky-500" aria-hidden />
          <span className="text-xs font-semibold text-gray-700">Enterprise GPT</span>
        </div>
      </div>
    </div>
  );
}

function SearchTagsVisual() {
  return (
    <div className="relative flex h-full min-h-[10rem] flex-col rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm">
      <Sparkles
        className="absolute right-3 top-3 h-6 w-6 text-sky-500"
        aria-hidden
      />
      <div className="mt-6 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2.5">
        <Search className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
        <span className="truncate text-xs text-gray-500">
          The slide where pricing is explained
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Marketing", "Sales", "Product Team"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Card grid + visuals — loaded on demand when the section scrolls into view. */
export default function MCPSectionGrid() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
      <CardShell
        className="md:min-h-[24rem] lg:col-span-7"
        title="Workspace"
        description="One auditable source of truth. No silos. Every agent output, tool call, and document indexed in one place."
      >
        <FakeWindowVisual />
      </CardShell>

      <CardShell
        className="md:min-h-[24rem] lg:col-span-5"
        title="Search across PDFs, audio, video & databases"
        description="Semantic RAG searches across all content types — documents, transcripts, DB records, and media."
      >
        <SplitMediaVisual />
      </CardShell>

      <CardShell
        className="md:min-h-[24rem] lg:col-span-5"
        title="Your enterprise data as agent intelligence"
        description="Ground agents in your proprietary data. Responses are cited, verified, and context-aware."
      >
        <StackedLayersVisual />
      </CardShell>

      <CardShell
        className="md:min-h-[24rem] lg:col-span-7"
        title="Multi-agent AI inside your enterprise"
        description="THINK → ACT → OBSERVE agents operate across your systems with real-time feedback loops."
      >
        <SearchTagsVisual />
      </CardShell>
    </div>
  );
}
