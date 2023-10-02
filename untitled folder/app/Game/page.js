"use client"
import Play from "../components/Play";
import Hori_Navbar from "../components/Hori_Navbar";
import Vert_Navbar from "../components/Vert_Navbar";
import React, { useEffect, useState } from 'react'

const page = () => {
  return (
    <>
      {/* <div className={`w-screen h-screen bg-black text-slate-100`}> */}
        {/* <Navbar/> */}
        {/* <div id="container" className="flex h-screen w-screen bg-[#1E1A1E] text-slate-100"> */}
          {/* <div className=""><Vert_Navbar/></div> */}
          <div id="navbar2" className="flex flex-col text-slate-100 h-screen w-full">
            <div className=""><Hori_Navbar pageName="Game"/></div>
            {/* <div id="element2 " className="bg-[#1D203E] flex flex-col justify-center bg-opacity-40 shadow-neon-light rounded-lg border border-slate-100 h-[80vh] my-2 mx-3">
              <Play/>
            </div> */}
          </div>
        {/* </div> */}

      {/* </div> */}
    </>
  )
}

export default page;