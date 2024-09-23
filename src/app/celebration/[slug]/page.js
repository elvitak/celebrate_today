"use client";
import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { useParams } from "next/navigation";

const Page = () => {
  const router = useParams();
  return (
    <div>
      <NavigationBar />
      <div>Page {router?.slug} </div>
    </div>
  );
};

export default Page;
