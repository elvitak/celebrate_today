"use client";
import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="flex justify-end px-4 lg:px-01 w-full">
      <h1 className="text-3xl font-extrabold  text-black">Celebrate Today</h1>
      <div className="md:inline-flex text-grey-900 hover:text-black duration-200 pt-3 ml-auto">
        <Link href="/today">Today's celebrations</Link>
        <Link href="/about" className="ml-3">
          About Project
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
