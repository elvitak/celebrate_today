import React from "react";

const MainText = () => {
  return (
    <div className="lg:flex justify-center items-center">
      <div className="md:text-8xl text-5xl text-center m-6">
        <div className="m-2">
          Make every day <br></br> a holiday with
        </div>
        <div className="uppercase block text-yellow-200">celebrate today</div>
      </div>
      <img
        className="lg:w-96 max-w-full h-auto mt-"
        src="https://m.media-amazon.com/images/I/6104OzuIQqL._SY522_.jpg"
      />
    </div>
  );
};

export default MainText;
