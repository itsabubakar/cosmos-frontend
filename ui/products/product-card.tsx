import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  src: StaticImageData;
  heading?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  bg: string;
  text?: string;
  bgTwo?: string;
  largerImage?: boolean;
};

const ProductCard = ({
  src,
  heading,
  title,
  subtitle,
  buttonText,
  bg,
  text,
  bgTwo,
  largerImage,
}: Props) => {
  return (
    <div className={`flex mb-4   rounded-lg min-h-[201px] ${bg && bg}`}>
      <div
        className={`${
          largerImage ? "w-1/3" : "w-1/2"
        } flex flex-col py-4 pl-2 pr-2`}
      >
        <h3 className="text-xs">{heading}</h3>
        <p className="text-sm font-bold pt-5">{title}</p>
        <p className="text-sm font-bold pt-1">{subtitle}</p>
        <p className="text-sm">{text}</p>
        <button className="mt-auto w-fit text-[10px] text-white bg-black py-2 px-3 rounded-3xl">
          {buttonText}
        </button>
      </div>
      <div
        className={`${largerImage ? "w-2/3" : "w-1/2"} p-4 ${
          bgTwo ? bgTwo : bg
        }`}
      >
        <Image src={src} alt="product" />
      </div>
    </div>
  );
};

export default ProductCard;
