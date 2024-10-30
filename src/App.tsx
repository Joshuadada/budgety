import "./App.css";
import Logo from "./assets/images/logo.svg";
import PlayStore from "./assets/images/google-play.svg";
import AppleStore from "./assets/images/apple-store.svg";
import AvartarGroup from "./assets/images/avartar-group.svg";
import HeroImg from "./assets/images/hero-img.svg";
import MoneyBag from "./assets/images/money-bag.svg";
import SavingMoney from "./assets/images/saving-money.gif";
import Coins from "./assets/images/coins.svg";
import Sect2Img1 from "./assets/images/sect-2-img-1.svg";
import Sect2Img2 from "./assets/images/sect-2-img-2.svg";
import Sect2Img3 from "./assets/images/sect-2-img-3.svg";
import Sect2Img4 from "./assets/images/sect-2-img-4.svg";
import YellowStars from "./assets/images/yellow-stars.svg";
import WhiteStars from "./assets/images/white-stars.svg";
import Sect6Img from "./assets/images/sect-6-img.svg";
import LogoWhite from "./assets/images/logo-white.svg";
import Sect3Img1 from "./assets/images/sect-3-img-1.png";
import Sect3Img2 from "./assets/images/sect-3-img-2.svg";
import Sect3Img3 from "./assets/images/sect-3-img-3.svg";
import Sect3Img4 from "./assets/images/sect-3-img-4.svg";
import Sect3Img5 from "./assets/images/sect-3-img-5.svg";
import RedditIcon from "./assets/icons/reddit-icon.png";
import { Button } from "./components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./components/ui/carousel";
import { Switch } from "./components/ui/switch";
import { useState } from "react";

