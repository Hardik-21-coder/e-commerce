// "use client";

// import Image from "next/image";
// import { Button, Card } from "@heroui/react";

// const CATEGORIES = [
//   {
//     title: "New arrivals",
//     description: "Fresh drops for every day.",
//     imageSrc: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     imageAlt: "New arrivals collection",
//   },
//   {
//     title: "Electronics",
//     description: "Work, play, and everything in between.",
//     imageSrc: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     imageAlt: "Electronics collection",
//   },
//   {
//     title: "Home & Living",
//     description: "Small upgrades, big comfort.",
//     imageSrc: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     imageAlt: "Home and living products",
//   },
//   {
//     title: "Fashion",
//     description: "Essentials that always fit.",
//     imageSrc: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     imageAlt: "Fashion collection",
//   },
// ];

// export function CategoriesSection() {
//   return (
//     <section id="categories" className="py-16 space-y-10">
//       <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//         <div className="space-y-3">
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900">
//             Shop by category
//           </h2>
//           <p className="text-lg text-gray-600 max-w-md">
//             Quick links to your most important collections.
//           </p>
//         </div>
//         <Button
//           size="sm"
//           variant="outline"
//           className="font-semibold border-2 transition-all duration-300 hover:scale-105 hover:bg-gray-50"
//           onPress={() => document.getElementById("featured")?.scrollIntoView()}
//         >
//           See featured
//         </Button>
//       </div>

//       <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {CATEGORIES.map((category) => (
//           <Card key={category.title} className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" variant="default">
//             <Card.Header>
//               <Card.Title className="text-lg font-semibold text-gray-900">{category.title}</Card.Title>
//               <Card.Description className="mt-1 text-gray-600 font-medium">
//                 {category.description}
//               </Card.Description>
//             </Card.Header>
//             <Card.Content>
//               <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-gray-50">
//                 {category.imageSrc ? (
//                   <Image
//                     src={category.imageSrc}
//                     alt={category.imageAlt}
//                     fill
//                     sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
//                     className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
//                   />
//                 ) : null}
//               </div>
//             </Card.Content>
//             <Card.Footer>
//               <Button size="sm" variant="primary" fullWidth>
//                 Browse
//               </Button>
//             </Card.Footer>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }
