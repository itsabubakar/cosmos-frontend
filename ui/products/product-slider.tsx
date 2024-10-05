import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import default styles
import { StaticImageData } from "next/image";
import { Heart } from "@/public/assets/icons";

type Props = {
  title: string;
  autoPlay?: boolean;
  price: string;
  imgSrc: StaticImageData[]; // Accepts an array of StaticImageData
};

const ProductSlider = ({ title, autoPlay, price, imgSrc }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map through imgSrc and transform it for ImageGallery format
  const images = imgSrc.map((img) => ({
    original: img.src, // Using the 'src' property of StaticImageData
  }));

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" bg-white shadow  p-2 ">
      {/* Image Gallery */}
      <div className="h-40">
        <ImageGallery
          items={images} // Use the transformed image array
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={autoPlay}
          onSlide={handleSlideChange}
          slideDuration={500} // Transition speed (ms)
          slideInterval={7000} // Time between slides (ms)
          showBullets={false} // Disable default bullets
        />
      </div>

      {/* Custom Title and Price */}
      <h3 className="text-xs text-[#393939] pt-4 pl-2 pb-1">{title}</h3>
      <p className="text-lg font-medium flex flex-row gap-1 pl-2">
        <span className="text-xs font-light">N </span> {price}
      </p>

      {/* Custom Pagination */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1  rounded-full mx-1 ${
              currentIndex === index
                ? autoPlay
                  ? "bg-yellow-500" // Yellow dot when autoPlay is true
                  : "bg-black" // Black dot when autoPlay is false
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Heart Icon */}
      <div className="flex justify-end -mt-2">
        <Heart />
      </div>
    </div>
  );
};

export default ProductSlider;
