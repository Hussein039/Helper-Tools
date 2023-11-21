import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ImageUpload from '../products/ImageUpload';


function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
          <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-white text-xl font-semibold">
                Your Logo
              </Link>
            </div>
        
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" exact className="text-white hover:text-gray-300">
                Home
              </Link>
        
              <Link to="../pages/About.jsx" className="text-white hover:text-gray-300">
                About
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  Services 

                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg py-2">
                    <Link
                      to="../products/ImageUpload.jsx"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Text Extractor
                    </Link>
                    
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Mobile App
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      SEO
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
                
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleDropdown}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-14 right-0 w-40 bg-white rounded-md shadow-lg py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Web Design
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Mobile App
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    SEO
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
    );
  
}

export default Header;
