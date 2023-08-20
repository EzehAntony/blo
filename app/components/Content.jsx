import React from "react";
import Link from "next/link";

const Content = () => {
  const features = [
    {
      header: "Per ei quaeque sensibus",
      text: "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
      link: "#",
      class:
        "bi bi-check2 text-xl bg-[#1E3A8A] py-2 px-3 rounded-full text-white",
    },
    {
      header: "Cu imperdiet posidonium sed",
      text: "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
      link: "#",
      class:
        "text-xl bg-[#1E3A8A] py-2 px-3 rounded-full text-white bi bi-check2",
    },
    {
      header: "Nulla omittam sadipscing mel ne",
      text: "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
      link: "#",
      class:
        "text-xl bg-[#1E3A8A] py-2 px-3 rounded-full text-white bi bi-check2",
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
    <div className=" bg-[#0F172A] w-full mt-8  px-5 lg:px-10 mb-10 ">
      <h3 className="w-full text-[#81CCFE]  font-bold text-center text-xl">
        Content
      </h3>
      <h1 className="text-center w-full my-4 text-3xl text-white font-bold ">
        Aliquip definiebas ad est
      </h1>

      <p className="w-full text-[#CBD5E1] text-center font-semibold my-4 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        maiores ipsa
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {features.map((e, i) => (
          <div
            key={i}
            className="w-full my-5 flex flex-row justify-center items-start"
          >
            <i className={e.class}></i>
            <div className="ml-5">
              <h1 className="text-white font-bold text-xl ">{e.header}</h1>
              <p className="text-[#CBD5E1] my-4">{e.text}</p>
            </div>
          </div>
        ))}

        <div className="w-full lg:grid lg:grid-cols-2">
          <div className="w-full">
            <img src="/shoe.jpg" className="rounded-lg w-full" alt="" />
          </div>

          <div className="mt-10">
            {check.map((e, i) => (
              <div
                key={i}
                className="w-full my-5 flex flex-row justify-start items-center"
              >
                <i className="bi bi-check2 bi bi-check2 text-xl bg-[#1E3A8A] py-2 px-3 rounded-full text-white"></i>
                <div className="ml-5 flex">
                  <h1 className="text-white font-semibold text-md ">{e}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
