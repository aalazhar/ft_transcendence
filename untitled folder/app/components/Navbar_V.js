import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoPerson, GoTrophy } from "react-icons/go";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GiAchievement } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar_V() {
    return (
        <div id="navbar1" className="bg-[#30313E] text-slate-100 flex flex-col justify-between h-[100vh] w-20">
                <div className='flex flex-col justify-between'>
                    <div className="p-3">
                        <Image className='rounded-full shadow-neon-light' src={'/batman.png'} layout="responsive" width={30} height={30} alt="PING PONG" priority={true} />
                    </div>
                    <div className='flex flex-col justify-between mt-6 h-[40vh]'>
                          <Link className="text-[#E58E27] mx-auto text-3xl" href={'/Profile'}><GoPerson/></Link>
                          <Link className="text-[#E58E27] mx-auto text-3xl" href={'/Rank'}><GoTrophy/></Link>
                          <Link className="text-[#E58E27] mx-auto text-3xl" href={'/chat'}><HiOutlineChatBubbleLeftEllipsis/></Link>
                          <Link className="text-[#E58E27] mx-auto text-3xl" href={'/'}><GiAchievement/></Link>
                          <Link className="text-[#E58E27] mx-auto text-3xl" href={'/'}><IoSettingsOutline/></Link>
                    </div>
                </div>
                <div className="text-[#E58E27] text-sm items-center mx-auto mb-8">LOG OUT</div>
        </div>
      )
}
