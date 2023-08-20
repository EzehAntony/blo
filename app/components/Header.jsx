import { Menu } from "@headlessui/react";

const Header = () => {
  return (
    <div className="h-[70px] bg-[#0F172A] w-full px-5 lg:px-10 fixed right-0 top-0 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">TailNext</h1>

      <i className="bi bi-justify-right text-[#848B98] text-2xl"></i>
    </div>
  );
};

export default Header;
