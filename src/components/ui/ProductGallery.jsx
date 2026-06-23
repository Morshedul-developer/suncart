"use client";

import { useState } from "react";
import Image from "next/image";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="space-y-4">
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
        <Image
          src={selectedImage}
          alt={product.name}
          width={800}
          height={800}
          priority
          className="h-125 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {product.images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(img)}
            className={`group overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              selectedImage === img
                ? "border-black shadow-lg"
                : "border-zinc-200 hover:border-zinc-400"
            }`}
          >
            <Image
              src={img}
              alt={`${product.name}-${index}`}
              width={200}
              height={200}
              className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;