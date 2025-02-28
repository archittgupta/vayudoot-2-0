"use client";

import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "../components/footer";

const Sponsor = () => {
  return (<div>
    <Navbar/>
    <div className="flex flex-col items-center justify-center bg-black text-white py-60 px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">Become a Sponsor</h2>
      <p className="text-lg text-center max-w-2xl mb-6">
        Join us in making this event a success! Explore sponsorship opportunities and showcase your brand to a diverse audience.
      </p>
      <div className="flex gap-6">
        <Link href="/sponsorship-brochure.pdf" target="_blank">
          <button className="bg-white hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-lg transition-all">
            Sponsorship Brochure
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-white hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-lg transition-all">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
    <Footer></Footer>
    
    </div>
  );
};

export default Sponsor;
