const ITEMS = [
  "AI Tutor Memory",
  "RAG & Embeddings",
  "LLM Orchestration",
  "Token Budgets",
  "Redis + BullMQ",
  "Prompt Caching",
  "FastAPI",
  "Node.js",
  "GCP",
  "Next.js",
  "Gemini & OpenAI",
  "Learning Systems",
];

export const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-6">
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap text-2xl sm:text-3xl font-medium tracking-tight text-white/70">
              {i % 3 === 1 ? <span className="font-serif-italic text-gradient text-3xl sm:text-4xl">{item}</span> : item}
              <span className="text-violet-400/60 text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
