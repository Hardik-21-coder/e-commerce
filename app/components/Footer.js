"use client";

import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500">
            MyShop
          </h2>

          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Modern e-commerce platform built with Next.js & HeroUI.
            Fast, secure and beautiful shopping experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm text-slate-400">

            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/client" className="hover:text-white">Products</Link>
            <Link href="/client/about" className="hover:text-white">About</Link>
            <Link href="/client/contact" className="hover:text-white">Contact</Link>

          </div>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>

          <div className="flex flex-col gap-2 text-sm text-slate-400">

            <span className="hover:text-white cursor-pointer">Electronics</span>
            <span className="hover:text-white cursor-pointer">Fashion</span>
            <span className="hover:text-white cursor-pointer">Mobile</span>
            <span className="hover:text-white cursor-pointer">Home</span>

          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>

          <div className="flex flex-col gap-2 text-sm text-slate-400">

            <span className="hover:text-white cursor-pointer">Help Center</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Contact Support</span>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">

        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} MyShop. All rights reserved.
          </p>

          {/* BADGES */}
          <div className="flex gap-2">

            <span className="px-3 py-1 text-xs rounded-full bg-slate-900 border border-slate-800">
              Secure Payment
            </span>

            <span className="px-3 py-1 text-xs rounded-full bg-slate-900 border border-slate-800">
              Fast Delivery
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}