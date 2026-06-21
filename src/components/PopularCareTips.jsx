import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const PopularCareTips = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold">Summer Care Tips</h3>
        <p className="text-[#4F4633]">
          Stay protected and hydrated this vacation season
        </p>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-8 rounded-2xl overflow-hidden border border-[#F9E287] shadow-md">
          <div>
            <Image src={"/skin-1.png"} alt="skin-1" width={400} height={200} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#4F4633]">SKINCARE</p>
            <h4 className="text-2xl font-semibold">
              Ultimate UV
              <br />
              Shielding
            </h4>
            <p className="leading-6 text-[#4F4633]">
              Learn why reapplication every 2 hours is crucial for maintaining a
              healthy summer glow without the burn. Discover the best SPF types
              for your skin.
            </p>
            <p className="group flex items-center gap-2 text-[#006591] font-bold cursor-pointer transition-all duration-300 hover:text-[#004b6b]">
              Read More
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 rounded-2xl overflow-hidden border border-[#F9E287] shadow-md">
          <div>
            <Image src={"/skin-2.png"} alt="skin-2" width={440} height={200} className="" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#4F4633]">SKINCARE</p>
            <h4 className="text-2xl font-semibold">
              Ultimate UV
              <br />
              Shielding
            </h4>
            <p className="leading-6 text-[#4F4633]">
              Learn why reapplication every 2 hours is crucial for maintaining a
              healthy summer glow without the burn. Discover the best SPF types
              for your skin.
            </p>
            <p className="group flex items-center gap-2 text-[#006591] font-bold cursor-pointer transition-all duration-300 hover:text-[#004b6b]">
              Read More
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCareTips;
