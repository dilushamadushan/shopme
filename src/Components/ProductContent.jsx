import React from "react";
import starIcone from "../assets/star_icon.png";
import starDullIcone from "../assets/star_dull_icon.png";

function ProductContent({ product }) {
  if (!product) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row md:p-20 gap-10 max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
        <div className="flex lg:flex-col gap-4">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt={`preview-${i}`}
              className="w-16 h-16 md:w-25 md:h-25 cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>

        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="h-72 sm:h-96 lg:h-[450px]"
          />
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        <div className="flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={starIcone} alt="star" className="w-5 h-5" />
          ))}
          <img src={starDullIcone} alt="star" className="w-5 h-5" />
          <p className="ml-2 text-sm text-gray-500">(122 reviews)</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="line-through text-gray-500 text-base md:text-lg">
            ${product.old_price}
          </span>
          <span className="text-xl md:text-2xl font-bold text-green-600">
            ${product.new_price}
          </span>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Add some description here about the product. Highlight its quality,
          fabric, and unique style to attract customers.
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-2">Select Size</h2>
          <div className="flex flex-wrap gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition text-sm md:text-base"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button className="w-full md:w-1/2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          ADD TO CART
        </button>

        <div className="text-sm text-gray-500 space-y-1">
          <p>
            <span className="font-medium text-gray-700">Category:</span> Women,
            T-Shirt, Crop Top
          </p>
          <p>
            <span className="font-medium text-gray-700">Tags:</span> Modern,
            Latest
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
