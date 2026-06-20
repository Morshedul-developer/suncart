import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const PopularCareTips = () => {
  return (
    <div>
      <h3>Summer Care Tips</h3>
      <p>Stay protected and hydrated this vacation season</p>
      <div className="flex items-center gap-8 rounded-2xl overflow-hidden">
        <div>
          <Image src={"/skin-1.png"} alt="skin-1" width={200} height={200} />
        </div>
        <div>
          <span>SKINCARE</span>
          <strong>
            Ultimate UV
            <br />
            Shielding
          </strong>
          <p>
            Learn why reapplication every 2 hours is crucial for maintaining a
            healthy summer glow without the burn. Discover the best SPF types
            for your skin.
          </p>
          <p className="flex items-center gap-2">Read More <BsArrowRight /></p>
        </div>
      </div>
    </div>
  );
};

export default PopularCareTips;
