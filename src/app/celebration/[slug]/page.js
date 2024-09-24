import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { getCelebrationBySlug } from "../../../../lib/api";

const Page = ({ params }) => {
  const slug = params["slug"];
  const celebration = getCelebrationBySlug(slug);
  return (
    <div>
      <NavigationBar />
      <div>Page + {slug}</div>
    </div>
  );
};

export default Page;
