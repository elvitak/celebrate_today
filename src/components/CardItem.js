import React from "react";

const CardItem = ({ image, title }) => {
  return (
    <div className="p-4">
      <div className="rounded overflow-hidden shadow-lg h-80 w-96 relative">
        <img className="w-full h-56" src={image} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <button className="bg-transparent hover:bg-yellow-200 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-transparent rounded absolute bottom-2 right-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
