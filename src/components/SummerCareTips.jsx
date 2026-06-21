"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import "animate.css";

const tips = [
  {
    id: 1,
    category: "SKINCARE",
    title: "Ultimate UV Shielding",
    image: "https://res.cloudinary.com/dsgnat4bt/image/upload/q_auto/f_auto/v1782035961/HQyBG2r5tgrACzFIRjE1sYkWg9tEJ1oDjb_0S0cAEd-jh5y2FEbxs-nZehfokJzeRPi5GfTu3w6vZG4XVuxAh30BxXiUdRUVi0WhRKVIYiD0Z5g3WTlEwpuZS_PDsi-Qm3O09kfUpZDkud2EOtFyZVmkrPUacF9jHgq6cCOS_Mstc0JXxqtldA6nRHPB7f7d_az641o.jpg",
    description:
      "Learn why reapplication every 2 hours is crucial for maintaining a healthy summer glow without the burn. Discover the best SPF types for your skin.",
  },
  {
    id: 2,
    category: "SKINCARE",
    title: "Hydration Essentials",
    image: "https://res.cloudinary.com/dsgnat4bt/image/upload/q_auto/f_auto/v1782036042/photo-1556228578-8c89e6adf883_iemoba.jpg",
    description:
      "Keep your skin fresh and radiant during hot summer days. Explore hydration tips and products that help lock in moisture all day long.",
  },
];

const SummerCareTips = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 mb-20">
      <div className="space-y-8">
        <div className="space-y-2 animate__animated animate__fadeInDown">
          <h3 className="text-2xl md:text-3xl font-bold">
            Summer Care Tips
          </h3>

          <p className="text-[#4F4633] text-sm md:text-base">
            Stay protected and hydrated this vacation season
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="group animate__animated animate__fadeInUp overflow-hidden rounded-2xl border border-[#F9E287] bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative h-60 md:h-auto md:w-[42%] overflow-hidden">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center p-6">
                  <p className="text-xs font-semibold tracking-wider text-[#4F4633]">
                    {tip.category}
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-[#1F1F1F]">
                    {tip.title}
                  </h4>

                  <p className="mt-3 leading-7 text-[#4F4633]">
                    {tip.description}
                  </p>

                  <button className="group/readmore mt-5 flex w-fit items-center gap-2 font-bold text-[#006591] transition-colors duration-300 hover:text-[#004b6b]">
                    <span className="relative">
                      Read More

                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[#006591] transition-all duration-300 group-hover/readmore:w-full"></span>
                    </span>

                    <FaArrowRight className="transition-transform duration-300 group-hover/readmore:translate-x-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;