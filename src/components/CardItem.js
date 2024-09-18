import React from "react";

const CardItem = ({ image, title }) => {
  return (
    <div class="max-width: 640px p-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg h-96">
        <img class="w-full h-56" src={image} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <button class="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
