import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-center">
      <button
        onClick={handleToggle}
        type="button"
        className="inline-flex justify-center items-center p-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition ease-in-out duration-150"
      >
        Open Dropdown
      </button>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white rounded-md shadow-xs">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
              Option 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