function App() {
  const [planType, setPlanType] = useState<"monthly" | "yearly">("yearly");

  const togglePlanType = (e: boolean) => {
    if (e) setPlanType("yearly");
    if (!e) setPlanType("monthly");
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="max-w-[2000px] mx-auto bg-[#FAFAFA] h-full">
        {/* Section One */}
        <div className="bg-gradient-to-tr from-[#FCCC4C] to-[#F8A307] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-2 sm:py-5 md:py-6 lg:py-8 xl:py-9 overflow-hidden">
          <header className="flex items-center justify-between">
            <img
              className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40"
              src={Logo}
              alt=""
            />

            <ul className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <li className="cursor-pointer text-[0.6rem] md:text-xs lg:text-sm font-bold text-[#1F2025]">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="cursor-pointer text-[0.6rem] md:text-xs lg:text-sm font-bold text-[#1F2025]">
                <a href="https://www.notion.so/FAQs-64486123a7b24f47acc93f3402c52530?pvs=4">
                  FAQ
                </a>
              </li>
              <Button className="rounded-xl md:rounded-2xl lg:rounded-3xl text-[0.6rem] md:text-xs lg:text-sm font-bold">
                <a href="https://link.mybudgety.com/app">Download Now</a>
              </Button>
            </ul>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 mt-5 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 relative">
            <div>
              <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[560px]">
                The Best Budgeting App In Canada{" "}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-4 sm:mt-5 md:mt-7 lg:mt-9 xl:mt-11 font-camptonSemibold">
                Download
              </p>

              <div className="flex items-center gap-1 md:gap-2 lg:gap-3 mt-1 sm:mt-2 lg:mt-3">
                <a href="https://play.google.com/store/apps/details?id=com.mybudgety.budgety">
                  <img
                    className="cursor-pointer w-20 md:w-24 lg:w-28 xl:w-32"
                    src={PlayStore}
                    alt=""
                  />
                </a>
                <a href="https://apps.apple.com/ca/app/budgety/id6477830943">
                  <img
                    className="cursor-pointer w-20 md:w-24 lg:w-28 xl:w-32"
                    src={AppleStore}
                    alt=""
                  />
                </a>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 mt-4 sm:mt-5 md:mt-6 lg:mt-7">
                <img
                  src={AvartarGroup}
                  className="w-28 sm:w-32 md:w-36 lg:w-40"
                  alt=""
                />
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-camptonSemibold">
                    10,000+
                  </h4>
                  <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-camptonMedium">
                    Downloads
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={HeroImg} className="w-full" alt="" />
              <img
                src={MoneyBag}
                className="w-28 sm:w-36 md:w-44 lg:w-52 absolute -bottom-1 md:-bottom-5 right-0"
                alt=""
              />
            </div>

            <img
              src={SavingMoney}
              className="absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 translate-x-1/2 right-1/2 w-32 sm:w-40 md:w-48 lg:w-56 transform scale-x-[-1]"
              alt=""
            />
            <img
              src={Coins}
              className="absolute -bottom-2 md:-bottom-6 lg:-bottom-8 -left-2 sm:-left-8 md:-left-16 lg:-left-20 xl:-left-24 w-20 sm:w-24 md:w-24 lg:w-36 xl:w-44"
              alt=""
            />
          </section>
        </div>

        {/* Section Two */}
        <section className="px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40 pt-6 sm:pt-10 md:pt-16 lg:pt-20 xl:pt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14">
          <h4 className="font-bold 2xl sm:text-3xl md:texxt-4xl lg:text-5xl xl:text-6xl text-center">
            Why Budgety?
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-8 md:mt-12 lg:mt-16">
            <div className="bg-[#FFF6FA] border border-[#D7D5C1] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={Sect2Img1} className="w-full" alt="" />
              <div className="py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 px-7 sm:px-8 md:px-9 lg:px-10 xl:px-11">
                <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#1C1C40] font-semibold font-camptonSemibold">
                  Track every account, from every bank, automatically.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFDF2] border border-[#D7D5C1] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={Sect2Img2} className="w-full" alt="" />
              <div className="py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 px-7 sm:px-8 md:px-9 lg:px-10 xl:px-11">
                <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#1C1C40] font-semibold font-camptonSemibold">
                  Get personalized financial insights and advice with our AI
                  advisor – tailored for your goals.
                </p>
              </div>
            </div>

            <div className="bg-[#F5FFF0] border border-[#D7D5C1] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={Sect2Img3} className="w-full" alt="" />
              <div className="py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 px-7 sm:px-8 md:px-9 lg:px-10 xl:px-11">
                <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#1C1C40] font-semibold font-camptonSemibold">
                  Take control of your spending and stay on track with a
                  personalized budget that works for you.
                </p>
              </div>
            </div>

            <div className="bg-[#F2F5FD] border border-[#D7D5C1] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={Sect2Img4} className="w-full" alt="" />
              <div className="py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 px-7 sm:px-8 md:px-9 lg:px-10 xl:px-11">
                <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#1C1C40] font-semibold font-camptonSemibold">
                  Reach your financial goals with our goal tracking feature!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Three */}
        <section className="bg-[#1C1D21] px-6 sm:px-12 md:px-20 lg:px-48 xl:px-64 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-16 sm:pb-20 md:pb-28 lg:pb-36 xl:pb-44 rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px] xl:rounded-t-[120px]">
          <h4 className="text-[#FCCF51] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
            Do More with Budgety
          </h4>

          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col gap-10 sm:gap-20 md:gap-28 lg:gap-40 xl:gap-52">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between relative">
              <div>
                <h5 className="text-[#FCCF51] font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">
                  Set up account:
                </h5>

                <ul className="text-white ml-5 mt-4 sm:mt-4 md:mt-5 lg:mt-6 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                  <div>
                    <li className="list-disc font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-camptonSemibold">
                      Sync with your bank accounts easily
                    </li>
                    <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 font-campton">
                      With this feature, you can sync multiple accounts with
                      ease! Whether savings, checking, credit or investment. We
                      have you covered!
                    </p>
                  </div>

                  <div>
                    <li className="list-disc font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-camptonSemibold">
                      Set up multi currency accounts
                    </li>
                    <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 font-campton">
                      If you transact with more than one currency then this
                      feature is for you! Create and track accounts with
                      different currencies!
                    </p>
                  </div>
                </ul>
              </div>
              <div className="">
                <div className="overflow-y-hidden">
                  <img
                    className="md:ml-auto  mx-auto md:mx-[unset] w-[280px]"
                    src={Sect3Img1}
                    alt=""
                  />
                </div>
              </div>

              <img
                src={Coins}
                className="absolute md:-left-6 lg:-left-1 lg:-bottom-20 xl:-bottom-28 hidden lg:block w-20 sm:w-24 md:w-24 lg:w-40 xl:w-56"
                alt=""
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
              <div className="order-2 md:order-1 relative">
                <div className="overflow-y-hidden">
                  <img
                    className="md:mr-auto mx-auto md:mx-[unset]"
                    src={Sect3Img2}
                    alt=""
                  />
                </div>

                <img
                  src={Sect3Img4}
                  alt=""
                  className="absolute hidden lg:block lg:-bottom-10 xl:-bottom-4 left-0 w-20 sm:w-24 md:w-24 lg:w-36 xl:w-44"
                />
              </div>
              <div className="order-1 md:order-2">
                <h5 className="text-[#FCCF51] font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">
                  Track Transactions
                </h5>

                <ul className="text-white ml-5 mt-4 sm:mt-4 md:mt-5 lg:mt-6 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                  <div>
                    <li className="list-disc font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-camptonSemibold">
                      Record your transactions easily whether manually or
                      automatically
                    </li>
                    <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 font-campton">
                      Don’t stress, let’s help you automatically record your
                      repeated expenses like your rent or mortgage
                    </p>
                  </div>

                  <div>
                    <li className="list-disc font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-camptonSemibold">
                      Multi-currency transaction tracking
                    </li>
                    <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 font-campton">
                      We are an inclusive app! If you spend in USD and CAD for
                      example, you can track transactions in more than one
                      currency!
                    </p>
                  </div>

                  <div>
                    <li className="list-disc font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-camptonSemibold">
                      Choose or create your own categories
                    </li>
                    <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 font-campton">
                      Personalize your experience, you can add your own
                      transaction categories or make use of our preset
                      categories.
                    </p>
                  </div>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
              <div>
                <h5 className="text-[#FCCF51] font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">
                  Monitor Budget
                </h5>

                <ul className="text-white ml-5 mt-4 sm:mt-4 md:mt-5 lg:mt-6 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                  <div>
                    <li className="list-disc font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-camptonSemibold">
                      Create a budget for anything you want
                    </li>
                    <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 font-campton">
                      We are your accountability partner. Let us help you stick
                      to your budget with our Add Budget feature!
                    </p>
                  </div>

                  <div>
                    <li className="list-disc font-semibold text-xs sm:text-sm md:text-base lg:text-lg font-camptonSemibold">
                      Get notified when you're close to exceeding your budget
                    </li>
                    <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 font-campton">
                      Spending more than you planned for? Not on our watch!
                      Trust us to help you stick to your budget.
                    </p>
                  </div>
                </ul>
              </div>
              <div className="relative">
                <div className="overflow-y-hidden">
                  <img
                    className="md:ml-auto mx-auto md:mx-[unset]"
                    src={Sect3Img3}
                    alt=""
                  />
                </div>

                <img
                  src={Sect3Img5}
                  alt=""
                  className="absolute hidden lg:block lg:-bottom-10 xl:-bottom-4 right-0 w-20 sm:w-24 md:w-24 lg:w-36 xl:w-44"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Four */}
        <section className="px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40 pb-6 sm:pb-10 md:pb-16 lg:pb-20 xl:pb-24 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14">
          <h4 className="text-[#000000CC] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Trusted by Over 10,000 Users
          </h4>

          <div className="mt-6 sm:mt-10 md:mt-14 lg:mt-16 xl:mt-20 grid grid-cols-2 sm:flex gap-4 sm:gap-8 md:gap-10 lg:gap-12 justify-between">
            <div>
              <p className="text-[#000000CC] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                Transactions Tracked
              </p>
              <h4 className="text-[#000000CC] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5">
                10k+
              </h4>
            </div>

            <div className="sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 sm:border-l">
              <p className="text-[#000000CC] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                Budgets Created
              </p>
              <h4 className="text-[#000000CC] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5">
                3.5k+
              </h4>
            </div>

            <div className="sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 sm:border-l">
              <p className="text-[#000000CC] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                Average Rating
              </p>
              <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5">
                <div className="flex items-center gap-1 md:gap-2">
                  <h4 className="text-[#000000CC] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    4.6
                  </h4>
                  <img
                    src={YellowStars}
                    className="w-16 sm:w-20 md:w-24 lg:w-28"
                    alt=""
                  />
                </div>

                <p className="text-[#5E5E5E] text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm">
                  Average rating of this year
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FEC734] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div>
                    <img
                      src={WhiteStars}
                      className="w-16 sm:w-20 md:w-24 lg:w-28 mx-auto"
                      alt=""
                    />
                    <p className="text-center text-[#000000] font-medium text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-camptonMedium">
                      “I've tried a few budgeting apps, but Budgety's the only
                      one that's really worked for me. It's easy to use, and
                      it's actually helped me save some money. I finally feel
                      like I'm in control of my finances!”
                    </p>

                    <p className="text-[#000000] font-semibold text-center mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-camptonSemibold">
                      David K
                    </p>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div>
                    <img
                      src={WhiteStars}
                      className="w-16 sm:w-20 md:w-24 lg:w-28 mx-auto"
                      alt=""
                    />
                    <p className="text-center text-[#000000] font-medium text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-camptonMedium">
                      “Budgety's been a lifesaver for me. I was struggling to
                      keep track of my expenses, but now I can see everything in
                      one place. And the fact that it connects to my Canadian
                      bank accounts automatically? Game-changer.”
                    </p>

                    <p className="text-[#000000] font-semibold text-center mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-camptonSemibold">
                      Emily R.
                    </p>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div>
                    <img
                      src={WhiteStars}
                      className="w-16 sm:w-20 md:w-24 lg:w-28 mx-auto"
                      alt=""
                    />
                    <p className="text-center text-[#000000] font-medium text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-camptonMedium">
                      “After searching for many budgeting apps for Canada, all I
                      can say is Budgety is the best budgeting app in Canada.
                      Don’t just take my word for it, give them a try and see
                      for yourself”
                    </p>

                    <p className="text-[#000000] font-semibold text-center mt-3 sm:mt-4 md:mt-5 lg:mt-6 font-camptonSemibold">
                      Mark C.
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Section Five */}
        <section
          id="pricing"
          className="bg-[#1C1D21] py-4 sm:py-6 md:py-8 lg:py-10 px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40"
        >
          <h4 className="text-center text-[#FCCF51] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Pricing
          </h4>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1.5 md:gap-2.5 lg:gap-3.5 text-white text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-4 md:mt-6 lg:mt-9 xl:mt-11 font-campton">
            <span>Monthly</span>
            <Switch
              onCheckedChange={togglePlanType}
              checked={planType === "yearly"}
              id="airplane-mode"
            />
            <span>Yearly</span>
          </div>

          {/* Monthly */}
          {planType === "monthly" && (
            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 sm:mt-5 md:mt-7 lg:mt-9 xl:mt-11 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              <div className="py-2 sm:py-4 md:py-6 lg:py-8 px-6 sm:px-8 md:px-10 lg:px-12 bg-white border border-[#E7E9ED] rounded-sm md:rounded-md lg:rounded-lg">
                <h4 className="uppercase text-[#161C2D] font-bold text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm">
                  Basic Plan
                </h4>

                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <h3 className="text-[#161C2D] ">
                    <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      CAD
                    </span>
                    <span className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                      5.99
                    </span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      / Monthly
                    </span>
                  </h3>

                  <p className="text-[#161C2D] mt-0.5 sm:mt-1.5 md:mt-2.5 lg:mt-3.5 font-campton">
                    billed monthly
                  </p>

                  <div className="flex items-center bg-[#FDD961] max-w-64 gap-3 justify-between cursor-pointer px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 md:py-2.5 lg:py-3.5 rounded-sm md:rounded-md mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                    <p className="text-[#161C2D] font-bold text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
                      Start 14 days Free Trial
                    </p>

                    <svg
                      className="w-2 sm:w-2.5 md:w-3 lg:w-3.5"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.93311 2L13.9998 7.63333L7.93311 13.2667"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                      <path
                        d="M1 7.40119H13.1333"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Manually Track income, expenses, and savings easily
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Create budgets, set limits, and get notified when you
                        hit your limits.
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add & view multiple checking, savings & cash accounts in
                        one place.
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Set up multiple accounts in one or more currencies
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Automate recurring transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Get deeper insights into your finances
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add personalized notes to your transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Your data is private and secure
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Support available 24/7
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        No Ads
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-2 sm:py-4 md:py-6 lg:py-8 px-6 sm:px-8 md:px-10 lg:px-12 bg-white border border-[#E7E9ED] rounded-sm md:rounded-md lg:rounded-lg">
                <h4 className="uppercase text-[#161C2D] font-bold text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm">
                  Premium Plan
                </h4>

                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <h3 className="text-[#161C2D] ">
                    <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      CAD
                    </span>
                    <span className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                      13.99
                    </span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      / Monthly
                    </span>
                  </h3>

                  <p className="text-[#161C2D] mt-0.5 sm:mt-1.5 md:mt-2.5 lg:mt-3.5 font-campton">
                    billed monthly
                  </p>

                  <div className="flex items-center bg-[#FDD961] max-w-64 gap-3 justify-between cursor-pointer px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 md:py-2.5 lg:py-3.5 rounded-sm md:rounded-md mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                    <p className="text-[#161C2D] font-bold text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
                      Start 14 days Free Trial
                    </p>

                    <svg
                      className="w-2 sm:w-2.5 md:w-3 lg:w-3.5"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.93311 2L13.9998 7.63333L7.93311 13.2667"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                      <path
                        d="M1 7.40119H13.1333"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Connect all of your accounts and track your transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Manually Track income, expenses, and savings easily
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Create budgets, set limits, and get notified when you
                        hit your limits
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add & view multiple checking, savings & cash accounts in
                        one place
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add your own categories
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Set up multiple accounts in one or more currencies
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Automate recurring transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Get deeper insights into your finances
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add personalized notes to your transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Your data is private and secure
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Support available 24/7
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        No Ads
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Yearly */}
          {planType === "yearly" && (
            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 sm:mt-5 md:mt-7 lg:mt-9 xl:mt-11 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              <div className="py-2 sm:py-4 md:py-6 lg:py-8 px-6 sm:px-8 md:px-10 lg:px-12 bg-white border border-[#E7E9ED] rounded-sm md:rounded-md lg:rounded-lg">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="uppercase text-[#161C2D] font-bold text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm">
                    Basic Plan
                  </h4>
                  <div className="text-[#FFA500] text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm bg-[#FEC734] bg-opacity-10 font-bold rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5">
                    Save $25
                  </div>
                </div>
{/* #it is well o */}
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <h3 className="text-[#161C2D] ">
                    <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      CAD
                    </span>
                    <span className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                      46.99
                    </span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      / yearly
                    </span>
                  </h3>

                  <p className="text-[#161C2D] mt-0.5 sm:mt-1.5 md:mt-2.5 lg:mt-3.5 font-campton">
                    billed annually
                  </p>

                  <div className="flex items-center bg-[#FDD961] max-w-64 gap-3 justify-between cursor-pointer px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 md:py-2.5 lg:py-3.5 rounded-sm md:rounded-md mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                    <p className="text-[#161C2D] font-bold text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
                      Start 14 days Free Trial
                    </p>

                    <svg
                      className="w-2 sm:w-2.5 md:w-3 lg:w-3.5"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.93311 2L13.9998 7.63333L7.93311 13.2667"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                      <path
                        d="M1 7.40119H13.1333"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Manually Track income, expenses, and savings easily
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Create budgets, set limits, and get notified when you
                        hit your limits.
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add & view multiple checking, savings & cash accounts in
                        one place.
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Set up multiple accounts in one or more currencies
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Automate recurring transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Get deeper insights into your finances
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add personalized notes to your transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Your data is private and secure
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Support available 24/7
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        No Ads
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-2 sm:py-4 md:py-6 lg:py-8 px-6 sm:px-8 md:px-10 lg:px-12 bg-white border border-[#E7E9ED] rounded-sm md:rounded-md lg:rounded-lg">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="uppercase text-[#161C2D] font-bold text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm">
                    Premium Plan
                  </h4>
                  <div className="text-[#FFA500] text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm bg-[#FEC734] bg-opacity-10 font-bold rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5">
                    Save $88
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <h3 className="text-[#161C2D] ">
                    <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      CAD
                    </span>
                    <span className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                      79.99
                    </span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                      / yearly
                    </span>
                  </h3>

                  <p className="text-[#161C2D] mt-0.5 sm:mt-1.5 md:mt-2.5 lg:mt-3.5 font-campton">
                    billed annually
                  </p>

                  <div className="flex items-center bg-[#FDD961] max-w-64 gap-3 justify-between cursor-pointer px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 md:py-2.5 lg:py-3.5 rounded-sm md:rounded-md mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                    <p className="text-[#161C2D] font-bold text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
                      Start 14 days Free Trial
                    </p>

                    <svg
                      className="w-2 sm:w-2.5 md:w-3 lg:w-3.5"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.93311 2L13.9998 7.63333L7.93311 13.2667"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                      <path
                        d="M1 7.40119H13.1333"
                        stroke="#161C2D"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="bevel"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Connect all of your accounts and track your transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Manually Track income, expenses, and savings easily
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Create budgets, set limits, and get notified when you
                        hit your limits
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add & view multiple checking, savings & cash accounts in
                        one place
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add your own categories
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Set up multiple accounts in one or more currencies
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Automate recurring transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Get deeper insights into your finances
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Add personalized notes to your transactions
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Your data is private and secure
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        Support available 24/7
                      </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                      <svg
                        className="w-2.5 sm:w-3 md:w-3.5 lg:w-4"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20704 11.8846C5.91354 11.8846 5.62062 11.7744 5.39648 11.5535L0 6.23421L1.62112 4.63571L6.20704 9.15603L15.3789 0.115385L17 1.71388L7.0176 11.5535C6.79347 11.7744 6.50054 11.8846 6.20704 11.8846Z"
                          fill="#68D585"
                        />
                      </svg>

                      <p className="text-[#161C2D] text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-campton">
                        No Ads
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section Six */}
        <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 px-6 sm:px-16 md:px-20 lg:px-24 xl:px-28 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#FEC734] md:pl-14 lg:pl-16 xl:pl-20 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="py-4 sm:py-6 md:py-0 px-6 sm:px-8 md:px-0">
              <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-[440px]">
                Take control of your finances
              </h4>
              <p className="text-[#161C2D] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 font-camptonMedium">
                Download the best budgeting app in Canada
              </p>
              <div className="flex items-center gap-1 md:gap-2 lg:gap-3 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6">
                <a href="https://play.google.com/store/apps/details?id=com.mybudgety.budgety">
                  <img
                    className="cursor-pointer w-20 md:w-24 lg:w-28 xl:w-32"
                    src={PlayStore}
                    alt=""
                  />
                </a>
                <a href="https://apps.apple.com/ca/app/budgety/id6477830943">
                  <img
                    className="cursor-pointer w-20 md:w-24 lg:w-28 xl:w-32"
                    src={AppleStore}
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="-mb-8 md:mb-0">
              <img
                src={Sect6Img}
                className="w-full -ml-2.5 sm:-ml-3 md:ml-0"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1C1D21] py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 px-6 sm:px-14 md:px-16 lg:px-20 xl:px-24">
          <img
            src={LogoWhite}
            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 mx-auto"
            alt=""
          />
          <div className="my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8">
            <ul className="flex items-center gap-2 md:gap-3 lg:gap-4 text-white text-[0.6rem] sm:text-xs md:text-sm lg:text-base justify-center">
              <li className="cursor-pointer">
                <a href="https://www.notion.so/FAQs-64486123a7b24f47acc93f3402c52530?pvs=4">
                  FAQ
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="cursor-pointer">
                <a href="mailto:hello@mybudgety.com">Contact</a>
              </li>
            </ul>
            <p className="text-center text-white text-[0.5rem] sm:text-[0.6rem] md:text-xs mt-1 sm:mt-2 md:mt-3 font-campton">
              hello@mybudgety.com
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3 justify-between mt-3 sm:mt-4 md:mt-5 lg:mt-6">
            <p className="text-[#FFFFFF] text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm font-campton">
              &copy;{new Date().getFullYear()} All rights reserved, Budgety
              Technologies
            </p>

            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 ">
              <a href="https://www.reddit.com/r/Budgety/s/uRUiDG7YzJ">
                <img
                  src={RedditIcon}
                  className="cursor-pointer w-3 md:w-4 lg:w-5"
                  alt=""
                />
              </a>

              <a href="https://x.com/budgetyapp_">
                <svg
                  className="cursor-pointer w-3 md:w-4 lg:w-5"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2.18198C19.2642 2.50865 18.4733 2.72865 17.6433 2.82781C18.4908 2.32031 19.1417 1.51615 19.4475 0.557813C18.655 1.02781 17.7767 1.36948 16.8417 1.55365C16.0942 0.756146 15.0267 0.257812 13.8467 0.257812C11.1975 0.257812 9.25083 2.72948 9.84917 5.29531C6.44 5.12448 3.41667 3.49115 1.3925 1.00865C0.3175 2.85281 0.835 5.26531 2.66167 6.48698C1.99 6.46531 1.35667 6.28115 0.804167 5.97365C0.759167 7.87448 2.12167 9.65281 4.095 10.0486C3.5175 10.2053 2.885 10.242 2.24167 10.1186C2.76333 11.7486 4.27833 12.9345 6.075 12.9678C4.35 14.3203 2.17667 14.9245 0 14.6678C1.81583 15.832 3.97333 16.5111 6.29 16.5111C13.9083 16.5111 18.2125 10.077 17.9525 4.30615C18.7542 3.72698 19.45 3.00448 20 2.18198Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/budgetyclub/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer w-3 md:w-4 lg:w-5"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                >
                  <path
                    d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
