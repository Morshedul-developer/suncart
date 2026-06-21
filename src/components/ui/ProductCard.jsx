import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-1 text-xs font-medium text-white">
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
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-medium">{product.rating}</span>

          <span className="text-zinc-400">
            ({product.stock} in stock)
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-zinc-900">
              ${product.price}
            </span>
          </div>

          <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}