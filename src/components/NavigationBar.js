"use client";
import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="flex justify-end px-4 lg:px-01 w-full">
      <Link
        href="/"
        className="text-3xl font-extrabold  text-black hover:text-yellow-200 m-4"
      >
        Celebrate Today
      </Link>
      <div className="md:inline-flex pt-3 px-10 ml-auto font-semibold uppercase">
        <Link href="/today" className="hover:text-yellow-200">
          Today's celebrations
        </Link>
        <Link href="/about" className="ml-8 hover:text-yellow-200">
          About Project
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
