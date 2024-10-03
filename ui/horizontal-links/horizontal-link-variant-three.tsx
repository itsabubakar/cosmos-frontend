import { Heart } from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalLinkVariantThree = ({
  topLink,
  bottomLink,
}: {
  topLink: {
    title: string;
    src: StaticImageData;
    link: string;
    quantity?: number;
  };
  bottomLink: {
    title: string;
    src: StaticImageData;
    link: string;
    quantity?: number;
  };
}) => {
  return (
    <div className="flex flex-col items-centers">
      {/* Top Link */}
      <Link
        className="text-[#000000CC] mb-2  inline-block relative border-b px-7"
        href={topLink.link}
      >
        <div className="h-[105px]">
          <Image
            alt={topLink.title}
            src={topLink.src}
            width={130}
            height={136}
            className="object-cover"
          />
        </div>
        <div className="inline-flex items-center gap-x-2">
          <p className="bg-[#08B02D] w-[58.41px] text-xs text-white inline py-1 rounded-t-sm rounded-bl-sm rounded-br-lg text-center  font-medium mb-2 mt-2 border-b px-1 border-b-[#8F8F8F26]">
            15% off
          </p>
          <p className="text-[#08B02D] text-[13px]">Deal</p>
        </div>

        <div className="absolute top-0  bg-[#FFFFFF99] right-2  shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-xs rounded-full p-2">
          <Heart />
        </div>
      </Link>

      {/* Bottom Link */}
      <Link
        className="text-[#000000CC] inline-block  relative  mt-10 px-7"
        href={bottomLink.link}
      >
        <div className="h-[105px]">
          <Image
            alt={bottomLink.title}
            src={bottomLink.src}
            width={130}
            height={136}
            className="object-cover"
          />
        </div>

        <div className="inline-flex items-center gap-x-2">
          <p className="bg-[#08B02D]  w-[65px] text-xs text-white inline p-1 rounded-t-sm rounded-bl-sm rounded-br-lg text-center  font-medium mb-2 mt-2 border-b border-b-[#8F8F8F26]">
            15% off
          </p>
          <p className="text-[#08B02D] text-sm">Deal</p>
        </div>

        <div className="absolute top-0 -right-5 bg-white/30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-xs rounded-full p-2">
          <Heart />
        </div>
      </Link>
    </div>
  );
};

export default HorizontalLinkVariantThree;
