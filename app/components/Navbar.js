"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { Badge } from "@heroui/react";

export default function Navbar() {
  const cartCount = useSelector(
    (state) => state?.cart?.totalQuantity ?? 0
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-wide"
        >
          ShopNeno
        </Link>

        
        <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">

          <Link href="/" className="hover:text-white transition duration-300 hover:scale-105">
            Home
          </Link>

          <Link href="/client/product" className="hover:text-white transition duration-300 hover:scale-105">
            Products
          </Link>

          <Link href="/client/about" className="hover:text-white transition duration-300 hover:scale-105">
            About
          </Link>

          <Link href="/client/feedback" className="hover:text-white transition duration-300 hover:scale-105">
            Contact
          </Link>

          
          <Link
            href="/client/register"
            className="ml-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-indigo-500/40"
          >
            Sign Up
          </Link>
        </div>

       
        <Link href="/client/addtocard" className="relative inline-flex items-center">

          <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 px-5 py-2.5 text-white shadow-lg border border-white/10 transition duration-300 hover:scale-105 hover:shadow-indigo-500/30">
            🛒  {cartCount > 0 ? `(${cartCount})` : "(0)"}
          </span>

          {cartCount > 0 ? (
            <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
              {cartCount}
            </Badge>
          ) : null}

        </Link>

      </div>
    </nav>
  );
}