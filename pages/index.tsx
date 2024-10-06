import { AuthSection, Hero, Section } from "@/components";
import { Arrow, BlackStar, Care, CartPlus, Eye } from "@/public/assets/icons";
import {
  Apple,
  BeautyFour,
  BeautyOne,
  BeautyThree,
  BeautyTwo,
  BlackShirt,
  Chanel,
  Computer,
  ComputerOne,
  ComputerTwo,
  CosmosSlick,
  CouchFour,
  CouchOne,
  CouchThree,
  CouchTwo,
  Cream,
  DepartmentFive,
  DepartmentFour,
  DepartmentOne,
  DepartmentSix,
  DepartmentThree,
  DepartmentTwo,
  Doctor,
  Earpods,
  Eateries,
  EssentialsOne,
  EssentialsThree,
  EssentialsTwo,
  Fitness,
  Glasses,
  ImgEight,
  ImgFive,
  ImgFour,
  ImgNine,
  ImgOne,
  ImgSeven,
  ImgSix,
  ImgThree,
  ImgTwo,
  KitchenOne,
  KitchenThree,
  KitchenTwo,
  Laptop,
  Lenovo,
  LogoFive,
  LogoFour,
  LogoOne,
  LogoSix,
  LogoThree,
  LogoTwo,
  Man,
  Meds,
  Pampers,
  PicOne,
  Reebok,
  Scan,
  Shopping,
  ShoppingWoman,
  Suit,
  Supermarket,
  ToyFive,
  ToyFour,
  ToyOne,
  ToysBg,
  ToyThree,
  ToyTwo,
  TV,
  VideoImage,
  Watch,
  WomanWithBags,
  Women,
} from "@/public/assets/images";
import {
  HorizontalLinkVariantFive,
  HorizontalLinkVariantFour,
  HorizontalLinkVariantOne,
  HorizontalLinkVariantSix,
  HorizontalLinkVariantThree,
  HorizontalLinkVariantTwo,
  ProductCard,
  ProductCardTwo,
  ProductSlider,
  ProductSliderFIve,
  ProductSliderFour,
  ProductSliderThree,
  ProductSliderTwo,
} from "@/ui";
// import HorizontalLink from "@/ui/horizontal-links/horizontal-link-variant-one";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SetStateAction, useRef, useState } from "react";
import Slider from "react-slick";

