// "use client";

// import { Button, Card, Input } from "@heroui/react";

// export function NewsletterSection() {
//   return (
//     <section id="newsletter" className="py-16">
//       <Card className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-2 border-gray-200 shadow-xl" variant="secondary">
//         <Card.Header className="border-b border-gray-200">
//           <div className="space-y-3">
//             <Card.Title className="text-3xl font-bold text-gray-900">Get deals in your inbox</Card.Title>
//             <Card.Description className="text-gray-600 text-base">
//               Weekly highlights, no spam. Subscribe to stay updated.
//             </Card.Description>
//           </div>
//         </Card.Header>
//         <Card.Content>
//           <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
//             <Input
//               aria-label="Email address"
//               placeholder="you@example.com"
//               type="email"
//               variant="primary"
//               className="transition-all duration-300 font-medium"
//             />
//             <Button variant="primary" className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="lg">
//               Subscribe
//             </Button>
//           </div>
//           <p className="mt-4 text-sm text-gray-500 leading-relaxed">
//             By subscribing, you agree to receive emails from us. You can unsubscribe at any time.
//           </p>
//         </Card.Content>
//       </Card>
//     </section>
//   );
// }



// "use client";

// import { Button, Card, Input, TextArea } from "@heroui/react";

// export function NewsletterSection() {
//   return (
//     <section id="newsletter" className="py-16">
//       <div className="grid lg:grid-cols-2 gap-10 items-stretch">

//         {/* LEFT SIDE */}
//         <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" variant="secondary">
//           <Card.Header className="border-b border-white/10">
//             <div className="space-y-3">
//               <Card.Title className="text-3xl font-bold text-white">
//                 Get deals in your inbox
//               </Card.Title>
//               <Card.Description className="text-gray-300 text-base">
//                 Weekly highlights, no spam. Subscribe & send feedback.
//               </Card.Description>
//             </div>
//           </Card.Header>

//           <Card.Content className="space-y-10">

//             {/* Newsletter */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-white">Newsletter</h3>

//               <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
//                 <Input
//                   placeholder="Enter your email"
//                   type="email"
//                   variant="bordered"
//                   className="bg-white/5"
//                 />
//                 <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition">
//                   Subscribe
//                 </Button>
//               </div>
//             </div>

//             {/* Feedback Form */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-white">Send Feedback</h3>

//               <Input placeholder="Your name" variant="bordered" className="bg-white/5"/>
//               <Input placeholder="Your email" type="email" variant="bordered" className="bg-white/5"/>
//               <TextArea placeholder="Write your feedback..." variant="bordered" className="bg-white/5"/>

//               <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition">
//                 Submit Feedback
//               </Button>
//             </div>

//           </Card.Content>
//         </Card>

//         {/* RIGHT SIDE MAP */}
//         <div className="rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">
//           <iframe
//             src="https://www.google.com/maps?q=Ahmedabad&output=embed"
//             className="w-full h-full min-h-[500px] border-0"
//             loading="lazy"
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { Button, Card, Input, TextArea } from "@heroui/react";

// export function NewsletterSection() {
//   return (
//     <section id="newsletter" className="py-16">
//       <div className="grid lg:grid-cols-2 gap-10 items-stretch">

//         {/* LEFT SIDE CARD */}
//         <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          
//           {/* HEADER */}
//           <Card.Header className="border-b border-white/10">
//             <div className="space-y-3">
//               <Card.Title className="text-3xl font-bold text-white">
//                 FeedBack From
//               </Card.Title>
//             </div>
//           </Card.Header>

//           {/* CONTENT */}
//           <Card.Content className="space-y-12">

           
//             {/* DIVIDER */}
//             <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

//             {/* FEEDBACK FORM */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white">Send Feedback</h3>

//               <div className="group relative">
//                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur transition group-focus-within:opacity-40"></div>
//                 <Input
//                   placeholder="Your name"
//                   variant="bordered"
//                   startContent={<span className="text-purple-400 text-lg">👤</span>}
//                   className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl 
//                   focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition"
//                 />
//               </div>

//               <div className="group relative">
//                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 blur transition group-focus-within:opacity-40"></div>
//                 <Input
//                   placeholder="Your email"
//                   type="email"
//                   variant="bordered"
//                   startContent={<span className="text-blue-400 text-lg">📧</span>}
//                   className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl 
//                   focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
//                 />
//               </div>

