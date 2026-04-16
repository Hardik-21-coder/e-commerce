"use client";

import { useDispatch } from "react-redux";
import { Button, Card, Chip } from "@heroui/react";
import { addToCart } from "@/store/cartSlice";

export function ProductCard({ id, name, price, tag, imageSrc, imageAlt }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        price: Number(price?.toString().replace(/[^0-9.]/g, "")) || 0,
        category: tag,
        description: imageAlt,
        images: imageSrc ? [imageSrc.split("/").pop()] : [],
      })
    );
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1" variant="default">
      <Card.Header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Card.Title className="truncate text-lg font-bold text-gray-900">{name}</Card.Title>
          <Card.Description className="mt-2 text-base font-bold text-blue-600 text-foreground/80">
            {price}
          </Card.Description>
        </div>
        <Chip size="sm" variant="secondary" className="flex-shrink-0 bg-green-100 text-green-700 font-semibold">
          {tag}
        </Chip>
      </Card.Header>
      <Card.Content>
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-gray-50">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.08]"
            />
          ) : null}
        </div>
      </Card.Content>
      <Card.Footer className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Add to cart
        </button>
        <Button size="sm" variant="outline" fullWidth>
          View
        </Button>
      </Card.Footer>
    </Card>
  );
}
