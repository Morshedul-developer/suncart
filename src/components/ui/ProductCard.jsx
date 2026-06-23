import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden bg-zinc-100">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <span
          className={`absolute left-4 top-4 rounded-full px-4 py-1 text-xs font-medium backdrop-blur-md border
    ${
      product.category === "Accessories"
        ? "bg-sky-50/80 text-sky-700 border-sky-200"
        : product.category === "Skincare"
          ? "bg-rose-50/80 text-rose-700 border-rose-200"
          : product.category === "Outdoor"
            ? "bg-emerald-50/80 text-emerald-700 border-emerald-200"
            : product.category === "Electronics"
              ? "bg-indigo-50/80 text-indigo-700 border-indigo-200"
              : product.category === "Travel"
                ? "bg-amber-50/80 text-amber-700 border-amber-200"
                : product.category === "Footwear"
                  ? "bg-violet-50/80 text-violet-700 border-violet-200"
                  : "bg-zinc-50/80 text-zinc-700 border-zinc-200"
    }`}
        >
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm text-zinc-500">{product.brand}</p>

          <h3 className="mt-1 text-xl font-bold text-zinc-900 line-clamp-1">
            {product.name}
          </h3>
        </div>

        <p className="line-clamp-2 text-sm text-zinc-600">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating}</span>

          <span className="text-zinc-400">({product.stock} in stock)</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-zinc-900">
              ${product.price}
            </span>
          </div>

          <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}
