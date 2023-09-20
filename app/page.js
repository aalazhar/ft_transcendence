import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

const page = () => {

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-t from-slate-100 via-[#ffff99] to-slate-100 bg-opacity-20">
        <Navbar/>
      </div>
    </>
  )
}

export default page;