import Image from "next/image";
import { Star, ShieldCheck, Truck, Package } from "lucide-react";
import { Button } from "@heroui/react";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://suncart-inky.vercel.app/products.json");
  const products = await res.json();
  const product = products.find((product) => product.id == id);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-12 pb-20">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-100">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-2xl border border-zinc-200 cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-24 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
            {product.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-zinc-900">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{product.rating}</span>
            </div>

            <span className="text-zinc-400">•</span>

            <span className="text-zinc-600">Brand: {product.brand}</span>
          </div>

          <h2 className="mt-6 text-5xl font-bold text-zinc-900">
            ${product.price}
          </h2>

          <p className="mt-6 leading-8 text-zinc-600">{product.description}</p>

          <div className="mt-6">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              {product.stock} Items Available
            </span>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <ShieldCheck className="mb-2" />
              <p className="text-sm font-medium">Premium Quality</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-4">
              <Truck className="mb-2" />
              <p className="text-sm font-medium">Free Shipping</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-4">
              <Package className="mb-2" />
              <p className="text-sm font-medium">Secure Packaging</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              radius="lg"
              className="w-full sm:w-1/2 h-14 bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              Add To Cart
            </Button>

            <Button
              size="lg"
              radius="lg"
              variant="outline"
              className="w-full sm:w-1/2 h-14 border-zinc-300 bg-white font-semibold text-zinc-900 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-900 hover:bg-zinc-50 hover:shadow-lg"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
