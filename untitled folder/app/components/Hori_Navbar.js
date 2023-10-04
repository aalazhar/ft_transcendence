import Link from 'next/link';
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";


export default function Hori_Navbar(pageName) {
  const r_Route = JSON.stringify(pageName);
  return (
    // <div className="flex justify-between h-16 mb-2">
    //   <div className="flex">
    //     <div className="p-2 m-3">
    //       {/* <Image src={'/hpp.png'} layout="responsive" width={30} height={30} alt="PING PONG" priority={true} className=""/> */}
    //       <h1 className="text-[#E58E27] text-shadow-pink font-sans text-xl font-bold">AREA 420</h1>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <div className=""> 
    //       <button className="mt-4 mr-2 text-shadow text-4xl"><AiOutlineSearch/></button>
    //     </div>
    //     <div className="">
    //       <button className="py-1 px-8 border m-10 mt-4 mr-4 rounded-2xl bg-[#E58E27] shadow-neon-light">play</button>
    //     </div>
    //   </div>
    // </div>
    <div className='flex justify-between h-16 mx-6'>
      <div className='flex w-[50%] text-[#E58E27] justify-normal items-center'>
        <h3 className='pr-8'>{r_Route}</h3>
        <div className='relative'>
          <div>
            <input type='text' placeholder='Search' className='text-orange-100 pl-1 py-1 text-sm focus:outline-none w-[300px] border rounded-sm bg-transparent border-[#E58E27]'></input>
          </div>
          <div className='absolute top-1 left-[270px] text-2xl'><AiOutlineSearch/></div>
        </div>
      </div>
      <div className='flex w-[50%] text-[#E58E27] justify-end items-center'>
        <Link href={'/'}><h1 className="text-[#E58E27] mr-8 text-shadow-pink font-sans text-lg font-bold">AREA 420</h1></Link>
        <Link href={'/Game'} className=' py-2 px-6 bg-[#E58E27] text-sm text-slate-100 rounded-sm'>play</Link>
      </div>
    </div>
  )

}
