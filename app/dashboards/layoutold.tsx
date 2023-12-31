import NavBar from '@/components/NavBar'
import SidebarMulti from '@/components/SidebarMulti'
import SidebarItem from '@/components/sidebar/SidebarItem'
import { SidebarProvider } from '@/contexts/SidebarContext'
import React from 'react'


import { IoBarChartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { CiReceipt } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLifeBuoy } from "react-icons/fi";

 type Props = {
    children: React.ReactNode
 }

export default function Layout({ children }: Props) {
    return (
      <>
        <div>
        <SidebarProvider>
        {/* <NavBar /> */}

        <div className='flex h-screen overflow-hidden dark:text-white dark:bg-black group-hover:bg-gray-200 group-hover:dark:bg-zinc-900 bg-gray-50'>
          {/* <SideBarIcons>
            <SideNavItem title='HOME' path='/' icon={{icon:<IoSettingsSharp/>, fillIcon:<IoSettingsSharp/>}} isSideBarOpen={false}/>
          </SideBarIcons>  */}
          <SidebarMulti>
            <SidebarItem icon={<IoBarChartOutline/>} title='Statistics' path='/' active={true} alert={true}/>
            <SidebarItem icon={<FaRegUserCircle/>} title='Users' path='/' active={true} alert={true}/>
            <SidebarItem icon={<CiBoxList/>} title='Inventory' path='/' active={false} alert={false}/>
            <SidebarItem icon={<GoPackage/>} title='Orders' path='/' active={false} alert={false}/>
            <SidebarItem icon={<CiReceipt/>} title='Billing' path='/' active={false} alert={false}/>
            <SidebarItem icon={<IoSettingsOutline/>} title='Settings' path='/' active={true} alert={true}/>
            <SidebarItem icon={<FiLifeBuoy/>} title='Help' path='/' active={true} alert={true}/>
          </SidebarMulti>
          {/* <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto "> */}

          <main className='grow pt-8 overflow-scroll'>
            {children}
          </main>
        </div>

        </SidebarProvider>

        </div>
      </>
    )
  }