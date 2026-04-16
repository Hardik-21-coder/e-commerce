// "use client";

// import Image from "next/image";
// import { Button, Chip } from "@heroui/react";
// import { useEffect, useMemo, useState } from "react";

// export function HeroCarousel({ images, className }) {
//   const slides = useMemo(() => {
//     return (images ?? []).filter(Boolean);
//   }, [images]);

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (slides.length <= 1) return;

//     const id = setInterval(() => {
//       setActiveIndex((i) => (i + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(id);
//   }, [slides.length]);

//   if (slides.length === 0) {
//     return (
//       <div
//         className={
//           className ??
//           "aspect-[4/3] w-full rounded-2xl border-2 border-gray-200 bg-linear-to-br from-gray-50 to-gray-100"
//         }
//       />
//     );
//   }

//   const current = slides[Math.min(activeIndex, slides.length - 1)];

//   return (
//     <div
//       className={
//         className ??
//         "relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-900 shadow-xl"
//       }
//     >
//       <div className="relative aspect-[4/3] w-full">
//         <Image
//           src={current.src}
//           alt={current.alt}
//           fill
//           sizes="(min-width: 1024px) 520px, 100vw"
//           className="object-cover transition-transform duration-500 ease-out"
//           priority={current.priority === true}
//         />
        
//         {/* Dark linear overlay for better text readability */}
//         <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
//       </div>

//       {/* Featured Chip */}
//       <div className="absolute left-4 top-4 z-10">
//         <Chip size="sm" variant="secondary" className="bg-linear-to-r from-blue-500 to-blue-600 text-white font-bold shadow-lg border border-blue-400">
//           ✨ Featured
//         </Chip>
//       </div>

//       {/* Slide Counter */}
//       <div className="absolute right-4 top-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border-2 border-white/30">
//         <span className="text-white text-xs font-bold tracking-wide">{activeIndex + 1} / {slides.length}</span>
//       </div>

//       {slides.length > 1 ? (
//         <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between gap-4">
//           {/* Dot Indicators */}
//           <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 py-3 rounded-full border-2 border-white/30">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 type="button"
//                 aria-label={`Go to slide ${i + 1}`}
//                 onClick={() => setActiveIndex(i)}
//                 className={
//                   "h-3 w-3 rounded-full border-2 transition-all duration-300 " +
//                   (i === activeIndex
//                     ? "bg-white border-white scale-125 shadow-lg"
//                     : "bg-white/50 border-white/50 hover:bg-white/80 hover:border-white")
//                 }
//               />
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex items-center gap-3">
//             <Button
//               size="sm"
//               variant="bordered"
//               className="font-bold border-2 border-white/70 bg-black/60 text-white hover:bg-black/80 hover:border-white backdrop-blur-md transition-all duration-300 shadow-lg"
//               onPress={() =>
//                 setActiveIndex((i) =>
//                   i === 0 ? slides.length - 1 : (i - 1) % slides.length
//                 )
//               }
//             >
//               ← Prev
//             </Button>
//             <Button
//               size="sm"
//               variant="bordered"
//               className="font-bold border-2 border-white/70 bg-black/60 text-white hover:bg-black/80 hover:border-white backdrop-blur-md transition-all duration-300 shadow-lg"
//               onPress={() => setActiveIndex((i) => (i + 1) % slides.length)}
//             >
//               Next →
//             </Button>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }
