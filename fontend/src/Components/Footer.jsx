import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 w-full bottom-0 left-0">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
              .SHOP<span className="text-green-500">ME</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Your trusted online store for all fashion needs. Shop smart, shop
              easy with us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-8 items-center font-medium">
            <Link to="/" className="hover:text-green-500 transition-colors">
              Home
            </Link>
            <Link to="/male" className="hover:text-green-500 transition-colors">
              Male
            </Link>
            <Link
              to="/female"
              className="hover:text-green-500 transition-colors"
            >
              Female
            </Link>
            <Link to="/kids" className="hover:text-green-500 transition-colors">
              Kids
            </Link>
          </div>

          <div className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaInstagramSquare size={22} />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-3 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-600">shopme.</span> All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