//               <div className="group relative">
//                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 blur transition group-focus-within:opacity-40"></div>
//                 <TextArea
//                   placeholder="Write your feedback..."
//                   variant="bordered"
//                   minRows={4}
//                   className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl 
//                   focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
//                 />
//               </div>

//               <Button className="w-full py-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 
//               text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/40 
//               hover:scale-105 transition">
//                 Submit Feedback
//               </Button>

//             </div>

//           </Card.Content>
//         </Card>

//         {/* RIGHT SIDE MAP */}
//         <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">
//           <div className="absolute top-6 left-6 z-10 bg-black/40 backdrop-blur-xl px-5 py-3 rounded-xl border border-white/10">
//             <p className="text-sm text-gray-300">Our Location</p>
//             <p className="font-semibold text-white">Ahmedabad, Gujarat</p>
//           </div>

//           <iframe
//             src="https://www.google.com/maps?q=Ahmedabad&output=embed"
//             className="w-full h-full min-h-[520px] border-0"
//             loading="lazy"
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// }




// "use client";

// import { Button, Card, Input, TextArea } from "@heroui/react";

// export function NewsletterSection() {
//   return (
//     <section id="newsletter" className="py-20">
//       <div className="grid lg:grid-cols-2 gap-12 items-stretch">

//         {/* LEFT SIDE CARD */}
//         <Card className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

//           {/* glow background inside card */}
//           <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/20 blur-[120px]" />
//           <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-600/20 blur-[120px]" />

//           {/* HEADER */}
//           <Card.Header className="border-b border-white/10 pb-6">
//             <Card.Title className="text-4xl font-bold text-white tracking-wide">
//               Feedback Form
//             </Card.Title>
//           </Card.Header>

//           {/* CONTENT */}
//           <Card.Content className="space-y-10 pt-10">

//             {/* FEEDBACK FORM */}
//             <div className="space-y-7">

//               {/* NAME */}
//               <div className="group relative">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur-md transition duration-500 group-focus-within:opacity-40"></div>
//                 <Input
//                   placeholder="Your Name"
//                   variant="bordered"
//                   startContent={<span className="text-purple-400 text-xl">👤</span>}
//                   className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl 
//                   focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3"
//                 />
//               </div>

//               {/* EMAIL */}
//               <div className="group relative">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 blur-md transition duration-500 group-focus-within:opacity-40"></div>
//                 <Input
//                   placeholder="Email Address"
//                   type="email"
//                   variant="bordered"
//                   startContent={<span className="text-blue-400 text-xl">📧</span>}
//                   className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl 
//                   focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 py-3"
//                 />
//               </div>

//               {/* MESSAGE */}
//               <div className="group relative">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 blur-md transition duration-500 group-focus-within:opacity-40"></div>
//                 <TextArea
//                   placeholder="Write your feedback..."
//                   variant="bordered"
//                   minRows={5}
//                   className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl 
//                   focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
//                 />
//               </div>

//               {/* BUTTON */}
//               <Button className="w-full py-4 text-lg font-semibold rounded-2xl 
//               bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 
//               shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition duration-300">
//                 🚀 Submit Feedback
//               </Button>

//             </div>
//           </Card.Content>
//         </Card>

//         {/* RIGHT SIDE MAP */}
//         <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group">

//           {/* glass overlay */}
//           <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

//           {/* location badge */}
//           <div className="absolute top-6 left-6 z-10 bg-black/50 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/10">
//             <p className="text-sm text-gray-300">📍 Our Location</p>
//             <p className="font-semibold text-white text-lg">Ahmedabad, Gujarat</p>
//           </div>

//           <iframe
//             src="https://www.google.com/maps?q=Ahmedabad&output=embed"
//             className="w-full h-full min-h-[540px] border-0 grayscale group-hover:grayscale-0 transition duration-700"
//             loading="lazy"
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// }



// "use client";

// import { Button, Card, Input, TextArea } from "@heroui/react";

// export function NewsletterSection() {
//   return (
//     <section id="newsletter" className="py-20">
//       <div className="grid lg:grid-cols-2 gap-12 items-stretch">

//         {/* LEFT SIDE CARD */}
//         <Card className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

//           {/* glow background */}
//           <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/20 blur-[120px]" />
//           <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-600/20 blur-[120px]" />

//           {/* HEADER */}
//           <Card.Header className="border-b border-white/10 pb-6">
//             <Card.Title className="text-4xl font-bold text-white tracking-wide">
//               Feedback Form
//             </Card.Title>
//           </Card.Header>

