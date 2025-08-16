import React from "react";

function Item(props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-2xl transition duration-300 w-64 text-center">
      <img
        src={props.img}
        alt={props.name}
        className="w-full  object-cover rounded-md mb-3"
      />
      <p className="text-lg text-gray-800">{props.name}</p>
      <div className="flex justify-center gap-4 items-center mt-2">
        <div className="text-lg font-bold text-green-600">
          ${props.new_price}
        </div>
        <div className="text-sm text-gray-500 line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
