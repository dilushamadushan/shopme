import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaGift } from "react-icons/fa";
import { RiHomeSmileFill, RiShoppingBag4Fill } from "react-icons/ri";

function Home() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('./bg1.jpg')",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-green-400">SHOPME</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the latest fashion trends for Men, Women, and Kids.
          </p>
          <Link
            to="/shop"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
