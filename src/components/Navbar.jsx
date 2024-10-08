import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className="bg-black text-gray-400 h-[100px] w-full mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4 md:ml-8">Ashesha Kaushik</h1>
      <ul className='hidden md:flex'>
        <li className='p-5'>
          <a href="#about">About</a>
        </li>
        <li className='p-5'>
          <a href="#work">Work</a>
        </li>
        <li className='p-5'>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden mr-6' aria-label='Toggle navigation'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 transition-all"
            : "fixed left-[-100%] transition-all"
        }
      >
        <h1 className="text-3xl primary-color m-4">Ashesha</h1>
        <ul className="p-8 text-2xl space-y-4">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
