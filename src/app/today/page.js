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
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 place-items-center">
        {celebrations.map((celebration) => (
          <Link href={`celebration/${celebration?.slug}`}>
            <CardItem title={celebration.title} image={celebration.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Today;
