import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import SummerCareTips from "@/components/SummerCareTips";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Products/>
      <SummerCareTips/>
      <Brands/>
    </div>
  );
}
