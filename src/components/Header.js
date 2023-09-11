import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex justify-between items-center mt-1 py-2 px-4 shadow-md'>
      <NavLink to="/" className="flex items-center">
        <img src={logo} className='h-12 w-12' alt="Logo" />
        <span className='text-black text-xl font-bold uppercase tracking-wider ml-2'>Mrinal</span>
      </NavLink>

      <div className="flex items-center space-x-4">
        <NavLink to="/" className="text-black hover:text-indigo-700 px-2 py-1 rounded transition duration-300">
          Home
        </NavLink>
        <NavLink to="/products" className="text-black hover:text-indigo-700 px-2 py-1 rounded transition duration-300">
  Products
</NavLink>

        <NavLink to="/contact" className="text-black hover:text-indigo-700 px-2 py-1 rounded transition duration-300">
          Contact
        </NavLink>
        <NavLink to="/about" className="text-black hover:text-indigo-700 px-2 py-1 rounded transition duration-300">
          About Us
        </NavLink>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 pl-8 border border-gray-300 rounded focus:outline-none focus:border-indigo-700"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaSearch />
        </span>
      </div>
    </div>
  );
}

export default Header;
