"use client";

import { useEffect, useState } from "react";
import { MoreVertical, Eye, Pencil, Trash2 } from "lucide-react";

export default function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mode, setMode] = useState("list"); // list | view | edit
  const BACKEND_URL = process.env.BACKEND_URL||"http://localhost:3333";
  console.log(BACKEND_URL) 
  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/products`);
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    const ok = confirm("Are you sure you want to delete this product?");
    if (!ok) return;

    try {
      await fetch(`${BACKEND_URL}/products/${id}`, {
        method: "DELETE",
      });

      fetchProducts();
      setOpenMenu(null);
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE PRODUCT
  const updateProduct = async () => {
    try {
      await fetch(`${BACKEND_URL}/products/${selectedProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedProduct),
      });

      alert("Updated successfully ✅");
      setMode("list");
      setSelectedProduct(null);
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  //  IMAGE (FINAL SIMPLE LOGIC) 
  const getImage = (p) => {
    if (!p?.images) return "/no-image.png";

    let img = Array.isArray(p.images) ? p.images[0] : p.images;
    // console.log("Raw image data:", img);
    try {
      if (typeof img === "string" && img.startsWith("[")) {
        img = JSON.parse(img)[0];
      }
    } catch (e) {}

    
    if (img?.startsWith("http")) return img;
    

    let r = img ? `${BACKEND_URL}/uploads/${img}` : "/no-image.png";
    
    return r;
  };

  //  LIST 
  if (mode === "list") {
    return (
      <div className="p-6 bg-[#020617] min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-6">📦 Products</h1>

        <div className="bg-white/5 rounded-2xl overflow-visible relative">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={getImage(p)}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  onError={(e) => (e.target.src = "")}
                />

                <div>
                  <h2 className="font-semibold">{p.name}</h2>
                  <p className="text-sm text-slate-400">
                    Stock: {p.stock} | ₹{p.price}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-6 relative">
                <span className="text-sm text-purple-400 capitalize">
                  {p.category}
                </span>

                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === i ? null : i)
                    }
                    className="p-2 rounded-full hover:bg-white/10"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenu === i && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-xl shadow-lg overflow-hidden z-50">

                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setMode("view");
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                      >
                        <Eye size={16} /> View
                      </button>

                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setMode("edit");
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                      >
                        <Pencil size={16} /> Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={16} /> Delete
                      </button>

                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <div className="p-6 text-center text-slate-400">
              No products found 🚫
            </div>
          )}
        </div>
      </div>
    );
  }

  //VIEW / EDIT 
  return (
    <div className="p-6 bg-[#020617] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {mode} Product
      </h1>

      {selectedProduct && (
        <div className="bg-white/5 p-6 rounded-xl space-y-4">

          <img
            src={getImage(selectedProduct)}
            className="w-24 h-24 rounded-full object-cover border border-white/10"
            onError={(e) => (e.target.src = "")}
          />

          <input
            value={selectedProduct.name || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                name: e.target.value,
              })
            }
            className="w-full p-3 bg-slate-800 rounded-xl"
          />

          <input
            value={selectedProduct.price || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                price: e.target.value,
              })
            }
            className="w-full p-3 bg-slate-800 rounded-xl"
          />

          <input
            value={selectedProduct.stock || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                stock: e.target.value,
              })
            }
            className="w-full p-3 bg-slate-800 rounded-xl"
          />

          <textarea
            value={selectedProduct.description || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                description: e.target.value,
              })
            }
            className="w-full p-3 bg-slate-800 rounded-xl"
          />

          <div className="flex gap-3">
            <button
              onClick={() => {
                setMode("list");
                setSelectedProduct(null);
              }}
              className="px-4 py-2 bg-gray-600 rounded-xl"
            >
              Back
            </button>

            {mode === "edit" && (
              <button
                onClick={updateProduct}
                className="px-4 py-2 bg-purple-600 rounded-xl"
              >
                Update
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
