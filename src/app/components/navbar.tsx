"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Removed X icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex z-20 justify-center mt-7 rel">
      <div className="navbar h-auto sm:h-16 flex items-center text-[1rem] sm:text-[1.2rem] sm:justify-center w-full max-w-2xl bg-gray-50 bg-opacity-10 backdrop-blur-md rounded-[40px] sm:rounded-[70px] shadow-lg px-6 py-3">
        
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-6">
          <li><Link href="/" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Home</Link></li>
          <li><Link href="/team" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Team</Link></li>
          <li><Link href="/guidelines" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Guidelines</Link></li>
          <li><Link href="/sponsors" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Sponsors</Link></li>
          <li><Link href="/partners" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Partners</Link></li>
          <li><Link href="/about" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">About</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[50%] text-white shadow-xl transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out sm:hidden flex flex-col items-end backdrop-blur-lg`}
      >
        {/* Menu Items */}
        <ul className="flex flex-col items-end gap-6 p-10 pt-10 w-full">
          <li><Link href="/" className="text-lg font-semibold hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/team" className="text-lg font-semibold hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>Team</Link></li>
          <li><Link href="/guidelines" className="text-lg font-semibold hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>Guidelines</Link></li>
          <li><Link href="/sponsors" className="text-lg font-semibold hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>Sponsors</Link></li>
          <li><Link href="/partners" className="text-lg font-semibold hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>Partners</Link></li>
          <li><Link href="/about" className="text-lg font-semibold hover:scale-105 transition-transform" onClick={() => setIsOpen(false)}>About</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
