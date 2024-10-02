import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalLinkVariantThree = ({
  topLink,
  bottomLink,
}: {
  topLink: {
    src: StaticImageData;
    link: string;
    logo?: StaticImageData;
  };
  bottomLink: {
    src: StaticImageData;
    link: string;
    logo?: StaticImageData;
  };
}) => {
  return (
    <div className="flex flex-col items-centers">
      {/* Top Link */}
      <Link
        className="text-[#000000CC] mb-6    px-2 inline-block relative w-[220px] h-[200px] "
        href={topLink.link}
      >
        <div className="bg-[#C4C4C417] p-2">
          <Image
            alt={""}
            src={topLink.src}
            className="object-cover h-[150px] w-full"
          />
        </div>
        {topLink.logo && (
          <div className="flex justify-center mt-2 ">
            <Image
              alt={""}
              src={topLink.logo}
              className="object-cover w-12 h-4 "
            />
          </div>
        )}
      </Link>

      {/* Bottom Link */}
      <Link
        className="text-[#000000CC] inline-block relative px-2  h-[200px] w-[220px] "
        href={bottomLink.link}
      >
        <div className="bg-[#C4C4C417] p-2">
          <Image
            alt={""}
            src={bottomLink.src}
            className="object-cover h-[150px] w-full"
          />
        </div>
        {bottomLink.logo && (
          <div className="flex justify-center">
            <Image
              alt={""}
              src={bottomLink.logo}
              className="object-cover mt-2 w-12 h-4"
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default HorizontalLinkVariantThree;