//           {/* CONTENT */}
//           <Card.Content className="space-y-8 pt-10">

//             {/* 👤 NAME */}
//             <Input
//               placeholder="Your Name"
//               variant="bordered"
//               startContent={<span className="text-purple-400 text-xl">👤</span>}
//               classNames={{
//                 base: "group",
//                 mainWrapper: "bg-transparent",
//                 inputWrapper:
//                   "h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl \
//                   group-hover:border-white/30 transition duration-300 \
//                   group-focus-within:border-purple-400 \
//                   group-focus-within:shadow-[0_0_0_2px_rgba(168,85,247,0.25),0_10px_40px_rgba(168,85,247,0.25)]",
//                 input:
//                   "text-white placeholder:text-white/40 text-[15px] pl-1",
//               }}
//             />

//             {/* 📧 EMAIL */}
//             <Input
//               placeholder="Email Address"
//               type="email"
//               variant="bordered"
//               startContent={<span className="text-blue-400 text-xl">📧</span>}
//               classNames={{
//                 base: "group",
//                 mainWrapper: "bg-transparent",
//                 inputWrapper:
//                   "h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl \
//                   group-hover:border-white/30 transition duration-300 \
//                   group-focus-within:border-blue-400 \
//                   group-focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.25),0_10px_40px_rgba(59,130,246,0.25)]",
//                 input:
//                   "text-white placeholder:text-white/40 text-[15px] pl-1",
//               }}
//             />

//             {/* ✍️ MESSAGE */}
//             <TextArea
//               placeholder="Write your feedback..."
//               variant="bordered"
//               minRows={5}
//               classNames={{
//                 base: "group",
//                 inputWrapper:
//                   "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl \
//                   group-hover:border-white/30 transition duration-300 \
//                   group-focus-within:border-cyan-400 \
//                   group-focus-within:shadow-[0_0_0_2px_rgba(34,211,238,0.25),0_10px_40px_rgba(34,211,238,0.25)]",
//                 input:
//                   "text-white placeholder:text-white/40 text-[15px]",
//               }}
//             />

//             {/* 🚀 BUTTON */}
//             <Button className="w-full py-4 text-lg font-semibold rounded-2xl 
//               bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 
//               shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition duration-300">
//               🚀 Submit Feedback
//             </Button>

//           </Card.Content>
//         </Card>

//         {/* RIGHT SIDE MAP */}
//         <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group">

//           <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

//           <div className="absolute top-6 left-6 z-10 bg-black/50 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/10">
//             <p className="text-sm text-gray-300">📍 Our Location</p>
//             <p className="font-semibold text-white text-lg">Ahmedabad, Gujarat</p>
//           </div>

//           <iframe
//             src="https://www.google.com/maps?q=Ahmedabad&output=embed"
//             className="w-full h-full min-h-[540px] border-0 grayscale group-hover:grayscale-0 transition duration-700"
//             loading="lazy"
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// }



// "use client";

// import { Button, Card, Input, TextArea } from "@heroui/react";

// export function NewsletterSection() {
//   return (
//     <section id="newsletter" className="relative py-24 overflow-hidden bg-[#07070f]">

//       {/* 🌈 MULTICOLOR GLASS BACKGROUND */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[180px] animate-pulse" />
//       <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-pink-600/30 rounded-full blur-[180px] animate-pulse" />
//       <div className="absolute bottom-0 left-1/3 w-[480px] h-[480px] bg-cyan-500/30 rounded-full blur-[180px] animate-pulse" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.25),transparent_60%)]" />

//       <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-stretch">

//         {/* LEFT SIDE CARD */}
//         <Card className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

//           <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/20 blur-[120px]" />
//           <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-600/20 blur-[120px]" />

//           <Card.Header className="border-b border-white/10 pb-6">
//             <Card.Title className="text-4xl font-bold text-white tracking-wide">
//               Feedback Form
//             </Card.Title>
//           </Card.Header>

//           <Card.Content className="space-y-8 pt-10">

//             {/* NAME */}
//             <Input
//               placeholder="Your Name"
//               variant="bordered"
//               startContent={<span className="text-purple-400 text-xl">👤</span>}
//               classNames={{
//                 base: "group",
//                 mainWrapper: "bg-transparent",
//                 inputWrapper:
//                   "h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl \
//                   group-hover:border-white/30 transition duration-300 \
//                   group-focus-within:border-purple-400 \
//                   group-focus-within:shadow-[0_0_0_2px_rgba(168,85,247,0.25),0_10px_40px_rgba(168,85,247,0.25)]",
//                 input:"text-white placeholder:text-white/40 text-[15px] pl-1",
//               }}
//             />

