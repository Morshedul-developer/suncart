import ProductCard from "./ui/ProductCard";

const Products = async() => {
    const res = await fetch("https://suncart-inky.vercel.app/products.json");
    const products = await res.json();
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-4 md:px-0 my-20">
      <div className="space-y-2 animate__animated animate__fadeInDown">
          <h3 className="text-2xl md:text-3xl font-bold">
            Popular Products
          </h3>

          <p className="text-[#4F4633] text-sm md:text-base">
            Top picks for your summer vibes
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {products.slice(0,3).map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
    </section>
  );
};

export default Products;
