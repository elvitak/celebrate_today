import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="w-full bg-white h-20 shadow-md">
      <div className="max-w-screen-xl mx-auto items-center flex justify-between px-4 lg:px-0 h-full">
        <h1 className="text-3x1 font-extrabold uppercase text-black font-size: 50p;">
          Celebrate Today
        </h1>
        <div className="md:inline-flex items-center text-grey-900 hover:text-black duration-200">
          <Link
            href="/about"
            className="text-sm uppercase font-semibold relative"
          >
            About Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
