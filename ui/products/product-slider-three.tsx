import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import default styles
import { StaticImageData } from "next/image";
import Image from "next/image"; // Import next/image for optimized images
import { Mute, PlayVid, Stars } from "@/public/assets/icons";

type Props = {
  imgSrc: StaticImageData[]; // Accepts an array of StaticImageData
  productImage: StaticImageData; // New prop for product image
};

const ProductSliderThree = ({ imgSrc, productImage }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map through imgSrc and transform it for ImageGallery format
  const images = imgSrc.map((img) => ({
    original: img.src, // Using the 'src' property of StaticImageData
  }));

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="text-center border pb-2 bg-white  rounded-2xl shadow-lg">
      {/* Video Ad Section */}
      <div className="relative min-h-[150px]  mb-4">
        {/* Product Image */}
        <Image
          src={productImage}
          alt="Product"
          className="w-full h-full object-cover  rounded-t-lg"
        />

        {/* Play Button (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="  rounded-full">
            <PlayVid />
          </button>
        </div>

        {/* Mute Button (Bottom-left) */}
        <button className="absolute bottom-3 left-3">
          <Mute />
        </button>

        {/* Product Name (Top-right) */}
        <div className="absolute top-2 right-2  text-[#F5E518CC] text-[17px] ">
          Gold
        </div>
      </div>

      {/* Product Slider Section */}
      <div className="flex gap-x-3 p-2">
        {/* Image Gallery */}
        <div className="w-1/3">
          <ImageGallery
            items={images} // Use the transformed image array
            showNav={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            onSlide={handleSlideChange}
            slideDuration={500} // Transition speed (ms)
            slideInterval={7000} // Time between slides (ms)
            additionalClass="custom-image-gallery" // Add a custom class for styling
            showBullets={false} // Disable default bullets
          />

          {/* Custom Pagination */}
          <div className="flex justify-center mt-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-5 h-[2px] mx-1 ${
                  currentIndex === index
                    ? true
                      ? "bg-black" // Yellow dot when autoPlay is true
                      : "bg-black" // Black dot when autoPlay is false
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="bg-[#FED813] px-1 py-2 text-[10px] w-full rounded-2xl mt-3">
            Add to cart
          </button>
        </div>

        {/* Product Info Section */}
        <div className="w-2/3 text-left">
          <h3 className="text-sm">
            Gold Coconut oil pulling with 7 Essential Oils and Vitamin D3, E,
            K2, A ...
          </h3>
          <div className="inline-flex flex-col gap-y-1 mb-1">
            <p className="text-[9px] w-fit text-[#4D4646] bg-gray-100 inline rounded p-1">
              Coconut Mint + Vitamins
            </p>
            <p className="text-[9px] w-fit text-[#4D4646] bg-gray-100 inline rounded p-1">
              Pack of 1
            </p>
          </div>

          <div className="flex gap-x-2 text-[9px] items-center mb-1">
            <p className="text-blue-500">4.4</p>
            <Stars />
            <p className="text-gray-400">(12,000)</p>
          </div>

          <p className="text-[10px] font-thin">100K + bought in past month</p>
          <p className="bg-[#08B02D] text-[10px] text-white inline font-semibold p-1 rounded-t-sm rounded-bl-sm rounded-br-lg">
            Limited time Deal
          </p>
          <p className="text-2xl flex ">
            <span className="text-sm">N</span>2,500
          </p>
          <div className="flex gap-x-3 text-[10px]">
            <p>Delivery</p>
            <p className="font-semibold">Tue, Feb 13</p>
          </div>
          <p className="text-[10px]">
            Or fastest delivery{" "}
            <span className="font-semibold">Wed, Feb 7</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderThree;
