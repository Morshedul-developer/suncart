import { Chip } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/hero.png')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl my-10 pl-15">
      <div>
        <Chip className="bg-[#e1c75f] text-[#493f03]" variant="primary">
          <Chip.Label>LIMITED TIME OFFER</Chip.Label>
        </Chip>
        <h1 className="text-4xl font-bold">
          Summer Sale <br />
          <span className="text-[#006591]">50% OFF</span>
        </h1>
        <p className="max-w-115 text-[#4F4633] leading-[28.8px]">
          Gear up for your next adventure with our premium beach collection.
          From high-protection skincare to vibrant tropical wear, we have
          everything you need for the perfect sunny escape.
        </p>
      </div>
    </div>
  );
};

export default Banner;
