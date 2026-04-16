"use client";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Build Smart. Shop Smarter.
        </h1>

        <p className="mt-5 text-slate-300 max-w-2xl mx-auto text-lg">
          A next-generation e-commerce platform designed for speed, trust,
          and premium shopping experience.
        </p>

        <div className="mt-8">
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-medium">
            Explore Products
          </button>
        </div>

      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-cyan-400">10K+</h2>
          <p className="text-slate-400 mt-1">Happy Users</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-cyan-400">5K+</h2>
          <p className="text-slate-400 mt-1">Products</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-cyan-400">1K+</h2>
          <p className="text-slate-400 mt-1">Daily Orders</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
          <p className="text-slate-400 mt-1">Support</p>
        </div>

      </div>

      {/* STORY */}
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
          Our Story
        </h2>

        <p className="text-slate-300 leading-relaxed">
          We started with a simple idea — create a fast, secure and modern
          shopping platform. Today, we are building a scalable e-commerce
          ecosystem focused on user experience, performance, and trust.
        </p>

      </div>

      {/* VALUES */}
      <div className="bg-slate-900 py-20 border-y border-slate-800">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-indigo-400">
              ⚡ Fast Performance
            </h3>
            <p className="text-slate-400 mt-2 text-sm">
              Optimized for speed and smooth user experience.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-indigo-400">
              🔒 Secure Shopping
            </h3>
            <p className="text-slate-400 mt-2 text-sm">
              Safe and trusted payment and data protection.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-indigo-400">
              📦 Quality Products
            </h3>
            <p className="text-slate-400 mt-2 text-sm">
              Carefully verified and high-quality products.
            </p>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center py-10 text-slate-500 text-sm">
        © {new Date().getFullYear()} Modern E-Commerce Platform
      </div>

    </section>
  );
}