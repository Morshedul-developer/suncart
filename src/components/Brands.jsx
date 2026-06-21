
import { FiSun } from "react-icons/fi";
import { LuWind } from "react-icons/lu";
import { MdOutlineShieldMoon, MdOutlineWaterDrop } from "react-icons/md";

const Brands = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-4 md:px-0 mb-30">
      <h3 className="text-2xl md:text-3xl font-bold text-center">
        Our Top Brands
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        <div className="border-2 border-[#D3C5AC] rounded-[24px] flex items-center justify-center flex-col gap-4 py-8 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#E7EEFF] flex items-center justify-center">
            <FiSun size={32} />
          </div>
          <h4 className="text-2xl font-semibold">SunShade</h4>
          <p className="text-xs text-[#4F4633]">Premium Eyewear</p>
        </div>
        <div className="border-2 border-[#D3C5AC] rounded-[24px] flex items-center justify-center flex-col gap-4 py-8 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#E7EEFF] flex items-center justify-center">
            <LuWind size={32} />
          </div>
          <h4 className="text-2xl font-semibold">Breeze</h4>
          <p className="text-xs text-[#4F4633]">Lightweight Apparel</p>
        </div>
        <div className="border-2 border-[#D3C5AC] rounded-[24px] flex items-center justify-center flex-col gap-4 py-8 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#E7EEFF] flex items-center justify-center">
            <MdOutlineShieldMoon size={34} />
          </div>
          <h4 className="text-2xl font-semibold">GlowGuard</h4>
          <p className="text-xs text-[#4F4633]">Skincare Labs</p>
        </div>
        <div className="border-2 border-[#D3C5AC] rounded-[24px] flex items-center justify-center flex-col gap-4 py-8 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#E7EEFF] flex items-center justify-center">
            <MdOutlineWaterDrop size={34} />
          </div>
          <h4 className="text-2xl font-semibold">AquaPack</h4>
          <p className="text-xs text-[#4F4633]">Waterproof Gear</p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
