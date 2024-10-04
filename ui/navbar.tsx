import {
  Bag,
  Care,
  Close,
  Logo,
  Microphone,
  Microscope,
  Open,
  Person,
} from "@/public/assets/icons";
import {
  Cup,
  Electronics,
  Health,
  Music,
  Office,
  Pc,
  Profile,
  Ring,
  Shirt,
} from "@/public/assets/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// NavLink Component
const NavLink = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: StaticImageData;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center pb-4 gap-x-4 text-gray-700 hover:text-blue-500"
    >
      <Image src={icon} alt="Profile" className="w-6 h-6" />
      <span>{text}</span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Change state if scrolled more than 150px
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 pt-2 text-sm shadow-md rounded-b-xl transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-white backdrop-blur-sm" : "bg-yellow-300"
      }`}
    >
      {/* Logo */}
      <div className={`${isOpen ? "hidden" : ""} px-4 flex items-center gap-4`}>
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Cart */}
        <div className="ml-auto">
          <Link href="/">
            <Bag />
          </Link>
        </div>
        <div>
          <Link href="/">Sign in</Link>
        </div>
        {/* Profile */}
        <div>
          <Link href="/">
            <Person />
          </Link>
        </div>
      </div>

      <div className={`px-5 pt-4 ${isOpen ? "hidden" : ""}`}>
        {/* Mobile Menu Icon */}
        <div className="flex justify-between items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Open />
          </button>

          {/* Search bar */}
          <div className="rounded bg-white px-2 shadow-md border flex justify-between items-center w-[286px]">
            <div className="">
              <Microphone />
            </div>
            <input
              type="text"
              placeholder="Search Cosmos"
              className="outline-none w-[110px] text-xs py-2 bg-transparent no-underline"
            />
            <Microscope />
          </div>
        </div>
      </div>

      {/* Horizontally scrolling links */}
      <div
        className={`overflow-x-auto whitespace-nowrap flex space-x-5 py-4 scrollbar-none px-5 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Deals
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Cosmos Basic
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Whats New?
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          About
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Promotions
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Super market
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Gift cards
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Zen centre
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Entertainment
        </Link>
        <Link className="text-gray-700 hover:text-blue-500" href="/">
          Social
        </Link>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`px-4 fixed h-screen bg-[#FFFFFF33] backdrop-blur-[28px] inset-0 z-30 flex flex-col space-y-4 transition-transform transition-opacity duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div>
          <div className="bg-[#FFFFFF99] shadow-md rounded-br-full w-4/5 p-4">
            <div className="flex justify-between">
              <div>
                <h2 className="pl-1 font-semibold">Browse</h2>
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="h-9 w-9 rounded-full bg-slate-400">
                <Image src={Profile} alt="Profile" className="w-full h-full" />
              </div>
            </div>

            <Link className="pl-1 font-semibold pt-2 block" href="/">
              Cosmos Home
            </Link>
          </div>
          <div className="flex justify-between px-4 pt-5">
            <div className="space-y-2 flex flex-col">
              <h3 className="font-semibold">Trending</h3>
              <NavLink text="Movers & shakers" href="/" icon={Ring} />
              <h3 className="font-semibold pt-2">Top Departments</h3>
              <NavLink text="Home" href="/" icon={Cup} />
              <NavLink text="Health and household" href="/" icon={Health} />
              <NavLink text="Electronics" href="/" icon={Electronics} />
              <NavLink text="PC" href="/" icon={Pc} />
              <NavLink text="Cosmos Music" href="/" icon={Music} />
              <NavLink
                text="Clothing, Shoes Jewelry & Watches"
                href="/"
                icon={Shirt}
              />
              <NavLink text="Office & School Supplies" href="/" icon={Office} />
            </div>
            <div className="bg-[#020202B2] absolute top-0 right-0 h-full p-4 rounded-tl-full">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500 focus:outline-none mt-10"
              >
                <Close />
              </button>
              {/* Vertical button on the right */}
              <Link
                href={"/"}
                className="bg-white text-[9px]  absolute w-[123px] top-[40%] text-black -rotate-90 px-2  justify-between flex  rounded-t-md pb-[68px]"
              >
                <p>MAY I HELP YOU </p>
                <span className="rotate-90 pt-1">
                  <Care />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
