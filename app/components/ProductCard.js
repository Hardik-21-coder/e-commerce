"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { UPLOADS_URL } from "@/lib/backend";

export function ProductCard({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    // login na hoy to redirect
    if (!user && !token) {
      alert("Pehla login karo");
      router.push("/login");
      return;
    }

    // login hoy to add to cart
    dispatch(addToCart(product));
    alert("Product added to cart ✅");
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-blue-500 transition">
      <img
        src={
          product.images?.length
            ? `${UPLOADS_URL}/${product.images[0]}`
            : "https://via.placeholder.com/300"
        }
        alt={product.name}
        className="w-full h-56 object-contain rounded-xl bg-white/5"
      />

      <div className="mt-4">
        <p className="text-sm text-blue-400">{product.category}</p>

        <h3 className="text-lg font-bold mt-1">{product.name}</h3>

        <p className="text-slate-400 mt-2">₹{product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-2 font-medium transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}