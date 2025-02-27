"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-7 px-4"> {/* Added padding for mobile */}
      <div className="navbar h-auto sm:h-16 flex items-center text-[1rem] sm:text-[1.2rem] justify-center w-full max-w-2xl bg-gray-50 bg-opacity-10 backdrop-blur-md rounded-[40px] sm:rounded-[70px] shadow-lg px-6 py-3">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 flex-col sm:flex-row items-center w-full">
          <li><Link href="/" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Home</Link></li>
          <li><Link href="/team" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Team</Link></li>
          <li><Link href="/guidelines" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Guidelines</Link></li>
          <li><Link href="/sponsors" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Sponsors</Link></li>
          <li><Link href="/partners" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">Partners</Link></li>
          <li><Link href="/about" className="text-white font-semibold transition-all duration-300 hover:text-blue-500">About</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
