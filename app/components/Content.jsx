import React from "react";
import Link from "next/link";

const Content = () => {
  const features = [
    {
      header: "Per ei quaeque sensibus",
      text: "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
      link: "#",
      class:
        "bi bi-check2 text-md bg-[#1E3A8A] py-1 px-2 rounded-full text-white",
    },
    {
      header: "Cu imperdiet posidonium sed",
      text: "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
      link: "#",
      class:
        "text-md bg-[#1E3A8A] py-1 px-2 rounded-full text-white bi bi-check2",
    },
    {
      header: "Nulla omittam sadipscing mel ne",
      text: "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
      link: "#",
      class:
        "text-md bg-[#1E3A8A] py-1 px-2 rounded-full text-white bi bi-check2",
    },
  ];

  const check = [
    "Per ei quaeque sensibus",
    "Cu imperdiet posidonium sed",
    "Nulla omittam sadipscing mel ne",
    "Per ei quaeque sensibus",
    "Cu imperdiet posidonium sed",
    "Nulla omittam sadipscing mel ne",
  ];
  return (
    <div className=" bg-[#1E293B] w-full mt-8 pt-20  px-5 lg:px-20 mb-10 ">
      <h3 className="w-full text-[#81CCFE]  font-bold text-center text-xl">
        Content
      </h3>

      <h1 className="text-center w-full my-4 text-3xl lg:text-5xl text-white font-bold ">
        Aliquip definiebas ad est
      </h1>
      <p className="w-full text-[#CBD5E1] text-center font-semibold my-4 ">
        Quando cetero his ne, eum admodum sapientem ut
      </p>

      <div className="w-full lg:flex justify-around items-center">
        <div className="w-full lg:w-[45%] ">
          <p className="w-full text-left text-md text-[#CBD5E1] font-semibold my-4 ">
            Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam
            regione ut, persius eripuit quo id. Sit te euismod tacimates.
          </p>
          {features.map((e, i) => (
            <div
              key={i}
              className="w-full my-5 flex flex-row justify-center items-start"
            >
              <i className={e.class}></i>
              <div className="ml-5">
                <h1 className="text-white text-lg font-bold">{e.header}</h1>
                <p className="text-[#CBD5E1] my-4">{e.text}</p>
              </div>
            </div>
          ))}
        </div>

        <img src="/shoe.jpg" className="rounded-lg lg:w-[45%] w-full" alt="" />
      </div>

      <div className="w-full mt-20 lg:flex justify-around items-center">
        <div className="order-2 w-full lg:w-[45%] ">
          <p className="w-full text-left text-md text-[#CBD5E1] text-center font-semibold my-4 ">
            Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam
            regione ut, persius eripuit quo id. Sit te euismod tacimates.
          </p>
          {features.map((e, i) => (
            <div
              key={i}
              className="w-full my-5 flex flex-row justify-center items-start"
            >
              <i className={e.class}></i>
              <div className="ml-5">
                <h1 className="text-white text-lg font-bold">{e.header}</h1>
                <p className="text-[#CBD5E1] my-4">{e.text}</p>
              </div>
            </div>
          ))}
        </div>

        <img src="/shoe.jpg" className=" rounded-lg lg:w-[45%] w-full" alt="" />
      </div>
    </div>
  );
};

export default Content;
