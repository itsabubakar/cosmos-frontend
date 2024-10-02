import { CartPlus } from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  price: string;
  title: string;
  imgSrc: StaticImageData;
};

const ProductCardTwo = ({ price, title, imgSrc }: Props) => {
  return (
    <div className="flex items-center gap-x-4 w-full mb-5">
      <Image width={64} height={76} alt="Hey" src={imgSrc} />
      <div className=" w-full">
        <h3 className="text-sm">{title}</h3>
        <div className="flex justify-between border-[#7F7F7F66] border-b border-dashed pb-2">
          <p className="text-xl inline-flex gap-x-1 font-semibold">
            <span className="text-[11px]">N </span>
            {price}
          </p>
        </div>
      </div>
      <p className="items-end self-end">
        <CartPlus />
      </p>
    </div>
  );
};

export default ProductCardTwo;
