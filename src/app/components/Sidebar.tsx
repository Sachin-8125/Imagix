import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full pt-20 pb-8 flex flex-col w-64 bg-black/95 border-r border-white/5 shadow-none text-sm hidden lg:flex z-40">
      <div className="px-6 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-surface-container-highest border border-white/10">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu-jqOxKeV4cKC7qY1o1j_qrm-y6JXn6jL3x9m4tUv2L3ftBTq7mg-lxVc8SFkZ6QnxTezwbNcoRjZUc_sG9Xysb0oIeTM44DLm4n8Whp6fgMIRgSieRZ9wZfS954TH4_IYSLKHnz2c7kKd-9G23Dyy96gABzIJobDmT70htMhVjGmCnHEhdUdz7MrpBm4GchVNTQpZcJsEzeaLvZg5W8WTnymbsStD2h2CAoIgsB-q98dEqwjglkYriEzUPeGO-HNHJRgvu-mxzk"
            />
          </div>
          <div>
            <p className="text-lg font-black text-white">Imagix</p>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Creative Cloud</p>
          </div>
        </div>
        <button className="w-full py-2 bg-white/5 border border-white/10 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300">
          <span className="material-symbols-outlined text-sm">add</span>
          <span className="font-label-sm">New Project</span>
        </button>
      </div>
      <nav className="flex-grow space-y-1 px-3">
        <Link href="#" className="flex items-center px-4 py-3 rounded-lg bg-white/5 text-lime-400 border-r-2 border-lime-400 transition-all duration-300">
          <span className="material-symbols-outlined mr-3">auto_awesome</span>
          <span>Workspace</span>
        </Link>
        <Link href="#" className="flex items-center px-4 py-3 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-all duration-300">
          <span className="material-symbols-outlined mr-3">grid_view</span>
          <span>Collections</span>
        </Link>
        <Link href="#" className="flex items-center px-4 py-3 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-all duration-300">
          <span className="material-symbols-outlined mr-3">model_training</span>
          <span>Training</span>
        </Link>
        <Link href="#" className="flex items-center px-4 py-3 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-all duration-300">
          <span className="material-symbols-outlined mr-3">analytics</span>
          <span>Analytics</span>
        </Link>
      </nav>
      <div className="mt-auto px-3 space-y-1">
        <Link href="#" className="flex items-center px-4 py-3 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-all duration-300">
          <span className="material-symbols-outlined mr-3">description</span>
          <span>Docs</span>
        </Link>
        <Link href="#" className="flex items-center px-4 py-3 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-all duration-300">
          <span className="material-symbols-outlined mr-3">settings</span>
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}