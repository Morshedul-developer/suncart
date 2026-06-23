import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <PopularProducts/>
      <SummerCareTips/>
      <Brands/>
    </div>
  );
}
