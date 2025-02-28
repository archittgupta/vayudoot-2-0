"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

export default function Guidelines() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full h-[40vh] flex items-center justify-center text-center px-4">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-Manrope">Guidelines</h1>
      </section>

      {/* Content Wrapper */}
      <div className="w-[90%] md:w-[80%] mx-auto space-y-12 md:space-y-16 pb-16">
        {/* Section Component */}
        {sections.map(({ title, content }, index) => (
          <section key={index}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center md:text-left">
              {title}
            </h2>
            <div className="space-y-4 text-gray-300 text-lg md:text-xl px-4 md:px-0">
              {content.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Rulebook Section */}
        <section className="text-center">
          <p className="text-lg md:text-xl">
            The <a onClick={() => window.open("/rulebook.pdf", "_blank")} className="font-bold text-blue-400 cursor-pointer">Rulebook</a> is attached in the given PDF. 
            Please make sure to read the attached documents carefully before the competition.
          </p>
          <div className="mt-6">
            <button 
              onClick={() => window.open("/rulebook.pdf", "_blank")}
              className="h-[3rem] w-[15rem] font-bold text-lg rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-all">
              View Rulebook
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

const sections = [
  {
    title: "General Rules and Eligibility",
    content: [
      "1. The competition is open to teams (max 4-6 members).",
      "2. Participants must be students of the college.",
      "3. Teams must register before the deadline; late registrations will not be accepted.",
      "4. Drones must be powered by electric motors only (no fuel-powered drones).",
    ],
  },
  {
    title: "Drone Specifications & Safety Regulations",
    content: [
      "1. Maximum drone weight: 2 kg (including battery and payload).",
      "2. Allowed drone types: Quadcopters, Hexacopters, Fixed-wing (if space allows).",
      "3. Battery power limit: 4S (14.8V) for racing drones; higher voltage requires approval.",
      "4. Every drone must have a failsafe mechanism (auto-land or return-to-home) in case of signal loss.",
    ],
  },
  {
    title: "Arena and Flight Conditions",
    content: [
      "1. The event will take place in an outdoor/indoor designated flight zone.",
      "2. Maximum altitude: 20 meters (to avoid airspace violations).",
      "3. No-fly zones will be marked to ensure spectator and participant safety.",
      "4. If weather conditions (strong wind, rain) make flying unsafe, rounds may be postponed.",
    ],
  },
  {
    title: "Scoring & Judging Criteria",
    content: [
      "1. Speed (for race and obstacle challenges).",
      "2. Precision & Stability (for payload delivery and autonomous flight).",
      "3. Bonus points for innovative designs and modifications.",
    ],
  },
  {
    title: "Safety & Emergency Protocols",
    content: [
      "1. Pre-flight safety checks are mandatory before every attempt.",
      "2. Participants must wear goggles, gloves, and safety gear if required.",
      "3. Only designated pilots and staff are allowed in the flight area.",
      "4. In case of a crash, the pilot must immediately disarm the drone.",
      "5. A first aid station will be available for emergencies.",
    ],
  },
  {
    title: "Code of Conduct & Ethics",
    content: [
      "1. Tampering with other drones will result in immediate disqualification.",
      "2. Unsportsmanlike behavior, arguing with judges, or disrupting the event is not allowed.",
      "3. Drones must comply with DGCA drone regulations (if applicable).",
    ],
  },
];
