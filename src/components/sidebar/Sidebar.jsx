import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full">
      <div
        className={`w-72 min-h-full text-center bg-[#2E8B57] text-[#2E8B57] px-10 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <h1 className='text-3xl text-bold uppercase py-5 text-white'>First Bank</h1>
        <ul className="space-y-8 py-5 grid justify-center">
          <li className="bg-zinc-100 w-44 p-4 rounded-lg shadow-md hover:bg-[#276D47] hover:text-zinc-100 *: transition duration-300">
            Home
          </li>
          <li className="bg-zinc-100 w-44 p-4 rounded-lg shadow-md hover:bg-[#276D47] hover:text-zinc-100 *: transition duration-300">
            Services
          </li>
          <li className="bg-zinc-100 w-44 p-4 rounded-lg shadow-md hover:bg-[#276D47]  hover:text-zinc-100 *:transition duration-300">
            Accounts
          </li>
        
          <li className="bg-zinc-100 w-44 p-4 rounded-lg shadow-md hover:bg-[#276D47] hover:text-zinc-100 *: transition duration-300">
            Support
          </li>
          <li className="bg-zinc-100 w-44 p-4 rounded-lg shadow-md hover:bg-[#276D47] hover:text-zinc-100 *: transition duration-300">
            About
          </li>
        </ul>
        <button className="bg-red-500 text-white w-44 p-4 rounded-lg shadow-md  ">
            Logout
          </button>
        <p className="text-center text-white text-sm opacity-60 mt-10">© Made by Aaditya Mohan ❤️</p>
      </div>

      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-3  text-[#2E8B57] rounded-full shadow-lg hover:bg-[#276D47]"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>
    </div>
  );
}

export default Sidebar;
