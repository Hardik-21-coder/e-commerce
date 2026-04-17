"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const heroSlides = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3333/products");
        const data = await res.json();

        const list = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : [];

        setProducts(list);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

    
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        
        <div>

          <h1 className="text-5xl font-bold leading-tight">
            Discover <span className="text-indigo-500">Premium</span> Products
          </h1>

          <p className="text-slate-400 mt-4">
            Modern e-commerce platform with fast delivery, secure payments,
            and high-quality products.
          </p>

          
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button className="mt-5 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl">
            Shop Now
          </button>

        </div>

        
        <div className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-slate-900">

          <img
            src={heroSlides[currentSlide]}
            className="w-full h-full object-cover transition-all duration-700"
          />

          
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">

            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}

          </div>

        </div>

      </section>

      {/*  CATEGORY  */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-xl font-semibold mb-6 text-indigo-400">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {["Electronics", "Fashion", "Mobile", "Home"].map((cat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-indigo-500 transition"
            >
              {cat}
            </div>
          ))}

        </div>
      </section>

      {/*  PRODUCTS  */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-xl font-semibold mb-6 text-indigo-400">
          Trending Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {products.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
            >

              <img
                src={
                  item.images?.length
                    ? `http://localhost:3333/uploads/${item.images[0]}`
                    : "https://via.placeholder.com/300"
                }
                className="h-40 w-full object-contain bg-slate-950"
              />

              <div className="p-4">

                <h3 className="font-semibold truncate">
                  {item.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  ₹{item.price}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: Number(item.price) || 0,
                        category: item.category,
                        description: item.description,
                        images: item.images || [],
                      })
                    )
                  }
                  className="mt-3 w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-lg text-sm"
                >
                  Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>



    </div>
  );
}