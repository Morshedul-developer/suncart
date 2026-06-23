import ProductCard from "@/components/ui/ProductCard";

const ProductsPage = async () => {
  const res = await fetch("https://suncart-inky.vercel.app/products.json", {
    cache: 'no-store'
  });
  const products = await res.json();
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-4 md:px-0 my-20">
      <div className="space-y-2 animate__animated animate__fadeInDown">
        <h3 className="text-2xl md:text-3xl font-bold">
          Explore Summer Essentials
        </h3>

        <p className="text-[#4F4633] text-sm md:text-base">
          Curated collection for your perfect beach day and outdoor adventures.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
