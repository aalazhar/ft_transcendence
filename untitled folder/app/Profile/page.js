import Hori_Navbar from "../components/Hori_Navbar";
import Vert_Navbar from "../components/Vert_Navbar";
import Image from "next/image";

const page = () => {
  return (
    <>
      {/* <div className={`w-screen h-screen bg-black text-slate-100`}> */}
        {/* <Navbar/> */}
        {/* <div id="container" className="flex h-screen w-screen bg-[#1E1A1E] text-slate-100"> */}
          {/* <div className=""><Vert_Navbar/></div> */}
          <div id="navbar2" className="flex flex-col text-slate-100 h-screen w-full">
            <div className=""><Hori_Navbar pageName="Profile"/></div>
            <div className="h-[87%] m-2 flex">
              <div className="w-[50%]">
                <div className="flex w-full h-[40%]">
                  <div className="w-24 h-24 items-center m-auto">
                    <Image className='rounded-full shadow-neon-light' src={'/batman.png'} layout="responsive" width={10} height={10} alt="PING PONG" priority={true} />
                  </div>
                  <div className="bg-[#30313E] w-72 h-48 rounded-md items-center m-auto"></div>
                </div>
                <div className="w-full h-[60%] flex">
                  <div className="bg-[#30313E] rounded-md w-[93%] h-[90%] m-auto">

                  </div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[98%] w-[98%] m-auto bg-[#30313E] rounded-md">
                  <h1 className="text-center">Match History</h1>
                </div>
              </div>

            </div>
            {/* <div id="element2 " className="bg-[#1D203E] flex flex-col justify-center bg-opacity-40 shadow-neon-light rounded-lg border border-slate-100 h-[80vh] my-2 mx-3">
              <Play/>
            </div> */}
          </div>
        {/* </div> */}

      {/* </div> */}
    </>
  )

  // return (
  //   <>
  //     <div className="w-screen h-screen bg-black text-slate-100">
  //       {/* <Navbar/> */}
  //       <div id="container" className="flex w-screen h-screen">
  //         <div className=""><Vert_Navbar/></div>
  //         <div id="navbar2" className="w-screen h-screen ml-2 ">
  //           <div className="h-[13vh]"><Hori_Navbar/></div>
  //           <div id="element2 " className="bg-[#1D203E] flex flex-col justify-center bg-opacity-40 shadow-neon-light rounded-lg border border-slate-100 h-[80vh] my-2 mx-3">
  //             profile
  //           </div>
  //         </div>
  //       </div>

  //     </div>
  //   </>
  // )
}

export default page;