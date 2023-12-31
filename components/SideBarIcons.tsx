import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import logo from '@/assets/7.jpg'
import profileImg from '@/assets/3-min.jpg'
import {FiMinusSquare, FiLayout, FiArchive, FiAirplay, FiBatteryCharging, FiBarChart } from "react-icons/fi";

type Props = {}
import Image from 'next/image';
import Tooltip from './sidebar/Tooltip';

export default function SideBarIcons({children}: {
    children: React.ReactNode
  }) {
  return (
    <>
    <aside className='flex  h-screen w-18 flex-col items-center border-r border-gray-200 bg-white'>
     <div>
        <Image src={logo}   alt='logo' className='flex h-18 w-full items-center justify-center border-b border-gray-200' />
     </div>
     <nav className='flex flex-1 flex-col gap-y-4 pt-10'>
        <a href='' className='relative group rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50'>
            <FiMinusSquare className="h-6 w-6 stroke-current"/>
            <Tooltip>Add Elements</Tooltip>
        </a>
        <a href='' className='relative group rounded-xl text-gray-400 p-2 hover:bg-gray-100'>
            <FiLayout className="h-6 w-6 stroke-current"/>
            <Tooltip>More Ui Elements</Tooltip>

        </a>
        <a href='' className='relative group rounded-xl text-gray-400 p-2 hover:bg-gray-100'>
            <FiArchive className="h-6 w-6 stroke-current"/>
            <Tooltip>Forms</Tooltip>

        </a>
        <a href='' className='relative group rounded-xl text-gray-400 p-2 hover:bg-gray-100'>
            <FiAirplay className="h-6 w-6 stroke-current"/>
            <Tooltip>Layouts</Tooltip>

        </a>
        <a href='' className=' rounded-xl text-gray-400 p-2 hover:bg-gray-100'>
            <FiBatteryCharging className="h-6 w-6 stroke-current"/>
        </a>
     </nav>
     <div className='flex flex-col items-center gap-y-4 pt-10'>
        <button  className='relative group rounded-xl text-gray-400 p-2 hover:bg-gray-100'>
            <FiAirplay className="h-6 w-6 stroke-current"/>
            <Tooltip>Layouts</Tooltip>
        </button>
        <button  className='relative group rounded-xl text-gray-400 p-2 hover:bg-gray-100'>
            <FiAirplay className="h-6 w-6 stroke-current"/>
            <Tooltip>Layouts</Tooltip>

        </button>

        <button className='pt-2 rounded-full overflow-hidden '>
        <Image src={profileImg}   alt='logo' className='h-10 w-10 object-cover' />
        </button>
     </div>
    </aside>
        {/* <aside className='h-screen'>
            <nav className='h-full flex-col bg-white shadow-sm'>
                <div className=' p-4 pb-2 flex justify-between items-center'>
                    <Image src={logo}   alt='logo' className='w-32' />
                    <button className=' p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                        <FaChevronLeft/>
                    </button>
                </div>
                <ul className='flex-1 p-3'>{children}</ul>
                <div className='border-t flex p-3 '>
                    <Image src={profileImg} alt='profile image' className='w-10 h-10 rounded-md' />
                    <div className=' flex justify-between items-center overflow-hidden'>
                        <div className='leading-4 pl-3'>
                            <h4 className=' font-semibold'>Genius</h4>
                            <span className=' tex-xs text-gray-600'>genius@gmail.com</span>
                        </div>
                    </div>
                </div>
            </nav>

        </aside> */}
    </>
  )
}