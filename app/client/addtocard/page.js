"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/store/cartSlice";
import { UPLOADS_URL } from "@/lib/backend";

export default function CartPage() {
  const dispatch = useDispatch();

  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-indigo-400">
          🛒 Your Cart
        </h1>

        <p className="text-slate-400 mt-2">
          {totalQuantity} items in your cart
        </p>
      </div>

      {/* EMPTY CART */}
      {items.length === 0 ? (
        <div className="text-center text-slate-400 mt-20">
          Your cart is empty 🥲
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

          {/* ITEMS */}
          <div className="lg:col-span-2 space-y-4">

            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl hover:border-indigo-500 transition"
              >

                {/* IMAGE */}
                <img
  src={
    item.images?.length
      ? item.images[0]
      : "/no-image.png"
  }
  className="w-20 h-20 object-contain bg-black/20 rounded-lg"
  alt={item.name}
  onError={(e) => {
    e.currentTarget.src = "/no-image.png";
  }}
/>

                {/* INFO */}
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>

                  <p className="text-slate-400 text-sm">
                    ₹{item.price} × {item.quantity || 1} = ₹{(item.price || 0) * (item.quantity || 1)}
                  </p>

                  <button
                    onClick={() => dispatch(removeFromCart(index))}
                    className="text-red-400 text-sm mt-2 hover:text-red-300"
                  >
                    Remove one
                  </button>
                </div>

              </div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl h-fit">

            <h2 className="text-xl font-bold text-indigo-400 mb-4">
              Order Summary
            </h2>

            <div className="space-y-2 text-slate-300">

              <p>
                Items:{" "}
                <span className="text-white font-semibold">
                  {totalQuantity}
                </span>
              </p>

              <p>
                Total:{" "}
                <span className="text-green-400 font-bold">
                  ₹{totalPrice}
                </span>
              </p>

            </div>

            <button
              onClick={() => dispatch(clearCart())}
              className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-lg transition"
            >
              Clear Cart
            </button>

          </div>

        </div>
      )}

    </div>
  );
}