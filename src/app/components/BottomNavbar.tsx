import Link from "next/link";

export default function BottomNavbar() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center h-16 bg-black/90 backdrop-blur-md border-t border-white/5 px-6">
      <Link href="#" className="flex flex-col items-center text-zinc-500">
        <span className="material-symbols-outlined">grid_view</span>
        <span className="text-[10px] mt-1 uppercase">Explore</span>
      </Link>
      <Link href="#" className="flex flex-col items-center text-lime-400">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          auto_awesome
        </span>
        <span className="text-[10px] mt-1 uppercase">Create</span>
      </Link>
      <Link href="#" className="flex flex-col items-center text-zinc-500">
        <span className="material-symbols-outlined">model_training</span>
        <span className="text-[10px] mt-1 uppercase">Library</span>
      </Link>
      <Link href="#" className="flex flex-col items-center text-zinc-500">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] mt-1 uppercase">Profile</span>
      </Link>
    </nav>
  );
}