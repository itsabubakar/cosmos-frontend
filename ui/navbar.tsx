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
      className="flex  text-lg items-center pb-4 gap-x-4 text-[#181515] hover:text-blue-500"
    >
      <Image src={icon} alt="Profile" className="w-6 h-6" />
      <span>{text}</span>
    </Link>
  );
};

// Component to show a header after scrolling
const OnScrollHeader = ({
  toggleMenu,
  isOpen,
}: {
  toggleMenu: () => void;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`${
        isOpen && "hidden"
      } fixed top-0 left-0 w-full z-50 bg-[#FFFFFF33] backdrop-blur-[28px] rounded-b-xl py-2 shadow-md flex  items-center px-4`}
    >
      <button onClick={toggleMenu} className="focus:outline-none">
        <Open />
      </button>
      {/* Logo */}
      <Link className="ml-4" href="/">
        <Logo />
      </Link>

      {/* Cart and Profile Icons */}
      <div className="flex gap-x-6 items-center justify-center  ml-auto">
        <Link href="/">
          <Bag />
        </Link>
        <Link href="/">
          <Microscope />
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOnScrollHeader, setShowOnScrollHeader] = useState(false);

  // Track scroll position
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledDown = currentScrollY > lastScrollY;
      const past150px = currentScrollY > 150;

      if (past150px && scrolledDown) {
        // User has scrolled past 150px and is scrolling down
        setIsScrolled(true); // Show smaller navbar immediately
        setShowOnScrollHeader(true);

        // Clear any existing timeout when scrolling down
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      } else if (!scrolledDown) {
        // User is scrolling back up
        // If the user is still past 150px, add a delay before showing the main navbar
        if (past150px && !timeoutId) {
          timeoutId = setTimeout(() => {
            setIsScrolled(false); // Show main navbar after delay
            setShowOnScrollHeader(false);
            timeoutId = null; // Reset the timeoutId
          }, 1000); // 1-second delay
        }

        // If the user scrolls up to the top (below 150px), remove the delay and show the main navbar immediately
        if (!past150px) {
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
          setIsScrolled(false); // Show main navbar
          setShowOnScrollHeader(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear timeout on cleanup
      }
    };
  }, []);

  // Toggle body scroll based on menu state
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup class when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Menu toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Show the OnScrollHeader once the user scrolls past a specific point */}
      {showOnScrollHeader && (
        <OnScrollHeader isOpen={isOpen} toggleMenu={toggleMenu} />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-20 pt-2 text-sm shadow-md rounded-b-xl transition-colors duration-300 ease-in-out ${
          isScrolled && !isOpen
            ? "opacity-0 pointer-events-none"
            : "bg-yellow-300"
        }`}
      >
        {/* Logo */}
        <div
          className={`${isOpen ? "hidden" : ""} px-4 flex items-center gap-4`}
        >
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

        <div className={`px-4 pt-4 ${isOpen ? "hidden" : ""}`}>
          {/* Mobile Menu Icon */}
          <div className="flex justify-between items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Open />
            </button>

            {/* Search bar */}
            <div className=" rounded-xl bg-white px-4 py-2   flex justify-between items-center w-[286px]">
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
          className={`fixed  min-h-screen bg-[#FFFFFF33] backdrop-blur-[28px] inset-0 z-30 flex flex-col space-y-4 transition-transform transition-opacity duration-300 ease-in-out  ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } overflow-y-auto overflow-x-hidden`} // Changed to min-h-screen here
        >
          <div className="flex flex-col min-h-screen  ">
            <div className="bg-[#FFFFFF] px-4 shadow-md rounded-br-full w-4/5 p-4 ">
              <div className="flex justify-between">
                <div>
                  <h2 className="pl-1 font-semibold">Browse</h2>
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <div className="h-9 w-9 rounded-full bg-slate-400">
                  <Image
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <Link className="pl-1 font-semibold pt-2 block" href="/">
                Cosmos Home
              </Link>
            </div>
            <div className="flex justify-between  px-4  overflow-auto grow">
              <div className="space-y-2 flex flex-col  justify-between scrollbar-none overflow-y-auto">
                <h3 className="font-semibold mt-5 text-xl">Trending</h3>
                <NavLink text="Movers & shakers" href="/" icon={Ring} />
                <h3 className="font-semibold pt-2 text-xl">Top Departments</h3>

                <NavLink text="Home" href="/" icon={Cup} />
                <NavLink text="Health and household" href="/" icon={Health} />
                <NavLink text="Electronics" href="/" icon={Electronics} />
                <NavLink text="PC" href="/" icon={Pc} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink text="Cosmos Music" href="/" icon={Music} />
                <NavLink
                  text="Clothing, Shoes Jewelry & Watches"
                  href="/"
                  icon={Shirt}
                />
                <NavLink
                  text="Office & School Supplies"
                  href="/"
                  icon={Office}
                />
                <div className="pb-4 pt-24 px-4 mt-auto self-baseline justify-end">
                  <h3 className="font-semibold text-lg text-[#626262]">
                    Settings
                  </h3>
                  <p className="pt-6 flex items-center">
                    {" "}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1794 1.91968C13.4477 1.91968 15.623 2.81824 17.2269 4.41768C18.8307 6.01713 19.7318 8.18644 19.7318 10.4484C19.7318 12.7104 18.8307 14.8797 17.2269 16.4791C15.623 18.0786 13.4477 18.9771 11.1794 18.9771C8.9112 18.9771 6.73588 18.0786 5.132 16.4791C3.52812 14.8797 2.62708 12.7104 2.62708 10.4484C2.62708 8.18644 3.52812 6.01713 5.132 4.41768C6.73588 2.81824 8.9112 1.91968 11.1794 1.91968ZM17.6187 7.16812C16.7748 5.53193 15.3389 4.27677 13.6017 3.65691C14.1859 4.75909 14.6083 5.93999 14.8556 7.16812H17.6187ZM18.3845 11.0979C18.4055 10.882 18.4161 10.6653 18.416 10.4484C18.4147 9.78255 18.3204 9.12013 18.1358 8.48023H15.0543C15.0964 8.91454 15.1267 9.35147 15.1267 9.79234C15.124 10.6739 15.0332 11.553 14.8556 12.4166H18.1358C18.2608 11.9849 18.3437 11.544 18.3858 11.0979H18.3845ZM13.7333 11.0979L13.7412 11.031C13.7861 10.6196 13.8094 10.2062 13.8109 9.79234C13.8021 9.35346 13.7687 8.91541 13.7109 8.48023H8.64793C8.58967 8.91536 8.55629 9.35344 8.54794 9.79234C8.55115 10.6758 8.65399 11.5561 8.85451 12.4166H13.5044C13.6057 11.9809 13.682 11.5414 13.7333 11.0979ZM13.4807 7.16812C13.1707 5.78037 12.6112 4.46007 11.8294 3.27115C11.6136 3.25278 11.3978 3.23179 11.1794 3.23179C11.0424 3.23246 10.9054 3.23902 10.7689 3.25147L10.5295 3.27115L10.5216 3.28427C9.74385 4.46971 9.18714 5.78543 8.87819 7.16812H13.4807ZM7.50323 7.16812C7.75561 5.94083 8.18366 4.75612 8.77425 3.65035C7.02954 4.26809 5.5868 5.52619 4.74016 7.16812H7.50323ZM4.22308 8.48023C4.03873 9.12018 3.94441 9.78257 3.94282 10.4484C3.94441 11.1142 4.03873 11.7766 4.22308 12.4166H7.50323C7.32485 11.5531 7.23405 10.6739 7.23219 9.79234C7.23219 9.35147 7.26245 8.91454 7.30456 8.48023H4.22308ZM7.84664 13.7287H4.74148C5.23885 14.6975 5.94897 15.542 6.81896 16.1992C7.68896 16.8564 8.69642 17.3095 9.76632 17.5246C8.92422 16.3715 8.27586 15.0894 7.84664 13.7287ZM11.1794 17.1979C12.0208 16.1602 12.6784 14.987 13.1241 13.7287H9.23476C9.68045 14.9869 10.3381 16.1602 11.1794 17.1979ZM14.5122 13.7287C14.083 15.0894 13.4346 16.3715 12.5925 17.5246C13.6624 17.3093 14.6698 16.8562 15.5397 16.199C16.4097 15.5418 17.1199 14.6974 17.6174 13.7287H14.5122Z"
                        fill="black"
                      />
                    </svg>
                    English
                  </p>
                  <p className="pl-5 pt-2">Arabic</p>
                  <p className="pl-5 pt-2">Hausa</p>
                  <p className="text-sm pt-2 pl-5 text-blue-400">More</p>
                  <p className="pt-4 pl-5">UAE</p>
                </div>
              </div>
              <div className="bg-[#020202B2] absolute top-0 right-0 min-h-screen p-4 rounded-tl-full">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-500 focus:outline-none mt-10"
                >
                  <Close />
                </button>
                {/* Vertical button on the right */}
                <Link
                  href={"/"}
                  className="bg-white text-[9px] absolute w-[123px] top-[50%] text-black -rotate-90 px-2 justify-between flex rounded-t-md pb-[68px]"
                >
                  <p>How MAY I HELP YOU</p>
                  <span className="rotate-90 pt-1">
                    <Care />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
