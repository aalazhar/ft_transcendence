import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GoPerson, GoTrophy } from "react-icons/go";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GiAchievement } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export default function Vert_Navbar() {
  return (
    <div id="navbar1" className="bg-black shadow-neon-light text-slate-100 flex flex-col justify-between h-[100vh] w-20">
          {/* <div id="prof" className="p-3 h-[10vh] w-20 ">
          </div> */}
          {/* <div id="menu" className='h-[60vh]'> */}
            <div className="h-[10%] w-20 p-3">
                <Image className='rounded-full shadow-neon-light' src={'/batman.png'} layout="responsive" width={30} height={30} alt="PING PONG" priority={true} />
            </div>
            <div className='h-[70%] w-20'>
                <ul className="flex flex-col justify-between h-[70%]">
                  <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/Profile'}><GoPerson/></Link></li>
                  <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><GoTrophy/></Link></li>
                  <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/chat'}><HiOutlineChatBubbleLeftEllipsis/></Link></li>
                  <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><GiAchievement/></Link></li>
                  <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><IoSettingsOutline/></Link></li>
                  <li className="text-3xl items-center mx-auto"><FiLogOut/></li>
                </ul>
            </div>
          {/* </div> */}
    </div>
  )

//   <div id="navbar1" className="bg-black shadow-neon-light text-slate-100 flex flex-col justify-start h-[100vh] w-20">
//           {/* <div id="prof" className="p-3 h-[10vh] w-20 ">
//           </div> */}
//           {/* <div id="menu" className='h-[60vh]'> */}
//             <div className="flex flex-col h-[10%] w-20 p-3 mb-10">
//                 <Image className='rounded-full shadow-neon-light' src={'/batman.png'} layout="responsive" width={30} height={30} alt="PING PONG" priority={true} />
//             </div>
//             <div className='h-[50%] w-20 mb-8'>
//                 <ul className="flex flex-col justify-between h-[70%]">
//                   <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><GoPerson/></Link></li>
//                   <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><GoTrophy/></Link></li>
//                   <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><HiOutlineChatBubbleLeftEllipsis/></Link></li>
//                   <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><GiAchievement/></Link></li>
//                   <li className="items-center mx-auto text-3xl text-[#F13A62]"><Link className="" href={'/'}><IoSettingsOutline/></Link></li>
                  
//                 </ul>
//             </div>
//             <div className='flex flex-col mb-6'>
//                 <div className="text-3xl items-center mx-auto"><FiLogOut/></div>
//             </div>
//           {/* </div> */}
//     </div>
}
