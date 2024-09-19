import React from "react";

const CardItem = ({ image, title }) => {
  return (
    <div class="p-4">
      <div class="rounded overflow-hidden shadow-lg h-80 w-96 relative">
        <img class="w-full h-56" src={image} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <button class="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded absolute bottom-2 right-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
