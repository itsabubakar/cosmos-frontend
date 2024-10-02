import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import default styles
import { StaticImageData } from "next/image";

type Props = {
  autoPlay?: boolean;
  imgSrc: StaticImageData[]; // Accepts an array of StaticImageData
  title: string;
};

const ProductSliderFIve = ({ autoPlay, imgSrc, title }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map through imgSrc and transform it for ImageGallery format
  const images = imgSrc.map((img) => ({
    original: img.src, // Using the 'src' property of StaticImageData
  }));

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" text-center  rounded-lg">
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

      {/* Custom Title*/}
      <div className="pb-2 border-l  mt-4">
        <p className="text-sm text-center">{title}</p>
      </div>

      {/* Custom Pagination */}
      <div className="flex  justify-center pb-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 -mt-14 z-0  rounded-full mx-1 ${
              currentIndex === index
                ? autoPlay
                  ? "bg-yellow-500" // Yellow dot when autoPlay is true
                  : "bg-[#2B9FE1]" // Black dot when autoPlay is false
                : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSliderFIve;
