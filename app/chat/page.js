import React from "react";
import Navbar from "../components/Navbar";

const chat = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-t from-slate-100 via-[#ffdd62] to-slate-100 bg-opacity-20">
        <div>
          <Navbar nameClass={true}/>
        </div>
        <div className="underline bg-blue-500">
          Game
        </div>
      </div>
    </>
  )
}




export default chat;