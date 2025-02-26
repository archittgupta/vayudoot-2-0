"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-7">
  <div className="navbar h-16 flex items-center justify-center w-full max-w-xl bg-white border border-gray-300 rounded-3xl shadow-lg px-6 py-3">
    <ul className="flex flex-wrap justify-center gap-8">
      <Link href="/" className="text-black font-bold transition-all duration-300 hover:text-blue-500">Home</Link>
      <Link href="/pages/team" className="text-black font-bold transition-all duration-300 hover:text-blue-500">Team</Link>
      <Link href="/pages/guidelines" className="text-black font-bold transition-all duration-300 hover:text-blue-500">Guidelines</Link>
      <Link href="/pages/sponsors" className="text-black font-bold transition-all duration-300 hover:text-blue-500">Sponsors</Link>
      <Link href="/pages/partners" className="text-black font-bold transition-all duration-300 hover:text-blue-500">Partners</Link>
      <Link href="/pages/about" className="text-black font-bold transition-all duration-300 hover:text-blue-500">About</Link>
    </ul>
  </div>
</div>
  );
};

export default Navbar;
