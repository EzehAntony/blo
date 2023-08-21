import React from "react";

const Steps = () => {
  const steps = [
    {
      i: "bi bi-arrow-down border-2 absolute border-[#1E3A8A] bg-[#0F172A]  p-2 px-3 rounded-full -left-6 -top-2",
      step: "Step 1",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
    },
    {
      i: "bi bi-arrow-down border-2 absolute border-[#1E3A8A] bg-[#0F172A]  p-2 px-3 rounded-full -left-6 -top-2",
      step: "Step 2",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
    },
    {
      i: "bi bi-arrow-down border-2 absolute border-[#1E3A8A] bg-[#0F172A]  p-2 px-3 rounded-full -left-6 -top-2",
      step: "Step 3",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
    },
    {
      i: "bi bi-check border-2 absolute border-[#1E3A8A] bg-[#0F172A]  p-2 px-3 rounded-full text-[green] -left-6 -bottom-2",
      step: "Ready",
      text: "",
    },
  ];
  return (
    <div className="px-4 lg:px-20 text-[#CBD5E1]">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="lg:flex flex-col justify-center items-center  lg:w-[45%] my-10">
          <h1 className="text-3xl font-bold py-10">
            Sed ac magna sit amet risus tristique interdum. hac.
          </h1>
          {steps.map((e, i) => (
            <div key={i} className="relative w-full py-4 px-10 ml-2 border-l-2">
              <i className={e.i}></i>
              <h1 className="font-semibold">{e.step}</h1>
              <p className="text-md w-[100%] ">{e.text}</p>
            </div>
          ))}
        </div>
        <img src="/shoe.jpg" className="w-full lg:w-[45%] rounded-lg " alt="" />
      </div>
    </div>
  );
};

export default Steps;
