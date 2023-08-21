import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="bg-[#0F172A] px-6 lg:px-15 pt-[80px]">
      <Header />
      <div className="w-full py-5 flex flex-col justify-center items-center lg:pt-20">
        <div className="lg:px-40 flex flex-col  justify-center items-center">
          <h1 className="text-[#CBD5E1] font-extrabold text-4xl lg:text-6xl  text-center lg:break-all w-full">
            Free Template for starts a website
            <br className="hidden lg:block" /> using Next.js + Tailwind CSS
          </h1>
          <p className="text-[#CBD5E1] text-lg text-center py-4 lg:w-[80%] ">
            TailNext is a production ready template to start your new website
            using Next.js + Tailwind CSS. It has been designned following Best
            Practices SEO Accessibility Dark Mode, great Page Speed, image
            optimization
          </p>
        </div>

        <div className="w-full lg:flex lg:max-w-[500px] justify-center items-center ">
          <button
            type="button"
            class="h-[50px] text-white w-full my-5 lg:m-0 lg:mr-4  flex justify-center items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <i className="bi bi-box-arrow-down"></i>
            <p className="ml-2 font-bold">Get Template</p>
          </button>
          <button
            type="button"
            class="h-[50px] text-md  w-full mt-2 py-2.5 px-5 mr-2 mb-2 hover:bg-[#1e2841] lg:m-0 font-bold text-white border-[1px] rounded md border-[#6b6b6b] "
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full mt-4 flex justify-center items-center">
        <img src="/shoe.jpg" className="rounded-lg" alt="" />
      </div>

      <div className="sponsors w-full min-h-[50px] py-16 flex justify-center items-center ">
        <div className="w-[50px] h-[50px] bg-[#434751] my-2 mx-2 "></div>
        <div className="w-[50px] h-[50px] bg-[#434751] my-2 mx-2 "></div>
        <div className="w-[50px] h-[50px] bg-[#434751] my-2  mx-2"></div>
        <div className="w-[50px] h-[50px] bg-[#434751] my-2  mx-2"></div>
      </div>
    </div>
  );
};

export default Hero;
