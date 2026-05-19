import Image from "next/image";

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpREJEd1oBdrpFmaVKr1V1_hE-EkU0RdIhgXnqATwZxQCGYbkz4UfS9fLYQnvzbMB3cx6s-HTxeJLeQer3kCU8thCijCsAfAa7dv9C3txat6u8eAkgl360CR8kSQy2rG-loxaLDzhfqmdjPgreOPyOe8ULU6lFEBOlfwMEV1qpkibsG3pLNUIfYWv6BJKBXLS2M1b8VG0LAflFGCmwjIOhCFPUzVmx5Gt7X3GCihPWaiEjf84Ej4RYrzqlLsrTdxJMrNgYUwrEnTs",
      aspect: "aspect-[3/4]",
      prompt: '"Hyper-minimalist obsidian flows with lime neon accents, 8k cinematic resolution."',
      time: "2 hours ago",
      likes: 12,
      liked: false,
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMDIlBQzw8S8fRarqBmYcRbaJFFlTbTOn-lZr9ZfmggZN2XzoTFULjfdgryWblNBDG21w6CEjc_ARR_FoK1UXZtrADqhhGFfHZhm2TYBqleFpj-eDz54ZrBB_3MQGs7hRyF__eFM_sfMXyn39fslMfLY_NyntXltrNCPXBK2TToKzVcT8MDMDfRYaMDQXDepsvxYYcGKH3OfQMZ03mIPbaBwr4LB8qnNwRhvGoQE_tNUmGx80fg6oF5lSDx0Ep682wq2CY3Uwl-WA",
      aspect: "aspect-square",
      prompt: '"Futuristic server room, symmetrical architecture, deep shadows, lime-green accent lighting."',
      time: "5 hours ago",
      likes: 45,
      liked: false,
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXS3yQ6n5lzFZxR6FY3elmUF8sSs4f49Va1aN_iklCoaIXCr41dfE0mjLrMDxw0WxDSk8h6qwMTJA7gO2svGHIohjPUtvc5aCqDndqYMisj9WoC1tpb6YYEG1JKRgZTuNURkvRf9iOzBcRA4f4s_Q06Iu8tFMM-Q54EJIpQ3t-ttC0pzyet-SVFO1saOFhEk549Sg85YCHAnq6EUe-ybyMN4rxz-zmLWDQrXipqQaAMjhjtbO6lEwdbljstBDnM_twVw_pOBNdPUs",
      aspect: "aspect-[4/3]",
      prompt: '"Generative organic glass structures, internal bioluminescence, microscopic macro photography."',
      time: "Yesterday",
      likes: 28,
      liked: false,
    },
    {
      id: 6,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzdeDe--0QkGebh4BBppmHX1ynuM6wD5sUWPz_c8IenCx8Adc_ymNjMQ25RUqZH_AJbHo2WImBeww658sJFbe1ezT7dFNAWo8VHscH-FlqYvrbuGlP0VdSqjk4J4fFpElfhQ7FeaoYXWLH_T5buWEFao_FQY0UIReYJzFrqVLst5MSmUpwWd7lQsTA427yn5tlB4Uis6tGbX-riw_mBZ_FuGD35qoksV_v8nKL1Iii9s_D9lEe9ibkzmB7fwYKCqr3XgcwMWGWzbw",
      aspect: "aspect-[9/16]",
      prompt: '"Cybernetic portrait, particulate disintegration, lime neon circuitry, dramatic high-contrast lighting."',
      time: "2 days ago",
      likes: 156,
      liked: false,
    },
    {
      id: 7,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAYfr24ukBT0pQCOuHhb9ZBV_BrpEOJZZdXq0kiMZ2PvsDVBkrwTVhef3BVx6mDEsDmlGzUmMtvPoQaAkyMeq6wuBTe7VzWKLXx6_qDEbrQlQ11sRLGE0oERvHrESFJ3ub5GmBy8HwG2C6iGQKzsucHB_7S0V1Y5sItmJAPxBzycOwk1d_xsQkKxq9nKDiGg8ZkbUX9816X730P-jKK8GacFL5oDOv4TwZdKyxmaRUYblU14jxK3T7CWRB1RHBNQMX3wjIIe7AGyU",
      aspect: "aspect-square",
      prompt: '"Crystal peaks, reflective dark lake, lime-green nebula, geometric minimalism."',
      time: "3 days ago",
      likes: 89,
      liked: true,
    },
    {
      id: 8,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAbKkHO69FDhr2dewz_z-lFYxhofq_fAsV2y6LuKKISVMZpdANSPtzQFHSGxcrwWHv_xdPlWbXGvO9nh4JjBF0YRZkVAXo8mdkQg2DrH4R-aLkCUn4iihih8d_-ED6ORgYmPOXJ9CSPg7WBQqmEoN1cRfRjjNwdpcgkmzsRDZcNZbDfG8w-DxSERasZzByerA1mohctD5kcgrPOLNSnZmJaGsgrKdBsaHgKRZZtu5SmAKt4vmwSwzC2Ab685NPwqp5Hn7bA2ZQXYs",
      aspect: "aspect-[4/3]",
      prompt: '"Neural network map, interconnected glowing nodes, lime-green precision, dark tech aesthetic."',
      time: "4 days ago",
      likes: 34,
      liked: false,
    },
  ];

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-8 py-12">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-h1 text-h1 text-white mb-2">Gallery</h1>
          <p className="text-on-surface-variant font-body-md">Refined visions from your creative cloud.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-lime-400 transition-colors">
              search
            </span>
            <input 
              type="text" 
              placeholder="Search prompts..." 
              className="bg-surface-container border-none focus:ring-1 focus:ring-lime-400 text-white rounded-lg pl-10 pr-4 py-2.5 w-full md:w-64 font-label-md transition-all outline-none" 
            />
          </div>
          
          <div className="flex bg-surface-container rounded-lg p-1">
            <button className="px-4 py-1.5 rounded-md text-on-primary-container bg-primary-container font-label-sm transition-all">All</button>
            <button className="px-4 py-1.5 rounded-md text-zinc-400 hover:text-white font-label-sm transition-all">Today</button>
            <button className="px-4 py-1.5 rounded-md text-zinc-400 hover:text-white font-label-sm transition-all">Week</button>
            <button className="px-4 py-1.5 rounded-md text-zinc-400 hover:text-white font-label-sm transition-all">Favorites</button>
          </div>
        </div>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="break-inside-avoid group relative bg-white/[0.02] backdrop-blur-[12px] border border-white/[0.05] rounded-xl overflow-hidden cursor-zoom-in">
            <div className={`${item.aspect} bg-surface-container overflow-hidden relative`}>
              <Image 
                src={item.src} 
                alt="Gallery Item" 
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <p className="text-white font-body-md line-clamp-2 mb-2 italic">{item.prompt}</p>
              <div className="flex justify-between items-center text-xs text-zinc-400 uppercase tracking-tighter">
                <span>{item.time}</span>
                <span className="flex items-center gap-1">
                  <span 
                    className="material-symbols-outlined text-sm" 
                    style={item.liked ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    favorite
                  </span> 
                  {item.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}