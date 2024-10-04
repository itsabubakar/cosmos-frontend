import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import default styles
import { StaticImageData } from "next/image";
import { Eye } from "@/public/assets/icons";

type Props = {
  autoPlay?: boolean;
  imgSrc: StaticImageData[]; // Accepts an array of StaticImageData
  showNewTag?: boolean; // New optional prop to control "New" tag visibility
};

const ProductSliderTwo = ({ autoPlay, imgSrc, showNewTag }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map through imgSrc and transform it for ImageGallery format
  const images = imgSrc.map((img) => ({
    original: img.src, // Using the 'src' property of StaticImageData
  }));

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative text-center bg-white shadow rounded-xl p-2">
      {/* "New" Tag - Optional */}
      {showNewTag && (
        <div className="absolute top-0 left-0 bg-[#878F8780] text-white text-[10px]  p-1 rounded-sm rounded-tl-xl rounded-br-xl z-10">
          New
        </div>
      )}

      <div className="h-40">
        {/* Image Gallery */}
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
      <div className="flex items-start text-[10px] gap-x-2 pb-2 ">
        <p className="absolute left-0 bg-[#08B02D] text-white w-[50px] font-semibold p-1 rounded-t-sm rounded-bl-sm rounded-br-lg">
          46% off
        </p>
        <p className="mx-auto text-[#08B02D] font-medium pl-4">
          Limited time Deal
        </p>
      </div>

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

      {/* Eye Icon */}
      <div className="flex justify-end -mt-3">
        <Eye />
      </div>
    </div>
  );
};

export default ProductSliderTwo;
