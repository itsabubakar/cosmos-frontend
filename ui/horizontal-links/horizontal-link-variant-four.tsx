import { PlayVid } from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import React from "react";

const HorizontalLinkVariantFour = ({
  img,
  title,
  subtitle,
}: {
  title: string;
  img: StaticImageData;
  subtitle: string;
}) => {
  return (
    <div className="min-w-[244px]">
      {/* Video Ad Section */}
      <div className="relative ">
        {/* Product Image */}
        <Image
          src={img}
          alt="Product"
          className="w-full h-[154px] object-cover"
        />

        {/* Play Button (Centered) */}
        <div className="absolute  inset-0 flex items-center justify-center">
          <button className="  rounded-full">
            <PlayVid />
          </button>
        </div>
      </div>

      <div className="border rounded-b-lg p-4 -mt-2">
        <h2 className="font-semibold pb-1 text-[15px]">{title}</h2>
        <p className="mb-5 text-[11px]">{subtitle}</p>
        <button className="text-[10px] border rounded-full py-1 px-3">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default HorizontalLinkVariantFour;
