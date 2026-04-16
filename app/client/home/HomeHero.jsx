// "use client";

// import { Button, Card, Chip } from "@heroui/react";
// import { HeroCarousel } from "./HeroCarousel";
// import { HomeStat } from "./HomeStat";


// export function HomeHero() {
//   return (
//     <section className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
//       <div>
//         <Chip variant="secondary" size="sm">
//           Spring sale · Up to 40% off
//         </Chip>
//         <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
//           Everything you need, shipped fast.
//         </h1>
//         <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 font-medium sm:text-lg">
//           A clean, modern store homepage built with Tailwind CSS and HeroUI.
//           Swap the placeholders with real products whenever you’re ready.
//         </p>

//         <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//           <Button
//             variant="primary"
//             size="lg"
//             onPress={() => document.getElementById("featured")?.scrollIntoView()}
//           >
//             Shop featured
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             onPress={() => document.getElementById("categories")?.scrollIntoView()}
//           >
//             Browse categories
//           </Button>
//         </div>

//         <div className="mt-10 grid gap-4 sm:grid-cols-3">
//           <HomeStat label="Free shipping" value="$50+" />
//           <HomeStat label="Returns" value="30 days" />
//           <HomeStat label="Support" value="24/7" />
//         </div>
//       </div>

//       <Card className="overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300" variant="secondary">
//         <Card.Content className="p-0">
//           <HeroCarousel
//             images={[
//               {
//                 src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600",
//                 alt: "Premium fashion collection with modern styling",
//                 priority: true,
//               },
//               {
//                 src: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600",
//                 alt: "Exclusive accessories and lifestyle products",
//               },
//               {
//                 src: "https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=1600",
//                 alt: "Latest workspace and home collection",
//               },
//               {
//                 src: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1600",
//                 alt: "Summer collection and new arrivals",
//               },
//             ]}
//             className="rounded-none border-0"
//           />
//         </Card.Content>
//         <Card.Footer className="flex items-center justify-between bg-gradient-to-r from-white to-gray-50 border-t border-gray-100">
//           <div>
//             <Card.Title className="font-bold text-gray-900">Featured Collection</Card.Title>
//             <Card.Description className="text-gray-600 text-sm">
//               Curated products for your lifestyle
//             </Card.Description>
//           </div>
//           <Button
//             size="sm"
//             variant="outline"
//             className="font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-50"
//             onPress={() => document.getElementById("featured")?.scrollIntoView()}
//           >
//             Explore →
//           </Button>
//         </Card.Footer>
//       </Card>
//     </section>
//   );
// }
