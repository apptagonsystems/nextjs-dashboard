'use client'
import React from 'react'
import { useContext } from 'react'



import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link'
import Image from 'next/image';

import profileImg from '@/assets/3-min.jpg'

import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SidebarContext, SidebarContextType } from '@/contexts/SidebarContext';
import { NavDropdownMenu } from './navbar/NavDropdownMenu';



type Props = {}

export default function NavBar({}: Props) {
    const {expanded, setExpanded} = useContext(SidebarContext) as SidebarContextType;
  return (
    <div className={`fixed top-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20 ${expanded ? "w-5/6" :"left-[52px] ml-3"}`}>
            <header className='flex h-18 p-2 items-center justify-between  border-b border-gray-200 bg-white px-8' >
                {/* LEFT SIDE OF NAVBAR */}
                {/* <div className='flex items-center justify-start'>
                    <button className='flex items-center justify-center rounded-xl bg-gray-100 p-2 m-2'>
                        <FaSquareXTwitter className='h-6 w-6 stroke-current text-gray-400'/>
                    </button>
                    <h1 className=' px-2'>CLEAN ADMIN</h1>
                </div> */}

                {/* MIDDLE OF NAVBAR NAV ITEMS */}
                <div className='flex items-center justify-start'>
                    <ul className='flex items-center gap-x-8'>
                        <li className='font-medium hover:text-gray-900'><Link href="#">Home</Link></li>
                        <li className='hover:text-gray-900'><Link href="#">Dashboard</Link></li>
                        <li className='hover:text-gray-900'><Link href="#">UI Elements</Link></li>
                    </ul>
                    <input className='px-4 mx-4 text-gray-700 bg-gray-100 border transition flex-1 rounded-full py-2 focus:outline-none focus:bg-white focus:border-gray-300' type='text' placeholder='Search...'/>

                </div>
                {/* RIGHT SIDE OF NAVBAR */} 
                <div className='flex items-center gap-x-2'>
                    <span className='flex items-center gap-x-1'>
                        <FaUpRightFromSquare className='w-5 h-5'/>
                        <span className='text-sm leading-none hover:underline hover:cursor-pointer'>1,331</span>
                    </span>
                    <span className='flex items-center gap-x-1'>
                        <FaGithubSquare className='w-5 h-5'/>
                        <span className='text-sm leading-none hover:underline hover:cursor-pointer'>1,331</span>
                    </span>
                    <button className='py-1.5 px-4 rounded-full border border-gray-200'>Upload</button>
                    <NavDropdownMenu>
                        <button className='rounded-full border border-gray-200'>
                            <Image src={profileImg} alt='Profile' className='object-cover h-8 w-8 rounded-full'/>
                        </button>
                    </NavDropdownMenu>
                </div>
            </header>
        </div>
   
  )
}