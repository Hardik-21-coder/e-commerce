"use client";

import { Button, Input, Link } from "@heroui/react";

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-200 bg-white/95 backdrop-blur-md transition-all duration-300 shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4">
        <Link href="/" className="text-2xl font-black text-gray-900 hover:text-blue-600 transition-colors">
          ShopLite
        </Link>

        <nav className="hidden items-center gap-8 md:flex ml-8">
          <Link href="#categories" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
            Categories
          </Link>
          <Link href="#featured" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
            Featured
          </Link>
          <Link href="#newsletter" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
            Newsletter
          </Link>
        </nav>

        <div className="hidden flex-1 sm:block sm:max-w-sm">
          <Input
            aria-label="Search products"
            placeholder="Search products…"
            variant="primary"
            className="transition-all duration-300 font-medium"
          />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button size="sm" variant="outline" className="font-semibold border-2 transition-all duration-300 hover:scale-105 hover:bg-gray-50">
            Sign in
          </Button>
          <Button size="sm" variant="primary" className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Cart (0)
          </Button>
        </div>
      </div>
    </header>
  );
}
