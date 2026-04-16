// "use client";

// import { useEffect, useState } from "react";
// import { Card, Button } from "@heroui/react";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:3333/products");
//         const data = await res.json();

//         const list = Array.isArray(data)
//           ? data
//           : Array.isArray(data.products)
//           ? data.products
//           : data
//           ? [data]
//           : [];

//         setProducts(list);
//       } catch (err) {
//         console.log(err);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center text-gray-600">
//         Loading products...
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-gray-950 overflow-hidden py-20">

//       {/* 🌈 BACKGROUND EFFECTS (your style) */}
//       <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>
//       <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]"></div>

//       <div className="absolute w-32 h-32 border border-white/10 rounded-xl rotate-12 top-20 left-20"></div>
//       <div className="absolute w-24 h-24 border border-white/10 rounded-full bottom-20 right-20"></div>
//       <div className="absolute w-40 h-40 border border-white/10 rounded-xl rotate-45 bottom-10 left-10"></div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* TITLE */}
//         <div className="text-center mb-14">
//           <h1 className="text-4xl md:text-5xl font-bold text-white">
//             🛒 Glass E-Commerce Store
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Premium products with modern glass UI
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {products.map((item) => (
//             <Card
//               key={item.id}
//               className="
//                 bg-white/5
//                 backdrop-blur-xl
//                 border border-white/10
//                 rounded-2xl
//                 overflow-hidden
//                 hover:border-white/30
//                 hover:scale-[1.03]
//                 transition-all duration-300
//               "
//             >

//               {/* IMAGE */}
//               <div className="h-48">
//                 <img
//                   src={
//                     item.images?.length
//                       ? `http://localhost:3333/uploads/${item.images[0]}`
//                       : "https://via.placeholder.com/300"
//                   }
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5 space-y-3">

//                 <h2 className="text-white text-lg font-semibold truncate">
//                   {item.name}
//                 </h2>

//                 <p className="text-gray-400 text-sm line-clamp-2">
//                   {item.description}
//                 </p>

//                 {/* CATEGORY */}
//                 <span className="inline-block text-xs px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/10">
//                   {item.category}
//                 </span>

//                 {/* PRICE + BUTTON */}
//                 <div className="flex items-center justify-between pt-3">

//                   <span className="text-green-400 font-bold text-lg">
//                     ₹{item.price}
//                   </span>

//                   <Button className="bg-green-500/80 hover:bg-green-500 text-white">
//                     Add
//                   </Button>

//                 </div>

//               </div>

//             </Card>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { Card, Button } from "@heroui/react";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔥 Modal state
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImg, setCurrentImg] = useState(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:3333/products");
//         const data = await res.json();

//         const list = Array.isArray(data)
//           ? data
//           : Array.isArray(data.products)
//           ? data.products
//           : data
//           ? [data]
//           : [];

//         setProducts(list);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const openModal = (item) => {
//     setSelectedProduct(item);
//     setCurrentImg(0);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setCurrentImg(0);
//   };

//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center text-white bg-gray-950">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-gray-950 py-20 overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
//       <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />

//       <div className="absolute w-32 h-32 border border-white/10 rounded-xl rotate-12 top-20 left-20" />
//       <div className="absolute w-24 h-24 border border-white/10 rounded-full bottom-20 right-20" />
//       <div className="absolute w-40 h-40 border border-white/10 rounded-xl rotate-45 bottom-10 left-10" />

//       {/* GRID */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//         {products.map((item) => (
//           <Card
//             key={item.id}
//             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
//           >
//             <img
//               src={
//                 item.images?.length
//                   ? `http://localhost:3333/uploads/${item.images[0]}`
//                   : "https://via.placeholder.com/300"
//               }
//               className="h-48 w-full object-cover"
//               alt={item.name}
//             />

//             <div className="p-4 space-y-2">

//               <h2 className="text-white font-semibold">{item.name}</h2>

//               <p className="text-gray-400 text-sm line-clamp-2">
//                 {item.description}
//               </p>

//               <div className="flex justify-between items-center">
//                 <span className="text-green-400 font-bold">
//                   ₹{item.price}
//                 </span>

//                 <Button
//                   onClick={() => openModal(item)}
//                   className="bg-blue-500 text-white"
//                 >
//                   Show Details
//                 </Button>
//               </div>

//             </div>
//           </Card>
//         ))}

//       </div>

//       {/* 🔥 MODAL */}
//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

//           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl w-[90%] md:w-[80%] lg:w-[70%] p-6 grid md:grid-cols-2 gap-6 relative">

//             {/* CLOSE */}
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-4 text-white text-xl"
//             >
//               ✕
//             </button>

//             {/* IMAGE SLIDER */}
//             <div className="space-y-3">

//               <img
//                 src={`http://localhost:3333/uploads/${selectedProduct.images[currentImg]}`}
//                 className="w-full h-[350px] object-cover rounded-xl"
//               />

//               {/* thumbnails */}
//               <div className="flex gap-2 overflow-x-auto">

//                 {selectedProduct.images.map((img, i) => (
//                   <img
//                     key={i}
//                     onClick={() => setCurrentImg(i)}
//                     src={`http://localhost:3333/uploads/${img}`}
//                     className={`h-16 w-16 object-cover rounded-md cursor-pointer border ${
//                       currentImg === i ? "border-blue-500" : "border-transparent"
//                     }`}
//                   />
//                 ))}

//               </div>
//             </div>

//             {/* DETAILS */}
//             <div className="text-white space-y-4">

//               <h2 className="text-2xl font-bold">
//                 {selectedProduct.name}
//               </h2>

//               <p className="text-gray-300">
//                 {selectedProduct.description}
//               </p>

//               <p className="text-green-400 text-xl font-bold">
//                 ₹{selectedProduct.price}
//               </p>

//               <p className="text-gray-300">
//                 Stock:{" "}
//                 <span className="text-white">
//                   {selectedProduct.stock}
//                 </span>
//               </p>

//               <p className="text-gray-300">
//                 Category: {selectedProduct.category}
//               </p>

//               <Button className="bg-green-500 text-white w-full">
//                 Add to Cart
//               </Button>

//             </div>

//           </div>
//         </div>
//       )}

//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "@heroui/react";
import { addToCart } from "@/store/cartSlice";

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
        const res = await fetch("http://localhost:3333/products");
        const data = await res.json();

        const list = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : data
          ? [data]
          : [];

        setProducts(list);
      } catch (err) {
        console.log(err);
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

      {/* 🌈 BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />

      <div className="absolute w-32 h-32 border border-white/10 rounded-xl rotate-12 top-20 left-20" />
      <div className="absolute w-24 h-24 border border-white/10 rounded-full bottom-20 right-20" />
      <div className="absolute w-40 h-40 border border-white/10 rounded-xl rotate-45 bottom-10 left-10" />

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((item) => (
          <Card
            key={item.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
          >

            {/* IMAGE (NO CUT FIX) */}
            <div className="h-48 flex items-center justify-center bg-white/5">
              <img
                src={
                  item.images?.length
                    ? `http://localhost:3333/uploads/${item.images[0]}`
                    : "https://via.placeholder.com/300"
                }
                className="max-h-full max-w-full object-contain"
                alt={item.name}
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

      {/* 🔥 MODAL */}
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
                  src={`http://localhost:3333/uploads/${selectedProduct.images[currentImg]}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-2 overflow-x-auto">

                {selectedProduct.images.map((img, i) => (
                  <img
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    src={`http://localhost:3333/uploads/${img}`}
                    className={`h-16 w-16 object-contain bg-white/5 rounded-md cursor-pointer border ${
                      currentImg === i ? "border-blue-500" : "border-transparent"
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