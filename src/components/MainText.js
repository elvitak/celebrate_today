import React from "react";

const MainText = () => {
  return (
    <div className="lg:flex justify-center items-center">
      <div className="p-10">
        <img
          className="max-w-full h-auto"
          src="https://m.media-amazon.com/images/I/6104OzuIQqL._SY522_.jpg"
        />
      </div>
      <div>
        <div className="text-4xl text-center text-gray-600 m-2">
          Make every day a holiday with
        </div>
        <div className="uppercase text-6xl text-center block">
          celebrate today
        </div>
      </div>
    </div>
  );
};

export default MainText;
