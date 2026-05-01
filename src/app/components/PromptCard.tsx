export default function PromptCard() {
  return (
    <div className="w-full max-w-3xl bg-surface-container/30 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-2xl overflow-hidden">
      <div className="space-y-6">
        <div className="relative">
          <label className="font-label-sm text-on-surface-variant uppercase tracking-widest mb-2 block">
            Visual Prompt
          </label>
          <textarea
            className="w-full bg-transparent border-b border-outline-variant focus:border-primary-fixed focus:ring-0 text-white font-body-md py-4 min-h-[160px] resize-none transition-colors duration-300 placeholder:text-zinc-700 outline-none"
            placeholder="Describe your masterpiece... e.g., A sprawling cyberpunk metropolis in the rain, shot on 35mm film with neon reflections and heavy atmosphere."
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-on-surface hover:bg-white/10 transition-colors group">
              <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-white">tune</span>
              <span className="font-label-md">Advanced Settings</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-sm">image</span>
            </button>
          </div>
          <button className="bg-primary-fixed text-on-primary-fixed px-10 py-3 rounded-full font-label-md flex items-center space-x-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(202,242,69,0.2)]">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_fix_high
            </span>
            <span>Generate</span>
          </button>
        </div>

        <div className="hidden border-t border-white/5 pt-6 grid-cols-2 gap-6">
          <div>
            <label className="font-label-sm text-on-surface-variant uppercase tracking-widest mb-2 block">
              Aspect Ratio
            </label>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-white/10 text-white rounded text-xs">16:9</button>
              <button className="px-3 py-1 bg-white/5 text-zinc-500 rounded text-xs">4:3</button>
              <button className="px-3 py-1 bg-white/5 text-zinc-500 rounded text-xs">1:1</button>
            </div>
          </div>
          <div>
            <label className="font-label-sm text-on-surface-variant uppercase tracking-widest mb-2 block">
              Model Version
            </label>
            <select className="w-full bg-white/5 border-none rounded text-white text-xs py-2 px-3 outline-none">
              <option>PixelForge V2.4 Ultra</option>
              <option>Forge Turbo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}