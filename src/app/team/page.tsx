"use client";
import { ThreeDCardDemo } from "../components/card";
import Footer from "../components/footer";
import Navbar from "@/app/components/navbar";

export default function FacultyTeam() {
  return (
    <div>
      {/* Navbar fixed on top */}
      <div className="top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Add padding to prevent content overlap */}
      <div className="pt-32 min-h-screen bg-black dark:bg-gray-950 py-4 px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-100 dark:text-white mb-24">
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
          <ThreeDCardDemo
          facultyName="Mahendra Gupta"
          abtFaculty="xyz of INIF"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/mannupaaji"
        />
        <ThreeDCardDemo
          facultyName="Dr. Anoop Pandey"
          abtFaculty="Data Scientist at Google"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/johndoe"
        />
        <ThreeDCardDemo
          facultyName="Abhishek Saxena"
          abtFaculty="Researcher in Aerodynamics"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/anita"
        />
        <ThreeDCardDemo
          facultyName="Rakesh Gupta"
          abtFaculty="Cybersecurity Expert"
          imageUrl="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/rajeshverma"
        />
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
           <ThreeDCardDemo
          facultyName="Acid Chauhan"
          abtFaculty="Morderator"
          imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/priyadas"
        />
        <ThreeDCardDemo
      facultyName="Ayush Mishra"
      abtFaculty="Promotion Lead"
      imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      twitterUrl="https://twitter.com/priyadas"
    />
        <ThreeDCardDemo
          facultyName="Dev Kumar"
          abtFaculty="Technical Lead"
          imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/priyadas"
        /><ThreeDCardDemo
        facultyName="Gyanendra Kumar Jha"
        abtFaculty="Technical Lead"
        imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        twitterUrl="https://twitter.com/priyadas"
      /><ThreeDCardDemo
    facultyName="Ekansh Bharti"
    abtFaculty="Treasuer"
    imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    twitterUrl="https://twitter.com/priyadas"
  /><ThreeDCardDemo
  facultyName="Jaitn Kumar"
  abtFaculty="Inventory"
  imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  twitterUrl="https://twitter.com/priyadas"
/>
        <ThreeDCardDemo
          facultyName="Suyash Mishra"
          abtFaculty="Inventory"
          imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/priyadas"
        />
        <ThreeDCardDemo
        facultyName="Chaitanya Joshi"
        abtFaculty="Outreach Head"
        imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        twitterUrl="https://twitter.com/priyadas"
        />
        <ThreeDCardDemo
      facultyName="Himanshu Balyan"
      abtFaculty="Query"
      imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      twitterUrl="https://twitter.com/priyadas"
    />
      <ThreeDCardDemo
    facultyName="Akshay Sharma"
    abtFaculty="Pilot and volunteer Head" 
    imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    twitterUrl="https://twitter.com/priyadas"
      />
    <ThreeDCardDemo
  facultyName="Aditya Singh"
  abtFaculty="Content Head"
  imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  twitterUrl="https://twitter.com/priyadas"
    />
    <ThreeDCardDemo
          facultyName="Gauri Shukla"
          abtFaculty="Graphics Head"
          imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          twitterUrl="https://twitter.com/priyadas"
        />
    <ThreeDCardDemo
        facultyName="Yashika Rathour"
        abtFaculty="Social Media Head"
        imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        twitterUrl="https://twitter.com/priyadas"
      />
         
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
