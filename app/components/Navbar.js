"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { Button, Badge } from "@heroui/react";

export default function Navbar() {
  const cartCount = useSelector(
    (state) => state?.cart?.totalQuantity ?? 0
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-indigo-500">
          MyShop
        </Link>

        {/* MENU */}
        <div className="hidden md:flex gap-6 text-slate-300 text-sm">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          {/* ✅ FIXED PRODUCT ROUTE */}
          <Link href="/client/product" className="hover:text-white">
            Products
          </Link>

          {/* optional about */}
          <Link href="/client/about" className="hover:text-white">
            About
          </Link>

          {/* ✅ NEW: FEEDBACK / CONTACT US */}
          <Link href="/client/feedback" className="hover:text-white">
            Contact
          </Link>

          {/* SIGN UP */}
          <Link href="/client/register" className="rounded-full border border-white/10 bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400">
            Sign Up
          </Link>

        </div>

        {/* CART */}
        <Link href="/client/addtocard" className="relative inline-flex items-center">

          <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800">
            🛒 Cart {cartCount > 0 ? `(${cartCount})` : "(0)"}
          </span>

          {cartCount > 0 ? (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </Badge>
          ) : null}

        </Link>

      </div>
    </nav>
  );
}