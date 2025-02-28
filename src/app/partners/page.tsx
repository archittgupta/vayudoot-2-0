"use client";
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import SponsorCard from '@/app/components/sponsercard';
import { useRouter } from 'next/navigation';

const sponsors = [
  {
    name: 'AICTE-IDEA Lab',
    imageUrl: '/idea.png',
    websiteUrl: 'https://www.meity.gov.in/',
  },
  {
    name: 'MeitY Startup Hub',
    imageUrl: '/startup.png',
    websiteUrl: 'https://www.meity.gov.in/',
  },
  {
    name: 'StartinUP',
    imageUrl: '/up.png',
    websiteUrl: 'https://startinup.up.gov.in/',
  },
  {
    name: 'DST Nidhi',
    imageUrl: '/dst.png',
    websiteUrl: 'https://nidhi.dst.gov.in/',
  },
];

export default function Sponsor() {
  const router = useRouter();
  
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center mt-12 px-4">
        <h1 className="font-bold text-4xl sm:text-5xl font-Manrope">Partners</h1>
        <p className="max-w-3xl text-lg sm:text-xl font-light mt-4 text-center">
          Our generous partners and benefactors support each competition by providing a prize pool and operational funding, as well as contributing mentorship and industry knowledge.
        </p>
      </section>
      
      {/* Sponsors Grid */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.imageUrl}
              websiteUrl={sponsor.websiteUrl}
            />
          ))}
        </div>
      </section>
      
      {/* Partner with Us */}
      <section className="flex flex-col items-center text-center mt-16 px-4">
        <h2 className="font-bold text-3xl sm:text-4xl">Partner with Us</h2>
        <button 
          onClick={() => router.push("https://forms.gle/u6tEcAjQFYovdiHS7")}
          className="mt-6 h-12 w-64 sm:w-80 text-lg font-bold rounded-md bg-white text-black hover:bg-gray-200 transition-all">
          Become a Partner
        </button>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
