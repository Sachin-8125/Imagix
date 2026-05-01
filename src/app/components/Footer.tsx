import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-12 flex flex-col md:flex-row justify-between items-center bg-black border-t border-white/5 text-xs uppercase tracking-tighter">
      <div className="text-zinc-600 mb-4 md:mb-0">
        © 2026 PixelForge AI. Technical Elegance Defined.
      </div>
      <div className="flex space-x-8">
        <Link href="#" className="text-zinc-600 hover:text-lime-400 transition-colors duration-200">Terms</Link>
        <Link href="#" className="text-zinc-600 hover:text-lime-400 transition-colors duration-200">Privacy</Link>
        <Link href="#" className="text-zinc-600 hover:text-lime-400 transition-colors duration-200">API</Link>
        <Link href="#" className="text-zinc-600 hover:text-lime-400 transition-colors duration-200">Status</Link>
      </div>
    </footer>
  );
}