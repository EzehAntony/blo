import Link from "next/link";
import React from "react";

const Features = () => {
  const features = [
    {
      header: "Next.Js + Tailwind CSS Integration",
      text: "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
      link: "#",
      class: "bi bi-tree text-xl bg-[#1E3A8A] py-2 px-3 rounded-md text-white",
    },
    {
      header: "Ready-to-use Components",
      text: "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
      link: "#",
      class:
        "text-xl bg-[#1E3A8A] py-2 px-3 rounded-md text-white bi bi-x-diamond",
    },
    {
      header: "Best Practices",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
      link: "#",
      class:
        "text-xl bg-[#1E3A8A] py-2 px-3 rounded-md text-white bi bi-rocket-takeoff",
    },
    {
      header: "Excellent Page Speed",
      text: "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
      link: "#",
      class:
        "text-xl bg-[#1E3A8A] py-2 px-3 rounded-md text-white bi bi-list-check",
    },
    {
      header: "Search Engine Optimization (SEO)",
      text: "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
      link: "#",
      class:
        "text-xl bg-[#1E3A8A] py-2 px-3 rounded-md text-white bi bi-arrow-left-right",
    },
    {
      header: "Open to new ideas and contributions",
      text: "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
      link: "#",
      class:
        "text-xl bg-[#1E3A8A] py-2 px-3 rounded-md text-white bi bi-lightbulb",
    },
  ];
  return (
    <div className=" bg-[#0F172A] w-full mt-8  px-5 lg:px-10 mb-10 ">
      <h3 className="w-full text-[#81CCFE]  font-bold text-center text-xl">
        Features
      </h3>
      <h1 className="text-center w-full my-2 text-3xl text-white font-bold ">
        What you get with TailNext
      </h1>
      <p className="w-full text-[#CBD5E1] text-center font-semibold my-4 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        maiores ipsa enim est reprehenderit maxime dignissimos deserunt neque
        voluptatem culpa.
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
              <Link href={e.link} className="text-white font-bold">
                Discover now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
