import {
  Care,
  ChevronDown,
  Pause,
  PlayIcon,
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
        className="text-[#000000CC] w-[139px] px-1 py-2   bg-[#FFFFFF8C] backdrop-blur-[28px] rounded-lg inline-block mx-1 h-[175px]"
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
    autoplaySpeed: 7000,

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
          className="bottom-[218px] right-[25%] p-2 absolute text-white rounded-md"
          onClick={toggleAutoplay} // Toggle autoplay state
        >
          {autoplay ? <Pause /> : <PlayIcon />}
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
