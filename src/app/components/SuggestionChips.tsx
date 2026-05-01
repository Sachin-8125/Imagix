export default function SuggestionChips() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <span className="text-zinc-600 font-label-sm py-2">Quick Styles:</span>
      {["Photorealistic", "Cinematic 4K", "Abstract Oil", "Minimalist Vector"].map((style) => (
        <button
          key={style}
          className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-zinc-400 font-label-sm hover:border-lime-400/50 hover:text-lime-400 transition-colors"
        >
          {style}
        </button>
      ))}
    </div>
  );
}