import Link from "next/link";
import ProductCard from "./ui/ProductCard";
import { FaArrowRight } from "react-icons/fa";

const PopularProducts = async () => {
  const res = await fetch("https://suncart-inky.vercel.app/products.json");
  const products = await res.json();
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-4 md:px-0 py-10 md:my-20">
      <div className="flex justify-between">
        <div className="space-y-2 animate__animated animate__fadeInDown">
          <h3 className="text-2xl md:text-3xl font-bold">Popular Products</h3>

          <p className="text-[#4F4633] text-sm md:text-base">
            Top picks for your summer vibes
          </p>
        </div>
        {/* view all button */}
        <div>
          <Link href={'/products'}>
          <button className="group/readmore mt-5 flex w-fit items-center gap-2 font-bold text-[#006591] transition-colors duration-300 hover:text-[#004b6b] cursor-pointer">
            <span className="relative">
              View All Products
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[#006591] transition-all duration-300 group-hover/readmore:w-full"></span>
            </span>

            <FaArrowRight className="transition-transform duration-300 group-hover/readmore:translate-x-2" />
          </button></Link>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeInUp">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
