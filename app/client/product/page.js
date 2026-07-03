"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "@heroui/react";
import { addToCart } from "@/store/cartSlice";
import { BACKEND_URL } from "@/lib/backend";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const handleAddToCart = (product) => {
    if (!product) return;

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price) || 0,
        category: product.category,
        description: product.description,
        images: product.images || [],
      })
    );
  };

useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${BACKEND_URL}/products`);
      const json = await res.json();

      console.log("API Response:", json);

      // ✅ SAFE FIX
      const productsList = json?.products || [];

      setProducts(productsList);

    } catch (err) {
      console.log("FETCH ERROR:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  const openModal = (item) => {
    setSelectedProduct(item);
    setCurrentImg(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImg(0);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gray-950 py-20 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((item) => (
          <Card
            key={item.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
          >

            {/* IMAGE */}
            {/* IMAGE */}
<div className="h-48 flex items-center justify-center bg-white/5">
  <img
    src={
      item.images?.length
        ? item.images[0].startsWith("http")
          ? item.images[0] // Cloudinary URL
          : `${BACKEND_URL}/uploads/${item.images[0]}` // Old local images
        : "/no-image.png"
    }
    alt={item.name}
    className="max-h-full max-w-full object-contain"
    onError={(e) => {
      console.log("Image failed:", e.currentTarget.src);
      e.currentTarget.src = "/no-image.png";
    }}
  />
</div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">

              <h2 className="text-white font-semibold truncate">
                {item.name}
              </h2>

              <p className="text-gray-400 text-sm line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-green-400 font-bold">
                  ₹{item.price}
                </span>

                <Button
                  onClick={() => openModal(item)}
                  className="bg-blue-500 text-white"
                >
                  Show Details
                </Button>
              </div>

            </div>
          </Card>
        ))}

      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl w-[95%] md:w-[80%] lg:w-[70%] p-6 grid md:grid-cols-2 gap-6 relative">

            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-white text-xl"
            >
              ✕
            </button>

            {/* IMAGE SLIDER */}
            <div className="space-y-3">

              <div className="h-[350px] flex items-center justify-center bg-white/5 rounded-xl">
                <img
                  src={selectedProduct.images[currentImg]}   // ✅ FIX
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-2 overflow-x-auto">

                {selectedProduct.images.map((img, i) => (
                  <img
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    src={img}   // ✅ FIX
                    className={`h-16 w-16 object-contain bg-white/5 rounded-md cursor-pointer border ${
                      currentImg === i
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  />
                ))}

              </div>

            </div>

            {/* DETAILS */}
            <div className="text-white space-y-4">

              <h2 className="text-2xl font-bold">
                {selectedProduct.name}
              </h2>

              <p className="text-gray-300">
                {selectedProduct.description}
              </p>

              <p className="text-green-400 text-xl font-bold">
                ₹{selectedProduct.price}
              </p>

              <p className="text-gray-300">
                Stock: <span className="text-white">{selectedProduct.stock}</span>
              </p>

              <p className="text-gray-300">
                Category: {selectedProduct.category}
              </p>

              <Button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  closeModal();
                }}
                className="bg-green-500 text-white w-full"
              >
                Add to Cart
              </Button>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}