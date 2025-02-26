"use client";

import { Backdrop } from "./components/backdrop";
import CountdownTimer from "./components/countdown";
import React, { useState } from "react";
import Roadmap from "./components/roadmap";

import Footer from "./components/footer";




export default function AuroraBackgroundDemo() {
  return (

    <div>
        {/* <Navbar /> */}
       
   
    <Backdrop/>
    <Roadmap/>
    <CountdownTimer/>
    <Footer/>
    
  
</div>
  );
}







