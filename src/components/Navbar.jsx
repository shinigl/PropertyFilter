import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-semibold text-white">HomeHorizon</h1>
        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4">
            <li><Link to="" className="text-white hover:text-gray-200">Rent</Link></li>
            <li><Link to="" className="text-white hover:text-gray-200">Buy</Link></li>
            <li><Link to="" className="text-white hover:text-gray-200">Sell</Link></li>
            <li><Link to="" className="text-white hover:text-gray-200">Manage Property</Link></li>
            <li><Link to="" className="text-white hover:text-gray-200">Resources</Link></li>
          </ul>
          <div className="space-x-3">
            <button className="bg-white text-blue-600 px-5 py-2 rounded-md hover:bg-gray-200 cursor-pointer" >Login</button>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 cursor-pointer">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
