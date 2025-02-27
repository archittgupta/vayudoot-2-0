"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-7">
  <div className="navbar h-16 flex items-center text-[1.2rem] justify-center w-full max-w-2xl rounded-3xl shadow-lg px-6 py-3">
    <ul className="flex flex-wrap justify-center gap-8">
      <Link href="/" className="text-white font-bold transition-all duration-300 hover:text-blue-500">Home</Link>
      <Link href="/team" className="text-white font-bold transition-all duration-300 hover:text-blue-500">Team</Link>
      <Link href="/guidelines" className="text-white font-bold transition-all duration-300 hover:text-blue-500">Guidelines</Link>
      <Link href="/sponsors" className="text-white font-bold transition-all duration-300 hover:text-blue-500">Sponsors</Link>
      <Link href="/partners" className="text-white font-bold transition-all duration-300 hover:text-blue-500">Partners</Link>
      <Link href="/about" className="text-white font-bold transition-all duration-300 hover:text-blue-500">About</Link>
    </ul>
  </div>
</div>
  );
};

export default Navbar;
