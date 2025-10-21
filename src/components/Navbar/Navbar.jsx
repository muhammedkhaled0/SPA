import React, { useState } from 'react'
import { Link, NavLink , BrowserRouter } from 'react-router-dom'
export default function Navbar() {
    const [expand,setExpand]=useState(false);
  return (
    <>
    <nav className='bg-[#2C3E50] text-white px-10 fixed top-0 start-0 end-0 z-50 '>
        <div className="container mx-auto py-8 lg:w-7/10">
            <div className="myNav flex flex-wrap justify-between">
                <h1 className='font-bold text-[25px]'>START FRAMEWORK</h1>
                <div className="myList">
                    <ul className='lg:flex lg:flex-wrap lg:gap-x-4 hidden mt-2'>
                        <li className='font-bold text-[14px]'><NavLink to={'about'}>ABOUT</NavLink></li>
                        <li className='font-bold text-[14px]'><NavLink to={'portfolio'}>PORTFOLIO</NavLink></li>
                        <li className='font-bold text-[14px]'><NavLink to={'contact'}>CONTACT</NavLink></li>
                    </ul>

                </div>
                    <svg onClick={()=>setExpand(!expand)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-gray-800 lg:hidden cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                    {expand?
                    <ul className=' relative start-0 w-full lg:hidden'>
                        <li className='font-bold text-[14px] my-3'><NavLink to={'about'}>ABOUT</NavLink></li>
                        <li className='font-bold text-[14px] mb-3'><NavLink to={'portfolio'}>PORTFOLIO</NavLink></li>
                        <li className='font-bold text-[14px]'><NavLink to={'contact'}>CONTACT</NavLink></li>
                    </ul>
                    :null}
            </div>
        </div>
    </nav>
    </>
  )
}
