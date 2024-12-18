import React from "react";
import Header from "../hero/Header";
import HeroText from "../hero/HeroText";
import heroVector from "../../assets/hero2.svg";

const Hero = () => {
  return (
    <div
      className="bg-[#424242] h-screen sm:h-[50vh] md:h-screen w-screen"
      id="home"
    >
      <Header />
      <div className="h-20"></div>
      <div className="flex justify-between">
        <HeroText />
        <div className="w-2/5 sm:block hidden ">
          <img src={heroVector} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
