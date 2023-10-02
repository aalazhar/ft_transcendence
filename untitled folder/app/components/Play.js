"use client"
import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";


export default function Play() {
  const [textSize, setTextSize] = useState('text-6xl');
  // let firstScreen = window.innerHeight;
  const [screenHeight, setScreenHeight] = useState(0);

  function handleResize() {
    
    let screenHeight = window.innerHeight;
    
    if (screenHeight > 500 || screenHeight === 0) {
    setTextSize('text-9xl');
    } else if (screenHeight <= 300) {
      setTextSize('text-4xl');
    }if (screenHeight <= 500) {
      setTextSize('text-6xl');
    }

    setScreenHeight(screenHeight);
  }
  
  useEffect(() => {

    window.addEventListener('resize', handleResize)
    
  }, [])
  return (
    <>
          <div className='flex flex-col justify-center'>
            {/* <h1 className="text-9xl font-bold text-shadow-pink text-center text-black">PING</h1>
            <button className="text-9xl text-shadow-pink text-shadow mx-auto opacity-60 border-[#F13A62] border-3 rounded-full shadow-neon-pink w-32 items-center text-[#F13A62]"><FaPlayCircle/></button>
            <h1 className="text-9xl font-bold text-shadow-pink text-center text-black">PONG</h1> */}
            <h1 className={`${textSize} font-bold text-shadow-pink text-center text-black ${screenHeight}`}>PING</h1>
            <button className={`${textSize} text-shadow-pink text-shadow mx-auto opacity-60 border-[#F13A62] border-3 rounded-full shadow-neon-pink items-center text-[#F13A62] ${screenHeight}`}><FaPlayCircle/></button>
            <h1 className={`${textSize} font-bold text-shadow-pink text-center text-black ${screenHeight}`}>PONG</h1>
            
          </div>
    </>
  )
}
