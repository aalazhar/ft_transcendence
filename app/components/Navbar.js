import Link from "next/link";
import React from "react";
import RootLayout from "../layout";
import Image from "next/image";

function Navbar() {
    return ( 
        <>
            {/* <RootLayout> */}
                {/* <div className="h-screen w-screen bg-gradient-to-t from-slate-100 via-[#ffdd62] to-slate-100 bg-opacity-20"> */}
                    <div className="bg-white bg-opacity-60 shadow-custom shadow-white">
                        <div className="flex justify-between items-center w-[92%] mx-auto">
                            <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
                                <Image src={'/pp.png'} layout="responsive" width={50} height={50} alt="PING PONG" priority={true} className="mb-2 "/>
                            </div>
                            <div className="md:static absolute text-sm md:min-h-fit min-h-[60vh] md:w-auto w-full top-[7%] left-0 flex items-center">
                                <ul className="flex mt-2 md:flex-row flex-col md:items-center md:gap-4 gap-6">
                                    <li>
                                      <Link className="home-md" href={'/'}>Home</Link>
                                    </li>
                                    <li>
                                      <Link className="links-md" href={'/Game'}>Game</Link>
                                    </li>
                                    <li>
                                      <Link className="links-md" href={'/chat'}>Chat</Link>
                                    </li>
                                    <li>
                                      <Link className="links-md" href={'/Rank'}>Rank</Link>
                                    </li>
                                    <li>
                                      <Link className="links-md" href={'/Profile'}>Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="pl-5 pr-5 py-2 bg-[#C9C9C9] w-max flex justify-around rounded-lg  font-sans shadow-xl">
                    <div className="px-4">
                        <Link href='/'>HOME</Link>
                    </div>
                    <div className="px-4">
                        <Link href='/Rank'>RANK</Link>
                    </div>
                    <div className="px-4">
                        <Link href='../chat'>CHAT</Link>
                    </div>
                    <div className="px-4">
                        <Link href='../Profile'>PROFILE</Link>
                    </div>
                    <div className="px-4">
                        <Link href='/Game'>GAME</Link>
                    </div>
                </div> */}
            {/* </RootLayout> */}
        </>
     );
}

export default Navbar;