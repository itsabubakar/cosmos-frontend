import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalLinkVariantTwo = ({
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
    <div className="flex flex-col items-center">
      {/* Top Link */}
      <Link
        className="text-[#000000CC] mb-3 inline-block relative mx-1 h-[95px] w-[95px]"
        href={topLink.link}
      >
        <Image
          alt={topLink.title}
          src={topLink.src}
          width={130}
          height={136}
          className="object-cover rounded-full"
        />
        <p className="text-center text-[12px] font-medium pb-1 pt-2">
          {topLink.title}
        </p>

        {/* Quantity Badge for Top Link */}
        {topLink.quantity && (
          <span className="absolute top-0 -right-5 bg-white text-[#2B9FE1] text-[13px] rounded-full px-2 py-1">
            {topLink.quantity}
          </span>
        )}
      </Link>

      {/* Bottom Link */}
      <Link
        className="text-[#000000CC] inline-block relative mx-1 h-[95px] w-[95px] mt-4"
        href={bottomLink.link}
      >
        <Image
          alt={bottomLink.title}
          src={bottomLink.src}
          width={130}
          height={136}
          className="object-cover rounded-full"
        />
        <p className="text-center text-[13px] font-medium pb-1 pt-2">
          {bottomLink.title}
        </p>

        {/* Quantity Badge for Bottom Link */}
        {bottomLink.quantity && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {bottomLink.quantity}
          </span>
        )}
      </Link>
    </div>
  );
};

export default HorizontalLinkVariantTwo;
