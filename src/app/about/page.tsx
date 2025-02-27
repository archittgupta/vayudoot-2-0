"use client"
import React from 'react';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import DirectorMessage from '@/app/components/message';
import CountdownTimer from '@/app/components/countdown';


const judges = [
    {
        name: "Mahendra Kumar Gupta",
        title: "CEO, Inurture Incubation Foundation",
        image: "/mkg.jpeg"
    },
    {
        name: "Dr. Anoop Pandey",
        title: "Head, Orbits Consulting",
        image: "/ap.jpeg"
    },
    {
        name: "Dr. R.S. Raman",
        title: "HOD, Mechanical Engineering Department",
        image: "/hod-mech.jpg"
    },
    {
        name: "Dr. Abhishek Saxena",
        title: "Associate Professor",
        image: "/saxena.jpg"
    }
];

export default function Overview() {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <Navbar />

            {/* Organized By Section */}
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold text-white">Organized by</h1>
                <DirectorMessage
                    imageUrl="/abes.png"
                    message="Equipped with many ‘Centers of Excellence’, the college encourages its students to participate in a creative exploration of knowledge involving hands-on activities, which provide ‘learning by doing’, an environment far different from exam-centric rote learning."
                />
            </section>

            {/* Prize Pool Section */}
            <section className="w-full px-6 py-12 flex flex-col lg:flex-row items-center text-center lg:text-left">
                <div className="lg:w-1/3">
                    <h2 className="text-5xl font-extrabold">EXPLORE.</h2>
                    <h2 className="text-5xl font-extrabold mt-4">INNOVATE.</h2>
                    <h2 className="text-5xl font-extrabold mt-4">PIONEER.</h2>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <p className="text-6xl font-extrabold text-blue-400">₹50,000</p>
                    <p className="text-xl text-gray-400 mt-4">Prize Pool</p>
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                        The 50,000 Vayudoot is a two-month competition with the goal of making breakthroughs in the design and development of drones.
                    </p>
                </div>
            </section>

            {/* How to Win Section */}
            <section className="w-full px-6 py-12">
                <h2 className="text-4xl font-bold text-white">HOW TO WIN</h2>
                <p className="text-lg text-gray-300 mt-6 leading-relaxed">
                    The winning team will develop novel technologies to rapidly and comprehensively adapt to the designed hurdles and challenges provided.
                    Teams must pass all hurdles and conquer challenges in record time while demonstrating the scalability of their technology.
                </p>
            </section>

            {/* Contact Us Section */}
            <section className="w-full px-6 py-12 text-center">
                <h2 className="text-4xl font-bold text-white">Contact Us</h2>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                    We welcome teams throughout all phases of the competition. Whether you want to recruit, support, or assist with operations, reach out to us.
                </p>
                <button className="mt-6 bg-white hover:bg-gray-400 text-black font-bold py-2 px-6 rounded-lg transition-all">
                    Contact Us
                </button>
            </section>

            {/* Countdown Timer */}
            <section className="py-12">
                <CountdownTimer />
            </section>

            {/* Message from the Director */}
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold text-white">Message from the Director</h1>
                <DirectorMessage
                    imageUrl="/director.jpg"
                    message="This event showcases our dedication to cutting-edge technology, providing a platform for aspiring minds to push the limits of aerial robotics. We look forward to witnessing groundbreaking innovations and teamwork that will shape the future of drone technology. Best wishes to all participants—may your drones soar to new heights!"
                />
                <p className='text-lg text-gray-400 mt-2'>Director, ABES Engineering College</p>
            </section>

            {/* Judges Section */}
            <section className="bg-black py-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white mb-8">Competition Coordinators</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {judges.map((judge, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={judge.image}
                                    alt={judge.name}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                />
                                <h2 className="text-xl font-semibold text-white mt-4">{judge.name}</h2>
                                <p className="text-gray-400 text-md mt-1">{judge.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
