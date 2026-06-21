import { FiSun } from "react-icons/fi";
import { LuWind } from "react-icons/lu";
import { MdOutlineShieldMoon, MdOutlineWaterDrop } from "react-icons/md";

const brands = [
  {
    icon: <FiSun size={32} />,
    name: "SunShade",
    subtitle: "Premium Eyewear",
  },
  {
    icon: <LuWind size={32} />,
    name: "Breeze",
    subtitle: "Lightweight Apparel",
  },
  {
    icon: <MdOutlineShieldMoon size={34} />,
    name: "GlowGuard",
    subtitle: "Skincare Labs",
  },
  {
    icon: <MdOutlineWaterDrop size={34} />,
    name: "AquaPack",
    subtitle: "Waterproof Gear",
  },
];

const Brands = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-4 md:px-0 mb-30">
      <h3 className="text-2xl md:text-3xl font-bold text-center">
        Our Top Brands
      </h3>

      <div className="overflow-hidden w-full">
  <div className="slider-track">
    {[...brands, ...brands].map((brand, index) => (
      <div
        key={index}
        className="w-70 border-2 border-[#D3C5AC] rounded-[24px] flex items-center justify-center flex-col gap-4 py-8 shadow-sm shrink-0"
      >
        <div className="w-20 h-20 rounded-full bg-[#E7EEFF] flex items-center justify-center">
          {brand.icon}
        </div>

        <h4 className="text-2xl font-semibold">{brand.name}</h4>
        <p className="text-xs text-[#4F4633]">{brand.subtitle}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Brands;