import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl px-4 lg:px-0l">
        <h1 className="text-3xl font-extrabold uppercase text-black text-left">
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
