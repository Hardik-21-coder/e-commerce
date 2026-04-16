"use client";

import { Button, Card, Input, TextArea } from "@heroui/react";

export default function Page() {
  return (
    <section className="relative py-28 bg-[#0b0f19] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f19] via-[#0e1424] to-[#05070f]" />
      <div className="absolute inset-0 opacity-[0.06] 
      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
      bg-[size:60px_60px]" />
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-indigo-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <Card className="bg-white/5 backdrop-blur-2xl border border-white/10">

          <Card.Header className="border-b border-white/10 pb-6">
            <Card.Title className="text-4xl font-bold text-white">
              Send us feedback
            </Card.Title>
            <p className="text-gray-400 mt-2">
              Have suggestions or issues? We'd love to hear from you.
            </p>
          </Card.Header>

          <Card.Content className="space-y-8 pt-10">

            <Input placeholder="Full Name" />
            <Input type="email" placeholder="Email Address" />
            <TextArea placeholder="Your message..." />

            <Button className="w-full bg-gradient-to-r from-indigo-500 to-sky-500">
              Submit Feedback
            </Button>

          </Card.Content>
        </Card>

        <iframe
          src="https://www.google.com/maps?q=Ahmedabad&output=embed"
          className="w-full h-[560px] rounded-3xl"
        />

      </div>
    </section>
  );
}