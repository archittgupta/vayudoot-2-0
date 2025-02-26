"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

export default function Guidelines() {
  return (
    <main className="bg-black text-white">
      <section>
        <Navbar />
      </section>

      {/* Hero Section */}
      <section className="w-full h-[50vh] flex items-center justify-center text-center">
        <h1 className="font-bold text-5xl md:text-6xl font-Manrope">Guidelines</h1>
      </section>

      {/* Section Wrapper */}
      <div className="w-[80%] mx-auto space-y-16">
        {/* General Rules */}
        <section>
          <h2 className="text-4xl font-extrabold text-white mb-6">General Rules and Eligibility</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>1. The competition is open to teams (max 4-6 members).</p>
            <p>2. Participants must be students of the college.</p>
            <p>3. Teams must register before the deadline; late registrations will not be accepted.</p>
            <p>4. Drones must be powered by electric motors only (no fuel-powered drones).</p>
          </div>
        </section>

        {/* Drone Specifications */}
        <section>
          <h2 className="text-4xl font-extrabold text-white mb-6">Drone Specifications & Safety Regulations</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>1. Maximum drone weight: 2 kg (including battery and payload).</p>
            <p>2. Allowed drone types: Quadcopters, Hexacopters, Fixed-wing (if space allows).</p>
            <p>3. Battery power limit: 4S (14.8V) for racing drones; higher voltage requires approval.</p>
            <p>4. Every drone must have a failsafe mechanism (auto-land or return-to-home) in case of signal loss.</p>
          </div>
        </section>

        {/* Arena and Flight Conditions */}
        <section>
          <h2 className="text-4xl font-extrabold text-white mb-6">Arena and Flight Conditions</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>1. The event will take place in an outdoor/indoor designated flight zone.</p>
            <p>2. Maximum altitude: 20 meters (to avoid airspace violations).</p>
            <p>3. No-fly zones will be marked to ensure spectator and participant safety.</p>
            <p>4. If weather conditions (strong wind, rain) make flying unsafe, rounds may be postponed.</p>
          </div>
        </section>

        {/* Scoring & Judging */}
        <section>
          <h2 className="text-4xl font-extrabold text-white mb-6">Scoring & Judging Criteria</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>1. Speed (for race and obstacle challenges).</p>
            <p>2. Precision & Stability (for payload delivery and autonomous flight).</p>
            <p>3. Bonus points for innovative designs and modifications.</p>
          </div>
        </section>

        {/* Safety & Emergency Protocols */}
        <section>
          <h2 className="text-4xl font-extrabold text-white mb-6">Safety & Emergency Protocols</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>1. Pre-flight safety checks are mandatory before every attempt.</p>
            <p>2. Participants must wear goggles, gloves, and safety gear if required.</p>
            <p>3. Only designated pilots and staff are allowed in the flight area.</p>
            <p>4. In case of a crash, the pilot must immediately disarm the drone.</p>
            <p>5. A first aid station will be available for emergencies.</p>
          </div>
        </section>

        {/* Code of Conduct */}
        <section>
          <h2 className="text-4xl font-extrabold text-white mb-6">Code of Conduct & Ethics</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>1. Tampering with other drones will result in immediate disqualification.</p>
            <p>2. Unsportsmanlike behavior, arguing with judges, or disrupting the event is not allowed.</p>
            <p>3. Drones must comply with DGCA drone regulations (if applicable).</p>
          </div>
        </section>

        {/* Rulebook */}
        <section className="text-center">
          <p className="text-lg">
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
      <section className="mt-20">
        <Footer />
      </section>
    </main>
  );
}
