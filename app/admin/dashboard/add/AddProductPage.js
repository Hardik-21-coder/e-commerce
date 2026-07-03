"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import { BACKEND_URL } from "@/lib/backend";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Upload, X, Package,
  CheckCircle, Loader2
} from "lucide-react";
import { Button } from "@heroui/react";

// Validation 
const productSchema = z.object({
  name: z.string().min(3, "Min 3 characters"),
  price: z.coerce.number().min(1, "Price > 0"),
  category: z.string().min(1, "Select category"),
  stock: z.coerce.number().min(0),
  description: z.string().min(5),
});

//  Input Field 
const RHFFormField = ({ control, name, label, component, type = "text" }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-slate-300">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {component === "textarea" ? (
            <textarea {...field} rows={4}
              className="p-3 rounded-xl bg-slate-800 border border-slate-700" />
          ) : (
            <input {...field} type={type}
              className="p-3 rounded-xl bg-slate-800 border border-slate-700" />
          )}
          {error && <span className="text-xs text-red-500">{error.message}</span>}
        </>
      )}
    />
  </div>
);

// Dropdown
const RHFDropDown = ({ control, name, label, options }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-slate-300">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select {...field}
          className="p-3 rounded-xl bg-slate-800 border border-slate-700">
          <option value="">Select</option>
          {options.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </select>
      )}
    />
  </div>
);

export default function AddProductPage() {
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { control, handleSubmit, watch, reset, formState: { isValid } } =
    useForm({
      resolver: zodResolver(productSchema),
      mode: "onChange",
      defaultValues: {
        name: "",
        price: 0,
        category: "",
        stock: 0,
        description: "",
      },
    });

  const watchedFields = watch();

  // IMAGE UPLOAD
  const onDrop = useCallback((files) => {
    const validFiles = files.filter(
      (f) => f.type.startsWith("image/") && f.size < 2 * 1024 * 1024
    );

    const imgs = validFiles.map((f) => ({
      file: f,
      preview: URL.createObjectURL(f),
      id: Math.random().toString(36),
    }));

    setImages((prev) => [...prev, ...imgs]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  const removeImage = (i) => {
    setImages((prev) => prev.filter((_, index) => index !== i));
  };

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, [images]);

  // SUBMIT
  const onSubmit = async (data) => {
    try {
      if (images.length === 0) {
        alert("Please upload image");
        return;
      }

      setIsSubmitting(true);
      setUploadProgress(30);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("price", String(data.price)); 
      formData.append("category", data.category);
      formData.append("stock", String(data.stock)); 
      formData.append("description", data.description);

      images.forEach((img) => {
        formData.append("images", img.file);
      });

      const res = await fetch(`${BACKEND_URL}/products`, {
        method: "POST",
        body: formData,
      });

      setUploadProgress(70);

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Upload failed");
      }

      setUploadProgress(100);
      alert("Product Added ✅");

      reset();
      setImages([]);

    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const completion =
    Object.values(watchedFields).filter((v) => v !== "" && v !== 0).length;

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      {/* Progress */}
      <div className="h-2 bg-white/10 rounded-full mb-6">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${(completion / 5) * 100}%` }}
        />
      </div>

      <h1 className="text-3xl mb-6 flex items-center gap-2">
        <Package size={20} /> Add Product
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* FORM */}
        <div className="lg:col-span-2 bg-white/5 p-6 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <RHFFormField control={control} name="name" label="Name" />

            <div className="grid md:grid-cols-2 gap-4">
              <RHFFormField control={control} name="price" label="Price" type="number" />
              <RHFDropDown
                control={control}
                name="category"
                label="Category"
                options={[
                  { key: "electronics", label: "Electronics" },
                  { key: "clothes", label: "Clothes" },
                ]}
              />
            </div>

            <RHFFormField control={control} name="stock" label="Stock" type="number" />
            <RHFFormField control={control} name="description" label="Description" component="textarea" />

            <Button type="submit" disabled={isSubmitting || !isValid}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600">
              {isSubmitting ? (
                <div className="flex gap-2 items-center">
                  <Loader2 className="animate-spin" />
                  {uploadProgress}%
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <CheckCircle size={18} /> Add Product
                </div>
              )}
            </Button>

          </form>
        </div>

        {/* IMAGES */}
        <div className="bg-white/5 p-6 rounded-xl">

          <div {...getRootProps()}
            className="border-2 border-dashed p-6 text-center cursor-pointer rounded-xl">
            <input {...getInputProps()} />
            <Upload />
            <p>Upload Images</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {images.map((img, i) => (
              <div key={img.id} className="relative group">
                <img src={img.preview} className="rounded-lg" />
                <button onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-red-500 p-1 rounded-full">
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}