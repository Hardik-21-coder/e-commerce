// "use client";


// // import { Separator } from "@heroui/react";
// //import { HomeHeader } from "./HomeHeader";
// // import { HomeHero } from "./HomeHero";
// // import { CategoriesSection } from "./CategoriesSection";
// // import { FeaturedSection } from "./FeaturedSection";
// // //import { NewsletterSection } from "./NewsletterSection";
// // import { HomeFooter } from "./HomeFooter";
// import { NewsletterSection } from "./NewsletterSection";
// //import NewsletterSection from "./NewsletterSection";
// //import { NewsletterSection } from "./NewsletterSection";

// export function HomePage() {
//   return (
//     <div className="flex min-h-screen flex-col bg-black text-white">
//       {/* <HomeHeader /> */}

//       <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
//         {/* <HomeHero />
//         <Separator className="my-10 bg-gray-200" />
//         <CategoriesSection />
//         <Separator className="my-10 bg-gray-200" />
//         <FeaturedSection />
//         <Separator className="my-10 bg-gray-200" /> */}
//         <NewsletterSection />
//       </main>

//       {/* <HomeFooter /> */}
//     </div>
//   );
// }


import { NewsletterSection } from "./NewsletterSection";

export function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      
      {/* 🌌 Gradient Glow Background */}
      <div className="absolute inset-0 -z-10 bg-[#020617]" />

      {/* blue glow */}
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-600/30 blur-[120px]" />

      {/* purple glow */}
      <div className="absolute top-40 right-0 h-[350px] w-[350px] rounded-full bg-purple-600/30 blur-[120px]" />

      {/* cyan glow */}
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10">
        
        {/* Glass container */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] p-6 md:p-10">
          <NewsletterSection />
        </div>

      </main>
    </div>
  );
}
