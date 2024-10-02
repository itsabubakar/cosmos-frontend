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
  };
  bottomLink: {
    src: StaticImageData;
    link: string;
  };
}) => {
  return (
    <div className="flex flex-col items-centers">
      {/* Top Link */}
      <Link
        className="text-[#000000CC] mb-10 pb-2  border-b px-2 inline-block relative w-[220px] h-[200px] "
        href={topLink.link}
      >
        <Image
          alt={""}
          src={topLink.src}
          className="object-cover h-[150px] w-full"
        />
      </Link>

      {/* Bottom Link */}
      <Link
        className="text-[#000000CC] inline-block relative  h-[200px] w-[220px] mt-4"
        href={bottomLink.link}
      >
        <Image
          alt={""}
          src={bottomLink.src}
          width={130}
          height={136}
          className="object-cover h-[150px] w-full"
        />
      </Link>
    </div>
  );
};

export default HorizontalLinkVariantThree;
