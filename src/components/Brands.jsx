import { FiSun } from "react-icons/fi";

const Brands = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-4 md:px-0">
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
            <FiSun size={32} />
          </div>
          <h4 className="text-2xl font-semibold">SunShade</h4>
          <p className="text-xs text-[#4F4633]">Premium Eyewear</p>
        </div>
        <div className="border-2 border-[#D3C5AC] rounded-[24px] flex items-center justify-center flex-col gap-4 py-8 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#E7EEFF] flex items-center justify-center">
            <FiSun size={32} />
          </div>
          <h4 className="text-2xl font-semibold">SunShade</h4>
          <p className="text-xs text-[#4F4633]">Premium Eyewear</p>
        </div>
        <div className="border-2 border-[#D3C5AC] rounded-[24px] flex items-center justify-center flex-col gap-4 py-8 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#E7EEFF] flex items-center justify-center">
            <FiSun size={32} />
          </div>
          <h4 className="text-2xl font-semibold">SunShade</h4>
          <p className="text-xs text-[#4F4633]">Premium Eyewear</p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
