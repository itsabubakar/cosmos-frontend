import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalLink = ({
  link,
  title,
  src,
}: {
  link: string;
  title: string;
  src: StaticImageData;
}) => {
  return (
    <Link
      className="text-[#000000CC]  px-1 py-1  bg-white/80 backdrop-blur-sm rounded-lg inline-block mx-1 "
      href={link}
    >
      {/* Updated Image component with fixed width and height */}
      <Image
        alt={title}
        src={src}
        width={130}
        height={136}
        className="object-cover rounded-t-2xl"
      />
      <div className="border-x border-b pt-3 -mt-3 rounded-b-xl">
        <p className="text-center text-[12px] font-medium pb-1 pt-2">{title}</p>
        <p className="text-center text-[11px] ">1 viewed</p>
      </div>
    </Link>
  );
};

export default HorizontalLink;
