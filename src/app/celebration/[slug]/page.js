import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { getCelebrationBySlug } from "../../../../lib/api";
import { PortableText } from "@portabletext/react";
import RichText from "@/components/RichText";

const Page = async ({ params }) => {
  const slug = params["slug"];
  const celebration = await getCelebrationBySlug(slug);
  return (
    <div>
      <NavigationBar />
      <div class="container mx-auto prose prose-xl px-4 py-16">
        <h1 class="">{celebration.title}</h1>
        <div class="max-w-xl">
          <img
            class="h-auto max-w-full rounded-lg"
            src={celebration.image}
            alt=""
          />
        </div>
        <PortableText value={celebration.conent} components={RichText} />
      </div>
    </div>
  );
};

export default Page;
