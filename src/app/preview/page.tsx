import Image from "next/image";

export default function PreviewPage() {
  return (
    <div className="flex-1 p-container-padding flex flex-col md:flex-row gap-gutter">
      <section className="flex-1 flex flex-col gap-stack-md">
        <div className="relative group glass-panel rounded-xl overflow-hidden aspect-square md:aspect-auto md:h-[calc(100vh-180px)] flex items-center justify-center luminous-glow">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGkXf-Zm6ALHhweH89IxgCe4sLEQJFiZt771EkSS5_dfBmZNLE1zPL7Az9T-IJvSiEyiSUAz-m5418gnNFanvmAJ6s6_UXPxxkMG2-I6ARABigION-6oWeAoD5dFlRbURxxSO0uakfZsrIlaiRY9ZgJVMlT6SgihtMVqDZTEtgYDNiMAFJiDAxf-Cj4lZDiEGKRuglMtTGpiSKL-jq5l_Zo_pqewBuaNzCc8gBSuV-SwTQiwSp7pid0-DEkpwQEiG1fERoNmQ3Zfs"
            alt="PixelForge Generated Art"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-container/30">
                <span className="material-symbols-outlined text-primary-fixed">zoom_in</span>
              </div>
              <div>
                <p className="font-label-md text-white">4K Resolution Exported</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Technical Precision Active</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:hidden gap-3 overflow-x-auto pb-2">
          <button className="bg-[#D6FE51] text-black px-6 py-3 rounded-lg font-label-md flex items-center gap-2 shrink-0">
            <span className="material-symbols-outlined">download</span> Download
          </button>
          <button className="glass-panel text-white px-6 py-3 rounded-lg font-label-md flex items-center gap-2 border border-white/10 shrink-0">
            <span className="material-symbols-outlined">refresh</span> Regenerate
          </button>
        </div>
      </section>

      <aside className="w-full md:w-[420px] flex flex-col gap-stack-md">
        <div className="glass-panel rounded-xl p-6 flex flex-col gap-6">
          <div className="space-y-2">
            <span className="text-primary-fixed font-label-sm uppercase tracking-widest">Image Details</span>
            <h1 className="font-h1 text-white leading-tight">Project Aurora_01</h1>
          </div>

          <div className="space-y-3">
            <label className="font-label-sm text-zinc-500 uppercase tracking-tighter">Generated Prompt</label>
            <div className="bg-surface-container-highest/30 rounded-lg p-4 border border-white/5">
              <p className="font-body-md text-on-surface leading-relaxed italic">
                &quot;Hyper-detailed architectural fusion, bioluminescent glass structures, technical elegance, neon lime accents, volumetric lighting, 8k octane render, cinematic composition.&quot;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-label-sm text-zinc-500 uppercase tracking-tighter">Model</label>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary-fixed text-lg">neurology</span>
                <span className="font-label-md">Forge-v2.1 Alpha</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-zinc-500 uppercase tracking-tighter">Seed</label>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-zinc-500 text-lg">tag</span>
                <span className="font-label-md">829310542</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-zinc-500 uppercase tracking-tighter">Dimensions</label>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-zinc-500 text-lg">aspect_ratio</span>
                <span className="font-label-md">1024 x 1024 px</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-zinc-500 uppercase tracking-tighter">Guidance</label>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-zinc-500 text-lg">tune</span>
                <span className="font-label-md">7.5 Strong</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
            <button className="w-full bg-[#D6FE51] text-black py-4 rounded-xl font-label-md flex items-center justify-center gap-3 hover:opacity-90 transition-all">
              <span className="material-symbols-outlined">download</span> Download High-Res
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="glass-panel text-white py-3 rounded-xl font-label-md border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">edit</span> Edit Prompt
              </button>
              <button className="glass-panel text-white py-3 rounded-xl font-label-md border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">refresh</span> Regenerate
              </button>
            </div>
            <button className="w-full text-zinc-400 py-3 rounded-xl font-label-md flex items-center justify-center gap-2 hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span> Save to Gallery
            </button>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 border-l-2 border-primary-fixed">
          <div className="flex gap-4">
            <div className="h-10 w-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-fixed">auto_awesome</span>
            </div>
            <div className="space-y-1">
              <p className="font-label-md text-white">AI Suggestion</p>
              <p className="text-sm text-zinc-500">Try adding &quot;rainy atmosphere&quot; or &quot;morning mist&quot; to enhance the environmental depth of this scene.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}