
'use client'
import React, { createContext, useContext, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/7.jpg'
import { Button } from './ui/button'
import { LuChevronFirst } from "react-icons/lu";
import { IoMdMore } from "react-icons/io";
import { LuChevronLast } from "react-icons/lu";

import profileImg from '@/assets/3-min.jpg'
import { SidebarContext, SidebarContextType } from '@/contexts/SidebarContext'
type Props = {}


function SidebarMulti({children}: {  children: React.ReactNode}) {

    const {expanded, setExpanded} = useContext(SidebarContext) as SidebarContextType;
  return (
    <aside className={`h-screen ${expanded?"w-1/6" :"" } `}>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
            <div className=' px-4 pb-2 flex justify-between items-center'>
                <Image src={logo} alt='image' className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}/>
                <Button onClick={()=> setExpanded(!expanded)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                    {expanded ?  <LuChevronFirst className='text-gray-700 text-lg'/> : <LuChevronLast className='text-gray-700 text-lg'/>  }
                   
                </Button>
            </div>
            <ul className='flex-1 px-3'>
                    {children}
             </ul>
            <div className=' border-t flex p-3'>
            <Image src={profileImg} alt='image' className='w-10 h-10 rounded-md'/>
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                <div className=' leading-4'>
                    <h4 className='font-semibold'>John Doe</h4>
                    <span className='text-xs text-gray-600'>johndoes@gmail.com</span>
                </div>
                <IoMdMore size={20}/>

            </div>

            </div>
        </nav>

    </aside>
  )
}

export default SidebarMulti