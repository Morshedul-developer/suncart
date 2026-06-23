import { Star, ShieldCheck, Truck, Package } from "lucide-react";
import { Button } from "@heroui/react";
import ProductGallery from "@/components/ui/ProductGallery";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://suncart-inky.vercel.app/products.json", {
    cache: "no-store",
  });

  const products = await res.json();

  const product = products.find((product) => product.id == id);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-12 pb-20">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <ProductGallery product={product} />

        {/* Content */}
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-700">
            {product.category}
          </span>

          <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{product.rating}</span>
            </div>

            <span className="text-zinc-400">|</span>

            <span className="text-zinc-600">
              Brand: <span className="font-semibold">{product.brand}</span>
            </span>
          </div>

          <div className="mt-6">
            <h2 className="text-5xl font-bold text-zinc-900">
              ${product.price}
            </h2>

            <p className="mt-2 text-sm font-medium text-emerald-600">
              In Stock • Ready to Ship
            </p>
          </div>

          <p className="mt-8 leading-8 text-zinc-600">{product.description}</p>

          <div className="mt-6">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              {product.stock} Items Available
            </span>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <ShieldCheck className="mb-3" />
              <p className="text-sm font-semibold">Premium Quality</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Truck className="mb-3" />
              <p className="text-sm font-semibold">Free Shipping</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Package className="mb-3" />
              <p className="text-sm font-semibold">Secure Packaging</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              radius="lg"
              className="h-14 w-full sm:flex-1 bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
            >
              Add To Cart
            </Button>

            <Button
              size="lg"
              radius="lg"
              variant="bordered"
              className="h-14 w-full sm:flex-1 border-zinc-300 font-semibold transition-all duration-300 hover:scale-[1.02] hover:border-black hover:shadow-lg"
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
