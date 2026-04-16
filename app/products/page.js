// "use client";

// import { useEffect, useState } from "react";
// import { ProductCard } from "../client/home/ProductCard";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:3333/products");
//         if (!res.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await res.json();
//         setProducts(data.products);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg">Loading products...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg text-red-500">Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       <main className="mx-auto w-full max-w-7xl px-4 py-8">
//         <div className="space-y-3 mb-8">
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//             All Products
//           </h1>
//           <p className="text-lg text-gray-600">
//             Browse our complete collection of products.
//           </p>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               name={product.name}
//               price={`$${product.price}`}
//               tag={product.category}
//               imageSrc={product.images && product.images.length > 0 ? `http://localhost:3333/uploads/${product.images[0]}` : null}
//               imageAlt={product.description || product.name}
//             />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { Chip } from "@heroui/react";
import { ProductCard } from "../client/home/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3333/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
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