//             {/* EMAIL */}
//             <Input
//               placeholder="Email Address"
//               type="email"
//               variant="bordered"
//               startContent={<span className="text-blue-400 text-xl">📧</span>}
//               classNames={{
//                 base: "group",
//                 mainWrapper: "bg-transparent",
//                 inputWrapper:
//                   "h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl \
//                   group-hover:border-white/30 transition duration-300 \
//                   group-focus-within:border-blue-400 \
//                   group-focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.25),0_10px_40px_rgba(59,130,246,0.25)]",
//                 input:"text-white placeholder:text-white/40 text-[15px] pl-1",
//               }}
//             />

//             {/* MESSAGE */}
//             <TextArea
//               placeholder="Write your feedback..."
//               variant="bordered"
//               minRows={5}
//               classNames={{
//                 base: "group",
//                 inputWrapper:
//                   "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl \
//                   group-hover:border-white/30 transition duration-300 \
//                   group-focus-within:border-cyan-400 \
//                   group-focus-within:shadow-[0_0_0_2px_rgba(34,211,238,0.25),0_10px_40px_rgba(34,211,238,0.25)]",
//                 input:"text-white placeholder:text-white/40 text-[15px]",
//               }}
//             />

//             {/* BUTTON */}
//             <Button className="w-full py-4 text-lg font-semibold rounded-2xl 
//               bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 
//               shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition duration-300">
//               🚀 Submit Feedback
//             </Button>

//           </Card.Content>
//         </Card>

//         {/* RIGHT SIDE MAP */}
//         <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group">

//           <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

//           <div className="absolute top-6 left-6 z-10 bg-black/50 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/10">
//             <p className="text-sm text-gray-300">📍 Our Location</p>
//             <p className="font-semibold text-white text-lg">Ahmedabad, Gujarat</p>
//           </div>

//           <iframe
//             src="https://www.google.com/maps?q=Ahmedabad&output=embed"
//             className="w-full h-full min-h-[540px] border-0 grayscale group-hover:grayscale-0 transition duration-700"
//             loading="lazy"
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { Button, Card, Input, TextArea } from "@heroui/react";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="relative py-28 bg-[#0b0f19] overflow-hidden">

      {/* 🔵 PROFESSIONAL GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f19] via-[#0e1424] to-[#05070f]" />

      {/* subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] 
      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
      bg-[size:60px_60px]" />

      {/* soft gradient lights */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-indigo-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT FORM */}
        <Card className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">

          <Card.Header className="border-b border-white/10 pb-6">
            <Card.Title className="text-4xl font-bold text-white">
              Send us feedback
            </Card.Title>
            <p className="text-gray-400 mt-2">
              Have suggestions or issues? We'd love to hear from you.
            </p>
          </Card.Header>

          <Card.Content className="space-y-8 pt-10">

            <Input
              placeholder="Full Name"
              startContent={<span className="text-indigo-400">👤</span>}
              classNames={{
                base:"group",
                inputWrapper:"h-14 bg-white/5 border border-white/10 rounded-xl group-focus-within:border-indigo-400",
                input:"text-white placeholder:text-gray-400"
              }}
            />

            <Input
              type="email"
              placeholder="Email Address"
              startContent={<span className="text-sky-400">📧</span>}
              classNames={{
                base:"group",
                inputWrapper:"h-14 bg-white/5 border border-white/10 rounded-xl group-focus-within:border-sky-400",
                input:"text-white placeholder:text-gray-400"
              }}
            />

            <TextArea
              placeholder="Your message..."
              minRows={5}
              classNames={{
                base:"group",
                inputWrapper:"bg-white/5 border border-white/10 rounded-xl group-focus-within:border-indigo-400",
                input:"text-white placeholder:text-gray-400"
              }}
            />

            <Button className="w-full py-4 text-lg font-semibold rounded-xl 
            bg-gradient-to-r from-indigo-500 to-sky-500 hover:opacity-90">
              Submit Feedback
            </Button>

          </Card.Content>
        </Card>

        {/* RIGHT MAP */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

          <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/10">
            <p className="text-sm text-gray-400">Our Location</p>
            <p className="text-white font-semibold">Ahmedabad, Gujarat</p>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Ahmedabad&output=embed"
            className="w-full h-full min-h-[560px] border-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}