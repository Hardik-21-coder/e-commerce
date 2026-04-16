"use client";

import { useEffect, useState } from "react";
import { Input } from "@heroui/react";
import { ProductCard } from "./ProductCard";
// import { ProductCard } from "@/components/home/ProductCard";

export function FeaturedSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3333/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data.products.slice(0, 6)); // Limit to 6 featured products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="featured" className="py-16 space-y-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Featured products
            </h2>
            <p className="text-lg text-gray-600 max-w-md">
              Loading featured products...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="featured" className="py-16 space-y-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Featured products
            </h2>
            <p className="text-lg text-gray-600 max-w-md">
              Error loading products: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured" className="py-16 space-y-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Featured products
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Discover our top products.
          </p>
        </div>
        <div className="w-full sm:w-auto sm:min-w-64">
          <Input
            aria-label="Search featured products"
            placeholder="Search featured…"
            variant="primary"
            className="transition-all duration-300"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={`$${product.price}`}
            tag={product.category}
            imageSrc={product.images && product.images.length > 0 ? `http://localhost:3333/uploads/${product.images[0]}` : null}
            imageAlt={product.description || product.name}
          />
        ))}
      </div>
    </section>
  );
}
