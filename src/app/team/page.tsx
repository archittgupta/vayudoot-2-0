"use client";
import { ThreeDCardDemo } from "../components/card";
import Footer from "../components/footer";
import Navbar from "@/app/components/navbar";

export default function FacultyTeam() {
  return (
    <div>
      {/* Navbar fixed on top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Add padding to prevent content overlap */}
      <div className="pt-20 min-h-screen bg-black dark:bg-gray-950 py-4 px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-100 dark:text-white mb-24">
          Faculty Coordinators of Vayudoot
        </h1>

        {/* Faculty Cards */}
        <div className="flex flex-wrap justify-center gap-8 p-0 mb-24">
          <ThreeDCardDemo
            facultyName="Dr. Ravi Shankar Raman"
            abtFaculty="Robotics & AI Specialist"
            imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            twitterUrl="https://twitter.com/priyadas"
          />
          {/* Add other Faculty Cards Here */}
        </div>

        {/* Student Coordinators */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-100 dark:text-white mb-24">
          Student Coordinators of Vayudoot
        </h1>
        <div className="flex flex-wrap justify-center gap-8 p-2">
          <ThreeDCardDemo
            facultyName="Abhrant Singh"
            abtFaculty="Moderator"
            imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            twitterUrl="https://twitter.com/priyadas"
          />
          {/* Add other Student Cards Here */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
