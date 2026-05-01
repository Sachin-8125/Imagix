import Link from "next/link";

export default function TopNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-none tracking-tight">
      <div className="text-xl font-bold text-white uppercase tracking-widest">
        Imagix
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Gallery</Link>
        <Link href="#" className="text-lime-400 border-b-2 border-lime-400 pb-1 hover:text-white transition-colors duration-200">Create</Link>
        <Link href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Community</Link>
        <Link href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">Pricing</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-zinc-400 text-label-md hover:text-white transition-colors duration-200">
          Sign In
        </button>
        <button className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full font-label-md hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </nav>
  );
}