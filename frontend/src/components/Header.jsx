import React from "react";


const Header = () => {
  return (
    <nav className="border-b w-full h-32">
      <div className="sm:px-6 lg:px-8 h-32">
        <div className="flex justify-evenly items-center h-32">
          <div className="flex items-center">
            <img src={"/logo.png"} alt="logo" className="w-[94px] h-[120px] mt-[14px]" />
          </div>
          <div className="hidden md:flex gap-12">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-3xl">The School</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-3xl">Academics</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-3xl">life @ DBTR</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-3xl">Contact us</a>
          </div>
          <div className="flex gap-8">
            <button className="text-[#f54e39] px-4 py-2 rounded-md hover:bg-gray-200 h-16 w-[154px] border border-[#f54e39] text-2xl border-2 font-semibold">CSR</button>
            <button className="bg-red-500 text-white px-4 py-4 pb-4 rounded-md hover:bg-[#f54e39] w-[183px] text-2xl font-semibold">Donate 🤍</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
