"use client";

import { Backdrop } from "./components/backdrop";
import CountdownTimer from "./components/countdown";
import React from "react";
import Roadmap from "./components/roadmap";

import Footer from "./components/footer";




export default function AuroraBackgroundDemo() {
  return (

    <div>
        {/* <Navbar /> the navbar is placed in aurora-background*/}
       
   
    <Backdrop/>
    <CountdownTimer/>
    <Roadmap/>
    
    <Footer/>
    
  
</div>
  );
}







