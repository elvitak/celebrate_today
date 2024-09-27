import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { getAllCelebrations } from "../../../lib/api";
import Link from "next/link";
import CardItem from "@/components/CardItem";

const Today = async () => {
  const celebrations = await getAllCelebrations();
  return (
    <div>
      <NavigationBar />
      <div className="md:flex justify-center items-center mt-16">
        <p className="text-8xl text-center">
          Find a way<br></br> how to make <br></br>
          <a className="uppercase text-yellow-200">today</a> <br></br> special
        </p>
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 place-items-center ml-6">
          {celebrations.map((celebration) => (
            <Link href={`celebration/${celebration?.slug}`}>
              <CardItem title={celebration.title} image={celebration.image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Today;
