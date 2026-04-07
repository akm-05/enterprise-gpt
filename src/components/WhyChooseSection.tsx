"use client";

import { Search, Shield } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#ffffff] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-500">
            Less Searching. Clearer Thinking.
          </span>

          <h2 className="mt-4 font-eighty text-4xl leading-[1.08] tracking-tight text-[#2f3747] md:text-6xl">
            Why Enterprises Choose
            <br />
            Enterprise GPT
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
            Multi-Agent AI. Semantic RAG. 113+ Integrations. Zero
            Hallucinations. Built For The Enterprise Era.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="min-h-[23rem] rounded-[1.85rem] border border-gray-200/80 bg-[#f3f3f3] p-7 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
            <div className="inline-flex w-full items-center gap-3 rounded-[1.15rem] border border-gray-200/80 bg-[#fbfbfb] px-5 py-3 text-gray-400 md:max-w-[24rem]">
              <Search className="h-6 w-6 shrink-0 text-gray-500/70" aria-hidden />
              <span className="truncate text-[19.5px]">What you Looking for ?</span>
            </div>
            <h3 className="mt-7 max-w-[19rem] font-eighty text-[2.35rem] leading-[1.02] text-[#2f3747] md:max-w-[21rem]">
              Semantic RAG: <br></br>Find Anything Instantly 
            </h3>
            <p className="mt-3 max-w-[20rem] text-[0.95rem] leading-[1.4] text-gray-500">
              Qdrant + LlamaIndex Semantic RAG. Understands Context. Returns
              Cited Answers From Your Documents Instantly.
            </p>
          </article>

          <article className="min-h-[19.5rem] rounded-2xl border border-gray-200/80 bg-[#f3f3f3] p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <Shield className="mb-4 h-14 w-14 text-blue-300" aria-hidden />
            <h3 className="mt-4 font-eighty text-[2.1rem] leading-[1.1] text-[#2f3747]">
              Prompt Defense + Zero-Trust. Fast. Unhackable.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              15+ prompt injection filters + hallucination manager. Every
              response grounded and injection-proof.
            </p>
          </article>

          <article className="min-h-[19.5rem] rounded-2xl border border-gray-200/80 bg-[#f3f3f3] p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="h-16 w-24 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
            <h3 className="mt-4 font-eighty text-[2.1rem] leading-[1.1] text-[#2f3747]">
              WorkFlow™: Auto-Orchestrated. Zero Manual Setup.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Type your goal. Agents architect and deploy the entire workflow
              — Finance, Legal, HR, Sales & IT.
            </p>
          </article>

          <article className="min-h-[23rem] rounded-[1.85rem] border border-gray-200/80 bg-[#f3f3f3] p-7 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
            <div className="w-full max-w-[24rem] rounded-[1.05rem] border border-gray-200/80 bg-white px-3 py-3 shadow-[0_1px_1px_rgba(15,23,42,0.03)]">
              <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-200/80 bg-[#fcfcfc] px-3 py-2.5 text-[10px] text-gray-400">
                <span className="truncate">
                  Summarize Q3 revenue anomalies from Salesforce &amp; Jira...
                </span>
                <span className="shrink-0 text-[10px] text-gray-400">
                  Ctrl + Enter/Enter
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                <div className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-gray-200/80 bg-[#fafafa] px-1.5 py-0.5 text-[10px]">
                    +
                  </span>
                  <span className="rounded-full border border-gray-200/80 bg-[#fafafa] px-2 py-0.5">
                    Semantic RAG
                  </span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="text-[10px]">Enterprise GPT 4.1</span>
                  <span className="text-xs">▾</span>
                  <span className="text-xs">▸</span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-gray-500">
                {["Create", "Enterprise Search", "Get Weather", "List Folders"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-md border border-gray-200/80 bg-[#fafafa] px-2 py-1"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
            <h3 className="mt-8 max-w-[20rem] font-eighty text-[2.5rem] leading-[1.03] text-[#2f3747]">
              SQL AI Agent + Document
              <br />
              Intelligence
            </h3>
            <p className="mt-3 max-w-[21rem] text-[0.95rem] leading-[1.4] text-gray-500">
              SQL AI Agent: Plain English → Executable DB Query. Works With
              PostgreSQL, MySQL, Snowflake, BigQuery.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

