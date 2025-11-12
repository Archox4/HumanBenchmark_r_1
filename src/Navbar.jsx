import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bg-anim px-6 py-4 flex justify-between items-center mb-4">
      <Link to="/"><h1 className="text-2xl font-medium text-cyan-500">Benhmark</h1></Link>

      <ul className="flex space-x-6 text-gray-200">
        <li className="hover:text-cyan-500 cursor-pointer font-medium">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
