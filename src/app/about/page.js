import NavigationBar from "@/components/NavigationBar";
import React from "react";

const About = () => {
  return (
    <div>
      <NavigationBar />
      <div className="text-5xl pt-32 text-center">
        This project is based on...
      </div>
      <div className="md:flex justify-center items-center">
        <img
          className="mx-28"
          src="https://m.media-amazon.com/images/I/6104OzuIQqL._SY522_.jpg"
        />

        <div className="pr-14 text-3xl">
          Celebrate Today is a digital journal that provides 4 reasons to revel
          every day of the year. It is inspired by the National Day Calendar, a
          compilation of appreciation days for everything from pizza to
          popsicles. Each day is dedicated to trying something new, enjoying the
          little things, and feeling a sense of accomplishment by marking the
          passage of time in a journal. For example, March 5 is “Learn What Your
          Name Means Day,” so do a little research into your moniker and then
          write an acrostic poem based on its letters. Some days involve
          performing good deeds, others require eating a donut, and a few
          recommend a little soul searching.
        </div>
      </div>
    </div>
  );
};

export default About;
