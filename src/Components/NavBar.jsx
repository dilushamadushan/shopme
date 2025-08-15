import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            .SHOP<span className="text-orange-500">ME</span>
          </div>

          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <Link to="/male" className="hover:text-orange-500">Male</Link>
            <Link to="/female" className="hover:text-orange-500">Female</Link>
            <Link to="/kids" className="hover:text-orange-500">Kids</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="_btn px-4 py-2 bg-orange-500 text-black w-24 font-bold rounded-lg transition">
              Log In
            </button>
            <div className="relative flex items-center">
              <IoCartOutline className="text-2xl" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                0
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center justify-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-4 text-center">
          <Link to="/" className="block text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/male" className="block text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Male</Link>
          <Link to="/female" className="block text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Female</Link>
          <Link to="/kids" className="block text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>Kids</Link>
          <button className="w-full px-4 py-2 bg-orange-500 text-black rounded-lg transition font-bold">
            Log In
          </button>
          <div className="flex items-center justify-center">
            <IoCartOutline className="text-2xl" />
            <div className="ml-1 bg-red-500 text-white text-xs px-1 rounded-full">
              0
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
