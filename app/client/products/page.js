"use client";

import { useEffect, useState } from "react";
import { Chip } from "@heroui/react";
import { ProductCard } from "../home/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3333/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-[#02040a] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <Chip className="mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Latest Collection
          </Chip>

          <h2 className="text-5xl font-black tracking-tight">
            Our Featured Products
          </h2>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-center text-xl">Loading products...</div>
        )}

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={`$${product.price}`}
              tag={product.category}
              imageSrc={
                product.images?.length
                  ? `http://localhost:3333/uploads/${product.images[0]}`
                  : null
              }
              imageAlt={product.description || product.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
