import {
  Care,
  ChevronDown,
  Radio,
  Temperature,
  YellowMapIcon,
} from "@/public/assets/icons";
import {
  Car,
  Doctor,
  Groceries,
  HandBags,
  Pampers,
  Shopping,
  Sports,
  Watch,
  Woman,
  Women,
} from "@/public/assets/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { SetStateAction, useRef, useState } from "react";
import Slider from "react-slick";

const Hero = () => {
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
        className="text-[#000000CC] w-[139px] px-1 py-1   bg-[#FFFFFF8C] backdrop-blur-[10px] rounded-lg inline-block mx-1 h-[175px]"
        href={link}
      >
        <p className="text-center text-[13px] font-medium pb-1">{title}</p>
        {/* Updated Image component with fixed width and height */}
        <Image
          alt={title}
          src={src}
          width={130}
          height={136}
          className="object-cover"
        />
      </Link>
    );
  };
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
  const [autoplay, setAutoplay] = useState(false); // Track autoplay state
  const sliderRef = useRef<Slider | null>(null); // Create a reference to the Slider instance
  const toggleAutoplay = () => {
    if (autoplay) {
      sliderRef.current?.slickPause(); // Pause the slider if autoplay is active
    } else {
      sliderRef.current?.slickPlay(); // Resume the slider if autoplay is inactive
    }
    setAutoplay(!autoplay); // Toggle autoplay state
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    waitForAnimate: true,
    arrows: false,
    autoplay: autoplay, // Use autoplay state to control autoplay
    autoplaySpeed: 1000,

    // Update activeIndex before slide change
    beforeChange: (current: unknown, next: SetStateAction<number>) =>
      setActiveIndex(next),

    customPaging: (i: number) => (
      <div className=" items-center flex justify-center -mt-60">
        {/* Use Dot component with custom props based on active state */}
        {activeIndex === i ? (
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3" stroke="#DDFFD1" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            width="4"
            height="5"
            viewBox="0 0 4 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 2.04092C3.5 2.90154 2.81893 3.58184 2 3.58184C1.18107 3.58184 0.5 2.90154 0.5 2.04092C0.5 1.1803 1.18107 0.5 2 0.5C2.81893 0.5 3.5 1.1803 3.5 2.04092Z"
              fill="#989898"
              fillOpacity="0.5"
              stroke="white"
            />
          </svg>
        )}
      </div>
    ),
  };
  return (
    <div className="mt-36 relative">
      <div className="flex gap-x-8 absolute top-5 px-4 w-full z-10 ">
        <div className="flex gap-x-1 items-center">
          <YellowMapIcon />
          <p className="text-white text-xs">Deliver to</p>
          <div className="self-center mt-1">
            <ChevronDown />
          </div>
        </div>
        <div className="ml-auto">
          <Radio />
        </div>
        <div className="flex text-xs text-white items-center gap-x-1">
          <Temperature />
          <p>24c</p>
        </div>
      </div>
      <Link
        href={"/"}
        className="bg-[#72727240] text-[9px] absolute top-40  -right-14 text-white -rotate-90 w-fit z-10 justify-between flex rounded-t-md  px-2 items-center"
      >
        <p className="text-white font-semibold pr-2">HOW MAY I HELP YOU</p>
        <span className="rotate-90 ">
          <Care fill="white" />
        </span>
      </Link>
      <Slider ref={sliderRef} {...settings}>
        {/* Render slides */}
        <div>
          <Image className="w-full" src={Woman} alt="woman" />
        </div>
        <div>
          <Image src={Women} alt="woman" />
        </div>
        <div>
          <Image src={Shopping} alt="woman" />
        </div>
        <div>
          <Image src={Sports} alt="woman" />
        </div>
      </Slider>
      <div>
        {/* Autoplay Toggle Button */}
        <button
          className="bottom-[216px] right-[30%] p-2 absolute text-white rounded-md"
          onClick={toggleAutoplay} // Toggle autoplay state
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.94607 0H2.27107C1.82683 0 1.40079 0.166674 1.08667 0.463357C0.772542 0.76004 0.596069 1.16243 0.596069 1.582V14.238C0.596069 14.6576 0.772542 15.06 1.08667 15.3566C1.40079 15.6533 1.82683 15.82 2.27107 15.82H3.94607C4.39031 15.82 4.81635 15.6533 5.13047 15.3566C5.4446 15.06 5.62107 14.6576 5.62107 14.238V1.582C5.62107 1.16243 5.4446 0.76004 5.13047 0.463357C4.81635 0.166674 4.39031 0 3.94607 0ZM12.3211 0H10.6461C10.2018 0 9.77579 0.166674 9.46167 0.463357C9.14754 0.76004 8.97107 1.16243 8.97107 1.582V14.238C8.97107 14.6576 9.14754 15.06 9.46167 15.3566C9.77579 15.6533 10.2018 15.82 10.6461 15.82H12.3211C12.7653 15.82 13.1913 15.6533 13.5055 15.3566C13.8196 15.06 13.9961 14.6576 13.9961 14.238V1.582C13.9961 1.16243 13.8196 0.76004 13.5055 0.463357C13.1913 0.166674 12.7653 0 12.3211 0Z"
              fill="white"
              fill-opacity="0.8"
            />
            <path
              d="M2.27107 0.4H3.94607C4.29136 0.4 4.61823 0.529763 4.85582 0.754157C5.09263 0.977819 5.22107 1.27613 5.22107 1.582V14.238C5.22107 14.5439 5.09263 14.8422 4.85582 15.0658C4.61823 15.2902 4.29136 15.42 3.94607 15.42H2.27107C1.92578 15.42 1.59891 15.2902 1.36132 15.0658C1.12451 14.8422 0.996069 14.5439 0.996069 14.238V1.582C0.996069 1.27613 1.12451 0.97782 1.36132 0.754157C1.59891 0.529763 1.92578 0.4 2.27107 0.4ZM10.6461 0.4H12.3211C12.6664 0.4 12.9932 0.529763 13.2308 0.754157C13.4676 0.97782 13.5961 1.27613 13.5961 1.582V14.238C13.5961 14.5439 13.4676 14.8422 13.2308 15.0658C12.9932 15.2902 12.6664 15.42 12.3211 15.42H10.6461C10.3008 15.42 9.97391 15.2902 9.73632 15.0658C9.49951 14.8422 9.37107 14.5439 9.37107 14.238V1.582C9.37107 1.27613 9.49951 0.97782 9.73632 0.754158C9.97391 0.529763 10.3008 0.4 10.6461 0.4Z"
              stroke="black"
              stroke-opacity="0.4"
              strokeWidth="0.8"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="overflow-x-auto whitespace-nowrap  py-4 scrollbar-none">
          <HorizontalLink title={"Deals"} src={Doctor} link="/" />
          <HorizontalLink title={"Groceries"} src={Groceries} link="/" />
          <HorizontalLink title={"Hand bags"} src={HandBags} link="/" />
          <HorizontalLink title={"Automobile"} src={Car} link="/" />
          <HorizontalLink title={"Watches"} src={Watch} link="/" />
          <HorizontalLink title={"Baby care"} src={Pampers} link="/" />
          <HorizontalLink title={"Sports"} src={Sports} link="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
