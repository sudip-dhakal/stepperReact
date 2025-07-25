import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white rounded-xl shadow-md px-6 py-4 flex justify-between items-center">
  
      <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-200">
        <img
          src="../../public/example.png"
          className="h-full w-full object-cover object-center"
          alt="Logo"
        />
      </div>

      <ul className="flex gap-x-12 text-lg font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          Home
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          Products
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          News & Notices
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          About Us
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