export default function Home() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    waitForAnimate: true,
    arrows: false,
    autoplay: false, // Use autoplay state to control autoplay
    autoplaySpeed: 1000,
  };

  const toysSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    waitForAnimate: true,
    arrows: false,
    autoplay: false, // Use autoplay state to control autoplay
    autoplaySpeed: 1000,
    // Update activeIndex before slide change
    beforeChange: (current: unknown, next: SetStateAction<number>) =>
      setActiveIndex(next),

    customPaging: (i: number) => (
      <div className=" items-center flex justify-center -mt-10">
        {/* Use Dot component with custom props based on active state */}
        {activeIndex === i ? (
          <div className="w-2 h-2 bg-blue-500 border  border-gray-500 rounded-full"></div>
        ) : (
          <div className="w-2 h-2 bg-white border border-gray-500 rounded-full"></div>
        )}
      </div>
    ),
  };
  const HorizontalLinkVariant = ({
    src,
    link,
    price,
  }: {
    src: StaticImageData;
    link: string;
    price: string;
  }) => {
    return (
      <div className="">
        <Link
          className="text-[#000000CC]     px-2 inline-block relative w-[220px] h-[200px] "
          href={link}
        >
          <div className="">
            <Image
              alt={""}
              src={src}
              className="object-cover h-[150px] w-full"
            />
          </div>
          <p className="text-center pt-2">{price}</p>
        </Link>
      </div>
    );
  };

  const HorizontalLinkSlickWear = ({
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
        className="text-[#000000CC] w-[148px] bg-white/20 backdrop-blur-[8px] rounded-lg inline-block relative mx-1 ml-2"
        href={link}
      >
        <div className="absolute top-1 right-1 bg-[#FFFFFF33] rounded-full pl-2 pt-2">
          <CartPlus />
        </div>
        <div className="py-2 flex justify-center min-w-[149px]">
          <Image alt={title} src={src} height={136} className="object-cover " />
        </div>
        <p className="pt-1 text-[14px] px-1 font-semibold pb-1">{title}</p>
        <p className="text-xs px-1 pb-2">Olevs Luxury Shirt...</p>
        <BlackStar />
        <div className="flex   mt-2 justify-between items-center backdrop-blur-[18px]  bg-[#FFFFFF80] rounded-b-lg p-1 ">
          <p className="flex items-start font-semibold">
            <span className="text-xs font-light pr-1 pt-[2px]">N </span>5,000
          </p>
          <Eye />
        </div>
      </Link>
    );
  };
  return (
    <div className={`font-inter`}>
      <main className="w-full relative">
        <Hero />
        <AuthSection />

        <Section heading="Based on your recent shopping trends">
          <div className="px-3 pt-3  grid-container">
            <ProductSlider
              imgSrc={[Laptop, Laptop]}
              price="200,000"
              title="Apple I macc11 Gaming..."
            />
            <ProductSlider
              imgSrc={[Apple, Apple]}
              autoPlay
              price="200,000"
              title="Apple I macc11 Gaming..."
            />
            <ProductSlider
              imgSrc={[Scan, Scan]}
              price="200,000"
              title="Apple I macc11 Gaming..."
            />
            <ProductSlider
              imgSrc={[Earpods, Earpods]}
              price="200,000"
              title="Apple I macc11 Gaming..."
            />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            See more
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section variant="two" heading="Keep shopping for">
          <div className="overflow-x-auto whitespace-nowrap pt-8  scrollbar-none bg-white  link-container">
            <HorizontalLinkVariantOne title={"Deals"} src={Women} link="/" />
            <HorizontalLinkVariantOne title={"Groceries"} src={Suit} link="/" />
            <HorizontalLinkVariantOne
              title={"Hand bags"}
              src={Shopping}
              link="/"
            />
            <HorizontalLinkVariantOne
              title={"Automobile"}
              src={Doctor}
              link="/"
            />
            <HorizontalLinkVariantOne title={"Watches"} src={Man} link="/" />
            <HorizontalLinkVariantOne
              title={"Baby care"}
              src={Shopping}
              link="/"
            />
            <HorizontalLinkVariantOne title={"Sports"} src={Women} link="/" />
          </div>
          <p className="text-xs text-center pt-4 text-[#2B9FE1]">
            View your browsing history
          </p>
        </Section>

        <Section heading="Shop by department / category">
          <div className="flex gap-x-5  overflow-x-auto whitespace-nowrap h-[280px]  pt-8  link-container pb-4">
            <HorizontalLinkVariantTwo
              topLink={{
                title: "Super markets",
                src: Supermarket,
                link: "/",
                quantity: 400,
              }}
              bottomLink={{ title: "Other Deals", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantTwo
              topLink={{
                title: "Eateries",
                src: Eateries,
                link: "/",
                quantity: 250,
              }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantTwo
              topLink={{
                title: "Sports and fitness",
                src: Fitness,
                link: "/",
                quantity: 250,
              }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantTwo
              topLink={{ title: "Deals", src: Women, link: "/" }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantTwo
              topLink={{ title: "Deals", src: Women, link: "/" }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantTwo
              topLink={{ title: "Deals", src: Women, link: "/" }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-4">
            See more
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>

        <Section className="pb-4" variant="two">
          {/* Render slides */}
          <div className="px-4">
            <ProductCard
              bg="bg-[#F6F05F]"
              heading="New & exclusive collab"
              title="Midwest Teen"
              subtitle="Collection"
              buttonText="Shop now"
              src={BlackShirt}
            />
            <ProductCard
              bg="bg-[#FFD700]"
              heading="Fab prices"
              title="Wardrobe"
              subtitle="refresh"
              buttonText="Shop now"
              src={ShoppingWoman}
              text="was 25,000 now 18,000"
            />
            <ProductCard
              largerImage
              bg="bg-[#F6F05F]"
              bgTwo="bg-[#F0F0F0DE]"
              buttonText="Shop now"
              src={Computer}
              text="Shop for Computers 
& Accessories"
            />
          </div>
        </Section>
        <Section heading="Massive savings for you">
          <div className="px-3 pt-3  grid-container">
            <ProductSliderTwo imgSrc={[Laptop, Laptop, Laptop]} />
            <ProductSliderTwo imgSrc={[Apple, Apple, Laptop]} autoPlay />
            <ProductSliderTwo imgSrc={[Scan, Scan, Earpods]} />
            <ProductSliderTwo imgSrc={[Earpods, Earpods, Laptop, Apple]} />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            See all deals
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section variant="two" className="py-3" heading="New Arrivals">
          <Slider className="py-4" ref={sliderRef} {...settings}>
            <div className=" px-4">
              <ProductSliderThree
                productImage={VideoImage}
                imgSrc={[Cream, Laptop]}
              />
            </div>
            <div className=" px-4">
              <ProductSliderThree
                productImage={VideoImage}
                imgSrc={[Cream, Laptop]}
              />
            </div>
            <div className=" px-4">
              <ProductSliderThree
                productImage={VideoImage}
                imgSrc={[Cream, Laptop]}
              />
            </div>
            <div className=" px-4">
              <ProductSliderThree
                productImage={VideoImage}
                imgSrc={[Cream, Laptop]}
              />
            </div>
          </Slider>
        </Section>
        <Section variant="two" heading="Deals related to items in your cart">
          <div className="flex  h-[450px] items-center overflow-x-auto    link-container">
            <HorizontalLinkVariantThree
              topLink={{
                title: "Super markets",
                src: Pampers,
                link: "/",
                quantity: 400,
              }}
              bottomLink={{ title: "Other Deals", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantThree
              topLink={{
                title: "Eateries",
                src: Eateries,
                link: "/",
                quantity: 250,
              }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantThree
              topLink={{
                title: "Sports and fitness",
                src: Fitness,
                link: "/",
                quantity: 250,
              }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantThree
              topLink={{ title: "Deals", src: Women, link: "/" }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantThree
              topLink={{ title: "Deals", src: Women, link: "/" }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
            <HorizontalLinkVariantThree
              topLink={{ title: "Deals", src: Women, link: "/" }}
              bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
            />
          </div>
        </Section>
        <Section variant="two" heading="Pick up where you left off">
          <div className="overflow-x-auto whitespace-nowrap  pt-8 scrollbar-none bg-white link-container">
            <HorizontalLinkVariantOne title={"Deals"} src={Women} link="/" />
            <HorizontalLinkVariantOne title={"Groceries"} src={Suit} link="/" />
            <HorizontalLinkVariantOne
              title={"Hand bags"}
              src={Shopping}
              link="/"
            />
            <HorizontalLinkVariantOne
              title={"Automobile"}
              src={Doctor}
              link="/"
            />
            <HorizontalLinkVariantOne title={"Watches"} src={Man} link="/" />
            <HorizontalLinkVariantOne
              title={"Baby care"}
              src={Shopping}
              link="/"
            />
            <HorizontalLinkVariantOne title={"Sports"} src={Women} link="/" />
          </div>
        </Section>
        <Section className="" variant="two" heading="Exclusive Deals">
          <div className="overflow-x-auto flex gap-x-4 whitespace-nowrap  pt-8 scrollbar-none bg-white link-container">
            <HorizontalLinkVariantFour
              img={WomanWithBags}
              subtitle="Top Notch Fasionista must haves."
              title="Comfort  fashion purses"
            />
            <HorizontalLinkVariantFour
              img={Glasses}
              subtitle="Top Notch Fasionista must haves."
              title="Comfort  fashion purses"
            />
            <HorizontalLinkVariantFour
              img={WomanWithBags}
              subtitle="Top Notch Fasionista must haves."
              title="Comfort  fashion purses"
            />
            <HorizontalLinkVariantFour
              img={Glasses}
              subtitle="Top Notch Fasionista must haves."
              title="Comfort  fashion purses"
            />
          </div>
        </Section>
        <Section heading="Massive savings for you">
          <div className="px-3 pt-3 grid gap-2 grid-cols-2">
            <ProductSliderTwo imgSrc={[Laptop, Laptop]} />
            <ProductSliderTwo showNewTag imgSrc={[Apple, Apple]} autoPlay />
            <ProductSliderTwo imgSrc={[Scan, Scan]} />
            <ProductSliderTwo imgSrc={[Earpods, Earpods]} />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            See all deals
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <section className="mb-10">
          <Slider className="py-4" ref={sliderRef} {...settings}>
            <div className="bg-[#FFDA5759] p-4">
              <div className="bg-white flex p-1 min-w-[300px] mx-2 rounded-xl relative">
                <h3 className="absolute top-1 right-1  text-sm">
                  Shop for Phones <br></br> & Tablets
                </h3>
                <Image
                  className=" w-1/2 h-auto object-contain"
                  src={ComputerOne}
                  alt="computer"
                />

                <Image
                  className="w-1/2 h-auto object-contain mt-8"
                  src={ComputerTwo}
                  alt="computer"
                />
              </div>
            </div>
            <div className="bg-[#FFDA5759] p-4">
              <div className="bg-white flex p-1 min-w-[300px] mx-2 rounded-xl relative">
                <h3 className="absolute top-1 right-1  text-sm">
                  Shop for Phones <br></br> & Tablets
                </h3>

                <Image
                  className=" w-1/2 h-auto object-contain"
                  src={ComputerOne}
                  alt="computer"
                />

                <Image
                  className="w-1/2 h-auto object-contain mt-8"
                  src={ComputerTwo}
                  alt="computer"
                />
              </div>
            </div>
            <div className="bg-[#FFDA5759] p-4">
              <div className="bg-white flex p-1 min-w-[300px] mx-2 rounded-xl">
                <Image
                  className=" w-1/2 h-auto object-contain"
                  src={ComputerOne}
                  alt="computer"
                />

                <Image
                  className="w-1/2 h-auto object-contain"
                  src={ComputerTwo}
                  alt="computer"
                />
              </div>
            </div>
          </Slider>
        </section>
        <Section
          heading="Inspired by your recent shopping 
trends"
          variant="two"
        >
          <Slider className="" ref={sliderRef} {...settings}>
            <div className="px-5">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
            <div className="px-5">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
            <div className="px-5">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
          </Slider>
          <div className="mb-10"></div>
        </Section>
        <Section
          heading="Deals inspired by your recent 
history"
        >
          <div className="px-3 pt-3  grid gap-x-3 gap-y-3 grid-cols-2">
            <ProductSliderTwo imgSrc={[Laptop, Laptop]} />
            <ProductSliderTwo showNewTag imgSrc={[Apple, Apple]} autoPlay />
            <ProductSliderTwo imgSrc={[Scan, Scan]} />
            <ProductSliderTwo imgSrc={[Earpods, Earpods]} />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            See all deals
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <section className="mb-10">
          <Slider ref={sliderRef} {...settings}>
            <div className="bg-[#CE3FC83D] p-4">
              <div className="bg-white flex p-1 min-w-[300px] mx-2 rounded-xl relative">
                <h3 className="absolute top-1 right-1  text-sm">
                  Shop for Phones <br></br> & Tablets
                </h3>
                <Image
                  className=" w-1/2 h-auto object-contain"
                  src={ComputerOne}
                  alt="computer"
                />

                <Image
                  className="w-1/2 h-auto object-contain mt-8"
                  src={ComputerTwo}
                  alt="computer"
                />
              </div>
            </div>
            <div className="bg-[#FFDA5759] p-4">
              <div className="bg-white flex p-1 min-w-[300px] mx-2 rounded-xl relative">
                <h3 className="absolute top-1 right-1  text-sm">
                  Shop for Phones <br></br> & Tablets
                </h3>

                <Image
                  className=" w-1/2 h-auto object-contain"
                  src={ComputerOne}
                  alt="computer"
                />

                <Image
                  className="w-1/2 h-auto object-contain mt-8"
                  src={ComputerTwo}
                  alt="computer"
                />
              </div>
            </div>
          </Slider>
        </section>

        <Section heading="Top picks for Nigeria" variant="two">
          <Slider className=" mb-10 pt-4 " ref={sliderRef} {...settings}>
            <div className="px-5 ">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
            <div className="px-5">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
            <div className="px-5">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
          </Slider>
        </Section>

        <Section className="relative" heading="Apparel under 5,000">
          <Link
            href={"/"}
            className="bg-[#72727240] text-[9px] absolute top-40  -right-[63px] text-white -rotate-90 w-fit z-10 justify-between flex rounded-t-md  px-3  items-center"
          >
            <p className="text-white font-semibold pr-3">HOW MAY I HELP YOU</p>
            <span className="rotate-90 ">
              <Care fill="white" />
            </span>
          </Link>
          <div className="mx-3 mt-3 rounded-lg  grid grid-cols-2 gap-2 border ">
            <ProductSliderFIve title="Mens" imgSrc={[PicOne, PicOne]} />
            <ProductSliderFIve
              title="Womens"
              imgSrc={[PicOne, PicOne]}
              autoPlay
            />
            <ProductSliderFIve title="Kiddies" imgSrc={[PicOne, PicOne]} />
            <ProductSliderFIve title="Kiddies" imgSrc={[PicOne, PicOne]} />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            See all deals
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section className="relative" heading="Shoes under 8,000">
          <Link
            href={"/"}
            className="bg-[#72727240] text-[9px] absolute top-40  -right-[63px] text-white -rotate-90 w-fit z-10 justify-between flex rounded-t-md  px-3  items-center"
          >
            <p className="text-white font-semibold pr-3">HOW MAY I HELP YOU</p>
            <span className="rotate-90 ">
              <Care fill="white" />
            </span>
          </Link>
          <div className="mx-3 mt-3 rounded-lg  grid grid-cols-2 gap-2 border">
            <ProductSliderFour title="For Her" imgSrc={[PicOne, PicOne]} />
            <ProductSliderFour
              title="For Him"
              imgSrc={[PicOne, PicOne]}
              autoPlay
            />
            <ProductSliderFour title="Teens" imgSrc={[PicOne, PicOne]} />
            <ProductSliderFour title="Kiddies" imgSrc={[PicOne, PicOne]} />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            See all deals
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section variant="two" heading="Discount Electronics">
          <div className="flex gap-x-0 h-[440px] overflow-x-auto   pt-8  link-container">
            <HorizontalLinkVariantFive
              topLink={{
                src: ImgOne,
                link: "/",
              }}
              bottomLink={{ src: ImgTwo, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{
                src: Eateries,
                link: "/",
              }}
              bottomLink={{ src: ImgThree, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{
                src: Fitness,
                link: "/",
              }}
              bottomLink={{ src: ImgFour, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ImgFive, link: "/" }}
              bottomLink={{ src: ImgSix, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ImgSeven, link: "/" }}
              bottomLink={{ src: ImgOne, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ImgEight, link: "/" }}
              bottomLink={{ src: ImgNine, link: "/" }}
            />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            Shop all
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section variant="two" heading="Phones under N 40,000">
          <div className="flex gap-x-0 h-[440px] overflow-x-auto   pt-8  link-container">
            <HorizontalLinkVariantFive
              topLink={{
                src: ImgSix,
                link: "/",
              }}
              bottomLink={{ src: ImgTwo, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{
                src: ImgSeven,
                link: "/",
              }}
              bottomLink={{ src: ImgSix, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{
                src: ImgSeven,
                link: "/",
              }}
              bottomLink={{ src: ImgTwo, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ImgFive, link: "/" }}
              bottomLink={{ src: ImgSix, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ImgSix, link: "/" }}
              bottomLink={{ src: ImgSix, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ImgSix, link: "/" }}
              bottomLink={{ src: ImgSix, link: "/" }}
            />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            Shop all
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section variant="two" heading="Our favorite Toys">
          <div className="flex gap-x-0 h-[440px] overflow-x-auto   pt-8  link-container">
            <HorizontalLinkVariantFive
              topLink={{
                src: ToyOne,
                link: "/",
              }}
              bottomLink={{ src: ToyTwo, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{
                src: ToyThree,
                link: "/",
              }}
              bottomLink={{ src: ToyFour, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{
                src: ToyFive,
                link: "/",
              }}
              bottomLink={{ src: ToyOne, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ToyTwo, link: "/" }}
              bottomLink={{ src: ToyThree, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ToyFour, link: "/" }}
              bottomLink={{ src: ToyFive, link: "/" }}
            />
            <HorizontalLinkVariantFive
              topLink={{ src: ToyOne, link: "/" }}
              bottomLink={{ src: ToyTwo, link: "/" }}
            />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            Shop all
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section heading="Fashion trends in shoes">
          <div className="mx-3 mt-3 rounded-lg  grid grid-cols-2 gap-2 border">
            <ProductSliderFIve title="Mens" imgSrc={[Suit, Suit]} />
            <ProductSliderFIve title="Womens" imgSrc={[Suit, Suit]} autoPlay />
            <ProductSliderFIve title="Kiddies" imgSrc={[Suit, Suit]} />
            <ProductSliderFIve title="Kiddies" imgSrc={[Suit, Suit]} />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            See all deals
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section heading="Health and Beauty Products" variant="two">
          <div className="grid grid-cols-3 p-4 gap-5 items-center">
            <Image alt="img" src={BeautyOne} />
            <Image alt="img" src={BeautyTwo} />
            <Image alt="img" src={BeautyThree} />
            <Image alt="img" src={BeautyFour} />
            <Image alt="img" src={BeautyOne} />
            <Image alt="img" src={BeautyTwo} />
            <Image alt="img" src={BeautyThree} />
            <Image alt="img" src={BeautyFour} />
            <Image alt="img" src={BeautyOne} />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            Shop all
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>

        <Section variant="two" heading="Girls’  everyday essentials">
          <div className="flex gap-x-0 h-[500px] overflow-x-auto   pt-8  link-container">
            <HorizontalLinkVariantSix
              topLink={{
                src: EssentialsOne,
                link: "/",
                logo: LogoOne,
              }}
              bottomLink={{ src: EssentialsOne, link: "/", logo: LogoTwo }}
            />
            <HorizontalLinkVariantSix
              topLink={{
                src: EssentialsTwo,
                link: "/",
                logo: LogoThree,
              }}
              bottomLink={{ src: EssentialsThree, link: "/" }}
            />
            <HorizontalLinkVariantSix
              topLink={{
                src: EssentialsTwo,
                link: "/",
              }}
              bottomLink={{ src: EssentialsTwo, link: "/" }}
            />
            <HorizontalLinkVariantSix
              topLink={{ src: EssentialsOne, link: "/" }}
              bottomLink={{ src: EssentialsTwo, link: "/" }}
            />
            <HorizontalLinkVariantSix
              topLink={{ src: EssentialsThree, link: "/" }}
              bottomLink={{ src: EssentialsOne, link: "/" }}
            />
            <HorizontalLinkVariantSix
              topLink={{ src: EssentialsTwo, link: "/" }}
              bottomLink={{ src: EssentialsThree, link: "/" }}
            />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            Shop all
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section variant="two" heading="Best sellers in electronics">
          <div className="flex gap-x-0 h-[500px] overflow-x-auto   pt-8  link-container">
            <HorizontalLinkVariantSix
              topLink={{
                src: ImgOne,
                link: "/",
                logo: LogoFour,
              }}
              bottomLink={{ src: ImgTwo, link: "/", logo: LogoFive }}
            />
            <HorizontalLinkVariantSix
              topLink={{
                src: ImgThree,
                link: "/",
                logo: LogoSix,
              }}
              bottomLink={{ src: ImgFour, link: "/" }}
            />
            <HorizontalLinkVariantSix
              topLink={{
                src: ImgFive,
                link: "/",
              }}
              bottomLink={{ src: ImgSix, link: "/" }}
            />
            <HorizontalLinkVariantSix
              topLink={{ src: ImgSeven, link: "/" }}
              bottomLink={{ src: ImgOne, link: "/" }}
            />
          </div>
          <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2 px-5">
            Shop all
            <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
              <Arrow />
            </span>
          </p>
        </Section>
        <Section heading="Popular products in beauty" variant="two">
          <Slider className=" mb-10 pt-4 " ref={sliderRef} {...settings}>
            <div className="px-5 ">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
            <div className="px-5">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
            <div className="px-5">
              <div>
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
              <div className="border-t border-dashed ">
                <ProductCardTwo
                  price="200"
                  title="Omega Sea master, Oyster perpetual date just."
                  imgSrc={Apple}
                />
              </div>
            </div>
          </Slider>
        </Section>
        <Section variant="two" heading="Store Deals">
          <div className="px-5">
            <Image alt="" src={TV} />
            <div className="flex items-center text-[11px] gap-x-2 pt-4 relative">
              <p className="bg-[#08B02D] absolute  text-white font-semibold p-1 rounded-t-sm rounded-bl-sm rounded-br-lg">
                46% off
              </p>
              <p className="ml-14 text-green-500">Limited time Deal</p>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-lg font-semibold flex items-start pt-2">
                <span className="text-xs font-thin">N</span>160,000
              </p>
              <p className="text-[10px]">
                List price: <span className="line-through">N 175, 000</span>
              </p>
            </div>
            <p className="text-xs pt-2">LG signature 8k TV</p>
            <p className="text-xs font-semibold pt-5 pb-4 flex items-center  gap-x-2">
              Shop the LG store
              <span className="bg-[#2B9FE1] p-1 w-[29px] flex items-center justify-center h-[29px] rounded-full">
                <Arrow />
              </span>
            </p>
          </div>
        </Section>
        <Section variant="two" heading="Home and kitchen under  N 5000">
          <div>
            <div className="flex justify-center px-3 pt-3">
              <Image className="w-full" src={KitchenOne} alt="" />
            </div>
            <div className="flex flex-row gap-x-0 overflow-x-auto  scrollbar-none  link-container">
              <HorizontalLinkVariant price="33, 000" link="/" src={CouchOne} />
              <HorizontalLinkVariant price="33, 000" link="/" src={CouchTwo} />
              <HorizontalLinkVariant
                price="33, 000"
                link="/"
                src={CouchThree}
              />
              <HorizontalLinkVariant price="33, 000" link="/" src={CouchFour} />
            </div>
            <div className="flex gap-x-2 px-3 w-full mt-4">
              <Image className="w-1/2" src={KitchenThree} alt="" />

              <Image className="w-1/2" src={KitchenTwo} alt="" />
            </div>
          </div>
        </Section>
        <Section variant="two" heading="Toys under N 3000">
          <Slider className=" mb-10 pt-4 " ref={sliderRef} {...toysSettings}>
            <div className="relative p-3">
              <button className="absolute bg-[#FFFFFFF0] px-4 py-1 text-xs top-6 left-6 rounded-3xl">
                Shop now
              </button>
              <Image src={ToysBg} alt="" />
            </div>
            <div className="relative p-3">
              <button className="absolute bg-[#FFFFFFF0] px-4 py-1 text-xs top-6 left-6 rounded-3xl">
                Shop now
              </button>
              <Image src={ToysBg} alt="" />
            </div>
            <div className="relative p-3">
              <button className="absolute bg-[#FFFFFFF0] px-4 py-1 text-xs top-6 left-6 rounded-3xl">
                Shop now
              </button>
              <Image src={ToysBg} alt="" />
            </div>
          </Slider>
        </Section>
        <Section
          variant="two"
          heading="Popular products in beauty 
internationally"
        >
          <div className="relative">
            <p className="absolute top-2 right-2 text-2xl font-white">
              Cosmos Slick Wears
            </p>
            <Image alt="bg" src={CosmosSlick} />
            <div className="absolute bottom-0 w-full">
              <div className="overflow-x-auto whitespace-nowrap link-container  py-4 scrollbar-none">
                <HorizontalLinkSlickWear title={"Rolex"} src={Watch} link="/" />
                <HorizontalLinkSlickWear
                  title={"Rolex"}
                  src={Doctor}
                  link="/"
                />
                <HorizontalLinkSlickWear
                  title={"Rolex"}
                  src={Doctor}
                  link="/"
                />
                <HorizontalLinkSlickWear
                  title={"Rolex"}
                  src={Doctor}
                  link="/"
                />
                <HorizontalLinkSlickWear
                  title={"Rolex"}
                  src={Doctor}
                  link="/"
                />
                <HorizontalLinkSlickWear
                  title={"Rolex"}
                  src={Doctor}
                  link="/"
                />
                <HorizontalLinkSlickWear
                  title={"Rolex"}
                  src={Doctor}
                  link="/"
                />
              </div>
            </div>
          </div>
        </Section>
        <Section variant="two" heading="Shop deals">
          <div className="p-5">
            <div className="flex flex-wrap gap-4 justify-between">
              <Image alt="" src={Lenovo} />
              <Image className="w-1/3" alt="" src={Chanel} />
              <Image className="w-1/3" alt="" src={Reebok} />
            </div>
            <div className="flex items-center  gap-x-2 pt-4 ">
              <p className="bg-[#DD1414D6] text-white font-semibold p-1 rounded-t-sm rounded-bl-sm rounded-xl">
                Up to 40% off
              </p>
              <p className="text-[#DD1414D6]  italic"> Deal</p>
            </div>
            <p className="italic pt-2">
              Household Essentials from Lenovo, Chanel and Reebok
            </p>
            <p className="text-[#3470E5E3] text-sm pt-2">See all deals</p>
          </div>
        </Section>
        <section className="pb-5">
          <Image src={Meds} alt="" />
        </section>
        <section className="px-5">
          <h3 className="font-semibold">Explore Departments</h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
            <div>
              <Image className="w-full" src={DepartmentOne} alt="" />
              <p className="pt-1">Home & kitchen</p>
            </div>
            <div>
              <Image className="w-full" src={DepartmentTwo} alt="" />
              <p className="pt-1">Beauty</p>
            </div>
            <div>
              <Image className="w-full" src={DepartmentThree} alt="" />
              <p className="pt-1">Groceries</p>
            </div>
            <div>
              <Image className="w-full" src={DepartmentFour} alt="" />
              <p className="pt-1">Electronics</p>
            </div>
            <div>
              <Image className="w-full" src={DepartmentFive} alt="" />
              <p className="pt-4">Sports & outdoors</p>
            </div>
            <div>
              <Image className="w-full" src={DepartmentSix} alt="" />
              <p className="pt-4">Medical</p>
            </div>
          </div>
          <h3 className="text-blue-500 mt-2 text-center">All Departments</h3>
        </section>
      </main>
    </div>
  );
}
