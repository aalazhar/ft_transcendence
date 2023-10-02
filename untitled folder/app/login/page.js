import React from 'react'
import Image from 'next/image'

export default function login() {
  return (
    <>
        <div className='h-screen w-screen bg-gradient-to-t from-slate-100 via-[#fff399] to-slate-100 bg-opacity-20 '>
            <div className='grid place-items-center bg-opacity-0 h-screen w-screen '>
                <div className='flex justify-center flex-col h-[400px] w-[300px] md:flex-row md:h-[400px] md:w-[600px]  md:border-6 md:border-slate-900 md:rounded-lg '>
                    <div className='bg-white bg-opacity-95 w-[100%] justify-between inline-table rounded-xl py-8 shadow-2xl md:w-[60%]'>
                        <div className='flex justify-center my-5 md:my-7'>
                            <Image src='/pp.png' width={50} height={50} alt='PING PONG' className='transform duration-700 hover:rotate-180'/>
                            {/* <span className='text-sm md:text-md font-bold transform duration-300 hover:rotate-180'>LOGIN</span> */}
                        </div>
                        <div className='flex justify-center flex-col'>
                            <div className='mb-3'>
                                <label className='ml-[17%] text-sm md:text-md'>Pseudo</label>
                                <br></br>
                                <input type='text' placeholder='Pseudo' className='text-sm ml-[16%] md:ml-[15%] w-[200px] md:w-[250px] border-2 rounded-lg px-2 py-2'/>
                            </div>
                            <div>
                                <label className='ml-[17%] text-sm md:text-md'>New Avatar</label>
                                <br></br>
                                <input 
                                    type='file' 
                                    accept='image/*' 
                                    className='text-sm ml-[16%] md:ml-[15%] w-[200px] md:w-[250px] border-2 rounded-lg px-2 py-2 block text-slate-500
                                    file:mr-2 file:rounded-md file:border-0 file:text-sm file:font-semibold
                                    file:bg-pink-50 file:text-slate-700 hover:file:bg-pink-100"'/>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='my-5 px-3 py-1 text-sm md:text-md border-2 rounded-lg border-slate-700 hover:bg-slate-700 hover:text-slate-200 duration-700'>Submit</button>
                        </div>
                    </div>
                    <div className='bg-[#FFC700] w-[100%] bg-opacity-95 rounded-xl flex justify-center flex-col shadow-2xl md:w-[40%]'>
                        <div className='mt-3 text-sm md:text-lg flex justify-center'>
                            1337 VIDEO GAME
                        </div>
                        <div className='text-sm md:text-lg flex justify-center font-bold'>
                            PING PONG
                        </div>
                        <div className='flex justify-center'>
                            <Image src='/img-pong.png' width={150} height={150} alt='PING PONG'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
