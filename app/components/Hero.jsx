import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="bg-[#0F172A] px-5 lg:px-10 pt-[80px]">
      <Header />
      <div className="py-5">
        <h1 className="font-bold text-[40px] px-4  text-[#CBD5E1] text-center">
          Free template for Next.js + Tailwind CSS
        </h1>
        <p className="text-[#CBD5E1] text-center ">
          It has been designed following Best Practices, SEO, Accessibility,
          Dark Mode, great Page Speed, image optimization.
        </p>

        <div>
          <button
            type="button"
            class="text-white w-full my-5 flex justify-center items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <i className="bi bi-box-arrow-down"></i>
            <p className="ml-2 font-bold">Get Template</p>
          </button>
          <button
            type="button"
            class="w-full mt-2 py-2.5 px-5 mr-2 mb-2 text-sm font-bold text-white focus:outline-none  rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full mt-4 flex justify-center items-center">
        <img src="/shoe.jpg" className="rounded-lg" alt="" />
      </div>

      <div className="sponsors w-full min-h-[50px] py-5 flex justify-center items-center ">
        <div className="w-[50px] h-[50px] bg-[#434751] my-2 mx-2 "></div>
        <div className="w-[50px] h-[50px] bg-[#434751] my-2 mx-2 "></div>
        <div className="w-[50px] h-[50px] bg-[#434751] my-2  mx-2"></div>
        <div className="w-[50px] h-[50px] bg-[#434751] my-2  mx-2"></div>
      </div>
    </div>
  );
};

export default Hero;
