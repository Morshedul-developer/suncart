"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);

  return (
    <div className="space-y-5">
      {/* Main Image */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
        <Image
          src={selectedImage}
          alt={product.name}
          width={800}
          height={800}
          priority
          className="h-75 md:h-125 w-full object-center md:object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {product.images.map((img, index) => (
          <Button
            key={index}
            onPress={() => setSelectedImage(img)}
            radius="lg"
            className={`
              group
              relative
              p-0
              min-w-0
              h-auto
              overflow-hidden
              cursor-pointer
              border-2
              transition-all
              duration-300
              ${
                selectedImage === img
                  ? "border-black shadow-xl scale-[1.03]"
                  : "border-zinc-200 hover:border-zinc-400 hover:shadow-md"
              }
            `}
          >
            <Image
              src={img}
              alt={`${product.name}-${index + 1}`}
              width={200}
              height={200}
              className="h-16 md:h-24 w-40 object-center md:object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {selectedImage === img && (
              <div className="absolute inset-0 ring-2 ring-black rounded-xl pointer-events-none" />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
