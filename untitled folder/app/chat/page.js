import Hori_Navbar from "../components/Hori_Navbar";
import Vert_Navbar from "../components/Vert_Navbar";

const page = () => {

  return (
    <>
      <div className="w-screen h-screen bg-black text-slate-100">
        {/* <Navbar/> */}
        <div id="container" className="flex w-screen h-screen">
          <div className=""><Vert_Navbar/></div>
          <div id="navbar2" className="w-screen h-screen ml-2 ">
            <div className="h-[13vh]"><Hori_Navbar/></div>
            <div id="element2 " className="bg-[#1D203E] flex flex-col justify-center bg-opacity-40 shadow-neon-light rounded-lg border border-slate-100 h-[80vh] my-2 mx-3">
              Chat
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default page;